import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  primaryButton?: {
    text: string;
    url: string;
  };
  secondaryButton?: {
    text: string;
    url: string;
  };
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: CarouselSlide[] = [
    {
      image: "https://images.unsplash.com/photo-1613896640137-bb5b31496515?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=900&q=80",
      title: "Tumaini Kiage Boys High School",
      subtitle: "Private Boys High School in Kisii, Kenya",
      primaryButton: {
        text: "Book A Tour",
        url: "/contact"
      },
      secondaryButton: {
        text: "Apply Now",
        url: "/admissions"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=900&q=80",
      title: "Excellence in Education",
      subtitle: "Preparing young men to excel academically and in life",
      primaryButton: {
        text: "Learn More",
        url: "/about"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=900&q=80",
      title: "Building Character",
      subtitle: "Developing young men of integrity, discipline, and leadership",
      primaryButton: {
        text: "Explore Programs",
        url: "/academics"
      }
    }
  ];

  // Auto advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === currentSlide ? 10 : 0 }}
          >
            <div className="relative h-full">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center px-4">
                  {index === 0 && <p className="text-white text-xl md:text-2xl mb-2">Welcome to</p>}
                  <h1 className="text-white font-['Playfair_Display'] font-bold text-4xl md:text-6xl mb-4">{slide.title}</h1>
                  <p className="text-white text-lg md:text-xl mb-8">{slide.subtitle}</p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    {slide.primaryButton && (
                      <Button 
                        variant="default" 
                        className={`bg-white text-[#0a2463] hover:bg-gray-100 font-bold py-3 px-6 
                                  transition duration-300 transform hover:-translate-y-1 hover:shadow-md`}
                        asChild
                      >
                        <Link href={slide.primaryButton.url}>{slide.primaryButton.text}</Link>
                      </Button>
                    )}
                    {slide.secondaryButton && (
                      <Button 
                        variant="default" 
                        className={`bg-[#ffc857] text-[#0a2463] hover:bg-[#ffe09a] font-bold py-3 px-6 
                                  transition duration-300 transform hover:-translate-y-1 hover:shadow-md`}
                        asChild
                      >
                        <Link href={slide.secondaryButton.url}>{slide.secondaryButton.text}</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none
                      ${index === currentSlide ? "bg-white" : "bg-white opacity-50"}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center z-20">
        <a href="#about" className="text-white flex flex-col items-center animate-bounce">
          <span className="text-sm mb-1">Scroll Down</span>
          <ChevronDown size={16} />
        </a>
      </div>
    </section>
  );
}
