import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ApplicationModal from '@/components/applications/ApplicationModal';

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleApplyNow = () => {
    closeMobileMenu();
    setIsApplicationModalOpen(true);
  };

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Campuses', path: '/campus/main' },
    { name: 'Academics', path: '/academics/senior' },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-4">
              <Link href="/" className="flex items-center">
                <div className="bg-primary text-white p-2 rounded">
                  <span className="font-heading font-bold">TKBHS</span>
                </div>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`text-gray-700 hover:text-primary font-medium transition ${
                    location === link.path ? 'text-primary' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/admissions" className="hidden md:inline-block px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">
              Apply Now
            </Link>
            <Link href="/contact" className="hidden md:inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition">
              Book A Tour
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-4 py-2 shadow-lg">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  href={link.path}
                  className={`text-gray-700 hover:text-primary py-2 border-b border-gray-100 ${
                    location === link.path ? 'text-primary' : ''
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-2 pt-2">
                <Button 
                  onClick={handleApplyNow}
                  variant="outline" 
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Apply Now
                </Button>
                <Link 
                  href="/contact"
                  className="flex-1 px-4 py-2 text-center bg-primary text-white rounded hover:bg-primary/80 transition"
                  onClick={closeMobileMenu}
                >
                  Book A Tour
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <ApplicationModal 
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
      />
    </>
  );
};

export default Header;
