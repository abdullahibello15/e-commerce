import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { CheckCircle, Package, Search, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const icons = [CheckCircle, Package, Truck, CheckCircle];

export const TrackOrderPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [orderNumber, setOrderNumber] = useState(searchParams.get('order') || '');
  const [submittedOrderNumber, setSubmittedOrderNumber] = useState(searchParams.get('order') || '');
  const [showTracking, setShowTracking] = useState(!!searchParams.get('order'));

  const data = useMemo(() => {
    if (!submittedOrderNumber) {
      return null;
    }

    return {
      orderNumber: submittedOrderNumber,
      estimatedDelivery: 'Updated at checkout confirmation',
      trackingNumber: `TRACK-${submittedOrderNumber.slice(-8).toUpperCase()}`,
      trackingSteps: [
        { id: 'placed', title: 'Order placed', date: 'Status available', time: 'Confirmation sent', completed: true },
        { id: 'processing', title: 'Preparing items', date: 'In progress', time: 'Warehouse confirmation pending', completed: true },
        { id: 'shipping', title: 'Shipping update', date: 'Will appear after dispatch', time: 'Tracking sync pending', completed: false },
        { id: 'delivery', title: 'Delivery status', date: 'Will update automatically', time: 'Awaiting carrier scan', completed: false },
      ],
      note: 'Detailed carrier tracking is provided after an order has been fulfilled and dispatched.',
    };
  }, [submittedOrderNumber]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedOrderNumber(orderNumber);
    setShowTracking(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Track Your Order</h1>

          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="orderNumber">Order Number</Label>
                <div className="flex gap-2">
                  <Input
                    id="orderNumber"
                    placeholder="Enter your order number"
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
                Enter the order number from your confirmation email.
              </p>
            </form>
          </div>

          {showTracking && data && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Order {data.orderNumber}</h2>
                <p className="text-gray-600">Estimated delivery: {data.estimatedDelivery}</p>
              </div>

              <div className="space-y-6">
                {data.trackingSteps.map((step, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <div key={step.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            step.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        {index < data.trackingSteps.length - 1 && (
                          <div className={`w-0.5 h-16 ${step.completed ? 'bg-green-600' : 'bg-gray-300'}`} />
                        )}
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-sm text-gray-600">
                          {step.date} • {step.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Tracking Number:</strong> {data.trackingNumber}
                </p>
                <p className="text-sm text-blue-900 mt-2">{data.note}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
