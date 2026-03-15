import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Heart,
  Menu,
  Music2,
  MusicIcon,
  Phone,
  ShoppingBag,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount, cartItems, removeFromCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainRef = useRef<GainNode | null>(null);
  const location = useLocation();

  const startMusic = () => {
    const ctx = new AudioContext();
    audioCtxRef.current = ctx;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 1.5);
    masterGain.connect(ctx.destination);
    gainRef.current = masterGain;

    const freqs = [65.41, 98.0, 130.81, 196.0];
    const oscs: OscillatorNode[] = [];
    for (let i = 0; i < freqs.length; i++) {
      const osc = ctx.createOscillator();
      osc.type = i % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freqs[i], ctx.currentTime);
      const oscGain = ctx.createGain();
      oscGain.gain.value =
        i === 0 ? 0.5 : i === 1 ? 0.3 : i === 2 ? 0.15 : 0.08;
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
      oscs.push(osc);
    }
    oscillatorsRef.current = oscs;
  };

  const stopMusic = useCallback(() => {
    if (gainRef.current && audioCtxRef.current) {
      gainRef.current.gain.linearRampToValueAtTime(
        0,
        audioCtxRef.current.currentTime + 1,
      );
      setTimeout(() => {
        for (const o of oscillatorsRef.current) {
          try {
            o.stop();
          } catch {}
        }
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        oscillatorsRef.current = [];
        gainRef.current = null;
      }, 1200);
    }
  }, []);

  const toggleMusic = () => {
    if (musicPlaying) {
      stopMusic();
      setMusicPlaying(false);
    } else {
      startMusic();
      setMusicPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopMusic();
    };
  }, [stopMusic]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "Our Story" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[oklch(0.88_0.018_80)]"
      style={{ backgroundColor: "oklch(0.97 0.012 85 / 0.97)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" data-ocid="nav.home_link" className="flex-shrink-0">
            <img
              src="/assets/generated/veera-logo-transparent.dim_600x300.png"
              alt="Veera Handloom"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}_link`}
                className={`font-sans text-sm tracking-widest uppercase transition-colors ${
                  isActive(link.to)
                    ? "text-[var(--maroon)]"
                    : "text-[oklch(0.35_0.03_30)] hover:text-[var(--maroon)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+918962203433"
              className="hidden md:flex items-center gap-1.5 text-xs font-sans tracking-wider text-[oklch(0.45_0.04_30)] hover:text-[var(--maroon)] transition-colors"
            >
              <Phone size={13} />
              <span>+91 89622 03433</span>
            </a>

            <button
              type="button"
              data-ocid="nav.music_toggle"
              onClick={toggleMusic}
              title={
                musicPlaying ? "Pause ambient music" : "Play ambient music"
              }
              className={`p-2 transition-colors ${
                musicPlaying
                  ? "text-[var(--gold)] music-playing"
                  : "text-[oklch(0.35_0.03_30)] hover:text-[var(--gold)]"
              }`}
            >
              {musicPlaying ? <Music2 size={18} /> : <MusicIcon size={18} />}
            </button>

            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  data-ocid="nav.cart_button"
                  className="relative p-2 text-[oklch(0.35_0.03_30)] hover:text-[var(--maroon)] transition-colors"
                >
                  <ShoppingBag size={20} />
                  {cartCount > 0 && (
                    <span
                      className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-xs flex items-center justify-center text-white font-sans"
                      style={{
                        backgroundColor: "var(--maroon)",
                        fontSize: "10px",
                      }}
                    >
                      {cartCount}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm">
                <div className="flex flex-col h-full">
                  <h2 className="font-serif text-xl font-semibold mb-6 text-[oklch(0.12_0.015_30)]">
                    Your Cart
                  </h2>
                  {cartItems.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center text-center">
                      <div>
                        <ShoppingBag
                          size={40}
                          className="mx-auto mb-3 text-[oklch(0.70_0.04_60)]"
                        />
                        <p className="font-sans text-sm text-[oklch(0.55_0.04_50)]">
                          Your cart is empty
                        </p>
                        <Button
                          className="mt-4 btn-maroon text-white"
                          onClick={() => setCartOpen(false)}
                          asChild
                        >
                          <Link to="/shop">Shop Now</Link>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex-1 overflow-y-auto space-y-4">
                        {cartItems.map((item) => (
                          <div
                            key={item.product.id}
                            className="flex gap-3 pb-4 border-b border-[oklch(0.88_0.018_80)]"
                          >
                            <div
                              className="w-16 h-20 rounded flex-shrink-0"
                              style={{ background: item.product.gradient }}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-serif text-sm font-medium truncate">
                                {item.product.name}
                              </p>
                              <p className="font-sans text-xs text-[oklch(0.55_0.04_50)] mt-0.5">
                                Qty: {item.quantity}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-[oklch(0.60_0.04_50)] hover:text-[var(--maroon)] transition-colors flex-shrink-0"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-[oklch(0.88_0.018_80)]">
                        <a
                          href={`https://wa.me/918962203433?text=Hello%20Veera%20Handloom%2C%20I%20would%20like%20to%20order%3A%20${encodeURIComponent(cartItems.map((i) => `${i.product.name} (Qty: ${i.quantity})`).join(", "))}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-3 font-sans text-sm tracking-widest uppercase text-white rounded transition-all"
                          style={{ backgroundColor: "#25D366" }}
                        >
                          Order via WhatsApp
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Link
              to="/shop"
              data-ocid="nav.wishlist_button"
              className="p-2 text-[oklch(0.35_0.03_30)] hover:text-[var(--maroon)] transition-colors"
            >
              <Heart size={20} />
            </Link>

            <button
              type="button"
              className="md:hidden p-2 text-[oklch(0.35_0.03_30)]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[oklch(0.88_0.018_80)] bg-[oklch(0.97_0.012_85)]">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block font-sans text-sm tracking-widest uppercase py-2 transition-colors ${
                  isActive(link.to)
                    ? "text-[var(--maroon)]"
                    : "text-[oklch(0.35_0.03_30)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+918962203433"
              className="flex items-center gap-2 text-sm font-sans text-[oklch(0.45_0.04_30)] pt-2"
            >
              <Phone size={14} /> +91 89622 03433
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
