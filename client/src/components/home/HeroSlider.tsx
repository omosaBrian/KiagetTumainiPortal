import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { CarouselCustom, CarouselItem } from '@/components/ui/carousel-custom';

const slideData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613896640137-bb5b31496515?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=900&q=80",
    title: "Tumaini Kiage Boys High School",
    subtitle: "Private Boys High School in Kisii, Kenya",
    intro: "Welcome to",
    cta: [
      { text: "Book A Tour", link: "/contact", variant: "secondary" },
      { text: "Apply Now", link: "/admissions", variant: "white" },
    ]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=900&q=80",
    title: "Excellence in Education",
    subtitle: "Developing exceptional scholars through comprehensive academic programs.",
    cta: [
      { text: "Learn More", link: "/about", variant: "secondary" },
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=900&q=80",
    title: "Building Character",
    subtitle: "Nurturing strong values and leadership skills for future success.",
    cta: [
      { text: "Discover More", link: "/about", variant: "secondary" },
    ]
  }
];

const HeroSlider = () => {
  return (
    <section className="hero-slider relative overflow-hidden bg-gray-800">
      <CarouselCustom>
        {slideData.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center px-4 animate-fadeIn">
                  {slide.intro && (
                    <p className="text-white text-xl mb-4">{slide.intro}</p>
                  )}
                  <h1 className="text-white text-4xl md:text-6xl font-bold font-heading mb-6">{slide.title}</h1>
                  <p className="text-white text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    {slide.cta.map((button, idx) => (
                      <Link 
                        key={idx} 
                        href={button.link}
                        className={`px-6 py-3 font-bold rounded hover:bg-opacity-90 transition ${
                          button.variant === 'secondary' 
                            ? 'bg-secondary text-primary-900 hover:bg-yellow-500' 
                            : 'bg-white text-primary hover:bg-gray-100'
                        }`}
                      >
                        {button.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselCustom>
      
      <div className="absolute bottom-16 left-0 right-0 z-30 flex justify-center">
        <a href="#about" className="text-white flex flex-col items-center animate-bounce">
          <span className="mb-2">Scroll Down</span>
          <ChevronDown />
        </a>
      </div>
    </section>
  );
};

export default HeroSlider;
