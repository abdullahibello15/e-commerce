import React from 'react';
import { PolicyPageTemplate } from '../components/PolicyPageTemplate';

export const RefundPolicyPage: React.FC = () => {
  return (
    <PolicyPageTemplate
      document={{
        title: 'Refund Policy',
        lastUpdated: 'April 23, 2026',
        sections: [
          {
            id: 'returns',
            title: 'Return Eligibility',
            body: [
              'Items must be returned in unused condition and within the return window stated at the time of purchase.',
              'Certain items may be excluded from return eligibility for hygiene, customization, or safety reasons.',
            ],
          },
          {
            id: 'refunds',
            title: 'Refund Processing',
            bullets: [
              'Approved refunds are issued to the original payment method',
              'Processing times depend on the payment provider and bank',
              'Shipping charges may be non-refundable unless required by law or due to an error on our side',
            ],
          },
          {
            id: 'support',
            title: 'Need Help?',
            body: [
              'If you have questions about a return or refund, contact support with your order number so we can assist quickly.',
            ],
          },
        ],
      }}
      loading={false}
      error={null}
    />
  );
};
