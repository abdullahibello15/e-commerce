import React from 'react';
import { Link } from 'react-router';
import { Facebook, Instagram, Mail, ShieldCheck, Truck, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'Shop All', to: '/shop' },
    { label: 'Beauty & Skincare', to: '/shop?category=Beauty%20%26%20Skincare' },
    { label: 'Fitness & Sports', to: '/shop?category=Fitness%20%26%20Sports' },
    { label: 'Tech Accessories', to: '/shop?category=Tech%20Accessories' },
  ],
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Cart', to: '/cart' },
    { label: 'Checkout', to: '/checkout' },
    { label: 'Track Order', to: '/track-order' },
  ],
  support: [
    { label: 'Shipping Policy', to: '/shipping-policy' },
    { label: 'Refund Policy', to: '/refund-policy' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms-of-service' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 bg-[#111427] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_repeat(3,1fr)]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#e94560_0%,#f0a500_100%)] font-heading text-xl font-bold text-white">
                J
              </div>
              <div>
                <p className="font-heading text-xl font-semibold text-white">droppfive</p>
                <p className="text-sm text-slate-400">Five niches. One polished shopping experience.</p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              droppfive blends trusted essentials with boutique presentation, making it easier to
              discover premium beauty, wellness, home, fitness, and tech finds in one place.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
                <Truck className="h-4 w-4 text-[#f0a500]" />
                Fast shipping
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
                <ShieldCheck className="h-4 w-4 text-[#f0a500]" />
                Secure checkout
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social link"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#e94560] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-white">Shop</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {footerLinks.shop.map((link) => (
                <Link key={link.label} to={link.to} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-white">Company</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {footerLinks.company.map((link) => (
                <Link key={link.label} to={link.to} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-white">Support</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {footerLinks.support.map((link) => (
                <Link key={link.label} to={link.to} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">We accept</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                <span className="rounded-full border border-white/10 px-3 py-2">Visa</span>
                <span className="rounded-full border border-white/10 px-3 py-2">Mastercard</span>
                <span className="rounded-full border border-white/10 px-3 py-2">PayPal</span>
                <span className="rounded-full border border-white/10 px-3 py-2">Apple Pay</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} droppfive. Crafted for confident online shopping.</p>
        </div>
      </div>
    </footer>
  );
};
