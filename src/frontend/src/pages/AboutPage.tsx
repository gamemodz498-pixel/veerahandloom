import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const timelineItems = [
  {
    year: "2,000+ Years Ago",
    title: "Ancient Beginnings",
    desc: "Maheshwar weaving traditions begin on the sacred banks of the Narmada river, with master craftsmen weaving stories in every thread.",
  },
  {
    year: "18th Century",
    title: "Royal Patronage",
    desc: "Queen Ahilyabai Holkar brings the finest weavers to Maheshwar, elevating Maheshwari silk weaving to royal status and perfecting the reversible zari border.",
  },
  {
    year: "1950s",
    title: "National Heritage",
    desc: "Maheshwari handloom is recognized as a national heritage craft of India, with GI tag protection preserving its authenticity for future generations.",
  },
  {
    year: "Today",
    title: "Veera Handloom",
    desc: "Veera Handloom carries forward this extraordinary legacy, connecting discerning saree lovers worldwide with authentic, artisan-crafted Maheshwari sarees.",
  },
];

function TimelineItem({
  item,
  index,
}: { item: (typeof timelineItems)[0]; index: number }) {
  const { ref, visible } = useReveal();
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Desktop: alternating */}
      <div className="hidden md:grid grid-cols-2 gap-8 items-center">
        {isLeft ? (
          <>
            <div
              className={`text-right reveal-hidden-right ${visible ? "reveal-visible-x" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <p className="section-label text-right">{item.year}</p>
              <h3 className="font-serif text-xl font-semibold text-white mt-1">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-[oklch(0.70_0.03_60)] mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="flex justify-start">
              <div
                className={`w-5 h-5 rounded-full border-2 border-[var(--gold)] bg-[var(--maroon)] ${
                  visible ? "timeline-dot-animate" : "opacity-0"
                }`}
                style={{
                  boxShadow: visible ? "0 0 16px var(--gold)" : "none",
                  transitionDelay: "0.3s",
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-end">
              <div
                className={`w-5 h-5 rounded-full border-2 border-[var(--gold)] bg-[var(--maroon)] ${
                  visible ? "timeline-dot-animate" : "opacity-0"
                }`}
                style={{
                  boxShadow: visible ? "0 0 16px var(--gold)" : "none",
                  transitionDelay: "0.3s",
                }}
              />
            </div>
            <div
              className={`reveal-hidden-left ${visible ? "reveal-visible-x" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <p className="section-label">{item.year}</p>
              <h3 className="font-serif text-xl font-semibold text-white mt-1">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-[oklch(0.70_0.03_60)] mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Mobile: vertical */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <div
            className={`w-4 h-4 rounded-full border-2 border-[var(--gold)] bg-[var(--maroon)] flex-shrink-0 mt-1 ${
              visible ? "timeline-dot-animate" : "opacity-0"
            }`}
            style={{ boxShadow: visible ? "0 0 12px var(--gold)" : "none" }}
          />
          {index < timelineItems.length - 1 && (
            <div
              className="w-px flex-1 mt-2"
              style={{ background: "oklch(0.72 0.12 82 / 0.3)" }}
            />
          )}
        </div>
        <div
          className={`pb-8 reveal-hidden ${visible ? "reveal-visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <p className="section-label">{item.year}</p>
          <h3 className="font-serif text-lg font-semibold text-white mt-1">
            {item.title}
          </h3>
          <p className="font-sans text-sm text-[oklch(0.70_0.03_60)] mt-2 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const artisans = [
    {
      name: "Ramesh Weaver",
      specialty: "Master of Zari Border Work",
      experience: "35 years",
      desc: "Ramesh has mastered the rare technique of creating reversible zari borders, a hallmark of authentic Maheshwari sarees.",
    },
    {
      name: "Sunita Devi",
      specialty: "Natural Dye Specialist",
      experience: "28 years",
      desc: "Sunita sources and processes natural dyes from plants and minerals, maintaining the centuries-old tradition of eco-friendly coloring.",
    },
    {
      name: "Gopal Das",
      specialty: "Silk-Cotton Blend Expert",
      experience: "42 years",
      desc: "With over four decades of experience, Gopal is one of the few remaining artisans who can create the traditional Maheshwari silk-cotton blend on heritage looms.",
    },
    {
      name: "Lakshmi Bai",
      specialty: "Bridal Embroidery",
      experience: "22 years",
      desc: "Lakshmi specializes in the intricate bridal embroidery patterns, weaving auspicious motifs that have been passed down through her family for generations.",
    },
  ];

  return (
    <div className="pt-16 md:pt-20 min-h-screen page-transition">
      {/* Hero */}
      <div
        className="py-24 text-center px-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.015 30) 0%, oklch(0.28 0.14 25) 100%)",
        }}
      >
        <p className="section-label mb-4">Our Heritage</p>
        <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-6">
          Veera Handloom
        </h1>
        <p
          className="font-serif text-xl italic max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--gold)" }}
        >
          &ldquo;Where every thread carries the story of Maheshwar.&rdquo;
        </p>
      </div>

      {/* Brand Story with Store Photo */}
      <section className="py-20 px-6 bg-[var(--cream)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Who We Are</p>
            <h2 className="font-serif text-3xl font-semibold text-[oklch(0.12_0.015_30)] mt-3">
              Our Story
            </h2>
            <div className="flex items-center gap-4 mt-4">
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--gold))",
                }}
              />
              <span className="text-[var(--gold)] text-base">&#10022;</span>
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(to left, transparent, var(--gold))",
                }}
              />
            </div>
          </div>

          {/* Story + Photo side by side */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <p className="font-sans text-base leading-relaxed text-[oklch(0.35_0.03_40)] mb-6">
                Veera Handloom was born from a deep reverence for one of India's
                most celebrated textile traditions. Located at the foot of the
                historic Ahilya Fort in Maheshwar, our atelier sits at the very
                heart of the Maheshwari weaving legacy.
              </p>
              <p className="font-sans text-base leading-relaxed text-[oklch(0.35_0.03_40)] mb-6">
                We work directly with families of master weavers who have
                inherited their craft across generations, ensuring that every
                saree we offer is a genuine expression of this extraordinary art
                form. Our mission is simple: to connect discerning saree lovers
                across India and the world with authentic, fairly compensated
                handloom work.
              </p>
              <p className="font-sans text-base leading-relaxed text-[oklch(0.35_0.03_40)]">
                Every purchase from Veera Handloom directly supports the artisan
                families of Maheshwar and helps sustain an art form that has
                survived for over two millennia.
              </p>
            </div>

            {/* Store photo */}
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="/assets/uploads/IMG-20260312-WA0019-8.jpg"
                alt="Inside Veera Handloom store — artisan carefully arranging sarees"
                className="w-full object-cover"
                style={{ maxHeight: "420px" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.10 0.015 30 / 0.85), transparent)",
                }}
              >
                <p className="font-serif text-white text-sm">
                  Inside Veera Handloom, Maheshwar
                </p>
                <p
                  className="font-sans text-xs mt-0.5"
                  style={{ color: "var(--gold)" }}
                >
                  98, Vinoba Bhave Marg, Near Ahilya Fort
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATED TIMELINE */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10 0.015 30) 0%, oklch(0.20 0.12 25) 100%)",
        }}
      >
        {/* Decorative background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 40%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Journey</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
              A Legacy Through the Ages
            </h2>
            <div className="flex items-center gap-4 opacity-40">
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--gold))",
                }}
              />
              <span className="text-[var(--gold)] text-base">&#10022;</span>
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(to left, transparent, var(--gold))",
                }}
              />
            </div>
          </div>

          {/* Desktop center line */}
          <div
            className="hidden md:block absolute left-1/2 top-32 bottom-8 w-px -translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--gold), transparent)",
            }}
          />

          <div className="space-y-16">
            {timelineItems.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.015 30) 0%, oklch(0.22 0.12 25) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">2,000 Years of Legacy</p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6">
                The Heritage of Maheshwar
              </h2>
              <p className="font-sans text-sm leading-relaxed text-[oklch(0.70_0.03_60)] mb-4">
                Maheshwar, on the banks of the sacred Narmada in Madhya Pradesh,
                has been a center of handloom weaving for over 2,000 years. The
                city's textile tradition reached its golden age under the
                patronage of the great Maratha queen, Ahilyabai Holkar, in the
                18th century.
              </p>
              <p className="font-sans text-sm leading-relaxed text-[oklch(0.70_0.03_60)] mb-4">
                Queen Ahilyabai brought the finest weavers to Maheshwar and
                elevated the art of Maheshwari saree making to royal status. The
                distinctive characteristics she patronized — reversible borders,
                silk-cotton blends, and geometric patterns with a crisp texture
                — remain the hallmarks of authentic Maheshwari weaving today.
              </p>
              <p className="font-sans text-sm leading-relaxed text-[oklch(0.70_0.03_60)]">
                A Maheshwari saree's most unique feature is its reversibility —
                both sides of the border are equally beautiful, a technical
                achievement that requires extraordinary skill and precision.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "🏛️",
                  title: "Royal Heritage",
                  desc: "Patronized by Queen Ahilyabai Holkar",
                },
                {
                  icon: "🧵",
                  title: "Handwoven",
                  desc: "Each saree takes 2–5 days to complete",
                },
                {
                  icon: "🌿",
                  title: "Eco-Friendly",
                  desc: "Natural dyes and sustainable practices",
                },
                {
                  icon: "✨",
                  title: "Reversible",
                  desc: "The iconic dual-sided zari border",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-4 rounded-lg text-center"
                  style={{ backgroundColor: "oklch(0.18 0.02 30)" }}
                >
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <h4 className="font-serif text-sm font-semibold text-white">
                    {card.title}
                  </h4>
                  <p className="font-sans text-xs text-[oklch(0.60_0.03_60)] mt-1">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artisans Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">The Hands Behind Every Saree</p>
            <h2 className="font-serif text-3xl font-semibold text-[oklch(0.12_0.015_30)] mt-3">
              Meet Our Artisans
            </h2>
            <div className="flex items-center gap-4 mt-4">
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--gold))",
                }}
              />
              <span className="text-[var(--gold)] text-base">&#10022;</span>
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(to left, transparent, var(--gold))",
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artisans.map((a, i) => (
              <div key={a.name} className="text-center">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
                  style={{
                    background: [
                      "oklch(0.35 0.15 25)",
                      "oklch(0.48 0.12 160)",
                      "oklch(0.62 0.12 82)",
                      "oklch(0.38 0.15 355)",
                    ][i],
                  }}
                >
                  {["🧑‍🎨", "👩‍🎨", "👨‍🎨", "👩‍🎨"][i]}
                </div>
                <h3 className="font-serif text-base font-semibold text-[oklch(0.12_0.015_30)]">
                  {a.name}
                </h3>
                <p
                  className="font-sans text-xs font-medium mt-1"
                  style={{ color: "var(--gold)" }}
                >
                  {a.specialty}
                </p>
                <p className="font-sans text-xs text-[oklch(0.55_0.04_50)] mt-0.5">
                  {a.experience} of experience
                </p>
                <p className="font-sans text-xs text-[oklch(0.45_0.03_50)] mt-3 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[var(--cream)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">What We Stand For</p>
            <h2 className="font-serif text-3xl font-semibold text-[oklch(0.12_0.015_30)] mt-3">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: "Authenticity",
                desc: "Every saree is 100% handwoven and verified authentic Maheshwari",
              },
              {
                value: "Sustainability",
                desc: "We use natural dyes and eco-friendly practices throughout our process",
              },
              {
                value: "Fair Trade",
                desc: "Our artisans receive fair wages and work in safe, respectful conditions",
              },
              {
                value: "Heritage",
                desc: "We are committed to preserving and promoting India's handloom legacy",
              },
            ].map((v) => (
              <div
                key={v.value}
                className="text-center p-6 bg-white rounded-lg shadow-xs border border-[oklch(0.90_0.01_80)]"
              >
                <h3
                  className="font-serif text-base font-semibold"
                  style={{ color: "var(--maroon)" }}
                >
                  {v.value}
                </h3>
                <p className="font-sans text-xs text-[oklch(0.45_0.03_50)] mt-3 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[oklch(0.12_0.015_30)] mb-4">
          Experience the Legacy
        </h2>
        <p className="font-sans text-sm text-[oklch(0.50_0.04_50)] max-w-md mx-auto mb-8">
          Visit us in Maheshwar or shop our collection online. Each purchase
          supports the artisan families who keep this extraordinary tradition
          alive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-3 font-sans text-sm tracking-widest uppercase rounded btn-maroon text-white"
          >
            Shop Collection
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 font-sans text-sm tracking-widest uppercase rounded border transition-all hover:bg-[var(--maroon)] hover:text-white hover:border-[var(--maroon)]"
            style={{ borderColor: "var(--maroon)", color: "var(--maroon)" }}
          >
            Visit Us
          </Link>
        </div>
      </section>
    </div>
  );
}
