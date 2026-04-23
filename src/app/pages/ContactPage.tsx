import React, { useState } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

const icons = [Mail, Phone, MapPin, Clock];

const data = {
  title: 'Contact droppfive',
  description: 'Reach out about orders, partnerships, or product questions and our team will get back to you.',
  formTitle: 'Send us a message',
  faqTitle: 'Need help with an order?',
  faqDescription: 'Include your order number and the email used at checkout so we can help faster.',
  cards: [
    { id: 'email', title: 'Email', lines: ['support@droppfive.com'], note: 'Best for order and product questions' },
    { id: 'phone', title: 'Phone', lines: ['+1 (800) 555-0145'], note: 'Monday to Friday, 9am to 6pm' },
    { id: 'address', title: 'Office', lines: ['145 Market Lane', 'Austin, TX 78701'], note: 'Administrative office only' },
    { id: 'hours', title: 'Support hours', lines: ['Mon - Fri', '9:00 AM - 6:00 PM'], note: 'Responses are usually fastest by email' },
  ],
};

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message submitted.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">{data.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.formTitle}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Message" rows={5} value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gray-900 hover:bg-gray-800">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              {data.cards.map((card, index) => {
                const Icon = icons[index % icons.length];

                return (
                  <div key={card.id} className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
                        {card.lines.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-gray-600">{line}</p>
                        ))}
                        {card.note && <p className="text-sm text-gray-500 mt-1">{card.note}</p>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 text-center bg-gray-100 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{data.faqTitle}</h3>
            <p className="text-gray-600 mb-4">{data.faqDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
