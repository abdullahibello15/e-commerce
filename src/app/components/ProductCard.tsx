import React from 'react';
import { Link } from 'react-router';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const badgeStyles: Record<NonNullable<Product['badge']>, string> = {
  Sale: 'bg-[#e94560] text-white',
  New: 'bg-slate-950 text-white',
  'Best Seller': 'bg-[#f0a500] text-slate-950',
  'Out of Stock': 'bg-red-600 text-white',
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, isWishlisted, toggleWishlist } = useCart();

  const handleAddToCart = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!product.inStock) {
      toast.error(`${product.name} is currently out of stock.`);
      return;
    }
    addToCart(product, 1);
    toast.success(`${product.name} added to cart.`);
  };

  const handleWishlist = (event: React.MouseEvent) => {
    event.preventDefault();
    const added = toggleWishlist(product.id);
    toast.success(added ? `${product.name} saved to wishlist.` : `${product.name} removed from wishlist.`);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      state={{ product }}
      className="group block rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
    >
      <div className="relative overflow-hidden rounded-[24px] bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/4.4] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {product.badge && (
          <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[product.badge]}`}>
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={handleWishlist}
          className={`absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
            isWishlisted(product.id)
              ? 'border-rose-200 bg-white text-[#e94560]'
              : 'border-white/70 bg-white/85 text-slate-700'
          }`}
          aria-label="Toggle wishlist"
        >
          <Heart className={`h-4 w-4 ${isWishlisted(product.id) ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="px-1 pb-1 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{product.category}</p>
        <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight text-slate-950 transition group-hover:text-[#e94560]">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <div className="flex items-center gap-1 text-[#f0a500]">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-semibold text-slate-800">
              {product.inStock ? 'In Stock' : 'Unavailable'}
            </span>
          </div>
          <span>{product.sku || 'No SKU'}</span>
        </div>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-2xl font-bold tracking-tight text-slate-950">{product.displayPrice}</p>
            <p className="text-sm text-slate-400">{product.stock.toLocaleString()} units available</p>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="rounded-full bg-slate-950 px-5 text-white transition hover:bg-[#e94560] disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {product.inStock ? 'Add' : 'Sold out'}
          </Button>
        </div>
      </div>
    </Link>
  );
};
