import React, { useState } from "react";
import { Link } from "react-router";
import { Star, ArrowRight, Check } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { TrustBadges } from "../components/TrustBadges";
import { Button } from "../components/ui/button";
import { getFeaturedProducts, getTrendingProducts } from "../data/products";
import { toast } from "sonner";

export const HomePage: React.FC = () => {
  const [email, setEmail] = useState("");
  const featuredProducts = getFeaturedProducts();
  const trendingProducts = getTrendingProducts();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!");
      setEmail("");
    }
  };

  const testimonials = [
    {
      name: "Jennifer L.",
      rating: 5,
      comment:
        "Amazing products and fast shipping! I've ordered three times and every experience has been perfect.",
      date: "March 14, 2026",
    },
    {
      name: "Mark D.",
      rating: 5,
      comment:
        "Great quality at unbeatable prices. The customer service is also top-notch!",
      date: "March 12, 2026",
    },
    {
      name: "Sophia R.",
      rating: 5,
      comment:
        "I love this store! The products are exactly as described and delivery is always quick.",
      date: "March 10, 2026",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-linear-to-r from-gray-900 to-gray-700 text-white">
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Discover Amazing Products at Best Prices
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Shop innovative solutions for everyday life. Quality products,
                unbeatable prices, and fast shipping.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  <Link to="/shop">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-400" />
                  <span className="text-sm">Free Shipping Over $50</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-400" />
                  <span className="text-sm">30-Day Returns</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1691967057193-80a98a59b272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWZlc3R5bGUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzM2MzQ5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Shopping"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked products that our customers love. Limited-time offers
              available!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trending Now
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The hottest products everyone is talking about. Get them before
              they're gone!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 text-gray-600">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.8 out of 5</span>
              <span>based on 5,000+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-gray-300 mb-8">
              Get exclusive offers, early access to new products, and insider
              deals delivered to your inbox.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
