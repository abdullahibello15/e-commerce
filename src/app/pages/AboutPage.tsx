import React from 'react';
import { Heart, Shield, Truck, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize your satisfaction above all else, ensuring every interaction exceeds expectations.',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Every product is carefully selected and tested to meet our high standards of quality.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to get your products to you as fast as possible.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We listen to our customers and continuously improve based on your feedback.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About BestPriceCenter</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted destination for innovative products at unbeatable prices. We're committed to
            bringing you the best shopping experience possible.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in 2020, BestPriceCenter was born from a simple idea: everyone deserves access to
                high-quality, innovative products without breaking the bank. We saw a gap in the market for
                a store that combines affordability with quality, and we set out to fill it.
              </p>
              <p>
                Today, we've grown into a trusted e-commerce platform serving thousands of satisfied
                customers worldwide. Our team works tirelessly to source the most innovative and useful
                products, negotiate the best prices, and ensure every order arrives quickly and safely.
              </p>
              <p>
                We believe shopping online should be easy, enjoyable, and worry-free. That's why we offer
                free shipping on orders over $50, a 30-day money-back guarantee, and customer service
                that's always ready to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            To make innovative, high-quality products accessible to everyone by offering the best prices,
            exceptional customer service, and a seamless shopping experience that puts our customers first.
          </p>
        </div>
      </section>
    </div>
  );
};
