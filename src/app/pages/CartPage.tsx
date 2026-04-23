import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Minus, Plus, ShieldCheck, ShoppingBag, Trash2, Truck } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';

export const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="section-shell flex min-h-[70vh] items-center justify-center py-16">
        <div className="max-w-md rounded-[34px] border border-slate-200 bg-white p-10 text-center shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-700">
            <ShoppingBag className="h-8 w-8" />
          </div>
          <h1 className="font-heading mt-6 text-3xl font-semibold text-slate-950">Your cart is empty</h1>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            Start with a bestselling product and we’ll keep everything saved as you browse.
          </p>
          <Button asChild className="mt-6 rounded-full bg-slate-950 px-6 text-white">
            <Link to="/shop">Continue shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = 0;
  const tax = 0;
  const total = subtotal + shipping + tax;

  return (
    <div className="section-shell py-8 md:py-12">
      <section data-reveal className="mb-8 rounded-[36px] bg-[linear-gradient(135deg,#111827_0%,#1a1a2e_42%,#f8fafc_160%)] p-8 text-white md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f0a500]">Cart</p>
        <h1 className="font-heading mt-4 text-4xl font-bold md:text-5xl">Review your order before checkout</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
          Clean summaries, quantity controls, and trust cues help customers feel ready to complete their purchase.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section data-reveal className="space-y-4">
          {items.map((item) => (
            <article
              key={item.product.id}
              className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
            >
              <div className="flex flex-col gap-5 sm:flex-row">
                <Link to={`/product/${item.product.slug}`} state={{ product: item.product }} className="sm:w-36">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="aspect-square w-full rounded-[24px] object-cover"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {item.product.category}
                    </p>
                    <Link
                      to={`/product/${item.product.slug}`}
                      state={{ product: item.product }}
                      className="font-heading mt-2 block text-2xl font-semibold text-slate-950 hover:text-[#e94560]"
                    >
                      {item.product.name}
                    </Link>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.product.description}</p>
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-white"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center font-semibold text-slate-950">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-white"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <p className="text-2xl font-bold text-slate-950">
                        ${(item.product.minPrice * item.quantity).toFixed(2)}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside data-reveal className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
            <h2 className="font-heading text-2xl font-semibold text-slate-950">Order summary</h2>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-950">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className={`font-semibold ${shipping === 0 ? 'text-emerald-600' : 'text-slate-950'}`}>
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated tax</span>
                <span className="font-semibold text-slate-950">${tax.toFixed(2)}</span>
              </div>
            </div>

            <p className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-700">
              Totals are based on the lowest live API price for each product range.
            </p>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-950">Total</span>
                <span className="text-3xl font-bold text-slate-950">${total.toFixed(2)}</span>
              </div>
            </div>

            <Button asChild className="mt-6 h-12 w-full rounded-full bg-slate-950 text-white hover:bg-[#e94560]">
              <Link to="/checkout">
                Proceed to checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <div className="mt-6 space-y-3 rounded-[26px] bg-slate-50 p-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-[#e94560]" />
                <span>Encrypted checkout with secure payment processing.</span>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="mt-0.5 h-4 w-4 text-[#e94560]" />
                <span>Fast shipping with tracking updates sent by email.</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
