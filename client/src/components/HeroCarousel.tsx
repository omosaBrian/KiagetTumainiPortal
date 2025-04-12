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
      image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464433390_8534882219933635_2070690540360903588_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEYUUzAXYTcylaAKURVPMTiyJdjbdgHzt3Il2Nt2AfO3ZD2PbxVxDoBnav63WvgilVibROPv3nVyujWTpSVWC_K&_nc_ohc=F5DP6_cU-jcQ7kNvwEfWeJR&_nc_oc=AdnBwTQ6z_uoEwhlGh67bOmjCryjR8X2WOH1-HufJlhNT01gzJyJ7CBIx1-lSxtj3yc&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=t03VcoQMfT6W8W9S8ehGmw&oh=00_AfHZiiX9dHpqLc1gGynEjV35T_AsHFa1-75qB7T81Tsr3A&oe=67FEBDD7",
      title: "Kiage Tumaini Boy's High School",
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
      image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/474380329_1131024558715269_6300357879248411838_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHa0R0AI-ryaNg_4zbA6C1NIdo8yyjk4K4h2jzLKOTgrjaKPHn1pf_GGGbyaj8EUunAuLaX5qz3oweqHw7X87eG&_nc_ohc=g8KXNEktlWkQ7kNvwFNbgEp&_nc_oc=AdmG8UfUPkfCp_6G2WMLajdjEHpUvvqwXtJx8L0Jzin-CXeKylzYlAMD8I4fAsxf45c&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=mc7i7u3vxF0gCZkUu4dwRw&oh=00_AfHbor_Amm2EDgUte4Li2kTK_A5p-e6vCyoKt6UhkBwdHg&oe=67FEECC1",
      title: "Excellence in Education",
      subtitle: "Preparing young men to excel academically and in life",
      primaryButton: {
        text: "Learn More",
        url: "/about"
      }
    },
    {
      image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t1.6435-9/45288703_1950747978347125_3936876227352068096_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGoWCXCi7EGUO5qGeJ3OzYP9F6HSlbGIuf0XodKVsYi59JuSokirfcUilcWQVXRFkwOZPPTNHgWF6G6Ph2nRMVH&_nc_ohc=i4TTkTprKU8Q7kNvwH79dws&_nc_oc=AdnMjD4favbScjVrnC_blvngO3QnmUz8-uKYeqClzEZIdFkStYIcWXgeejbg_atr1LI&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=fHwzLET6rHh2S-TgJ-0Tuw&oh=00_AfE1nVZno2F0Jvw1GZZgBpJbUT9uzKfAi-nNJbpuEkTywA&oe=6820A0E1",
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl">
                  {index === 0 && <p className="text-white/90 text-xl md:text-2xl mb-3 tracking-wide">Welcome to</p>}
                  <h1 className="text-white font-['Playfair_Display'] font-bold text-4xl md:text-6xl mb-6 drop-shadow-lg">{slide.title}</h1>
                  <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">{slide.subtitle}</p>
                  <div className="flex flex-col md:flex-row justify-center gap-5">
                    {slide.primaryButton && (
                      <Button 
                        variant="default" 
                        className={`bg-white text-[#0a2463] hover:bg-gray-100 font-bold py-3.5 px-8
                                  transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                                  rounded-full backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100`}
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
