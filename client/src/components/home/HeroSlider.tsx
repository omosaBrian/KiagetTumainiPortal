import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { CarouselCustom, CarouselItem } from '@/components/ui/carousel-custom';

const slideData = [
  {
    id: 1,
    image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/474380329_1131024558715269_6300357879248411838_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHa0R0AI-ryaNg_4zbA6C1NIdo8yyjk4K4h2jzLKOTgrjaKPHn1pf_GGGbyaj8EUunAuLaX5qz3oweqHw7X87eG&_nc_ohc=g8KXNEktlWkQ7kNvwFNbgEp&_nc_oc=AdmG8UfUPkfCp_6G2WMLajdjEHpUvvqwXtJx8L0Jzin-CXeKylzYlAMD8I4fAsxf45c&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=mc7i7u3vxF0gCZkUu4dwRw&oh=00_AfHbor_Amm2EDgUte4Li2kTK_A5p-e6vCyoKt6UhkBwdHg&oe=67FEECC1",
    title: "Kiage Tumaini Boy's High School",
    subtitle: "Private Boys High School in Kisii, Kenya",
    intro: "Welcome to",
    cta: [
      { text: "Book A Tour", link: "/contact", variant: "secondary" },
      { text: "Apply Now", link: "/admissions", variant: "white" },
    ]
  },
  {
    id: 2,
    image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/485022893_1173333304484394_4550122321825830294_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH0aXhGsIUdyZ-PzxcC_PpQBo_X877e11QGj9fzvt7XVCQbpRwlvvfjDbYFBmthsHH96WF9jHqOM7ECwSgHQufu&_nc_ohc=gNGoE5ujNzMQ7kNvwHDwbe_&_nc_oc=Adk1kGeAtRiyZI7ocgIS2t1OZlcGc3h47x7y9AYZYpXETchBKrkPeJ1qUFqEJp-B_jE&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=BBTlCL8fXn9-Wcm62NU9vg&oh=00_AfEPbXTN0pJUr6f-uh9U8eu5JRPCNU_ANmCl1u2HNtBgrA&oe=67FED9E4",
    title: "Excellence in Education",
    subtitle: "Developing exceptional scholars through comprehensive academic programs.",
    cta: [
      { text: "Learn More", link: "/about", variant: "secondary" },
    ]
  },
  {
    id: 3,
    image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464748073_8563082410446949_8902343514568291852_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHCI0mfc3kRKSLC-8DlfaoduiVJFkozXHC6JUkWSjNccCJR0d2IePPPoYW2ZPNYhDffTGGVhGqBb5rjdcJLGenH&_nc_ohc=FSDSHAu4tAMQ7kNvwHKsn1i&_nc_oc=AdmiIKaXPfnh4s_oDYxgGX6s7GRkJ_F6TG0DnyIvHLUWNletfeFpka4c4ZWbx1rCxQA&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=Yi-khifSPZndYKb6GOF0jw&oh=00_AfGbo06FgCrI_JwgVwSLly4mp2bJFzjO0Avadfy6cpjcPg&oe=67FED77B",
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
