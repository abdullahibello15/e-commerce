import React from 'react';
import { Shield, Truck, RotateCcw, CreditCard } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure checkout',
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Free shipping over $50',
    },
    {
      icon: RotateCcw,
      title: '30-Day Returns',
      description: 'Money-back guarantee',
    },
    {
      icon: CreditCard,
      title: 'Safe & Secure',
      description: 'SSL encrypted',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {badges.map((badge, index) => (
        <div key={index} className="flex flex-col items-center text-center p-4">
          <div className="mb-3 p-3 bg-gray-100 rounded-full">
            <badge.icon className="h-6 w-6 text-gray-900" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">{badge.title}</h4>
          <p className="text-sm text-gray-600">{badge.description}</p>
        </div>
      ))}
    </div>
  );
};
