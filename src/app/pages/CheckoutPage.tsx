import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CheckCircle2, CreditCard, Lock } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

export const CheckoutPage: React.FC = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');

  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart');
    }
  }, [items.length, navigate]);

  if (items.length === 0) {
    return null;
  }

  const subtotal = getCartTotal();
  const shipping = 0;
  const tax = 0;
  const total = subtotal + shipping + tax;
  const paymentMethods = [
    { id: 'card', label: 'Card' },
    { id: 'paypal', label: 'PayPal' },
    { id: 'bank', label: 'Bank Transfer' },
    { id: 'wallet', label: 'Wallet' },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const orderNumber = `ORDER-${Date.now().toString().slice(-8)}`;
    clearCart();
    toast.success('Order submitted.');
    navigate(`/order-confirmation?order=${orderNumber}`);
  };

  return (
    <div className="section-shell py-8 md:py-12">
      <section data-reveal className="mb-8 rounded-[36px] bg-[linear-gradient(135deg,#111827_0%,#1a1a2e_48%,#e94560_130%)] p-8 text-white md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f0a500]">Checkout</p>
        <h1 className="font-heading mt-4 text-4xl font-bold md:text-5xl">Finish your droppfive order</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
          Clean form fields, visible totals, and secure payment options help customers complete their purchase with confidence.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
        <form data-reveal onSubmit={handleSubmit} className="space-y-6">
          <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
            <h2 className="font-heading text-2xl font-semibold text-slate-950">Contact</h2>
            <div className="mt-5">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="Email address" required className="mt-2 h-12 rounded-2xl" />
            </div>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
            <h2 className="font-heading text-2xl font-semibold text-slate-950">Shipping details</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="First name" required className="mt-2 h-12 rounded-2xl" />
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Last name" required className="mt-2 h-12 rounded-2xl" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="address">Street address</Label>
                <Input id="address" placeholder="Street address" required className="mt-2 h-12 rounded-2xl" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" required className="mt-2 h-12 rounded-2xl" />
              </div>
              <div>
                <Label htmlFor="state">State / Region</Label>
                <Input id="state" placeholder="State / Region" required className="mt-2 h-12 rounded-2xl" />
              </div>
              <div>
                <Label htmlFor="zipCode">Postal code</Label>
                <Input id="zipCode" placeholder="Postal code" required className="mt-2 h-12 rounded-2xl" />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input id="country" placeholder="Country" required className="mt-2 h-12 rounded-2xl" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" placeholder="Phone number" required className="mt-2 h-12 rounded-2xl" />
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
            <h2 className="font-heading text-2xl font-semibold text-slate-950">Payment</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-4">
              {paymentMethods.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setPaymentMethod(option.id)}
                  className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                    paymentMethod === option.id
                      ? 'border-slate-950 bg-slate-950 text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-700'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {paymentMethod === 'card' ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="cardNumber">Card number</Label>
                  <div className="relative mt-2">
                    <Input id="cardNumber" placeholder="Card number" required className="h-12 rounded-2xl pr-12" />
                    <CreditCard className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="expiryDate">Expiry date</Label>
                  <Input id="expiryDate" placeholder="MM/YY" required className="mt-2 h-12 rounded-2xl" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="CVV" required className="mt-2 h-12 rounded-2xl" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="cardName">Name on card</Label>
                  <Input id="cardName" placeholder="Name on card" required className="mt-2 h-12 rounded-2xl" />
                </div>
              </div>
            ) : (
              <div className="mt-5 rounded-[24px] bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                You’ll be redirected to complete your payment after confirming the order.
              </div>
            )}

            <div className="mt-6 flex items-start gap-3 rounded-[24px] bg-emerald-50 p-4 text-sm text-emerald-800">
              <CheckCircle2 className="mt-0.5 h-5 w-5" />
              <p>All transactions are encrypted and protected by secure checkout standards.</p>
            </div>
          </section>

          <Button type="submit" className="h-12 w-full rounded-full bg-slate-950 text-white hover:bg-[#e94560]">
            <Lock className="mr-2 h-4 w-4" />
            Place order for ${total.toFixed(2)}
          </Button>
        </form>

        <aside data-reveal className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
            <h2 className="font-heading text-2xl font-semibold text-slate-950">Order summary</h2>

            <div className="mt-6 space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-20 w-20 rounded-[20px] object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-slate-950">{item.product.name}</p>
                    <p className="mt-1 text-sm text-slate-500">Qty {item.quantity}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.product.category}</p>
                  </div>
                  <p className="font-semibold text-slate-950">${(item.product.minPrice * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-950">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-slate-950">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated tax</span>
                <span className="font-semibold text-slate-950">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-950">Total</span>
                <span className="text-3xl font-bold text-slate-950">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
