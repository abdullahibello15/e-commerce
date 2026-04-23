import React from 'react';
import { Link, useSearchParams } from 'react-router';
import { CheckCircle, Package, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';

export const OrderConfirmationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get('order') || 'Pending';

  return (
    <div className="section-shell py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <section data-reveal className="rounded-[36px] bg-white p-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:p-10">
          <CheckCircle className="mx-auto h-20 w-20 text-emerald-500" />
          <h1 className="font-heading mt-6 text-4xl font-bold text-slate-950">Order confirmed</h1>
          <p className="mt-3 text-sm leading-7 text-slate-500 md:text-base">
            Thank you for shopping with droppfive. Your order is in progress and a confirmation email will arrive shortly.
          </p>

          <div className="mt-8 rounded-[28px] bg-slate-50 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Order number</p>
            <p className="mt-2 text-3xl font-bold text-slate-950">{orderNumber}</p>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <Package className="mt-1 h-6 w-6 text-[#e94560]" />
                <div>
                  <p className="font-semibold text-slate-950">We’re preparing your items</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Our team is reviewing and packing your order for dispatch.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Truck className="mt-1 h-6 w-6 text-[#e94560]" />
                <div>
                  <p className="font-semibold text-slate-950">Tracking updates are next</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Once your order ships, we’ll send delivery updates and tracking details by email.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 flex-1 rounded-full bg-slate-950 text-white hover:bg-[#e94560]">
              <Link to={`/track-order?order=${orderNumber}`}>Track your order</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 flex-1 rounded-full">
              <Link to="/shop">Continue shopping</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
