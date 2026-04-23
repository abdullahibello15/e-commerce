import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router';
import { Heart, Menu, Search, ShoppingCart, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';

export const Header: React.FC = () => {
  const { getCartCount, wishlist } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState(searchParams.get('search') ?? '');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setSearch(searchParams.get('search') ?? '');
  }, [searchParams]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = useMemo(
    () => [
      { name: 'Home', path: '/' },
      { name: 'Shop', path: '/shop' },
      { name: 'About Us', path: '/about' },
    ],
    [],
  );

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const value = search.trim();

    navigate(value ? `/shop?search=${encodeURIComponent(value)}` : '/shop');
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200/80 bg-white/92 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl'
          : 'border-slate-200/60 bg-white/90 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-6">
        <Link to="/" className="flex min-w-fit items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1a1a2e_0%,#e94560_100%)] text-lg font-black text-white shadow-lg shadow-rose-200/60">
            D
          </div>
          <div>
            <p className="font-heading text-lg font-semibold tracking-tight text-slate-950">droppfive</p>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Premium everyday finds</p>
          </div>
        </Link>

        <nav className="mx-auto hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-[#e94560]' : 'text-slate-600 hover:text-slate-950'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <form
          onSubmit={handleSearchSubmit}
          className="hidden flex-1 items-center justify-end lg:flex"
        >
          <label className="relative block w-full max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search premium essentials"
              className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-[#e94560] focus:bg-white"
            />
          </label>
        </form>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="relative rounded-full text-slate-700 hover:bg-rose-50 hover:text-[#e94560]"
          >
            <Link to="/shop" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#e94560] px-1 text-[11px] font-semibold text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            asChild
            className="relative rounded-full text-slate-700 hover:bg-slate-100 hover:text-slate-950"
          >
            <Link to="/cart" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f0a500] px-1 text-[11px] font-semibold text-slate-950">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-slate-700 lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-4 shadow-lg lg:hidden">
          <form onSubmit={handleSearchSubmit} className="mb-4">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products"
                className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-[#e94560] focus:bg-white"
              />
            </label>
          </form>

          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold ${
                    isActive ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/checkout"
              className="rounded-2xl bg-[linear-gradient(135deg,#1a1a2e_0%,#e94560_100%)] px-4 py-3 text-sm font-semibold text-white"
            >
              Checkout
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
