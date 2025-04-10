import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Campuses", path: "/campuses" },
    { name: "News & Events", path: "/news-events" },
    { name: "Contact", path: "/contact" }
  ];

  const NavLink = ({ name, path }: { name: string, path: string }) => {
    const isActive = location === path;
    return (
      <Link 
        href={path} 
        onClick={closeMenu}
        className={`relative py-2 text-gray-700 hover:text-[#0a2463] font-medium
                   after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 
                   after:bg-[#ffc857] after:transition-[width] after:duration-300 hover:after:w-full
                   ${isActive ? 'text-[#0a2463] after:w-full' : ''}`}
      >
        {name}
      </Link>
    );
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3 w-14 h-14 bg-[#0a2463] rounded-full flex items-center justify-center text-white text-xl font-bold">TK</div>
          <div>
            <h1 className="text-[#0a2463] font-['Playfair_Display'] font-bold text-xl md:text-2xl">Tumaini Kiage</h1>
            <p className="text-gray-600 text-xs md:text-sm">Boys High School</p>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <NavLink key={link.path} name={link.name} path={link.path} />
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="destructive" 
            className="hidden md:inline-block bg-[#d00000] hover:bg-red-700 text-white font-medium" 
            asChild
          >
            <Link href="/admissions">Apply Now</Link>
          </Button>
          
          <Button 
            variant="ghost" 
            className="md:hidden text-[#0a2463]" 
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navLinks.map(link => (
              <Link 
                key={link.path}
                href={link.path} 
                onClick={closeMenu}
                className="text-gray-700 hover:text-[#0a2463] font-medium py-2 block"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/admissions" 
              onClick={closeMenu}
              className="bg-[#d00000] hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md text-center transition duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
