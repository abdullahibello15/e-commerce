import React, { useState } from 'react';
import { useSearchParams } from 'react-router';
import { Package, Truck, CheckCircle, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export const TrackOrderPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [orderNumber, setOrderNumber] = useState(searchParams.get('order') || '');
  const [showTracking, setShowTracking] = useState(!!searchParams.get('order'));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTracking(true);
  };

  const trackingSteps = [
    {
      icon: CheckCircle,
      title: 'Order Confirmed',
      date: 'March 16, 2026',
      time: '10:30 AM',
      completed: true,
    },
    {
      icon: Package,
      title: 'Processing',
      date: 'March 16, 2026',
      time: '2:45 PM',
      completed: true,
    },
    {
      icon: Truck,
      title: 'Shipped',
      date: 'March 17, 2026',
      time: 'Expected',
      completed: false,
    },
    {
      icon: CheckCircle,
      title: 'Delivered',
      date: 'March 21, 2026',
      time: 'Expected',
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Track Your Order</h1>

          {/* Order Number Input */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="orderNumber">Order Number</Label>
                <div className="flex gap-2">
                  <Input
                    id="orderNumber"
                    placeholder="Enter your order number (e.g., BP12345678)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    required
                  />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Track
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                You can find your order number in your confirmation email.
              </p>
            </form>
          </div>

          {/* Tracking Information */}
          {showTracking && orderNumber && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Order {orderNumber}</h2>
                <p className="text-gray-600">Estimated delivery: March 21, 2026</p>
              </div>

              {/* Tracking Steps */}
              <div className="space-y-6">
                {trackingSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          step.completed
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        <step.icon className="h-6 w-6" />
                      </div>
                      {index < trackingSteps.length - 1 && (
                        <div
                          className={`w-0.5 h-16 ${
                            step.completed ? 'bg-green-600' : 'bg-gray-300'
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-600">
                        {step.date} • {step.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Tracking Number:</strong> 1Z999AA10123456784
                </p>
                <p className="text-sm text-blue-900 mt-2">
                  Your order is being prepared by our fulfillment center. You'll receive an email
                  with the shipping carrier's tracking information once your package ships.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
