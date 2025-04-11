import { Link } from "wouter";
import { Mail, MapPin, Phone, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#0a2463] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0a2463] font-bold text-xl mr-3">TK</div>
              <div>
                <h3 className="font-['Playfair_Display'] font-bold text-xl">Kiage Tumaini</h3>
                <p className="text-gray-300 text-sm">Boy's High School</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">A premier educational institution in Kisii County providing exceptional education since 2005.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#ffc857] transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-[#ffc857] transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-[#ffc857] transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-[#ffc857] transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link href="/academics" className="text-gray-300 hover:text-white transition-colors duration-300">Academics</Link></li>
              <li><Link href="/admissions" className="text-gray-300 hover:text-white transition-colors duration-300">Admissions</Link></li>
              <li><Link href="/campuses" className="text-gray-300 hover:text-white transition-colors duration-300">Campuses</Link></li>
              <li><Link href="/news-events" className="text-gray-300 hover:text-white transition-colors duration-300">News & Events</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 h-4 w-4" />
                <span>Kitutu Chache South Sub County,<br/>Kisii County, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-4 w-4" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-4 w-4" />
                <span>info@kiagetumaini.ac.ke</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 h-4 w-4" />
                <span>Mon-Fri: 8:00AM - 5:00PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest news and updates.</p>
            <form className="mb-4">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="rounded-r-none focus:ring-0 text-gray-800" 
                />
                <Button 
                  type="submit" 
                  className="bg-[#ffc857] text-[#0a2463] px-4 py-2 rounded-l-none hover:bg-[#ffe09a] transition duration-300"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <p className="text-sm text-gray-400">We respect your privacy and will never share your information.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Kiage Tumaini Boy's High School. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
