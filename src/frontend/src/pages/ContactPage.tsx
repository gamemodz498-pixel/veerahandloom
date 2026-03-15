import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    toast.success("Message sent! We will contact you within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      {/* Header */}
      <div
        className="py-20 text-center px-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.015 30) 0%, oklch(0.28 0.14 25) 100%)",
        }}
      >
        <p className="section-label mb-3">We'd Love to Hear From You</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white">
          Get in Touch
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[oklch(0.12_0.015_30)] mb-8">
              Visit Our Atelier
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start p-5 rounded-lg bg-[var(--cream)] border border-[oklch(0.88_0.018_80)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--maroon)" }}
                >
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-[oklch(0.55_0.04_50)] font-medium mb-1">
                    Address
                  </p>
                  <p className="font-sans text-sm text-[oklch(0.25_0.03_30)] leading-relaxed">
                    98, Vinoba Bhave Marg, Near Ahilya Fort
                    <br />
                    Maheshwar, Madhya Pradesh 451228
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center p-5 rounded-lg bg-[var(--cream)] border border-[oklch(0.88_0.018_80)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--maroon)" }}
                >
                  <Phone size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-sans text-xs tracking-widest uppercase text-[oklch(0.55_0.04_50)] font-medium mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+918962203433"
                    data-ocid="contact.call_button"
                    className="font-sans text-sm font-medium hover:underline"
                    style={{ color: "var(--maroon)" }}
                  >
                    +91 89622 03433
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center p-5 rounded-lg bg-[var(--cream)] border border-[oklch(0.88_0.018_80)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-sans text-xs tracking-widest uppercase text-[oklch(0.55_0.04_50)] font-medium mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/918962203433?text=Hello%20Veera%20Handloom"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.whatsapp_button"
                    className="font-sans text-sm font-medium hover:underline"
                    style={{ color: "#128C7E" }}
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center p-5 rounded-lg bg-[var(--cream)] border border-[oklch(0.88_0.018_80)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <Clock size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-[oklch(0.55_0.04_50)] font-medium mb-1">
                    Business Hours
                  </p>
                  <p className="font-sans text-sm text-[oklch(0.25_0.03_30)] font-medium">
                    Open Daily: 9:00 AM – 8:00 PM
                  </p>
                  <p className="font-sans text-xs text-[oklch(0.55_0.04_50)] mt-0.5">
                    Including weekends & public holidays
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-widest uppercase text-[oklch(0.55_0.04_50)] font-medium mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/veera_handloom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full font-sans text-sm font-medium transition-all hover:opacity-90 text-white"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  }}
                >
                  <Instagram size={14} /> @veera_handloom
                </a>
                <a
                  href="https://youtube.com/@maheshwarisari?si=kRRDCc9Se0bwJNTO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full font-sans text-sm font-medium transition-all hover:opacity-90 text-white"
                  style={{ backgroundColor: "#FF0000" }}
                >
                  <Youtube size={14} /> YouTube
                </a>
              </div>
            </div>

            {/* Map embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-luxury">
              <iframe
                title="Veera Handloom Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.8246699888673!2d75.59073931490074!3d22.17434568530706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f7e8c7e0c7d1%3A0x7c0c1b8f3b1a0e4a!2sMaheshwar%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[oklch(0.12_0.015_30)] mb-8">
              Send Us a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white p-8 rounded-lg shadow-luxury border border-[oklch(0.90_0.01_80)]"
            >
              <div>
                <Label
                  htmlFor="name"
                  className="font-sans text-xs tracking-widest uppercase text-[oklch(0.45_0.04_50)] mb-2 block"
                >
                  Your Name *
                </Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  required
                  placeholder="Priya Sharma"
                  className="font-sans text-sm"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="font-sans text-xs tracking-widest uppercase text-[oklch(0.45_0.04_50)] mb-2 block"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  required
                  placeholder="priya@example.com"
                  className="font-sans text-sm"
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="font-sans text-xs tracking-widest uppercase text-[oklch(0.45_0.04_50)] mb-2 block"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  placeholder="+91 98765 43210"
                  className="font-sans text-sm"
                />
              </div>
              <div>
                <Label
                  htmlFor="message"
                  className="font-sans text-xs tracking-widest uppercase text-[oklch(0.45_0.04_50)] mb-2 block"
                >
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  required
                  placeholder="I'd like to inquire about your Bridal collection..."
                  className="font-sans text-sm min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={submitting}
                className="w-full py-3.5 font-sans text-sm tracking-widest uppercase rounded btn-maroon text-white border-0"
                style={{ backgroundColor: "var(--maroon)" }}
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {/* Quick WhatsApp CTA */}
            <div
              className="mt-6 p-6 rounded-lg text-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.22 0.12 25) 0%, oklch(0.18 0.08 25) 100%)",
              }}
            >
              <p className="font-serif text-base font-semibold text-white mb-2">
                Prefer to Chat Directly?
              </p>
              <p className="font-sans text-xs text-[oklch(0.65_0.03_60)] mb-4">
                Get instant responses on WhatsApp. We're available daily 9 AM to
                8 PM.
              </p>
              <a
                href="https://wa.me/918962203433?text=Hello%20Veera%20Handloom%2C%20I%20have%20an%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-all hover:opacity-90 text-white"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle size={15} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
