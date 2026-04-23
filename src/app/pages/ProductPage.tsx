import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router';
import {
  ChevronLeft,
  Heart,
  Minus,
  Package,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { InlineError, ProductGridSkeleton } from '../components/ApiStates';
import { useProductByKey } from '../hooks/useApiProducts';
import { toast } from 'sonner';

export const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isWishlisted, toggleWishlist } = useCart();
  const initialProduct = (location.state as { product?: Product } | null)?.product ?? null;
  const { product, relatedProducts, loading, error } = useProductByKey(slug, initialProduct);

  const productImages = useMemo(() => {
    if (!product) {
      return [];
    }

    return product.images.length > 0 ? product.images : [product.image];
  }, [product]);

  if (loading) {
    return (
      <div className="section-shell py-8 md:py-12">
        <ProductGridSkeleton count={2} />
      </div>
    );
  }

  if (error && !product) {
    return (
      <div className="section-shell py-8 md:py-12">
        <InlineError message={error} />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="section-shell flex min-h-[60vh] items-center justify-center py-16">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-semibold text-slate-950">Product not found</h1>
          <p className="mt-3 text-slate-500">This item may have been moved or is no longer available.</p>
          <Button asChild className="mt-6 rounded-full bg-slate-950 text-white">
            <Link to="/shop">Back to shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast.error(`${product.name} is currently out of stock.`);
      return;
    }

    addToCart(product, quantity);
    toast.success(`${quantity} ${product.name} added to cart.`);
  };

  const handleBuyNow = () => {
    if (!product.inStock) {
      toast.error(`${product.name} is currently out of stock.`);
      return;
    }

    addToCart(product, quantity);
    navigate('/checkout');
  };

  const handleWishlist = () => {
    const added = toggleWishlist(product.id);
    toast.success(added ? `${product.name} saved to wishlist.` : `${product.name} removed from wishlist.`);
  };

  return (
    <div className="section-shell py-8 md:py-12">
      <div data-reveal className="mb-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-950">
          <ChevronLeft className="h-4 w-4" />
          Back to shop
        </Link>
      </div>

      <section data-reveal className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div>
          <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
            <img
              src={productImages[selectedImage] ?? product.image}
              alt={product.name}
              className="aspect-square w-full rounded-[28px] object-cover"
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            {productImages.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`overflow-hidden rounded-[24px] border p-2 transition ${
                  selectedImage === index ? 'border-[#e94560] bg-rose-50' : 'border-slate-200 bg-white'
                }`}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} className="aspect-square w-full rounded-[18px] object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-[#e94560]">{product.category}</span>
            {product.badge && (
              <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">{product.badge}</span>
            )}
          </div>

          <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight text-slate-950">{product.name}</h1>
          {product.description && <p className="mt-4 text-base leading-7 text-slate-600">{product.description}</p>}

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-1 text-[#f0a500]">
              <Package className="h-4 w-4" />
              <span className="font-semibold text-slate-900">{product.sku || 'No SKU available'}</span>
            </div>
            <span>{product.stock.toLocaleString()} units available</span>
            <span className={`rounded-full px-3 py-1 font-semibold ${product.inStock ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
              {product.inStock ? 'In stock' : 'Out of stock'}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap items-end gap-3">
            <p className="text-4xl font-bold tracking-tight text-slate-950">{product.displayPrice}</p>
            {product.maxPrice > product.minPrice && (
              <p className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                Range pricing
              </p>
            )}
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Product details</p>
            <ul className="mt-4 space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-1">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-white"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center font-semibold text-slate-950">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-white"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <Button onClick={handleAddToCart} disabled={!product.inStock} className="h-12 rounded-full bg-slate-950 px-7 text-white hover:bg-[#e94560] disabled:cursor-not-allowed disabled:bg-slate-300">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to cart
            </Button>

            <Button onClick={handleBuyNow} disabled={!product.inStock} variant="outline" className="h-12 rounded-full border-slate-300 px-7 disabled:cursor-not-allowed">
              Buy now
            </Button>

            <Button
              type="button"
              variant="ghost"
              onClick={handleWishlist}
              className={`h-12 rounded-full border px-5 ${
                isWishlisted(product.id)
                  ? 'border-rose-200 bg-rose-50 text-[#e94560]'
                  : 'border-slate-200 bg-white text-slate-700'
              }`}
            >
              <Heart className={`mr-2 h-4 w-4 ${isWishlisted(product.id) ? 'fill-current' : ''}`} />
              Wishlist
            </Button>
          </div>

          <div className="mt-8 grid gap-4 rounded-[28px] bg-slate-50 p-5 sm:grid-cols-3">
            <div className="flex gap-3">
              <Truck className="mt-1 h-5 w-5 text-[#e94560]" />
              <div>
                <p className="font-semibold text-slate-950">Fast delivery</p>
                <p className="text-sm text-slate-500">Shipping details are confirmed during checkout.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-[#e94560]" />
              <div>
                <p className="font-semibold text-slate-950">Protected checkout</p>
                <p className="text-sm text-slate-500">Encrypted card processing.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Star className="mt-1 h-5 w-5 text-[#e94560]" />
              <div>
                <p className="font-semibold text-slate-950">Live inventory</p>
                <p className="text-sm text-slate-500">Stock count pulled from the API feed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <h2 className="font-heading text-2xl font-semibold text-slate-950">Catalog status</h2>
          <div className="mt-6 space-y-5">
            <article className="rounded-[24px] bg-slate-50 p-5">
              <p className="font-semibold text-slate-950">Live API product</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                This page is rendered from the real product feed using <code>nameEn</code>, <code>sellPrice</code>, <code>bigImage</code>, <code>sku</code>, and <code>warehouseInventoryNum</code>.
              </p>
            </article>
            <article className="rounded-[24px] bg-slate-50 p-5">
              <p className="font-semibold text-slate-950">Current availability</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {product.inStock
                  ? `${product.stock.toLocaleString()} units are available right now.`
                  : 'This product is currently out of stock in the live inventory feed.'}
              </p>
            </article>
          </div>
        </div>

        <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <h2 className="font-heading text-2xl font-semibold text-slate-950">Related products</h2>
          <div className="mt-6">
            {relatedProducts.length === 0 ? (
              <p className="rounded-[24px] bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                More related products will appear here as matching API results are available.
              </p>
            ) : (
              <div className="grid gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
