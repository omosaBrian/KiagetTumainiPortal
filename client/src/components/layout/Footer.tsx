import { Link } from 'wouter';
import { ArrowUp, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold font-heading text-white mb-6">Kiage Tumaini Boys High School</h3>
            <p className="mb-6">A premier educational institution providing exceptional modern education with a comprehensive curriculum.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-heading text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-secondary transition">About Us</Link>
              </li>
              <li>
                <Link href="/campus/main" className="hover:text-secondary transition">Campuses</Link>
              </li>
              <li>
                <Link href="/academics/senior" className="hover:text-secondary transition">Academics</Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-secondary transition">Admissions</Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-secondary transition">News & Events</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold font-heading text-white mb-6">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-secondary" size={18} />
                <span>Kitutu Chache South, Kisii County, Kenya</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 text-secondary" size={18} />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 text-secondary" size={18} />
                <span>info@kiagetumainiboyshighschool.ac.ke</span>
              </li>
              <li className="flex items-start">
                <Clock className="mt-1 mr-3 text-secondary" size={18} />
                <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
          
          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-bold font-heading text-white mb-6">Subscribe to Newsletter</h3>
            <p className="mb-4">Stay updated with the latest news and events.</p>
            <form className="space-y-3">
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-secondary"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-secondary text-primary font-bold hover:bg-yellow-500"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Tumaini Kiage Boys High School. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-secondary mr-4">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-secondary mr-4">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-secondary">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
          size="icon"
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </footer>
  );
};

export default Footer;
