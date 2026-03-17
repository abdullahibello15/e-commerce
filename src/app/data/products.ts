export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  category: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  trending?: boolean;
  featured?: boolean;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  photos?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Smart Posture Corrector',
    slug: 'smart-posture-corrector',
    price: 39.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1683299222191-3de8751f1763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0dXJlJTIwY29ycmVjdG9yJTIwYmFjayUyMHN1cHBvcnR8ZW58MXx8fHwxNzczNjk4NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1683299222191-3de8751f1763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0dXJlJTIwY29ycmVjdG9yJTIwYmFjayUyMHN1cHBvcnR8ZW58MXx8fHwxNzczNjk4NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1080',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1080',
    ],
    description: 'Improve your posture and reduce back pain with our Smart Posture Corrector. Designed with intelligent vibration reminders, this comfortable and adjustable device helps you maintain proper alignment throughout the day. Perfect for office workers, students, and anyone who spends long hours sitting.',
    features: [
      'Smart vibration reminder technology',
      'Adjustable and comfortable fit',
      'Breathable and lightweight material',
      'Helps reduce back and neck pain',
      'Rechargeable battery - lasts up to 7 days',
      'Unisex design fits most body types',
    ],
    category: 'Health & Wellness',
    rating: 4.7,
    reviewCount: 1243,
    inStock: true,
    trending: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Pet Hair Remover Roller',
    slug: 'pet-hair-remover-roller',
    price: 24.99,
    originalPrice: 44.99,
    image: 'https://images.unsplash.com/photo-1638609269267-f0128098a809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBoYWlyJTIwcmVtb3ZlciUyMHJvbGxlcnxlbnwxfHx8fDE3NzM2OTg0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1638609269267-f0128098a809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBoYWlyJTIwcmVtb3ZlciUyMHJvbGxlcnxlbnwxfHx8fDE3NzM2OTg0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1080',
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1080',
    ],
    description: 'Say goodbye to stubborn pet hair with our revolutionary Pet Hair Remover Roller. This reusable, eco-friendly tool effectively removes pet hair from furniture, clothing, car seats, and more. No batteries or sticky tape required - simply roll, empty, and reuse!',
    features: [
      'Reusable and eco-friendly - no refills needed',
      'Works on furniture, clothing, carpets, and car interiors',
      'Easy to clean - just empty the compartment',
      'Durable construction for long-lasting use',
      'Compact and portable design',
      'Perfect for cat and dog owners',
    ],
    category: 'Pet Care',
    rating: 4.8,
    reviewCount: 2156,
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Portable Smoothie Blender',
    slug: 'portable-smoothie-blender',
    price: 34.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1626595444746-59219e6838ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMGJsZW5kZXIlMjBzbW9vdGhpZXxlbnwxfHx8fDE3NzM2MDgzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1626595444746-59219e6838ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMGJsZW5kZXIlMjBzbW9vdGhpZXxlbnwxfHx8fDE3NzM2MDgzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=1080',
      'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=1080',
    ],
    description: 'Blend your favorite smoothies anywhere with our Portable Smoothie Blender. Featuring a powerful motor and USB-rechargeable battery, this compact blender is perfect for the gym, office, travel, or outdoor adventures. Make fresh, healthy drinks wherever you go!',
    features: [
      'Powerful 6-blade system blends ice and frozen fruit',
      'USB rechargeable - 15+ blends per charge',
      'BPA-free food-grade materials',
      '380ml capacity - perfect single serving',
      'One-button operation for easy use',
      'Portable and lightweight design',
    ],
    category: 'Kitchen & Home',
    rating: 4.6,
    reviewCount: 1876,
    inStock: true,
    trending: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Car Interior Cleaning Gel',
    slug: 'car-interior-cleaning-gel',
    price: 12.99,
    originalPrice: 24.99,
    image: 'https://images.unsplash.com/photo-1773118071774-2efdc23daf65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjbGVhbmluZyUyMGdlbCUyMGludGVyaW9yfGVufDF8fHx8MTc3MzY5ODQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1773118071774-2efdc23daf65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjbGVhbmluZyUyMGdlbCUyMGludGVyaW9yfGVufDF8fHx8MTc3MzY5ODQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1080',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1080',
    ],
    description: 'Keep your car interior spotless with our innovative Car Interior Cleaning Gel. This unique gel formula reaches into tight spaces and crevices to pick up dust, dirt, and debris from vents, cup holders, dashboards, and more. Reusable and biodegradable!',
    features: [
      'Reaches tight spaces and hard-to-clean areas',
      'Works on car interiors, keyboards, and electronics',
      'Reusable multiple times until the gel darkens',
      'Biodegradable and eco-friendly formula',
      'Pleasant lemon fragrance',
      'Safe for all surfaces',
    ],
    category: 'Automotive',
    rating: 4.5,
    reviewCount: 892,
    inStock: true,
    trending: true,
  },
  {
    id: '5',
    name: 'Self-Cleaning UV Water Bottle',
    slug: 'self-cleaning-uv-water-bottle',
    price: 49.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVViUyMHdhdGVyJTIwYm90dGxlJTIwc3RhaW5sZXNzfGVufDF8fHx8MTc3MzY5ODQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVViUyMHdhdGVyJTIwYm90dGxlJTIwc3RhaW5sZXNzfGVufDF8fHx8MTc3MzY5ODQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=1080',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1080',
    ],
    description: 'Experience the future of hydration with our Self-Cleaning UV Water Bottle. Using advanced UV-C LED technology, this smart bottle purifies water and self-cleans every 2 hours, eliminating 99.99% of bacteria and viruses. Stay healthy and hydrated on the go!',
    features: [
      'UV-C LED technology kills 99.99% of germs',
      'Auto self-cleaning mode every 2 hours',
      'Insulated stainless steel keeps drinks cold for 24hrs',
      'Rechargeable battery lasts up to 2 months',
      'BPA-free and food-grade materials',
      '500ml capacity with leak-proof lid',
    ],
    category: 'Health & Wellness',
    rating: 4.9,
    reviewCount: 1567,
    inStock: true,
    featured: true,
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    productId: '1',
    author: 'Sarah M.',
    rating: 5,
    date: '2026-03-10',
    comment: 'This posture corrector has been a game-changer! The smart vibration feature gently reminds me to sit up straight. My back pain has significantly decreased after just 2 weeks of use.',
    verified: true,
  },
  {
    id: 'r2',
    productId: '1',
    author: 'James T.',
    rating: 4,
    date: '2026-03-05',
    comment: 'Great product overall. Very comfortable to wear and the battery life is excellent. Would give 5 stars if it came in more colors.',
    verified: true,
  },
  {
    id: 'r3',
    productId: '1',
    author: 'Emily R.',
    rating: 5,
    date: '2026-02-28',
    comment: 'As someone who works from home, this has been essential. The vibration reminders really work and it\'s so comfortable I forget I\'m wearing it!',
    verified: true,
  },
  {
    id: 'r4',
    productId: '2',
    author: 'Michael P.',
    rating: 5,
    date: '2026-03-12',
    comment: 'Best pet hair remover I\'ve ever used! We have 3 cats and this makes cleanup so much easier. No more sticky rollers that run out!',
    verified: true,
  },
  {
    id: 'r5',
    productId: '2',
    author: 'Lisa K.',
    rating: 5,
    date: '2026-03-08',
    comment: 'Works like magic on my car seats and couch. Super easy to empty and clean. Highly recommend for any pet owner!',
    verified: true,
  },
  {
    id: 'r6',
    productId: '2',
    author: 'David L.',
    rating: 4,
    date: '2026-03-01',
    comment: 'Really effective at picking up dog hair. Only wish it had a slightly larger roller for bigger surfaces.',
    verified: true,
  },
  {
    id: 'r7',
    productId: '3',
    author: 'Amanda S.',
    rating: 5,
    date: '2026-03-11',
    comment: 'Perfect for my morning smoothies! It blends frozen fruit and ice without any issues. Love that I can take it to the gym.',
    verified: true,
  },
  {
    id: 'r8',
    productId: '3',
    author: 'Chris B.',
    rating: 4,
    date: '2026-03-06',
    comment: 'Great little blender. Powerful for its size and the battery lasts forever. The only downside is the capacity could be a bit larger.',
    verified: true,
  },
  {
    id: 'r9',
    productId: '3',
    author: 'Jessica W.',
    rating: 5,
    date: '2026-02-25',
    comment: 'This blender is amazing! I use it every day for my protein shakes. Easy to clean and super portable.',
    verified: true,
  },
  {
    id: 'r10',
    productId: '4',
    author: 'Robert H.',
    rating: 5,
    date: '2026-03-09',
    comment: 'This gel is incredible! It gets into all the tiny crevices in my car that I could never clean before. A must-have for car owners.',
    verified: true,
  },
  {
    id: 'r11',
    productId: '4',
    author: 'Karen D.',
    rating: 4,
    date: '2026-03-03',
    comment: 'Works great for cleaning air vents and cup holders. The lemon scent is nice too. Can be reused several times before needing replacement.',
    verified: true,
  },
  {
    id: 'r12',
    productId: '4',
    author: 'Tom S.',
    rating: 5,
    date: '2026-02-27',
    comment: 'Super satisfying to use! Picks up so much dust and debris. I also use it on my computer keyboard.',
    verified: true,
  },
  {
    id: 'r13',
    productId: '5',
    author: 'Nicole F.',
    rating: 5,
    date: '2026-03-13',
    comment: 'This bottle is worth every penny! The UV cleaning feature is genius and it keeps my water ice cold all day. Love it!',
    verified: true,
  },
  {
    id: 'r14',
    productId: '5',
    author: 'Brandon M.',
    rating: 5,
    date: '2026-03-07',
    comment: 'Best water bottle I\'ve ever owned. The self-cleaning feature means I never have that gross bottle smell. Highly recommend!',
    verified: true,
  },
  {
    id: 'r15',
    productId: '5',
    author: 'Rachel G.',
    rating: 4,
    date: '2026-03-02',
    comment: 'Great bottle with amazing technology. Only wish it came in a larger size option. Otherwise perfect!',
    verified: true,
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getReviewsByProductId = (productId: string): Review[] => {
  return reviews.filter(r => r.productId === productId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getTrendingProducts = (): Product[] => {
  return products.filter(p => p.trending);
};
