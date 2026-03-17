import React from 'react';

export const ShippingPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: March 16, 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Shipping Methods & Times</h2>
              <p>We offer the following shipping options:</p>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Standard Shipping (FREE over $50)</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Delivery: 5-7 business days</li>
                  <li>Cost: $9.99 for orders under $50</li>
                  <li>Tracking included</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Express Shipping</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Delivery: 2-3 business days</li>
                  <li>Cost: $19.99</li>
                  <li>Priority tracking included</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Overnight Shipping</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Delivery: 1 business day</li>
                  <li>Cost: $34.99</li>
                  <li>Must be ordered by 2 PM EST for next-day delivery</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Processing Time</h2>
              <p>
                Orders are typically processed within 1-2 business days (Monday - Friday, excluding
                holidays). You'll receive an email confirmation with tracking information once your order
                ships.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Shipping Destinations</h2>
              <p>We currently ship to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>All 50 U.S. states</li>
                <li>Washington D.C.</li>
                <li>APO/FPO addresses</li>
                <li>Puerto Rico and U.S. Territories</li>
              </ul>
              <p className="mt-2">
                International shipping is coming soon! Sign up for our newsletter to be notified when we
                start shipping internationally.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Order Tracking</h2>
              <p>
                Once your order ships, you'll receive an email with your tracking number. You can track
                your package using our <a href="/track-order" className="text-blue-600 hover:underline">Order Tracking page</a> or
                directly through the carrier's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Shipping Carriers</h2>
              <p>
                We partner with trusted carriers including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>USPS (United States Postal Service)</li>
                <li>UPS (United Parcel Service)</li>
                <li>FedEx</li>
              </ul>
              <p className="mt-2">
                The carrier used for your order will depend on your location and the shipping method
                selected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Multiple Items</h2>
              <p>
                If you order multiple items, they may ship separately from different warehouses to ensure
                faster delivery. You'll receive separate tracking numbers for each shipment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Delivery Issues</h2>
              <p>
                If your package is marked as delivered but you haven't received it:
              </p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Check with neighbors or building management</li>
                <li>Look around your property (packages are sometimes left in safe places)</li>
                <li>Wait 24 hours - sometimes carriers mark packages as delivered early</li>
                <li>Contact us at support@bestpricecenter.com if you still can't locate your package</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Address Changes</h2>
              <p>
                If you need to change your shipping address, please contact us immediately at
                support@bestpricecenter.com. We can update the address if your order hasn't shipped yet.
                Once an order has shipped, we cannot change the delivery address.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Lost or Damaged Packages</h2>
              <p>
                If your package is lost or arrives damaged, please contact us within 7 days of the
                expected delivery date. We'll work with the carrier to resolve the issue and either send a
                replacement or issue a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Holidays & Weather</h2>
              <p>
                Shipping times may be extended during peak holiday seasons or due to severe weather
                conditions. We'll do our best to keep you updated on any delays.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Questions?</h2>
              <p>
                If you have any questions about shipping, please contact us:
              </p>
              <p className="mt-2">
                Email: support@bestpricecenter.com<br />
                Phone: +1 (555) 123-4567<br />
                Hours: Monday - Friday, 9:00 AM - 6:00 PM EST
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
