import { Link } from "wouter";
import { 
  Book, 
  Award, 
  Users, 
  Home as HomeIcon,
  Lightbulb,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/HeroCarousel";
import StatCard from "@/components/StatCard";
import CampusCard from "@/components/CampusCard";
import FeatureCard from "@/components/FeatureCard";
import AcademicStage from "@/components/AcademicStage";
import ProgramCard from "@/components/ProgramCard";
import NewsTab from "@/components/NewsTab";
import EventCalendar from "@/components/EventCalendar";

export default function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />
      
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/474380329_1131024558715269_6300357879248411838_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHa0R0AI-ryaNg_4zbA6C1NIdo8yyjk4K4h2jzLKOTgrjaKPHn1pf_GGGbyaj8EUunAuLaX5qz3oweqHw7X87eG&_nc_ohc=g8KXNEktlWkQ7kNvwFNbgEp&_nc_oc=AdmG8UfUPkfCp_6G2WMLajdjEHpUvvqwXtJx8L0Jzin-CXeKylzYlAMD8I4fAsxf45c&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=QuNmdrp_bOPK131gST2JUw&oh=00_AfFGX2zwbvfhPLfgHONQxMVAZXLX0aPmnHNlGzmx2TE7Aw&oe=67FEB481" 
                alt="Kiage Tumaini Boys High School students in classroom" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#77995D] mb-4">
                Welcome to Kiage Tumaini Boys High School
              </h2>
              <div className="w-20 h-1 bg-[#d00000] mb-6"></div>
              <p className="text-gray-700 mb-6">
                Established in 2005, Tumaini Kiage Boys High School is a premier educational institution 
                located in Kitutu Chache South Sub County, Kisii County, in the Nyanza region of Kenya. 
                Our school provides exceptional modern education with a comprehensive curriculum.
              </p>
              <p className="text-gray-700 mb-8">
                Every student is inherently unique. Therefore, at our school, our experienced educators 
                apply a personalized teaching approach to meet the needs of each individual. The effectiveness 
                of our student-centered methodology is outstanding. Our students achieve excellent KCSE results 
                and embody a strong value system that unlocks their full potential, preparing them for lifelong success.
              </p>
              <Button 
                variant="default" 
                className="bg-[#77995D] hover:bg-[#5d7a47] text-white transition duration-300 transform hover:-translate-y-1 hover:shadow-md"
                asChild
              >
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <StatCard count={98} label="KCSE Pass Rate" suffix="%" />
            <StatCard count={53} label="Years of Excellence" />
            <StatCard count={45} label="Expert Teachers" suffix="+" />
            <StatCard count={1200} label="Students" suffix="+" />
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section id="news" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#77995D] text-center mb-4">
            Latest News & Events
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Stay informed about our school's activities, achievements, and upcoming events.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <NewsTab />
            </div>
            <div>
              <EventCalendar />
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              variant="default" 
              className="bg-[#77995D] hover:bg-[#5d7a47] text-white transition duration-300 transform hover:-translate-y-1 hover:shadow-md"
              asChild
            >
              <Link href="/news-events">
                View All News <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Campuses Section */}
      <section id="campuses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#77995D] text-center mb-4">
            Our School
          </h2>
          <div className="w-20 h-1 bg-[#9B2226] mx-auto mb-6"></div>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Kiage Tumaini Boys High School educates our bright, young learners at our expansive site 
            within Kisii County, Kenya.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CampusCard 
              image="https://scontent.fnbo13-1.fna.fbcdn.net/v/t1.6435-9/45288703_1950747978347125_3936876227352068096_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGoWCXCi7EGUO5qGeJ3OzYP9F6HSlbGIuf0XodKVsYi59JuSokirfcUilcWQVXRFkwOZPPTNHgWF6G6Ph2nRMVH&_nc_ohc=i4TTkTprKU8Q7kNvwH79dws&_nc_oc=AdnMjD4favbScjVrnC_blvngO3QnmUz8-uKYeqClzEZIdFkStYIcWXgeejbg_atr1LI&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=6rXXlp7WdNJsHiBVKgA1dA&oh=00_AfHpoe1EaOrET4RsnjfRlB0k9R3WoYKbI_d6YQUf9_fkEA&oe=682068A1"
              title="Main Campus"
              description="Our flagship campus features modern classrooms, science laboratories, computer labs, extensive sports facilities, and comfortable boarding accommodations for our senior students."
              link="/campuses/main"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#77995D] text-center mb-4">
            Why Choose Our School
          </h2>
          <div className="w-20 h-1 bg-[#9B2226] mx-auto mb-6"></div>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Kiage Tumaini Boys High School provides a character-focused, values-driven education 
            through a comprehensive educational program.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <FeatureCard 
              icon={<Book className="text-white text-2xl" />}
              title="8-4-4 Curriculum"
              description="We offer the Kenyan 8-4-4 curriculum, providing a broad, creative, and unique future-focused education."
            />
            
            <FeatureCard 
              icon={<Award className="text-white text-2xl" />}
              title="Top KCSE Results"
              description="Our school consistently achieves excellent KCSE results, preparing students for higher education."
            />
            
            <FeatureCard 
              icon={<Users className="text-white text-2xl" />}
              title="Diverse Student Body"
              description="A welcoming, multicultural school with students from across the region."
            />
            
            <FeatureCard 
              icon={<HomeIcon className="text-white text-2xl" />}
              title="Modern Boarding Facilities"
              description="Premium boarding facilities that provide a comfortable and conducive environment for learning."
            />
            
            <FeatureCard 
              icon={<Lightbulb className="text-white text-2xl" />}
              title="Advanced Learning Methods"
              description="Innovative teaching approaches and technology integration for enhanced learning experiences."
            />
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
              <Link 
                href="/about#features" 
                className="text-[#77995D] hover:text-[#5d7a47] font-bold text-center"
              >
                <span className="block mb-2">Learn More About</span>
                <span className="block text-xl">Our Features</span>
                <ArrowRight className="mx-auto mt-2" />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464809487_8563082190446971_4149192860917869296_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHFP3zx-4sENrSTCrjpHnvnnr9_ejv1i1Oev396O_WLU10msqqqFw8RtkXYo3kvIaUC6-RUhXZ8XLbwyOXzuvtU&_nc_ohc=Ly8xArjJJ5YQ7kNvwEmb9FS&_nc_oc=Adnv5uVBaNlbBni04KriHFVRm1MIN21DXibnTmP0TLFz_sCDhbLyGa3XXavkyJWt2qk&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=enircklNBFlYAS4V0PXZwA&oh=00_AfF9LKsbQfH6NAvJcE-OHH6tNpsuS-kc_XjSS6mI-HGY7w&oe=67FEE137"
                alt="Kiage Tumaini Boys sciences lab" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-['Playfair_Display'] font-bold text-[#77995D] mb-4">
                Expanding the Bounds of Learning with Technology
              </h2>
              <div className="w-20 h-1 bg-[#9B2226] mb-6"></div>
              <p className="text-gray-700 mb-6">
                Our classrooms are no longer static entities confined by four walls. At Tumaini Kiage Boys High School, 
                through the integration of modern technology, we're creating dynamic, interactive ecosystems where 
                subjects come alive, inviting students to explore, question, and understand in ways previously unimaginable.
              </p>
              <p className="text-gray-700 mb-6">
                Technology-based learning sessions redefine the boundaries of education, making it an experiential 
                journey rather than a passive acquisition of information. Our students develop critical thinking skills 
                and prepare for the digital future while still maintaining our traditional values and educational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Stages Section */}
      <section id="academics" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#77995D] text-center mb-4">
            Academic Stages
          </h2>
          <div className="w-20 h-1 bg-[#9B2226] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AcademicStage
              image="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464633332_8563082597113597_420623009869146736_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFp_-Y9HoBPNey6f1lZ3t4MUTLHX1HaImpRMsdfUdoiak5c_cP59v1a2B2wnXHJmW7xMTOxcPVOhOOJwtf_oej1&_nc_ohc=mBTYOA3R3MoQ7kNvwG0ashp&_nc_oc=AdkU2WBbTodAciegGYpjERfOyKKEpn77RMqBOMaNxPEfOm4glRi8QATrU654jVZUC9o&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=uAbIGh7ZYV9LCw5YypU3uA&oh=00_AfH6DHzLKf1C1AqeVoCTrkAXPTmImsKrLMupqQKM6tGvXg&oe=67FEDAFC"
              title="Junior High School"
              ageRange="Ages 12 - 14 Years Old"
              description="Our junior program focuses on building a solid academic foundation while developing essential life skills and character values."
              link="/academics/junior"
            />
            
            <AcademicStage
              image="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464878085_8563082607113596_1846206771570893739_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEB8Ihh9qI90enxL6dWT1m4nSZLsbFuhXudJkuxsW6Fe8Vyhy1bHZ_aWvZmAyh6HuM-WPBYCThrVyhSZe1jHfFS&_nc_ohc=fTtNDs1S3KEQ7kNvwFPxh4g&_nc_oc=AdkLSr3qiRVn001Kt1Sc69joHMm1IE-Ls4F0XjOgOPpNovmvPqHzO_TDFN5YGsNZxkc&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=18ApiwAyd9-HSjeQ1TbgLw&oh=00_AfF2WmxOX8ZMazYRPMaHaHiPy110wD93gH0jJZuGyJX6PA&oe=67FEE34E"
              title="Senior High School"
              ageRange="Ages 15 - 18 Years Old"
              description="Our senior program prepares students for KCSE examinations and higher education with specialized subjects and advanced learning."
              link="/academics/senior"
            />
            
            <AcademicStage
              image="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464299870_8534882636600260_3927743441845293517_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGSPd_x8BAVHI-GJrMlIJj8LstUW92TlCsuy1Rb3ZOUKxxE2jSe8N_hsxHyPT8aPTj0EUcWUUAhsiUVIghNAXt-&_nc_ohc=Nm8Xxzs47FwQ7kNvwF4rsSG&_nc_oc=AdlCuTQP6Fxntj3jgEvw6jfLRr9eCiGwZBZNYPJX2DKn0wAoZRp52gf0KYOAGLGQu50&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=E6WouMmYxz9RSzk9fcwtgQ&oh=00_AfELqESH_LemOQV28b2ZW4_pcfTYvSsyviWd5JP8CCZJTg&oe=67FEBD8F"
              title="Boarding Facilities"
              ageRange="Ages 13 - 18 Years Old"
              description="Our boarding program provides a supportive community environment that fosters independence, discipline, and academic focus."
              link="/academics/boarding"
            />
          </div>
        </div>
      </section>
      
      {/* Academic Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#77995D] text-center mb-4">
            2023 Academic Results
          </h2>
          <div className="w-20 h-1 bg-[#9B2226] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#77995D] mb-6 text-center">Main Campus</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A</h4>
                    <span className="text-xl font-bold text-[#77995D]">24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#9B2226] h-2.5 rounded-full" style={{ width: "24%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A - B</h4>
                    <span className="text-xl font-bold text-[#77995D]">58%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#9B2226] h-2.5 rounded-full" style={{ width: "58%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A - C</h4>
                    <span className="text-xl font-bold text-[#77995D]">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#9B2226] h-2.5 rounded-full" style={{ width: "82%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#77995D] mb-6 text-center">Annex Campus</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A</h4>
                    <span className="text-xl font-bold text-[#77995D]">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#9B2226] h-2.5 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A - B</h4>
                    <span className="text-xl font-bold text-[#77995D]">52%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#9B2226] h-2.5 rounded-full" style={{ width: "52%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A - C</h4>
                    <span className="text-xl font-bold text-[#77995D]">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#9B2226] h-2.5 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section id="programs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#77995D] text-center mb-4">
            A Leading School
          </h2>
          <div className="w-20 h-1 bg-[#9B2226] mx-auto mb-6"></div>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            As a member of the Kenya Secondary Schools Association, Kiage Tumaini Boy's High School is committed 
            to providing a modern, forward-looking education while remaining anchored in the culture and 
            traditions of Kenya and actively participating in the local community.
          </p>
          
          <p className="text-center text-gray-700 mb-8">Our students benefit from the following:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <ProgramCard
              image="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464907002_8563082593780264_8063665135507507167_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGR28qjBixxbMj6bn5XWZQfnPAYouHMAzGc8Bii4cwDMdZbV8uXHfq0QC1_XTWcYOTUdMfiAdQzgZ3E8jq4B7F-&_nc_ohc=OxPJqx8v6IAQ7kNvwFCWhFq&_nc_oc=AdkvVSM_0spYNQpLJqlFqaEtpNxgQnlDcb2CAyf5i32Lak7G1mGmX75RFi-tSbVdFBU&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=c0t_BcLaTwKcGU237L-Nmw&oh=00_AfGCzq5pOESuqWiRHB1HBiXyTPg-goAqiQckoP1D38xMHA&oe=67FEDE26"
              title="Real World Experiences In Education"
              description="Integrating the latest educational trends to enhance learning and prepare students for the real world."
              link="/programs/technology"
            />
            
            <ProgramCard
              image="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464525981_8534882946600229_7951063959042981708_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeH3-f-N9U31Ks5xPMN7O0ZXuc7YcUqA9ve5zthxSoD293Jj8DHzcg61zyEi2AFIh7DqLrM21unqo6p-V754bhWD&_nc_ohc=ICjci0bScMoQ7kNvwGaNpmo&_nc_oc=AdkfH-7dL89Ng-jKGH0Ew_hXYnFwcudnYZsxcqU-FS1Dj2vxKjeBdzHiG4REWE9lmX8&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=btt4NwtdQRRB2pNs-T18lw&oh=00_AfHexNYOew_gvsN5_UXxEJOgEFW-TLsGBBmhkMQg9C46uw&oe=67FED488"
              title="Educational Guidance and Counseling"
              description="Personalized guidance for students to help them make informed decisions about their higher education paths."
              link="/programs/counselling"
            />
            
            <ProgramCard
              image="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464286188_8534882649933592_8482634410588830661_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGlNMLew8yZG1a150ad7LUGzlKBwfyJZkzOUoHB_IlmTLirPAi6O46vi18DQa9IR1NaQujGIB6giV61Z6u3XbMZ&_nc_ohc=g-xaMqwNWkIQ7kNvwH_Mzqj&_nc_oc=AdmQhY1pWUPmD-Rpf_2Nwa0Sd5IPW5kd-e9TNLeOsbknzFRg1oWG7Hg2_1zZG5L561s&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=sCWVo7dfatdDG11jk6LsAg&oh=00_AfF1gtfdXpf0zbjmWGIBxh6v2gSFwwb8iiFg2PW4A1nakg&oe=67FEE5DF"
              title="Access To Top Universities"
              description="Building pathways for our graduates to attend prestigious universities locally and internationally."
              link="/programs/universities"
            />
          </div>
          
          <div className="text-center">
            <Button 
              variant="default" 
              className="bg-[#77995D] hover:bg-[#5d7a47] text-white transition duration-300 transform hover:-translate-y-1 hover:shadow-md"
              asChild
            >
              <Link href="/programs">
                Learn More About Our Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Accreditations Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#77995D] text-center mb-4">
            Accreditations
          </h2>
          <div className="w-20 h-1 bg-[#9B2226] mx-auto mb-12"></div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="https://www.knec.ac.ke/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-16 w-48 flex items-center justify-center bg-gray-100 text-[#77995D] font-bold">KNEC</div>
            </a>
            <a href="https://www.kessha.co.ke/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-16 w-48 flex items-center justify-center bg-gray-100 text-[#77995D] font-bold">KSSSHA</div>
            </a>
            <a href="https://www.tsc.go.ke/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-16 w-48 flex items-center justify-center bg-gray-100 text-[#77995D] font-bold">TSC</div>
            </a>
            <a href="https://kicd.ac.ke/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-16 w-48 flex items-center justify-center bg-gray-100 text-[#77995D] font-bold">KICD</div>
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#77995D] mb-4">Contact Us Today</h2>
          <div className="w-20 h-1 bg-[#9B2226] mx-auto mb-6"></div>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Find out how we can develop your child's skills and expand their horizons for a life of success.
          </p>
          
          <Button 
            variant="default" 
            size="lg"
            className="bg-[#77995D] hover:bg-[#5d7a47] text-white text-lg font-bold transition duration-300 transform hover:-translate-y-1 hover:shadow-md"
            asChild
          >
            <Link href="/contact">
              Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
