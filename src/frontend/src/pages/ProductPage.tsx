import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Star,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import { products, reviews } from "../data/products";

export default function ProductPage() {
  const { id } = useParams({ strict: false });
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [qty, setQty] = useState(1);

  const product = products.find((p) => p.id === id);
  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl">Product not found</p>
          <Link
            to="/shop"
            className="font-sans text-sm text-[var(--maroon)] hover:underline mt-4 block"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 3);
  const productReviews = reviews.filter((r) => r.productId === product.id);

  const handleAddToCart = () => {
    addToCart(product, qty);
    toast.success(`${product.name} added to cart!`);
  };

  const whatsappMsg = `Hello Veera Handloom, I would like to order:%0A%0AProduct: ${encodeURIComponent(product.name)}%0AQuantity: ${qty}`;

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-[var(--cream)]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 font-sans text-xs text-[oklch(0.55_0.04_50)]">
          <Link to="/" className="hover:text-[var(--maroon)] transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link
            to="/shop"
            className="hover:text-[var(--maroon)] transition-colors"
          >
            Shop
          </Link>
          <ChevronRight size={12} />
          <span className="text-[oklch(0.35_0.03_30)] truncate max-w-xs">
            {product.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div
              className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-luxury-lg"
              style={{ background: product.gradient }}
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white/40">
                    <div className="w-24 h-24 border-2 border-white/20 rounded-full mx-auto mb-3" />
                    <p className="font-sans text-xs tracking-widest uppercase">
                      Maheshwari Handloom
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/* Thumbnail strip */}
            <div className="flex gap-3 mt-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-20 h-24 rounded overflow-hidden cursor-pointer border-2 border-transparent hover:border-[var(--gold)] transition-colors"
                  style={{
                    background: product.gradient,
                    opacity: i === 0 ? 1 : 0.6,
                  }}
                >
                  {product.image && i === 0 && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="section-label">{product.collection}</p>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[oklch(0.12_0.015_30)] mt-2 leading-tight">
              {product.name}
            </h1>

            <div className="mt-6">
              <p className="font-sans text-sm leading-relaxed text-[oklch(0.40_0.03_50)]">
                {product.description}
              </p>
            </div>

            {/* Details */}
            <div className="mt-6 space-y-2">
              <p className="font-sans text-xs tracking-widest uppercase text-[oklch(0.55_0.04_50)] font-medium">
                Product Details
              </p>
              <ul className="space-y-1.5">
                {product.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 font-sans text-sm text-[oklch(0.35_0.03_40)]"
                  >
                    <span
                      style={{ color: "var(--gold)" }}
                      className="mt-0.5 flex-shrink-0"
                    >
                      ✓
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Care */}
            <div
              className="mt-4 p-4 rounded-lg"
              style={{ backgroundColor: "oklch(0.93 0.010 80)" }}
            >
              <p className="font-sans text-xs tracking-widest uppercase text-[oklch(0.55_0.04_50)] font-medium mb-1">
                Care Instructions
              </p>
              <p className="font-sans text-sm text-[oklch(0.40_0.03_50)]">
                {product.careInstructions}
              </p>
            </div>

            {/* Qty + Add to Cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <p className="font-sans text-sm font-medium text-[oklch(0.35_0.03_30)]">
                  Quantity
                </p>
                <div className="flex items-center border border-[oklch(0.85_0.02_70)] rounded">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 text-[oklch(0.40_0.03_50)] hover:text-[var(--maroon)] transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 py-2 font-sans text-sm font-medium min-w-[3rem] text-center">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="px-3 py-2 text-[oklch(0.40_0.03_50)] hover:text-[var(--maroon)] transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  data-ocid="product.add_to_cart_button"
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 font-sans text-sm tracking-widest uppercase rounded btn-gold"
                >
                  <ShoppingBag size={15} /> Add to Cart
                </button>
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className="w-12 h-12 flex items-center justify-center rounded border transition-colors"
                  style={{
                    borderColor: isInWishlist(product.id)
                      ? "var(--maroon)"
                      : "oklch(0.85 0.02 70)",
                  }}
                >
                  <Heart
                    size={16}
                    fill={isInWishlist(product.id) ? "var(--maroon)" : "none"}
                    color={
                      isInWishlist(product.id)
                        ? "var(--maroon)"
                        : "oklch(0.45 0.04 30)"
                    }
                  />
                </button>
              </div>

              <button
                type="button"
                data-ocid="product.buy_now_button"
                onClick={() => {
                  addToCart(product, qty);
                  navigate({ to: "/shop" });
                }}
                className="w-full py-3.5 font-sans text-sm tracking-widest uppercase rounded btn-maroon text-white"
              >
                Buy Now
              </button>

              <a
                href={`https://wa.me/918962203433?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="product.whatsapp_button"
                className="w-full flex items-center justify-center gap-2 py-3.5 font-sans text-sm tracking-widest uppercase rounded border text-[oklch(0.25_0.03_160)] transition-all hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
                style={{ borderColor: "#25D366", color: "#128C7E" }}
              >
                <MessageCircle size={15} /> Order via WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["100%", "Authentic"],
                ["Free", "Gift Wrap"],
                ["Secure", "Checkout"],
              ].map(([t, s]) => (
                <div
                  key={t}
                  className="text-center p-3 rounded border border-[oklch(0.88_0.018_80)]"
                >
                  <p
                    className="font-serif text-sm font-semibold"
                    style={{ color: "var(--maroon)" }}
                  >
                    {t}
                  </p>
                  <p className="font-sans text-xs text-[oklch(0.55_0.04_50)] mt-0.5">
                    {s}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews */}
        {productReviews.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-semibold text-[oklch(0.12_0.015_30)] mb-6">
              Customer Reviews
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {productReviews.map((r) => (
                <div
                  key={r.id}
                  className="bg-white rounded-lg p-6 shadow-xs border border-[oklch(0.90_0.01_80)]"
                >
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: r.rating }, (_, idx) => (
                      <Star
                        key={`r${r.id}-s${idx}`}
                        size={13}
                        fill="var(--gold)"
                        color="var(--gold)"
                      />
                    ))}
                  </div>
                  <p className="font-sans text-sm text-[oklch(0.40_0.03_50)] italic leading-relaxed">
                    &ldquo;{r.comment}&rdquo;
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[oklch(0.92_0.01_80)]">
                    <p className="font-serif text-sm font-semibold">
                      {r.name}, {r.location}
                    </p>
                    <p className="font-sans text-xs text-[oklch(0.60_0.04_50)]">
                      {new Date(r.date).toLocaleDateString("en-IN", {
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-semibold text-[oklch(0.12_0.015_30)] mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to="/product/$id"
                  params={{ id: p.id }}
                  className="product-card-hover group block bg-white rounded overflow-hidden shadow-xs border border-[oklch(0.92_0.01_80)]"
                >
                  <div
                    className="relative aspect-[3/4] overflow-hidden"
                    style={{ background: p.gradient }}
                  >
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <p
                      className="font-sans text-xs"
                      style={{ color: "var(--gold)" }}
                    >
                      {p.collection}
                    </p>
                    <h3 className="font-serif text-base font-semibold mt-1 truncate">
                      {p.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
