import React from 'react';
import { Gem, HeartHandshake, ShieldCheck, Sparkles, Truck } from 'lucide-react';

const icons = [Gem, ShieldCheck, Truck, HeartHandshake];

const data = {
  eyebrow: 'About droppfive',
  title: 'A premium storefront built to make discovery feel effortless',
  description:
    'droppfive brings together a broad catalog experience with a cleaner, more curated shopping journey so customers can browse confidently and buy quickly.',
  storyTitle: 'How we think about the store',
  storyParagraphs: [
    'We design the experience to feel premium, direct, and easy to trust from the first scroll.',
    'That means clear product discovery, fast loading pages, and a checkout flow that keeps friction low.',
    'As the catalog grows, the storefront stays focused on helping customers find the right item quickly.',
  ],
  promiseTitle: 'What we promise',
  promiseDescription:
    'A polished shopping experience with reliable browsing, transparent pricing, and a layout built around confidence and speed.',
  metrics: [
    { id: 'catalog', value: '6000+', label: 'Products available' },
    { id: 'pages', value: '600', label: 'Catalog pages' },
    { id: 'search', value: 'Live', label: 'Search-backed results' },
    { id: 'stock', value: 'Real', label: 'Inventory status' },
  ],
  valuesEyebrow: 'Our values',
  valuesTitle: 'What shapes the experience',
  values: [
    { id: 'clarity', title: 'Clarity', description: 'Layouts are structured to help shoppers make decisions quickly.' },
    { id: 'trust', title: 'Trust', description: 'Pricing, availability, and product data are surfaced clearly and consistently.' },
    { id: 'speed', title: 'Speed', description: 'Customers can move from discovery to checkout without unnecessary friction.' },
    { id: 'care', title: 'Care', description: 'Every section is designed to feel polished, useful, and easy to understand.' },
  ],
};

export const AboutPage: React.FC = () => {
  return (
    <div className="section-shell py-8 md:py-12">
      <section data-reveal className="rounded-[38px] bg-[linear-gradient(135deg,#111827_0%,#1a1a2e_44%,#e94560_120%)] p-8 text-white md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f0a500]">{data.eyebrow}</p>
        <h1 className="font-heading mt-4 max-w-3xl text-4xl font-bold md:text-6xl">{data.title}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-white/78 md:text-lg">{data.description}</p>
      </section>

      <section data-reveal className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e94560]">Our story</p>
          <h2 className="font-heading mt-4 text-3xl font-semibold text-slate-950">{data.storyTitle}</h2>
          <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600">
            {data.storyParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-slate-200 bg-[#f8fafc] p-7">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-[#e94560]">
            <Sparkles className="h-7 w-7" />
          </div>
          <h2 className="font-heading text-3xl font-semibold text-slate-950">{data.promiseTitle}</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600">{data.promiseDescription}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.metrics.map((metric) => (
              <div key={metric.id} className="rounded-[24px] bg-white p-5">
                <p className="text-4xl font-bold text-slate-950">{metric.value}</p>
                <p className="mt-1 text-sm text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="mt-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e94560]">{data.valuesEyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 md:text-4xl">{data.valuesTitle}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data.values.map((value, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article
                key={value.id}
                className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading mt-5 text-xl font-semibold text-slate-950">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
