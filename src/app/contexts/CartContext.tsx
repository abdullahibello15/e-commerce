import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  wishlist: string[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => boolean;
  isWishlisted: (productId: string) => boolean;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CART_STORAGE_KEY = 'droppfive-cart';
const WISHLIST_STORAGE_KEY = 'droppfive-wishlist';

const CartContext = createContext<CartContextType | undefined>(undefined);

const readStorage = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => readStorage(CART_STORAGE_KEY, []));
  const [wishlist, setWishlist] = useState<string[]>(() => readStorage(WISHLIST_STORAGE_KEY, []));

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product: Product, quantity = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...prevItems, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleWishlist = (productId: string) => {
    let nextState = false;

    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        nextState = false;
        return prevWishlist.filter((id) => id !== productId);
      }

      nextState = true;
      return [...prevWishlist, productId];
    });

    return nextState;
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const getCartTotal = () =>
    items.reduce((total, item) => total + item.product.minPrice * item.quantity, 0);

  const getCartCount = () => items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isWishlisted,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
