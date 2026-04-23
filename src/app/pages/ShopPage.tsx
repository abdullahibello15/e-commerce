import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { InlineError, ProductGridSkeleton } from '../components/ApiStates';
import { useApiProducts } from '../hooks/useApiProducts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = Math.max(Number(searchParams.get('page') ?? 1), 1);
  const [sortBy, setSortBy] = useState(searchParams.get('sort') ?? 'featured');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') ?? 'All');
  const [search, setSearch] = useState(searchParams.get('search') ?? '');
  const { products, categories, loading, error, pageNumber, totalPages, totalRecords } = useApiProducts({
    pageNumber: pageFromUrl,
    pageSize: 10,
    keyword: searchParams.get('search') ?? '',
  });

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') ?? 'All');
    setSearch(searchParams.get('search') ?? '');
    setSortBy(searchParams.get('sort') ?? 'featured');
  }, [searchParams]);

  const allCategories = useMemo(
    () => ['All', ...categories.map((category) => category.name)],
    [categories],
  );

  const results = useMemo(() => {
    const filtered =
      selectedCategory === 'All'
        ? products
        : products.filter((product) => product.category === selectedCategory);

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.minPrice - b.minPrice;
        case 'price-high':
          return b.maxPrice - a.maxPrice;
        case 'stock':
          return b.stock - a.stock;
        default:
          return 0;
      }
    });
  }, [products, selectedCategory, sortBy]);

  const updateFilters = (next: { category?: string; search?: string; sort?: string; page?: number }) => {
    const params = new URLSearchParams(searchParams);
    const category = next.category ?? selectedCategory;
    const nextSearch = next.search ?? search;
    const nextSort = next.sort ?? sortBy;
    const nextPage = next.page ?? pageFromUrl;

    category === 'All' ? params.delete('category') : params.set('category', category);
    nextSearch.trim() ? params.set('search', nextSearch.trim()) : params.delete('search');
    nextSort === 'featured' ? params.delete('sort') : params.set('sort', nextSort);
    nextPage <= 1 ? params.delete('page') : params.set('page', String(nextPage));

    setSearchParams(params);
  };

  return (
    <div className="section-shell py-8 md:py-12">
      <section data-reveal className="rounded-[36px] bg-[linear-gradient(135deg,#111827_0%,#1a1a2e_42%,#f8fafc_160%)] p-8 text-white md:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f0a500]">Shop droppfive</p>
          <h1 className="font-heading mt-4 text-4xl font-bold md:text-5xl">
            Browse premium essentials across every niche
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
            Search the live product feed, browse real inventory, and move across all {totalPages.toLocaleString()} pages.
          </p>
        </div>
      </section>

      <section data-reveal className="mt-8 rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)] md:p-6">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <SlidersHorizontal className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-slate-950">Refine your search</h2>
              <p className="text-sm text-slate-500">These results come directly from the live products API.</p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Search</span>
              <input
                type="search"
                value={search}
                onChange={(event) => {
                  const nextValue = event.target.value;
                  setSearch(nextValue);
                  updateFilters({ search: nextValue, page: 1 });
                }}
                placeholder="Search products by name..."
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition focus:border-[#e94560] focus:bg-white"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2 lg:min-w-[320px]">
              <div>
                <span className="mb-2 block text-sm font-medium text-slate-700">Sort by</span>
                <Select
                  value={sortBy}
                  onValueChange={(value) => {
                    setSortBy(value);
                    updateFilters({ sort: value });
                  }}
                >
                  <SelectTrigger className="h-12 rounded-2xl border-slate-200 bg-slate-50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="stock">Most In Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {allCategories.map((category) => {
              const active = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    updateFilters({ category, page: 1 });
                  }}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                    active
                      ? 'bg-slate-950 text-white'
                      : 'border border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section data-reveal className="mt-8">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-950">{results.length}</span> products on page{' '}
            <span className="font-semibold text-slate-950">{pageNumber}</span> of{' '}
            <span className="font-semibold text-slate-950">{totalPages}</span>
            {search.trim() ? ` for "${search.trim()}"` : ''}
          </p>
          <p className="text-sm text-slate-500">{totalRecords.toLocaleString()} live products available in the feed.</p>
        </div>

        {loading ? (
          <ProductGridSkeleton count={8} />
        ) : error ? (
          <InlineError message={error} />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!loading && !error && results.length === 0 && (
          <div className="rounded-[30px] border border-dashed border-slate-300 bg-white p-10 text-center">
            <h2 className="font-heading text-2xl font-semibold text-slate-950">No products found</h2>
            <p className="mt-3 text-sm text-slate-500">Try a different keyword or move to another page.</p>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-4 rounded-[24px] border border-slate-200 bg-white p-4">
          <button
            type="button"
            onClick={() => updateFilters({ page: Math.max(pageFromUrl - 1, 1) })}
            disabled={pageFromUrl <= 1 || loading}
            className="inline-flex h-11 items-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </button>

          <p className="text-sm text-slate-500">
            Page <span className="font-semibold text-slate-950">{pageNumber}</span> of{' '}
            <span className="font-semibold text-slate-950">{totalPages}</span>
          </p>

          <button
            type="button"
            onClick={() => updateFilters({ page: Math.min(pageFromUrl + 1, totalPages) })}
            disabled={pageFromUrl >= totalPages || loading}
            className="inline-flex h-11 items-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
