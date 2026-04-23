import React from 'react';
import { InlineError, InlineLoader, TextBlockSkeleton } from './ApiStates';
import { PolicyDocument } from '../data/products';

interface PolicyPageTemplateProps {
  document: PolicyDocument | null;
  loading: boolean;
  error: string | null;
}

export const PolicyPageTemplate: React.FC<PolicyPageTemplateProps> = ({
  document,
  loading,
  error,
}) => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <TextBlockSkeleton lines={10} />
          ) : error || !document ? (
            <InlineError message={error ?? 'Failed to load this document.'} />
          ) : (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{document.title}</h1>
              <p className="text-gray-600 mb-8">Last Updated: {document.lastUpdated}</p>

              <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
                {document.sections.map((section) => (
                  <section key={section.id}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">{section.title}</h2>

                    {section.body?.map((paragraph, index) => (
                      <p key={index} className={index > 0 ? 'mt-2' : ''}>
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="list-disc pl-6 space-y-1">
                        {section.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    )}

                    {section.numbered && (
                      <ol className="list-decimal pl-6 space-y-1">
                        {section.numbered.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ol>
                    )}
                  </section>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
