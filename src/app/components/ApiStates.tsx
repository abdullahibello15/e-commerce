import React from 'react';
import { AlertTriangle, LoaderCircle } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

export const InlineLoader: React.FC<{ label?: string }> = ({ label = 'Loading...' }) => (
  <div className="flex items-center gap-3 rounded-[24px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
    <LoaderCircle className="h-4 w-4 animate-spin text-[#e94560]" />
    <span>{label}</span>
  </div>
);

export const InlineError: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex items-start gap-3 rounded-[24px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
    <AlertTriangle className="mt-0.5 h-4 w-4" />
    <span>{message}</span>
  </div>
);

export const ProductGridSkeleton: React.FC<{ count?: number }> = ({ count = 4 }) => (
  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="rounded-[30px] border border-slate-200 bg-white p-3">
        <Skeleton className="aspect-[4/4.4] w-full rounded-[24px]" />
        <div className="space-y-3 px-1 pb-1 pt-4">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-10 w-full rounded-full" />
        </div>
      </div>
    ))}
  </div>
);

export const TextBlockSkeleton: React.FC<{ lines?: number }> = ({ lines = 6 }) => (
  <div className="space-y-3">
    {Array.from({ length: lines }).map((_, index) => (
      <Skeleton key={index} className="h-4 w-full" />
    ))}
  </div>
);
