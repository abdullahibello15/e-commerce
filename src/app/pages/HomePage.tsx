import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Database, Package, Search, Sparkles, Star, TrendingUp } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { TrustBadges } from '../components/TrustBadges';
import { Button } from '../components/ui/button';
import { InlineError, ProductGridSkeleton, TextBlockSkeleton } from '../components/ApiStates';
import { categoryEmojis } from '../lib/api';
import { useApiProducts } from '../hooks/useApiProducts';
import { toast } from 'sonner';
import bannerImage from '../assets/banner.png';

const trustBadges = [
  {
    id: 'inventory',
    title: 'Live Inventory',
    description: 'Product cards update from the live catalog instead of placeholder stock numbers.',
  },
  {
    id: 'pricing',
    title: 'Real Pricing',
    description: 'Every price range comes directly from the supplier feed using the sellPrice field.',
  },
  {
    id: 'search',
    title: 'Search Ready',
    description: 'Shoppers can search by product name through the API keyword parameter.',
  },
  {
    id: 'catalog',
    title: 'Paged Catalog',
    description: 'The storefront now browses the full multi-page product feed from the backend.',
  },
];

export const HomePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const { featuredProducts, trendingProducts, categories, totalPages, totalRecords, loading, error } =
    useApiProducts({
      pageNumber: 1,
      pageSize: 12,
    });

  const heroProduct = featuredProducts[0];
  const inStockCount = featuredProducts.filter((product) => product.inStock).length;

  const handleNewsletterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.success('Subscription submitted.');
    setEmail('');
  };

  return (
    <div className="pb-4">
      <section className="section-shell grid gap-8 pb-12 pt-8 md:pb-16 md:pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div data-reveal className="order-2 rounded-[36px] bg-[linear-gradient(135deg,#14182e_0%,#1a1a2e_42%,#e94560_100%)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] md:p-12 lg:order-1">
          {loading ? (
            <TextBlockSkeleton lines={6} />
          ) : error ? (
            <InlineError message={error} />
          ) : (
            <>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
                <Sparkles className="h-4 w-4 text-[#f0a500]" />
                Live products. Real pricing. Zero mock catalog data.
              </div>

              <h1 className="font-heading mt-6 max-w-xl text-5xl font-bold tracking-tight md:text-6xl">
                Premium finds powered by a live multi-page product feed
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 md:text-lg">
                droppfive now pulls inventory, product names, prices, search results, and stock status directly from the live backend so customers always browse real catalog data.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#f0a500] px-7 text-slate-950 hover:bg-[#ffb81a]"
                >
                  <Link to="/shop">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/8 px-7 text-white hover:bg-white hover:text-slate-950"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-white/8 p-4">
                  <p className="text-3xl font-bold">{totalRecords.toLocaleString()}+</p>
                  <p className="mt-1 text-sm text-white/70">Products in the live feed</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/8 p-4">
                  <p className="text-3xl font-bold">{totalPages}</p>
                  <p className="mt-1 text-sm text-white/70">Browseable catalog pages</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/8 p-4">
                  <p className="text-3xl font-bold">{inStockCount}</p>
                  <p className="mt-1 text-sm text-white/70">In-stock picks featured now</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div data-reveal className="order-1 grid gap-4 lg:order-2">
          <div className="glass-panel rounded-[32px] p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
            {loading ? (
              <div className="h-[390px] rounded-[28px] bg-white/50" />
            ) : error || !heroProduct ? (
              <div className="flex h-[390px] items-center justify-center rounded-[28px] bg-white/50">
                <InlineError message={error ?? 'No products found'} />
              </div>
            ) : (
              <img
                src={bannerImage}
                alt="droppfive banner"
                className="h-[390px] w-full rounded-[28px] object-cover"
              />
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Database className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-xl font-semibold text-slate-950">Live catalog source</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Product names, images, inventory counts, and price ranges come straight from the backend feed.
              </p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-[#f0a500]">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-xl font-semibold text-slate-950">Search-backed discovery</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The shop page now searches the API directly and paginates through the full product catalog.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal className="section-shell py-8 md:py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e94560]">Categories</p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Explore live catalog categories
            </h2>
          </div>
        </div>

        {loading ? (
          <ProductGridSkeleton count={5} />
        ) : error ? (
          <InlineError message={error} />
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className={`rounded-[30px] border border-slate-200 bg-gradient-to-br ${category.accent ?? ''} p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1`}
              >
                <div className="text-4xl">{category.emoji ?? categoryEmojis[index % categoryEmojis.length]}</div>
                <h3 className="font-heading mt-5 text-xl font-semibold text-slate-950">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {category.description ?? 'Browse this category in the live API feed.'}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section data-reveal className="section-shell py-10 md:py-14">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e94560]">Featured</p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Featured products
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            The first products from the live API are rendered here without any placeholder catalog arrays.
          </p>
        </div>

        {loading ? (
          <ProductGridSkeleton count={8} />
        ) : error ? (
          <InlineError message={error} />
        ) : (
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 xl:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="w-[84vw] max-w-[320px] shrink-0 snap-start sm:w-auto sm:max-w-none sm:shrink sm:snap-none">
                <ProductCard product={product} animationIndex={index} />
              </div>
            ))}
          </div>
        )}
      </section>

      <section data-reveal className="section-shell py-10 md:py-14">
        <div className="rounded-[36px] bg-[#f8fafc] p-6 md:p-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e94560]">Trust</p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
                Why shop with us
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              The experience stays the same, but the storefront is now driven by real API data.
            </p>
          </div>

          <TrustBadges badges={trustBadges} />
        </div>
      </section>

      <section data-reveal className="section-shell py-10 md:py-14">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e94560]">Trending</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
            Trending now
          </h2>
        </div>

        {loading ? (
          <ProductGridSkeleton count={4} />
        ) : error ? (
          <InlineError message={error} />
        ) : (
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4">
            {trendingProducts.map((product, index) => (
              <div key={product.id} className="w-[84vw] max-w-[320px] shrink-0 snap-start md:w-auto md:max-w-none md:shrink md:snap-none">
                <ProductCard product={product} animationIndex={index} />
              </div>
            ))}
          </div>
        )}
      </section>

      <section data-reveal className="section-shell py-10 md:py-14">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e94560]">Live highlights</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
            Real catalog signals customers can trust
          </h2>
        </div>

        {loading ? (
          <ProductGridSkeleton count={3} />
        ) : error ? (
          <InlineError message={error} />
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProducts.slice(0, 3).map((product) => (
              <article
                key={product.id}
                className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-16 w-16 rounded-2xl object-cover"
                  />
                  <div>
                    <p className="font-heading text-lg font-semibold text-slate-950">{product.name}</p>
                    <p className="text-sm text-slate-500">{product.sku || 'No SKU available'}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-1 text-[#f0a500]">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-semibold text-slate-800">
                    {product.inStock ? 'In stock' : 'Out of stock'}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Price: {product.displayPrice}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Inventory: {product.stock.toLocaleString()} units
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      <section data-reveal className="section-shell py-10 md:py-14">
        <div className="rounded-[36px] bg-[linear-gradient(135deg,#111827_0%,#1a1a2e_45%,#f8fafc_170%)] px-6 py-10 text-white md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
                <Search className="h-4 w-4 text-[#f0a500]" />
                Get 10% Off
              </p>
              <h2 className="font-heading mt-5 text-3xl font-bold md:text-4xl">
                Join the droppfive list for first access to fresh finds
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
                Keep the same conversion-focused signup section while the storefront data layer runs on the live API.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3 sm:min-w-[360px] sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="h-13 min-h-[52px] flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-white/55 focus:border-[#f0a500]"
              />
              <Button type="submit" className="h-13 min-h-[52px] rounded-full bg-[#f0a500] px-7 text-slate-950 hover:bg-[#ffb81a]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
