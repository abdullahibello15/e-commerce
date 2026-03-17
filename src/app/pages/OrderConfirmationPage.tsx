import React from 'react';
import { Link, useSearchParams } from 'react-router';
import { CheckCircle, Package, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';

export const OrderConfirmationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get('order') || 'BP00000000';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-1">Order Number</p>
              <p className="text-2xl font-bold text-gray-900">{orderNumber}</p>
            </div>

            <div className="border-t pt-6 space-y-4">
              <div className="flex items-start gap-4">
                <Package className="h-6 w-6 text-gray-400 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Processing Your Order</p>
                  <p className="text-sm text-gray-600">
                    We're getting your items ready for shipment. You'll receive a confirmation email
                    with tracking information once your order ships.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Truck className="h-6 w-6 text-gray-400 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Estimated Delivery</p>
                  <p className="text-sm text-gray-600">
                    Your order will be delivered within 5-7 business days. Track your order anytime
                    using the order number above.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="flex-1 bg-gray-900 hover:bg-gray-800">
              <Link to={`/track-order?order=${orderNumber}`}>Track Your Order</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>

          {/* Email Notice */}
          <p className="text-center text-sm text-gray-600 mt-6">
            A confirmation email has been sent to your email address with order details.
          </p>
        </div>
      </div>
    </div>
  );
};
