import React from 'react';
import { PolicyPageTemplate } from '../components/PolicyPageTemplate';

export const ShippingPolicyPage: React.FC = () => {
  return (
    <PolicyPageTemplate
      document={{
        title: 'Shipping Policy',
        lastUpdated: 'April 23, 2026',
        sections: [
          {
            id: 'processing',
            title: 'Order Processing',
            body: [
              'Orders are reviewed and prepared before shipment. Processing times can vary based on order volume, product availability, and destination.',
            ],
          },
          {
            id: 'delivery',
            title: 'Delivery Timing',
            bullets: [
              'Delivery times vary by product and destination',
              'Tracking details are shared after the carrier confirms shipment',
              'Delays may occur during peak periods or due to carrier constraints',
            ],
          },
          {
            id: 'notes',
            title: 'Important Notes',
            body: [
              'Some products may ship separately depending on fulfillment location and supplier availability.',
            ],
          },
        ],
      }}
      loading={false}
      error={null}
    />
  );
};
