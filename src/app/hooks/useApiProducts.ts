import { useState, useEffect } from 'react';
import { Product } from '../data/products';

interface ApiProduct {
  id: number;
  sku: string;
  nameEn: string;
  bigImage: string;
  sellPrice: string | number;
  nowPrice: string | number;
  listedNum: number;
  warehouseInventoryNum: number;
  categoryId: number;
}

interface ApiResponse {
  code: number;
  data: {
    content: ApiProduct[];
    pageSize: number;
    pageNumber: number;
    totalRecords: number;
    totalPages: number;
  };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function mapApiProduct(item: ApiProduct, index: number): Product {
  const price = parseFloat(String(item.nowPrice)) || 0;
  const originalPrice = parseFloat(String(item.sellPrice)) || undefined;

  return {
    id: String(item.id),
    name: item.nameEn,
    slug: slugify(item.nameEn) || `product-${item.id}`,
    price,
    originalPrice: originalPrice && originalPrice > price ? originalPrice : undefined,
    image: item.bigImage,
    images: [item.bigImage],
    description: '',
    features: [],
    category: String(item.categoryId),
    rating: 4.5,
    reviewCount: item.listedNum || 0,
    inStock: item.warehouseInventoryNum > 0,
    featured: index < 5,
    trending: index >= 5 && index < 9,
  };
}

export function useApiProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://ecom-backend4.onrender.com/api/products')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json() as Promise<ApiResponse>;
      })
      .then((data) => {
        const mapped = data.data.content.map(mapApiProduct);
        setProducts(mapped);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const featuredProducts = products.filter((p) => p.featured);
  const trendingProducts = products.filter((p) => p.trending);

  return { products, featuredProducts, trendingProducts, loading, error };
}
