import React from 'react';

export const RefundPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: March 16, 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">30-Day Money-Back Guarantee</h2>
              <p>
                At BestPriceCenter, we want you to be completely satisfied with your purchase. If you're
                not happy with your order for any reason, you can return it within 30 days of delivery for
                a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Eligibility for Refunds</h2>
              <p>To be eligible for a refund, your item must:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Be unused and in the same condition that you received it</li>
                <li>Be in its original packaging</li>
                <li>Include the receipt or proof of purchase</li>
                <li>Be returned within 30 days of delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Non-Refundable Items</h2>
              <p>Certain items cannot be refunded:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Gift cards</li>
                <li>Downloadable software or digital products</li>
                <li>Items marked as final sale</li>
                <li>Personal care items that have been opened or used</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to Request a Refund</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact our customer service team at support@bestpricecenter.com</li>
                <li>Provide your order number and reason for return</li>
                <li>We'll send you return shipping instructions</li>
                <li>Pack the item securely in its original packaging</li>
                <li>Ship the item back to us using the provided instructions</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Return Shipping</h2>
              <p>
                You are responsible for paying the return shipping costs unless the item is defective or
                we made an error. We recommend using a trackable shipping service, as we cannot guarantee
                that we will receive your returned item.
              </p>
              <p className="mt-2">
                <strong>Free Return Shipping:</strong> If your item is defective, damaged, or incorrect,
                we'll provide a prepaid return shipping label at no cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Refund Processing</h2>
              <p>
                Once we receive your return, we'll inspect it and process your refund within 5-7 business
                days. The refund will be issued to your original payment method. Please note that it may
                take an additional 5-10 business days for the refund to appear in your account, depending
                on your financial institution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Exchanges</h2>
              <p>
                We currently don't offer direct exchanges. If you need a different size, color, or product,
                please return the original item for a refund and place a new order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Damaged or Defective Items</h2>
              <p>
                If you receive a damaged or defective item, please contact us immediately at
                support@bestpricecenter.com with photos of the damage. We'll arrange for a replacement or
                full refund, including return shipping costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Late or Missing Refunds</h2>
              <p>If you haven't received your refund yet:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Check your bank account again</li>
                <li>Contact your credit card company (it may take time for the refund to post)</li>
                <li>Contact your bank</li>
                <li>If you've done all of this and still haven't received your refund, contact us at support@bestpricecenter.com</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Questions?</h2>
              <p>
                If you have any questions about our refund policy, please don't hesitate to contact us:
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
