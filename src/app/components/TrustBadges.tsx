import React from 'react';
import { CreditCard, Headphones, RotateCcw, Truck } from 'lucide-react';
import { TrustBadge } from '../data/products';

const iconMap = [Truck, CreditCard, RotateCcw, Headphones];

export const TrustBadges: React.FC<{ badges: TrustBadge[] }> = ({ badges }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {badges.map((badge, index) => {
        const Icon = iconMap[index % iconMap.length];

        return (
          <div
            key={badge.id}
            className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-[#e94560]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-slate-950">{badge.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{badge.description}</p>
          </div>
        );
      })}
    </div>
  );
};
