import { Link } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Phone, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(135deg, oklch(0.92 0.06 85) 0%, oklch(0.88 0.09 75) 40%, oklch(0.85 0.10 70) 100%)",
        borderTop: "2px solid oklch(0.72 0.14 65)",
      }}
      className="text-[oklch(0.28_0.06_50)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/assets/generated/veera-logo-transparent.dim_600x300.png"
              alt="Veera Handloom"
              className="h-12 w-auto mb-4"
              style={{
                filter: "sepia(1) saturate(3) hue-rotate(5deg) brightness(0.4)",
              }}
            />
            <p className="font-sans text-sm leading-relaxed text-[oklch(0.38_0.06_55)] mt-3">
              Authentic Maheshwari handloom sarees crafted by skilled artisans
              in Maheshwar, Madhya Pradesh. Preserving 2,000 years of weaving
              heritage.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/veera_handloom"
                target="_blank"
                rel="noopener noreferrer"
                style={{ border: "1.5px solid oklch(0.65 0.14 65)" }}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[oklch(0.72_0.14_65)] hover:text-white transition-all text-[oklch(0.40_0.10_55)]"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://youtube.com/@maheshwarisari?si=kRRDCc9Se0bwJNTO"
                target="_blank"
                rel="noopener noreferrer"
                style={{ border: "1.5px solid oklch(0.65 0.14 65)" }}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[oklch(0.72_0.14_65)] hover:text-white transition-all text-[oklch(0.40_0.10_55)]"
              >
                <Youtube size={15} />
              </a>
              <a
                href="https://wa.me/918962203433"
                target="_blank"
                rel="noopener noreferrer"
                style={{ border: "1.5px solid oklch(0.65 0.14 65)" }}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[oklch(0.72_0.14_65)] hover:text-white transition-all text-[oklch(0.40_0.10_55)]"
              >
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4
              style={{
                color: "oklch(0.42 0.12 55)",
                borderBottom: "1px solid oklch(0.75 0.14 65)",
                paddingBottom: "8px",
              }}
              className="font-serif text-base font-semibold mb-5"
            >
              Collections
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              {[
                "Maheshwari Silk",
                "Handloom Cotton",
                "Festive Collection",
                "Bridal Sarees",
                "Zari Border",
              ].map((c) => (
                <li key={c}>
                  <Link
                    to="/shop"
                    className="text-[oklch(0.35_0.07_55)] hover:text-[oklch(0.45_0.16_60)] transition-colors font-medium"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "oklch(0.42 0.12 55)",
                borderBottom: "1px solid oklch(0.75 0.14 65)",
                paddingBottom: "8px",
              }}
              className="font-serif text-base font-semibold mb-5"
            >
              Information
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              {[
                { to: "/about", label: "Our Story" },
                { to: "/contact", label: "Contact Us" },
                { to: "/shop", label: "All Products" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[oklch(0.35_0.07_55)] hover:text-[oklch(0.45_0.16_60)] transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/veera_handloom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[oklch(0.35_0.07_55)] hover:text-[oklch(0.45_0.16_60)] transition-colors font-medium"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@maheshwarisari?si=kRRDCc9Se0bwJNTO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[oklch(0.35_0.07_55)] hover:text-[oklch(0.45_0.16_60)] transition-colors font-medium"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: "oklch(0.42 0.12 55)",
                borderBottom: "1px solid oklch(0.75 0.14 65)",
                paddingBottom: "8px",
              }}
              className="font-serif text-base font-semibold mb-5"
            >
              Visit Us
            </h4>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex gap-2.5 items-start">
                <MapPin
                  size={14}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.50 0.16 58)" }}
                />
                <span className="text-[oklch(0.35_0.07_55)]">
                  98, Vinoba Bhave Marg, Near Ahilya Fort, Maheshwar, MP 451228
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone
                  size={14}
                  className="flex-shrink-0"
                  style={{ color: "oklch(0.50 0.16 58)" }}
                />
                <a
                  href="tel:+918962203433"
                  className="text-[oklch(0.35_0.07_55)] hover:text-[oklch(0.45_0.16_60)] transition-colors"
                >
                  +91 89622 03433
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Clock
                  size={14}
                  className="flex-shrink-0"
                  style={{ color: "oklch(0.50 0.16 58)" }}
                />
                <span className="text-[oklch(0.35_0.07_55)]">
                  Daily 9:00 AM – 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid oklch(0.75 0.14 65)" }}
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-sans text-xs text-[oklch(0.42_0.08_55)]">
            © {new Date().getFullYear()} Veera Handloom. All rights reserved.
            Maheshwar, Madhya Pradesh, India.
          </p>
          <p className="font-sans text-xs text-[oklch(0.42_0.08_55)]">
            Preserving India's handloom heritage since generations.
          </p>
        </div>
      </div>
    </footer>
  );
}
