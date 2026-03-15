import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Globe2,
  Instagram,
  MapPin,
  Play,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { products, reviews } from "../data/products";

function OrnamentDivider({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`flex items-center gap-4 my-2 ${light ? "opacity-40" : ""}`}
    >
      <div
        className="flex-1 h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--gold))",
        }}
      />
      <span className="text-[var(--gold)] text-base">&#10022;</span>
      <div
        className="flex-1 h-px"
        style={{
          background: "linear-gradient(to left, transparent, var(--gold))",
        }}
      />
    </div>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + ((i * 5.5) % 90)}%`,
  delay: `${(i * 0.7) % 7}s`,
  duration: `${6 + ((i * 1.1) % 8)}s`,
  size: `${5 + (i % 4) * 2}px`,
  bottom: `${5 + ((i * 4) % 40)}%`,
}));

const extendedReviews = [...reviews, ...reviews];

export default function HomePage() {
  const { addToCart } = useCart();
  const featuredProducts = products.filter((p) => p.featured).slice(0, 7);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [cartAnimating, setCartAnimating] = useState<string | null>(null);
  const [tilt, setTilt] = useState<Record<string, { x: number; y: number }>>(
    {},
  );
  const whyRef = useReveal();
  const [heroParallax, setHeroParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHeroParallax(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart(product);
    setCartAnimating(product.id);
    setTimeout(() => setCartAnimating(null), 700);
  };

  const toggleWishlistLocal = (id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleCardMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    id: string,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setTilt((prev) => ({ ...prev, [id]: { x, y } }));
  };

  const handleCardMouseLeave = (id: string) => {
    setTilt((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  const whyChooseUs = [
    {
      icon: <Scissors size={24} />,
      title: "100% Handwoven",
      desc: "Every saree crafted by skilled artisan hands, no machines",
    },
    {
      icon: <MapPin size={24} />,
      title: "Direct from Maheshwar",
      desc: "Straight from the looms of our artisan families",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Premium Quality Silk",
      desc: "Finest Maheshwari silk and cotton blends",
    },
    {
      icon: <Globe2 size={24} />,
      title: "Worldwide Shipping",
      desc: "Delivered with care to every corner of the world",
    },
  ];

  return (
    <div className="overflow-x-hidden page-transition">
      {/* STORE PHOTO BANNER – TOP OF PAGE */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "65vh", minHeight: "320px", maxHeight: "700px" }}
        aria-label="Our Store – Maheshwar"
      >
        <img
          src="/assets/uploads/IMG-20260312-WA0030-1.jpg"
          alt="Veera Handloom Store – Maheshwar, Madhya Pradesh"
          className="w-full h-full object-cover object-center"
          style={{ display: "block" }}
        />
        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.08 0.015 30 / 0.88) 0%, oklch(0.12 0.015 30 / 0.45) 45%, oklch(0.15 0.01 30 / 0.18) 100%)",
          }}
        />
        {/* Subtle gold frame lines */}
        <div
          className="absolute inset-4 pointer-events-none"
          style={{
            border: "1px solid oklch(0.72 0.12 82 / 0.25)",
          }}
        />
        {/* Store label */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 sm:pb-10 flex flex-col items-center justify-end text-center">
          <p
            className="font-sans text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.72 0.12 82 / 0.80)" }}
          >
            Established in the Heart of Narmada
          </p>
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white"
            style={{ textShadow: "0 2px 20px oklch(0 0 0 / 0.6)" }}
          >
            Our Store
          </h2>
          <p
            className="font-sans text-sm sm:text-base mt-1"
            style={{ color: "var(--gold)" }}
          >
            Maheshwar, Madhya Pradesh
          </p>
          {/* Gold ornament line */}
          <div className="flex items-center gap-3 mt-3">
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--gold))",
              }}
            />
            <span style={{ color: "var(--gold)", fontSize: "10px" }}>
              &#10022;
            </span>
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(to left, transparent, var(--gold))",
              }}
            />
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center silk-texture overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.015 30) 0%, oklch(0.28 0.14 25) 40%, oklch(0.15 0.02 30) 100%)",
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Glow orb with parallax */}
        <div
          className="absolute left-1/2 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            backgroundColor: "var(--gold)",
            top: `calc(25% + ${heroParallax * 0.5}px)`,
            transform: "translateX(-50%)",
          }}
        />

        {/* Floating particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="fabric-particle"
            style={{
              left: p.left,
              bottom: p.bottom,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}

        {/* 3D Saree Model */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-30"
          style={{ perspective: "800px" }}
        >
          <div
            className="saree-3d rounded-lg"
            style={{
              width: "120px",
              height: "280px",
              background:
                "linear-gradient(160deg, oklch(0.72 0.12 82) 0%, oklch(0.55 0.18 25) 40%, oklch(0.72 0.12 82) 70%, oklch(0.88 0.10 85) 100%)",
              boxShadow:
                "0 20px 60px oklch(0 0 0 / 0.5), inset 0 0 40px oklch(0.72 0.12 82 / 0.2)",
            }}
          />
        </div>
        <div
          className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-20"
          style={{ perspective: "800px" }}
        >
          <div
            className="saree-3d rounded-lg"
            style={{
              width: "80px",
              height: "200px",
              background:
                "linear-gradient(160deg, oklch(0.38 0.15 25) 0%, oklch(0.72 0.12 82) 50%, oklch(0.38 0.15 25) 100%)",
              boxShadow: "0 20px 60px oklch(0 0 0 / 0.4)",
              animationDelay: "-3s",
            }}
          />
        </div>

        <div
          className="relative z-10 max-w-4xl mx-auto px-6"
          style={{ transform: `translateY(${-heroParallax * 0.15}px)` }}
        >
          <p className="section-label mb-6">Est. in the heart of Maheshwar</p>
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white mb-6"
            style={{ textShadow: "0 2px 20px oklch(0 0 0 / 0.4)" }}
          >
            Where Tradition Meets
            <br />
            <span className="gold-shimmer">Royal Elegance</span>
          </h1>
          <p
            className="font-serif text-lg sm:text-xl md:text-2xl italic mb-2"
            style={{ color: "var(--gold)" }}
          >
            Veera Handloom, Maheshwar
          </p>
          <p className="font-sans text-sm sm:text-base text-[oklch(0.75_0.03_60)] max-w-lg mx-auto mt-4 mb-10 leading-relaxed">
            Hand-crafted Maheshwari sarees by master artisans from the banks of
            the sacred Narmada river.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              data-ocid="hero.shop_now_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-sans text-sm tracking-widest uppercase rounded transition-all btn-gold"
            >
              Shop Now <ArrowRight size={14} />
            </Link>
            <Link
              to="/shop"
              data-ocid="hero.explore_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-sans text-sm tracking-widest uppercase rounded border text-white transition-all hover:bg-white/10"
              style={{ borderColor: "oklch(0.75 0.03 60 / 0.5)" }}
            >
              Explore Collection <ChevronRight size={14} />
            </Link>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-center">
            {[
              ["200+", "Years of Heritage"],
              ["5000+", "Happy Customers"],
              ["100%", "Handmade"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  className="font-serif text-2xl font-semibold"
                  style={{ color: "var(--gold)" }}
                >
                  {num}
                </div>
                <div className="font-sans text-xs text-[oklch(0.60_0.03_60)] tracking-wider mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silk Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
          <div className="silk-wave-1 flex" style={{ width: "200%" }}>
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 80"
              preserveAspectRatio="none"
              className="w-1/2 h-20"
              fill="oklch(0.97 0.012 85 / 0.08)"
            >
              <path d="M0,40 C100,70 200,10 300,40 C400,70 500,10 600,40 C700,70 800,10 900,40 C950,55 975,47 1000,40 L1000,80 L0,80 Z" />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 80"
              preserveAspectRatio="none"
              className="w-1/2 h-20"
              fill="oklch(0.97 0.012 85 / 0.08)"
            >
              <path d="M0,40 C100,70 200,10 300,40 C400,70 500,10 600,40 C700,70 800,10 900,40 C950,55 975,47 1000,40 L1000,80 L0,80 Z" />
            </svg>
          </div>
          <div
            className="silk-wave-2 flex absolute inset-0"
            style={{ width: "200%" }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 80"
              preserveAspectRatio="none"
              className="w-1/2 h-20"
              fill="oklch(0.72 0.12 82 / 0.06)"
            >
              <path d="M0,55 C150,20 350,70 500,45 C650,20 850,65 1000,55 L1000,80 L0,80 Z" />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 80"
              preserveAspectRatio="none"
              className="w-1/2 h-20"
              fill="oklch(0.72 0.12 82 / 0.06)"
            >
              <path d="M0,55 C150,20 350,70 500,45 C650,20 850,65 1000,55 L1000,80 L0,80 Z" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[oklch(0.55_0.03_60)]">
          <span className="font-sans text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--gold)] to-transparent" />
        </div>
      </section>

      {/* BEST SELLERS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Most Loved</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[oklch(0.12_0.015_30)] mt-3">
              Best Selling Sarees
            </h2>
            <OrnamentDivider />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => {
              const t = tilt[product.id] ?? { x: 0, y: 0 };
              return (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  onMouseMove={(e) => handleCardMouseMove(e, product.id)}
                  onMouseLeave={() => handleCardMouseLeave(product.id)}
                  style={{
                    transform: `perspective(800px) rotateX(${t.x}deg) rotateY(${t.y}deg)`,
                    transition: "transform 0.1s ease",
                    willChange: "transform",
                  }}
                >
                  <Link to="/product/$id" params={{ id: product.id }}>
                    <div
                      className="relative overflow-hidden rounded aspect-[3/4]"
                      style={{ background: product.gradient }}
                    >
                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(product);
                          }}
                          className={`w-full py-2 font-sans text-xs tracking-widest uppercase text-white bg-[var(--maroon)] rounded transition-all ${
                            cartAnimating === product.id ? "cart-ripple" : ""
                          }`}
                        >
                          Add to Cart
                        </button>
                      </div>
                      {/* Wishlist */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlistLocal(product.id);
                        }}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center"
                        aria-label="Wishlist"
                      >
                        <span
                          className={
                            wishlist.has(product.id) ? "heart-pop" : ""
                          }
                          key={wishlist.has(product.id) ? "filled" : "empty"}
                        >
                          &#10084;
                        </span>
                        <span className="sr-only">Wishlist</span>
                      </button>
                      {product.originalPrice && (
                        <div className="absolute top-3 left-3 px-2 py-1 bg-[var(--maroon)] text-white font-sans text-xs rounded">
                          Sale
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="mt-3">
                    <p className="font-sans text-xs text-[var(--gold)] tracking-wider">
                      {product.collection}
                    </p>
                    <h3 className="font-serif text-base font-semibold text-[oklch(0.12_0.015_30)] mt-1 truncate">
                      {product.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 font-sans text-sm tracking-widest uppercase rounded btn-maroon text-white"
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <div ref={whyRef.ref}>
        <section className="py-20 px-6 bg-[var(--cream)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="section-label">Why Us</p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[oklch(0.12_0.015_30)] mt-3">
                Why Choose Veera Handloom
              </h2>
              <OrnamentDivider />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {whyChooseUs.map((item, i) => (
                <div
                  key={item.title}
                  className={`text-center reveal-hidden ${whyRef.visible ? "reveal-visible" : ""}`}
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--maroon)",
                      color: "var(--gold)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[oklch(0.12_0.015_30)]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[oklch(0.50_0.03_50)] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ARTISAN STORY SECTION */}
      <section
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.015 30) 0%, oklch(0.22 0.12 25) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label mb-4">Our Heritage</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6">
            The Art of Maheshwari Weaving
          </h2>
          <OrnamentDivider light />
          <div className="grid md:grid-cols-2 gap-10 mt-12 text-left">
            <div>
              <p className="font-sans text-sm leading-relaxed text-[oklch(0.75_0.03_60)] mb-4">
                Nestled on the banks of the sacred Narmada river, Maheshwar has
                been the cradle of India's finest handloom tradition for over
                2,000 years. Under the patronage of the great Queen Ahilyabai
                Holkar in the 18th century, the art of Maheshwari weaving
                reached its zenith.
              </p>
              <p className="font-sans text-sm leading-relaxed text-[oklch(0.75_0.03_60)]">
                Each Maheshwari saree is characterized by its distinctive
                silk-cotton blend, reversible zari borders, and geometric
                patterns with a unique crisp texture. These sarees carry within
                them the heritage of a thousand artisan families.
              </p>
            </div>
            <div>
              <blockquote
                className="border-l-2 pl-6 italic"
                style={{ borderColor: "var(--gold)" }}
              >
                <p className="font-serif text-xl text-white leading-relaxed">
                  &ldquo;In every thread of a Maheshwari saree lives the soul of
                  an artisan, the grace of the Narmada, and the spirit of Queen
                  Ahilyabai.&rdquo;
                </p>
                <cite
                  className="font-sans text-sm mt-4 block"
                  style={{ color: "var(--gold)" }}
                >
                  — Veera Handloom Atelier
                </cite>
              </blockquote>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  ["Silk & Cotton", "Premium blend"],
                  ["Reversible", "Zari borders"],
                  ["Hand-woven", "Artisan made"],
                ].map(([title, sub]) => (
                  <div
                    key={title}
                    className="text-center p-3 rounded"
                    style={{ backgroundColor: "oklch(0.18 0.02 30)" }}
                  >
                    <p
                      className="font-serif text-sm font-semibold"
                      style={{ color: "var(--gold)" }}
                    >
                      {title}
                    </p>
                    <p className="font-sans text-xs text-[oklch(0.60_0.03_60)] mt-1">
                      {sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM GALLERY */}
      <section className="py-20 px-6 bg-[var(--cream-dark)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Follow Our Journey</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[oklch(0.12_0.015_30)] mt-3">
              <a
                href="https://www.instagram.com/veera_handloom"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--maroon)] transition-colors"
              >
                @veera_handloom
              </a>
            </h2>
            <OrnamentDivider />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              "DVgzx0NAVFP",
              "DVjLU5VDDyJ",
              "DVBuS97EtZ-",
              "DVp0FSCjo61",
              "DVlOl8ujGf3",
            ].map((reelId) => (
              <div
                key={reelId}
                className="aspect-[9/16] overflow-hidden rounded shadow-luxury"
              >
                <iframe
                  src={`https://www.instagram.com/reel/${reelId}/embed/`}
                  className="w-full h-full"
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency
                  allowFullScreen
                  loading="lazy"
                  title={`Instagram Reel ${reelId}`}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/veera_handloom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 font-sans text-sm tracking-widest uppercase rounded-full border transition-all hover:bg-[var(--maroon)] hover:border-[var(--maroon)] hover:text-white"
              style={{ borderColor: "var(--maroon)", color: "var(--maroon)" }}
            >
              <Instagram size={14} /> Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* YOUTUBE SHOWCASE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Watch & Discover</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[oklch(0.12_0.015_30)] mt-3">
              The Weaving Story
            </h2>
            <OrnamentDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured YouTube Video Embed */}
            <div className="md:col-span-2 rounded overflow-hidden shadow-luxury">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/zoiLb0NXJ4s"
                  title="Veera Handloom – Maheshwari Saree"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded"
                />
              </div>
              <div className="p-4 bg-white border border-[oklch(0.90_0.01_80)]">
                <h3 className="font-serif text-base font-semibold text-[oklch(0.12_0.015_30)] truncate">
                  The Art of Maheshwari Weaving
                </h3>
                <p className="font-sans text-xs text-[oklch(0.55_0.04_50)] mt-1">
                  Watch our artisans at work on traditional pit looms
                </p>
              </div>
            </div>
            {/* Sidebar video cards */}
            <div className="flex flex-col gap-6">
              {/* Real embed: Maheshwari Saree Story */}
              <div className="rounded overflow-hidden shadow-luxury flex-1">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/u1EZfOXEdxY"
                    title="Veera Handloom – Maheshwari Saree Story"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded"
                  />
                </div>
                <div className="p-4 bg-white border border-[oklch(0.90_0.01_80)]">
                  <h3 className="font-serif text-base font-semibold text-[oklch(0.12_0.015_30)] truncate">
                    Maheshwari Saree Story
                  </h3>
                  <p className="font-sans text-xs text-[oklch(0.55_0.04_50)] mt-1">
                    Experience the craft and culture of Maheshwar
                  </p>
                </div>
              </div>
              {/* Placeholder: Saree Draping Guide */}
              <a
                href="https://youtube.com/@maheshwarisari?si=kRRDCc9Se0bwJNTO"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-shadow flex-1"
              >
                <div
                  className="relative aspect-video flex items-center justify-center"
                  style={{ background: "oklch(0.35 0.10 160)" }}
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={22} className="text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="p-4 bg-white border border-[oklch(0.90_0.01_80)]">
                  <h3 className="font-serif text-base font-semibold text-[oklch(0.12_0.015_30)] truncate">
                    Saree Draping Guide
                  </h3>
                  <p className="font-sans text-xs text-[oklch(0.55_0.04_50)] mt-1">
                    How to drape a Maheshwari saree in 5 different styles
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION - Sliding Marquee */}
      <section className="py-20 bg-[var(--cream)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center">
            <p className="section-label">What Our Customers Say</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[oklch(0.12_0.015_30)] mt-3">
              Customer Stories
            </h2>
            <OrnamentDivider />
          </div>
        </div>
        <div className="relative">
          <div className="flex reviews-marquee gap-6 w-max">
            {extendedReviews.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="bg-white rounded p-6 shadow-luxury flex-shrink-0"
                style={{ width: "280px" }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }, (_, si) => (
                    <Star
                      key={`star-${review.id}-${idx}-${si}`}
                      size={13}
                      fill="var(--gold)"
                      color="var(--gold)"
                      className="star-animate"
                      style={{ animationDelay: `${si * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="font-sans text-sm leading-relaxed text-[oklch(0.40_0.03_50)] italic mb-4">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <div className="border-t border-[oklch(0.90_0.01_80)] pt-4">
                  <p className="font-serif text-sm font-semibold text-[oklch(0.15_0.015_30)]">
                    {review.name}
                  </p>
                  <p className="font-sans text-xs text-[oklch(0.60_0.04_50)] mt-0.5">
                    {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Gradient fades on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--cream)] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--cream)] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.38 0.15 25) 0%, oklch(0.28 0.10 25) 100%)",
        }}
      >
        <p className="section-label mb-4 opacity-80">Exclusively Yours</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
          Ready to Own a Piece of Heritage?
        </h2>
        <p className="font-sans text-sm text-[oklch(0.80_0.04_60)] max-w-md mx-auto mb-8">
          Each saree is a unique work of art. Order today and receive it with
          our signature heritage packaging.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-sans text-sm tracking-widest uppercase rounded btn-gold"
          >
            Explore Collection
          </Link>
          <a
            href="https://wa.me/918962203433?text=Hello%20Veera%20Handloom%2C%20I%20would%20like%20to%20know%20more%20about%20your%20sarees."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-sans text-sm tracking-widest uppercase rounded border text-white hover:bg-white/10 transition-all"
            style={{ borderColor: "oklch(0.80 0.04 60 / 0.5)" }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
