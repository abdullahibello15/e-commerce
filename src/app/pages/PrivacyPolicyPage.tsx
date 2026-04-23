import React from 'react';
import { PolicyPageTemplate } from '../components/PolicyPageTemplate';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <PolicyPageTemplate
      document={{
        title: 'Privacy Policy',
        lastUpdated: 'April 23, 2026',
        sections: [
          {
            id: 'overview',
            title: 'Information We Collect',
            body: [
              'We collect the information needed to process orders, improve the storefront experience, and respond to customer requests.',
              'This may include contact details, shipping details, and device or browsing information used to support store performance and security.',
            ],
          },
          {
            id: 'usage',
            title: 'How We Use Information',
            bullets: [
              'To process and fulfill orders',
              'To communicate about purchases and support requests',
              'To improve site performance, product discovery, and customer experience',
            ],
          },
          {
            id: 'sharing',
            title: 'When Information Is Shared',
            body: [
              'Information may be shared with service providers involved in payments, fraud prevention, fulfillment, delivery, and customer support.',
            ],
          },
        ],
      }}
      loading={false}
      error={null}
    />
  );
};
