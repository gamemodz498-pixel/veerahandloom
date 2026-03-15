export interface Product {
  id: string;
  name: string;
  collection: string;
  fabric: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  careInstructions: string;
  colors: string[];
  featured: boolean;
  gradient: string;
  image?: string;
}

export const collections = [
  {
    id: "maheshwari-silk",
    name: "Maheshwari Silk Sarees",
    description:
      "Exquisite silk sarees woven with centuries-old Maheshwari tradition",
  },
  {
    id: "handloom-cotton",
    name: "Handloom Cotton Sarees",
    description:
      "Breathable, elegant cotton sarees perfect for everyday luxury",
  },
  {
    id: "festive",
    name: "Festive Saree Collection",
    description:
      "Resplendent sarees crafted for your most cherished celebrations",
  },
  {
    id: "bridal",
    name: "Bridal Maheshwari Sarees",
    description: "Heirloom-quality bridal sarees for your most sacred moments",
  },
  {
    id: "zari-border",
    name: "Traditional Zari Border Sarees",
    description: "Gold and silver zari borders handwoven by master craftsmen",
  },
];

export const products: Product[] = [
  // Original 7 sarees (WA0008-series) — featured at top of Best Selling
  {
    id: "13",
    name: "Rang Bahar Cotton Saree Collection",
    collection: "Handloom Cotton Sarees",
    fabric: "Cotton",
    price: 2500,
    description:
      "A vibrant collection of hand-woven cotton sarees in a rainbow of festive colors — from lime green to sky blue, coral pink to deep navy. Each saree features a traditional gold zari border and is woven on the looms of Maheshwar.",
    details: [
      "100% Handloom Cotton",
      "5.5 meters with blouse piece",
      "Traditional gold zari border",
      "Available in 10+ colors",
      "Soft and breathable fabric",
    ],
    careInstructions:
      "Hand wash in cold water. Dry in shade. Iron on medium heat.",
    colors: ["Lime Green", "Orange", "Coral", "Sky Blue", "Navy", "Pink"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.14 145) 0%, oklch(0.60 0.16 40) 100%)",
    image: "/assets/uploads/IMG-20260312-WA0008-1.jpg",
  },
  {
    id: "14",
    name: "Silk Zari Buti Saree \u2013 Multi Colour",
    collection: "Maheshwari Silk Sarees",
    fabric: "Silk",
    price: 2800,
    description:
      "Pure Maheshwari silk sarees with fine gold buti (floral motifs) woven throughout the body and a rich gold zari border. Available in stunning shades \u2014 black, navy blue, purple, green, magenta, charcoal, and deep red.",
    details: [
      "Pure Maheshwari Silk",
      "5.5 meters with blouse piece",
      "Gold buti all over body",
      "Heavy gold zari border",
      "Multiple colors available",
    ],
    careInstructions:
      "Dry clean only. Store in cotton muslin cloth. Avoid direct sunlight.",
    colors: ["Black", "Navy", "Purple", "Green", "Magenta", "Red"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.18 0.02 280) 0%, oklch(0.35 0.12 300) 100%)",
    image: "/assets/uploads/IMG-20260312-WA0009-2.jpg",
  },
  {
    id: "15",
    name: "Mauve Pink Pure Silk Saree",
    collection: "Maheshwari Silk Sarees",
    fabric: "Silk",
    price: 2999,
    description:
      "Elegant mauve-pink pure silk saree with delicate silver buti motifs and a sophisticated woven border. A graceful choice for receptions, festive gatherings, and cultural events.",
    details: [
      "Pure Maheshwari Silk",
      "6 meters with blouse piece",
      "Silver buti motifs",
      "Woven pallu with border design",
      "Soft drape",
    ],
    careInstructions: "Dry clean only. Store folded in muslin cloth.",
    colors: ["Mauve Pink", "Silver Buti"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.75 0.10 350) 0%, oklch(0.62 0.14 320) 100%)",
    image: "/assets/uploads/IMG-20260312-WA0010-2-3.jpg",
  },
  {
    id: "16",
    name: "Rani Pink Silk Zari Saree",
    collection: "Festive Saree Collection",
    fabric: "Silk",
    price: 2750,
    description:
      "Brilliantly vibrant rani pink silk saree with all-over gold zari shimmer and a striking red-gold pallu. Perfect for Diwali, weddings, and festive celebrations \u2014 this saree commands attention wherever you go.",
    details: [
      "Pure Maheshwari Silk",
      "6 meters with blouse piece",
      "All-over gold zari weave",
      "Bold contrasting pallu",
      "Festive special",
    ],
    careInstructions:
      "Dry clean only. Store with camphor to protect zari threads.",
    colors: ["Rani Pink", "Gold Zari"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.62 0.22 0) 0%, oklch(0.50 0.18 355) 100%)",
    image: "/assets/uploads/IMG-20260312-WA0025-4.jpg",
  },
  {
    id: "17",
    name: "Veera Handloom Signature Saree",
    collection: "Traditional Zari Border Sarees",
    fabric: "Silk",
    price: 2600,
    description:
      "Straight from the heart of our Maheshwar store \u2014 this signature saree is handpicked by our artisan owner. A beautiful red silk saree with rich gold zari border, folded with care and ready for you.",
    details: [
      "Pure Maheshwari Silk",
      "5.5 meters",
      "Handpicked by store owner",
      "Traditional gold zari border",
      "Direct from Maheshwar",
    ],
    careInstructions: "Dry clean only. Store in the provided muslin wrap.",
    colors: ["Deep Red", "Gold Border"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.40 0.18 22) 0%, oklch(0.28 0.12 20) 100%)",
    image: "/assets/uploads/IMG-20260312-WA0026-5.jpg",
  },
  {
    id: "18",
    name: "Orange Gold Tissue Silk Saree",
    collection: "Festive Saree Collection",
    fabric: "Silk",
    price: 2900,
    description:
      "Resplendent orange tissue silk saree with a deep magenta border and luminous gold zari work. The shimmering tissue fabric catches light like liquid gold \u2014 perfect for grand festive occasions.",
    details: [
      "Tissue Silk",
      "6 meters with blouse piece",
      "Gold zari shimmer weave",
      "Magenta contrast border",
      "Festival & wedding wear",
    ],
    careInstructions: "Dry clean only. Handle gently to preserve tissue weave.",
    colors: ["Orange Gold", "Magenta Border"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.16 52) 0%, oklch(0.58 0.18 48) 100%)",
    image: "/assets/uploads/IMG-20260312-WA0029-6.jpg",
  },
  {
    id: "19",
    name: "Teal Green Silk with Red Pallu",
    collection: "Maheshwari Silk Sarees",
    fabric: "Silk",
    price: 3000,
    description:
      "A striking combination of deep teal green and vibrant red \u2014 this Maheshwari silk saree with gold buti motifs and a contrasting zari-work red pallu is a masterpiece of color and craft.",
    details: [
      "Pure Maheshwari Silk",
      "6 meters with blouse piece",
      "Gold buti motifs throughout",
      "Contrasting red zari pallu",
      "Unique dual-color design",
    ],
    careInstructions:
      "Dry clean only. Store away from moisture and direct light.",
    colors: ["Teal Green", "Red Pallu", "Gold Buti"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.48 0.14 175) 0%, oklch(0.40 0.18 22) 100%)",
    image: "/assets/uploads/IMG-20260312-WA0027-1-7.jpg",
  },
  // New 8 sarees (WA0012-series)
  {
    id: "20",
    name: "Black Red Gold Buti Silk Saree",
    collection: "Maheshwari Silk Sarees",
    fabric: "Silk",
    price: 2800,
    description:
      "A stunning dual-tone Maheshwari silk saree with a black body adorned with gold diamond buti motifs and a rich red pallu with gold zari work. A timeless classic for festive occasions.",
    details: [
      "Pure Maheshwari Silk",
      "5.5 meters with blouse piece",
      "Gold diamond buti throughout",
      "Rich red pallu with gold zari",
      "Handwoven by master artisans",
    ],
    careInstructions: "Dry clean only. Store in cotton muslin cloth.",
    colors: ["Black", "Red Pallu", "Gold Buti"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.15 0.02 25) 0%, oklch(0.40 0.18 22) 100%)",
    image: "/assets/uploads/IMG-20260314-WA0012-1.jpg",
  },
  {
    id: "21",
    name: "Royal Blue Diamond Buti Silk Saree",
    collection: "Maheshwari Silk Sarees",
    fabric: "Silk",
    price: 2900,
    description:
      "Resplendent royal blue Maheshwari silk saree with delicate gold diamond buti motifs and a majestic gold-bronze zari pallu. A royal choice for weddings and grand celebrations.",
    details: [
      "Pure Maheshwari Silk",
      "6 meters with blouse piece",
      "Gold diamond buti all over",
      "Heavy gold-bronze zari pallu",
      "Handwoven luxury",
    ],
    careInstructions: "Dry clean only. Avoid direct sunlight.",
    colors: ["Royal Blue", "Gold Buti", "Bronze Pallu"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.35 0.18 262) 0%, oklch(0.25 0.12 258) 100%)",
    image: "/assets/uploads/IMG-20260314-WA0019-2.jpg",
  },
  {
    id: "22",
    name: "Navy Blue Paisley Buti Silk Saree",
    collection: "Maheshwari Silk Sarees",
    fabric: "Silk",
    price: 2950,
    description:
      "Deep navy blue Maheshwari silk saree with intricate paisley (keri) buti motifs woven throughout and a lustrous gold zari border. A heritage design inspired by centuries of Maheshwari craft.",
    details: [
      "Pure Maheshwari Silk",
      "6 meters with blouse piece",
      "Paisley keri buti motifs",
      "Gold zari border",
      "Traditional Maheshwari weave",
    ],
    careInstructions: "Dry clean only. Store folded in muslin.",
    colors: ["Navy Blue", "Gold Paisley"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.28 0.14 258) 0%, oklch(0.20 0.10 255) 100%)",
    image: "/assets/uploads/IMG-20260314-WA0017-3.jpg",
  },
  {
    id: "23",
    name: "Black Silver Lotus Buti Silk Saree",
    collection: "Traditional Zari Border Sarees",
    fabric: "Silk",
    price: 2750,
    description:
      "Elegant black Maheshwari silk saree with delicate white and blue lotus buti motifs and a sophisticated silver zari border and pallu. A timeless piece for formal and festive occasions.",
    details: [
      "Pure Maheshwari Silk",
      "5.5 meters with blouse piece",
      "Lotus buti motifs",
      "Silver zari border and pallu",
      "Refined and elegant design",
    ],
    careInstructions: "Dry clean only. Store in acid-free tissue.",
    colors: ["Black", "Silver Zari", "Lotus Buti"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.18 0.01 0) 0%, oklch(0.50 0.02 0) 100%)",
    image: "/assets/uploads/IMG-20260314-WA0021-4.jpg",
  },
  {
    id: "24",
    name: "Dark Green Pink Zari Check Saree",
    collection: "Festive Saree Collection",
    fabric: "Silk",
    price: 2600,
    description:
      "A vibrant festive saree with deep forest green and vivid pink stripes in a traditional zari check pattern, finished with a lustrous gold zari pallu. Perfect for Diwali and celebrations.",
    details: [
      "Silk Cotton Blend",
      "5.5 meters with blouse piece",
      "Gold zari check pattern",
      "Gold zari pallu",
      "Festive wear",
    ],
    careInstructions: "Dry clean only. Store with camphor.",
    colors: ["Dark Green", "Pink", "Gold Zari"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.12 155) 0%, oklch(0.58 0.18 0) 100%)",
    image: "/assets/uploads/IMG-20260314-WA0020-5.jpg",
  },
  {
    id: "25",
    name: "Orange Magenta Zari Tissue Saree",
    collection: "Festive Saree Collection",
    fabric: "Silk",
    price: 2800,
    description:
      "A dazzling dual-tone tissue silk saree in vivid orange and magenta with shimmering gold zari work throughout. The fabric glows brilliantly in light — a showstopper for weddings and festive events.",
    details: [
      "Tissue Silk",
      "6 meters with blouse piece",
      "Gold zari shimmer weave",
      "Dual-tone orange-magenta body",
      "Gold zari pallu",
    ],
    careInstructions: "Dry clean only. Handle with care.",
    colors: ["Orange", "Magenta", "Gold Zari"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.68 0.18 48) 0%, oklch(0.55 0.22 340) 100%)",
    image: "/assets/uploads/IMG-20260314-WA0023-6.jpg",
  },
  {
    id: "26",
    name: "Pink Black Dual Tone Silk Saree",
    collection: "Bridal Maheshwari Sarees",
    fabric: "Silk",
    price: 2900,
    description:
      "A striking bridal saree combining vibrant rani pink and deep dark body with multicolour buti motifs and a broad gold zari border. An exquisite choice for the modern bride seeking tradition with flair.",
    details: [
      "Pure Maheshwari Silk",
      "6 meters with blouse piece",
      "Multicolour buti motifs",
      "Gold zari border",
      "Bridal special design",
    ],
    careInstructions: "Dry clean only. Store in the provided muslin wrap.",
    colors: ["Rani Pink", "Dark Body", "Gold Zari"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.60 0.20 355) 0%, oklch(0.25 0.05 100) 100%)",
    image: "/assets/uploads/IMG-20260314-WA0024-7.jpg",
  },
  {
    id: "27",
    name: "Olive Green Pink Border Zari Saree",
    collection: "Handloom Cotton Sarees",
    fabric: "Cotton",
    price: 2500,
    description:
      "A beautiful everyday saree in rich olive green with a warm pink border and gold zari check weave. Lightweight and breathable, this cotton saree is a perfect blend of tradition and comfort.",
    details: [
      "Handloom Cotton Silk Blend",
      "5.5 meters with blouse piece",
      "Gold zari check pattern",
      "Pink contrast border",
      "Gold zari pallu",
    ],
    careInstructions: "Hand wash cold or dry clean. Dry in shade.",
    colors: ["Olive Green", "Pink Border", "Gold Zari"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.42 0.10 130) 0%, oklch(0.58 0.16 0) 100%)",
    image: "/assets/uploads/IMG-20260314-WA0022-8.jpg",
  },
];

export const reviews = [
  {
    id: "1",
    productId: "13",
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment:
      "Absolutely stunning saree! The vibrant colors and quality of the cotton fabric is unparalleled. I wore the Rang Bahar at my cousin\u2019s wedding and received compliments all evening.",
    date: "2025-11-15",
  },
  {
    id: "2",
    productId: "19",
    name: "Meera Iyer",
    location: "Bangalore",
    rating: 5,
    comment:
      "The Teal Green Silk with Red Pallu is absolutely breathtaking. The dual-color design and gold buti motifs are extraordinary. A true masterpiece of Maheshwari craftsmanship.",
    date: "2025-10-22",
  },
  {
    id: "3",
    productId: "13",
    name: "Anita Patel",
    location: "Ahmedabad",
    rating: 5,
    comment:
      "The Rang Bahar Cotton Saree is so elegant and comfortable. Perfect for festive occasions. The natural colors are beautiful and the fabric is incredibly soft.",
    date: "2025-12-01",
  },
  {
    id: "4",
    productId: "17",
    name: "Kavitha Nair",
    location: "Chennai",
    rating: 5,
    comment:
      "Bought the Veera Handloom Signature Saree and I\u2019m amazed by the craftsmanship. The gold zari border is stunning. True Maheshwari artistry. Will definitely order more.",
    date: "2025-09-18",
  },
  {
    id: "5",
    productId: "16",
    name: "Sunita Gupta",
    location: "Delhi",
    rating: 4,
    comment:
      "The Rani Pink Silk Zari Saree is everything I hoped for. Vivid colors, excellent craftsmanship, and fast shipping. The packaging was also very premium.",
    date: "2025-11-30",
  },
];
