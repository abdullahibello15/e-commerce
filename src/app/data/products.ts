export interface Category {
  id: string;
  name: string;
  emoji?: string;
  description?: string;
  accent?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sellPrice: string;
  displayPrice: string;
  minPrice: number;
  maxPrice: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  category: string;
  categoryId?: string;
  sku: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stock: number;
  badge?: 'Sale' | 'New' | 'Best Seller' | 'Out of Stock';
  featured?: boolean;
  trending?: boolean;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
}

export interface HeroStat {
  id: string;
  value: string;
  label: string;
}

export interface AboutValue {
  id: string;
  title: string;
  description: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  description: string;
  storyTitle: string;
  storyParagraphs: string[];
  promiseTitle: string;
  promiseDescription: string;
  metrics: HeroStat[];
  valuesEyebrow: string;
  valuesTitle: string;
  values: AboutValue[];
}

export interface ContactCard {
  id: string;
  title: string;
  lines: string[];
  note?: string;
}

export interface ContactContent {
  title: string;
  description: string;
  formTitle: string;
  faqTitle: string;
  faqDescription: string;
  cards: ContactCard[];
}

export interface PolicySection {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
  numbered?: string[];
}

export interface PolicyDocument {
  title: string;
  lastUpdated: string;
  sections: PolicySection[];
}

export interface TrackingStep {
  id: string;
  title: string;
  date: string;
  time: string;
  completed: boolean;
}

export interface TrackingData {
  orderNumber: string;
  estimatedDelivery: string;
  trackingNumber: string;
  trackingSteps: TrackingStep[];
  note: string;
}

export interface CheckoutConfig {
  freeShippingThreshold: number;
  shippingFee: number;
  taxRate: number;
  paymentMethods: Array<{ id: string; label: string }>;
}

export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
