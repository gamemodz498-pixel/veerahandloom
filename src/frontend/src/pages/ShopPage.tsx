import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "@tanstack/react-router";
import { Heart, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import { collections, products } from "../data/products";

export default function ShopPage() {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [selectedFabric, setSelectedFabric] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedCollection !== "all" && p.collection !== selectedCollection)
        return false;
      if (
        selectedFabric !== "all" &&
        p.fabric.toLowerCase() !== selectedFabric.toLowerCase()
      )
        return false;
      return true;
    });
  }, [selectedCollection, selectedFabric]);

  const activeFilters = [
    selectedCollection !== "all" && {
      key: "collection",
      label: selectedCollection,
      clear: () => setSelectedCollection("all"),
    },
    selectedFabric !== "all" && {
      key: "fabric",
      label: selectedFabric,
      clear: () => setSelectedFabric("all"),
    },
  ].filter(Boolean) as { key: string; label: string; clear: () => void }[];

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-[var(--cream)]">
      {/* Page Header */}
      <div
        className="py-16 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.015 30) 0%, oklch(0.28 0.14 25) 100%)",
        }}
      >
        <p className="section-label mb-3">Handcrafted for You</p>
        <h1 className="font-serif text-3xl md:text-5xl font-semibold text-white">
          Our Collection
        </h1>
        <p className="font-sans text-sm text-[oklch(0.70_0.03_60)] mt-3">
          {products.length} handcrafted sarees from the looms of Maheshwar
        </p>
      </div>

      {/* Collection Banner Photo */}
      <div className="w-full overflow-hidden" style={{ maxHeight: "480px" }}>
        <img
          src="/assets/uploads/IMG-20260312-WA0010-1-1.jpg"
          alt="Veera Handloom Collection"
          className="w-full object-cover object-center"
          style={{ maxHeight: "480px" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Filters */}
        <div className="bg-white rounded-lg p-4 mb-8 shadow-xs border border-[oklch(0.90_0.01_80)]">
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 font-sans text-sm text-[oklch(0.35_0.03_30)] md:hidden"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <SlidersHorizontal size={15} /> Filters
            </button>

            <div
              className={`flex flex-wrap gap-4 flex-1 ${filtersOpen ? "flex" : "hidden md:flex"}`}
            >
              <div>
                <Select
                  value={selectedCollection}
                  onValueChange={setSelectedCollection}
                >
                  <SelectTrigger
                    data-ocid="shop.filter_select"
                    className="w-48 font-sans text-sm"
                  >
                    <SelectValue placeholder="All Collections" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Collections</SelectItem>
                    {collections.map((c) => (
                      <SelectItem key={c.id} value={c.name}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select
                  value={selectedFabric}
                  onValueChange={setSelectedFabric}
                >
                  <SelectTrigger className="w-36 font-sans text-sm">
                    <SelectValue placeholder="All Fabrics" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Fabrics</SelectItem>
                    <SelectItem value="Silk">Silk</SelectItem>
                    <SelectItem value="Cotton">Cotton</SelectItem>
                    <SelectItem value="Mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {activeFilters.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCollection("all");
                    setSelectedFabric("all");
                  }}
                  className="font-sans text-xs text-[var(--maroon)] hover:underline flex items-center gap-1"
                >
                  <X size={12} /> Clear all
                </button>
              )}
            </div>

            <span className="font-sans text-xs text-[oklch(0.60_0.04_50)] ml-auto">
              {filtered.length} results
            </span>
          </div>

          {/* Active filter tags */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-[oklch(0.92_0.01_80)]">
              {activeFilters.map((f) => (
                <button
                  type="button"
                  key={f.key}
                  onClick={f.clear}
                  className="flex items-center gap-1 px-3 py-1 rounded-full font-sans text-xs border transition-colors hover:bg-[var(--maroon)] hover:text-white hover:border-[var(--maroon)]"
                  style={{
                    borderColor: "var(--maroon)",
                    color: "var(--maroon)",
                  }}
                >
                  {f.label} <X size={10} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-[oklch(0.40_0.03_50)]">
              No sarees found with these filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCollection("all");
                setSelectedFabric("all");
              }}
              className="mt-4 font-sans text-sm text-[var(--maroon)] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="product-card-hover group bg-white rounded overflow-hidden shadow-xs border border-[oklch(0.92_0.01_80)]"
              >
                <Link to="/product/$id" params={{ id: product.id }}>
                  <div
                    className="relative aspect-[3/4] overflow-hidden"
                    style={{ background: product.gradient }}
                  >
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    {product.originalPrice && (
                      <div className="absolute top-2 left-2 px-2 py-0.5 bg-[var(--maroon)] text-white font-sans text-xs rounded">
                        Sale
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(product);
                      }}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center transition-transform hover:scale-110"
                      aria-label="Toggle wishlist"
                    >
                      <Heart
                        size={14}
                        fill={
                          isInWishlist(product.id) ? "var(--maroon)" : "none"
                        }
                        color={
                          isInWishlist(product.id)
                            ? "var(--maroon)"
                            : "oklch(0.45 0.04 30)"
                        }
                      />
                    </button>
                  </div>
                </Link>
                <div className="p-3">
                  <p
                    className="font-sans text-xs tracking-wider truncate"
                    style={{ color: "var(--gold)" }}
                  >
                    {product.collection}
                  </p>
                  <h3 className="font-serif text-sm font-semibold text-[oklch(0.15_0.015_30)] mt-1 truncate">
                    {product.name}
                  </h3>
                  <button
                    type="button"
                    data-ocid="product.add_to_cart_button"
                    onClick={() => addToCart(product)}
                    className="w-full mt-3 py-2 font-sans text-xs tracking-widest uppercase rounded btn-maroon text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
