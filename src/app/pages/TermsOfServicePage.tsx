import React from 'react';
import { PolicyPageTemplate } from '../components/PolicyPageTemplate';

export const TermsOfServicePage: React.FC = () => {
  return (
    <PolicyPageTemplate
      document={{
        title: 'Terms of Service',
        lastUpdated: 'April 23, 2026',
        sections: [
          {
            id: 'use',
            title: 'Use of the Store',
            body: [
              'By using this storefront, you agree to use it lawfully and in a way that does not interfere with the experience of other customers or the operation of the site.',
            ],
          },
          {
            id: 'orders',
            title: 'Orders and Availability',
            bullets: [
              'All orders are subject to acceptance and availability',
              'Product information and availability can change without notice',
              'We may cancel or limit orders where necessary for security, compliance, or operational reasons',
            ],
          },
          {
            id: 'contact',
            title: 'Questions',
            body: [
              'If you need help understanding these terms, contact support before placing an order.',
            ],
          },
        ],
      }}
      loading={false}
      error={null}
    />
  );
};
