import { useEffect, useMemo, useState } from 'react';
import { Category, Product } from '../data/products';
import { fetchProducts, getCachedProduct } from '../lib/api';

interface UseApiProductsOptions {
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;
}

export function useApiProducts(options: UseApiProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [pageNumber, setPageNumber] = useState(options.pageNumber ?? 1);
  const [pageSize, setPageSize] = useState(options.pageSize ?? 10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    setLoading(true);
    setError(null);

    fetchProducts({
      pageNumber: options.pageNumber ?? 1,
      pageSize: options.pageSize ?? 10,
      keyword: options.keyword ?? '',
    })
      .then((data) => {
        if (!active) {
          return;
        }

        setProducts(data.products);
        setCategories(data.categories);
        setPageNumber(data.pageNumber);
        setPageSize(data.pageSize);
        setTotalPages(data.totalPages);
        setTotalRecords(data.totalRecords);
        setLoading(false);
      })
      .catch((requestError: unknown) => {
        if (!active) {
          return;
        }

        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Something went wrong. Please try again.',
        );
        setProducts([]);
        setCategories([]);
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [options.keyword, options.pageNumber, options.pageSize]);

  const featuredProducts = useMemo(() => products.slice(0, 8), [products]);
  const trendingProducts = useMemo(() => products.slice(4, 8), [products]);

  return {
    products,
    categories,
    featuredProducts,
    trendingProducts,
    pageNumber,
    pageSize,
    totalPages,
    totalRecords,
    loading,
    error,
  };
}

export function useProductByKey(productKey?: string, initialProduct?: Product | null) {
  const productId = productKey?.split('-')[0] ?? '';
  const searchKeyword = productKey
    ?.split('-')
    .slice(1)
    .join(' ')
    .trim();

  const [product, setProduct] = useState<Product | null>(initialProduct ?? (productId ? getCachedProduct(productId) ?? null : null));
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(!productId ? false : !initialProduct && !getCachedProduct(productId));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    if (!productId) {
      setProduct(null);
      setRelatedProducts([]);
      setLoading(false);
      setError('Product not found.');
      return () => {
        active = false;
      };
    }

    const cached = getCachedProduct(productId);

    if (cached) {
      setProduct(cached);
      setLoading(false);
      setError(null);
    } else {
      setLoading(true);
      setError(null);
    }

    fetchProducts({
      pageNumber: 1,
      pageSize: 10,
      keyword: searchKeyword || productId,
    })
      .then((data) => {
        if (!active) {
          return;
        }

        const exactProduct = data.products.find((item) => item.id === productId) ?? cached ?? null;
        setProduct(exactProduct);
        setRelatedProducts(data.products.filter((item) => item.id !== productId).slice(0, 4));
        setError(exactProduct ? null : 'Product not found.');
        setLoading(false);
      })
      .catch((requestError: unknown) => {
        if (!active) {
          return;
        }

        setProduct(cached ?? null);
        setRelatedProducts([]);
        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Something went wrong. Please try again.',
        );
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [productId, searchKeyword]);

  return {
    product,
    relatedProducts,
    loading,
    error,
  };
}
