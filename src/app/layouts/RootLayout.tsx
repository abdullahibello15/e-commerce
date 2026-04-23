import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Toaster } from '../components/ui/sonner';
import { CartProvider } from '../contexts/CartContext';

export const RootLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,#fff4f2_0%,#ffffff_42%,#f8fafc_100%)]">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </CartProvider>
  );
};
