import React from 'react';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: March 16, 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing and using BestPriceCenter ("we," "us," or "our") website and services, you
                agree to be bound by these Terms of Service and all applicable laws and regulations. If you
                do not agree with any of these terms, you are prohibited from using this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily access and use the materials on BestPriceCenter's
                website for personal, non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software on BestPriceCenter's website</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Account Terms</h2>
              <p>
                To use certain features of our service, you may be required to create an account. You are
                responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Maintaining the confidentiality of your account and password</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Providing accurate and complete information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Product Information</h2>
              <p>
                We strive to provide accurate product descriptions and pricing. However, we do not warrant
                that product descriptions or other content is accurate, complete, reliable, current, or
                error-free. If a product is not as described, your sole remedy is to return it in unused
                condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Pricing and Payment</h2>
              <p>
                All prices are in U.S. dollars and are subject to change without notice. We reserve the
                right to refuse or cancel any order for any reason, including errors in pricing or product
                information. Payment must be received before orders are processed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Prohibited Uses</h2>
              <p>You may not use our site:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations</li>
                <li>To infringe upon our intellectual property rights</li>
                <li>To harass, abuse, or harm another person</li>
                <li>To submit false or misleading information</li>
                <li>To upload viruses or malicious code</li>
                <li>To collect or track personal information of others</li>
                <li>To spam, phish, or engage in similar activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Intellectual Property</h2>
              <p>
                The content on this website, including text, graphics, logos, images, and software, is the
                property of BestPriceCenter and is protected by U.S. and international copyright laws.
                Unauthorized use may violate copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. User-Generated Content</h2>
              <p>
                By submitting reviews, comments, or other content to our site, you grant us a
                non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such
                content. You represent that you own or have the necessary rights to the content you submit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Disclaimer</h2>
              <p>
                THE MATERIALS ON BESTPRICECENTER'S WEBSITE ARE PROVIDED ON AN "AS IS" BASIS.
                BESTPRICECENTER MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS ALL OTHER
                WARRANTIES INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Limitations of Liability</h2>
              <p>
                In no event shall BestPriceCenter or its suppliers be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the materials on BestPriceCenter's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Links to Third-Party Sites</h2>
              <p>
                Our website may contain links to third-party websites. These links are provided for your
                convenience only. We have no control over the content of these sites and accept no
                responsibility for them or for any loss or damage that may arise from your use of them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">12. Modifications</h2>
              <p>
                We reserve the right to revise these Terms of Service at any time without notice. By using
                this website, you agree to be bound by the current version of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">13. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of New
                York, United States, and you irrevocably submit to the exclusive jurisdiction of the courts
                in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">14. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p className="mt-2">
                Email: legal@bestpricecenter.com<br />
                Phone: +1 (555) 123-4567<br />
                Address: 123 Commerce Street, New York, NY 10001
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
