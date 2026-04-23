import { Category, Product, slugify } from '../data/products';

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'https://ecom-backend4.onrender.com/api';
const PRODUCT_CACHE_KEY = 'droppfive-product-cache';

interface ApiEnvelope {
  code?: number;
  result?: boolean;
  message?: string;
  data?: {
    pageNumber?: number;
    pageSize?: number;
    totalPages?: number;
    totalRecords?: number;
    content?: Array<{
      productList?: ApiProduct[];
    }>;
  };
}

interface ApiProduct {
  id: string | number;
  nameEn?: string | null;
  sku?: string | null;
  bigImage?: string | null;
  sellPrice?: string | null;
  warehouseInventoryNum?: number | null;
  categoryId?: string | null;
  oneCategoryName?: string | null;
  twoCategoryName?: string | null;
  threeCategoryName?: string | null;
  listedNum?: number | null;
  description?: string | null;
}

export interface ProductsResponse {
  products: Product[];
  categories: Category[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
}

const categoryPalette = [
  'from-rose-100 via-white to-orange-50',
  'from-emerald-100 via-white to-teal-50',
  'from-amber-100 via-white to-stone-50',
  'from-sky-100 via-white to-cyan-50',
  'from-violet-100 via-white to-indigo-50',
];

export const categoryEmojis = ['💄', '💊', '🏠', '🏋️', '📱'];

export const parsePrice = (sellPrice: string | null | undefined) => {
  if (!sellPrice) {
    return {
      displayPrice: 'N/A',
      minPrice: 0,
      maxPrice: 0,
    };
  }

  const parts = sellPrice.split(' -- ').map((part) => part.trim()).filter(Boolean);
  const minPrice = Number(parts[0] ?? 0);
  const maxPrice = Number(parts[1] ?? parts[0] ?? 0);

  return {
    displayPrice: parts.length === 2 ? `$${parts[0]} – $${parts[1]}` : `$${parts[0] ?? '0.00'}`,
    minPrice: Number.isFinite(minPrice) ? minPrice : 0,
    maxPrice: Number.isFinite(maxPrice) ? maxPrice : 0,
  };
};

const categoryNameFromProduct = (product: ApiProduct) =>
  product.threeCategoryName ??
  product.twoCategoryName ??
  product.oneCategoryName ??
  (product.categoryId ? `Category ${String(product.categoryId).slice(0, 8)}` : 'Category');

export const mapProduct = (item: ApiProduct): Product => {
  const name = item.nameEn?.trim() || `Product ${item.id}`;
  const category = categoryNameFromProduct(item);
  const { displayPrice, minPrice, maxPrice } = parsePrice(item.sellPrice);
  const stock = Math.max(Number(item.warehouseInventoryNum ?? 0), 0);
  const image = item.bigImage?.trim() || '';

  return {
    id: String(item.id),
    name,
    slug: `${String(item.id)}-${slugify(name)}`,
    sellPrice: item.sellPrice ?? '',
    displayPrice,
    minPrice,
    maxPrice,
    image,
    images: image ? [image] : [],
    description: item.description?.trim() ?? '',
    features: [
      `SKU: ${item.sku ?? 'N/A'}`,
      `Product ID: ${item.id}`,
      `Inventory: ${stock.toLocaleString()} units`,
    ],
    category,
    categoryId: item.categoryId ? String(item.categoryId) : undefined,
    sku: item.sku ?? '',
    rating: 0,
    reviewCount: Math.max(Number(item.listedNum ?? 0), 0),
    inStock: stock > 0,
    stock,
    badge: stock === 0 ? 'Out of Stock' : undefined,
  };
};

export const buildCategories = (products: Product[]): Category[] =>
  Array.from(new Map(products.map((product) => [product.categoryId ?? product.category, product])).values())
    .slice(0, 5)
    .map((product, index) => ({
      id: product.categoryId ?? product.category,
      name: product.category,
      emoji: categoryEmojis[index % categoryEmojis.length],
      accent: categoryPalette[index % categoryPalette.length],
      description: `${product.stock.toLocaleString()} units currently available in this category.`,
    }));

export async function fetchProducts(params: {
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;
}): Promise<ProductsResponse> {
  const searchParams = new URLSearchParams();
  searchParams.set('pageNumber', String(params.pageNumber ?? 1));
  searchParams.set('pageSize', String(params.pageSize ?? 10));

  if (params.keyword?.trim()) {
    searchParams.set('keyword', params.keyword.trim());
  }

  const response = await fetch(`${API_BASE}/products?${searchParams.toString()}`);

  if (!response.ok) {
    throw new Error('Something went wrong. Please try again.');
  }

  const json = (await response.json()) as ApiEnvelope;

  if (!json.result || json.code !== 200) {
    throw new Error(json.message || 'Something went wrong. Please try again.');
  }

  const productList = json.data?.content?.[0]?.productList ?? [];
  const products = productList.map(mapProduct);
  cacheProducts(products);

  return {
    products,
    categories: buildCategories(products),
    pageNumber: json.data?.pageNumber ?? params.pageNumber ?? 1,
    pageSize: json.data?.pageSize ?? params.pageSize ?? 10,
    totalPages: json.data?.totalPages ?? 1,
    totalRecords: json.data?.totalRecords ?? products.length,
  };
}

const readCachedProducts = (): Record<string, Product> => {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(PRODUCT_CACHE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, Product>) : {};
  } catch {
    return {};
  }
};

export const cacheProducts = (products: Product[]) => {
  if (typeof window === 'undefined') {
    return;
  }

  const nextCache = { ...readCachedProducts() };
  products.forEach((product) => {
    nextCache[product.id] = product;
  });

  window.localStorage.setItem(PRODUCT_CACHE_KEY, JSON.stringify(nextCache));
};

export const getCachedProduct = (id: string) => readCachedProducts()[id];
