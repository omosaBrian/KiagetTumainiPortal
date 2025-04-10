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
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Tumaini Kiage Boys High School students in classroom" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#77995D] mb-4">
                Welcome to Tumaini Kiage Boys High School
              </h2>
              <div className="w-20 h-1 bg-[#d00000] mb-6"></div>
              <p className="text-gray-700 mb-6">
                Established in 1970, Tumaini Kiage Boys High School is a premier educational institution 
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
          
          <NewsTab />
          
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
            Our School Campuses
          </h2>
          <div className="w-20 h-1 bg-[#9B2226] mx-auto mb-6"></div>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Tumaini Kiage Boys High School educates our bright, young learners at our two expansive sites 
            within Kisii County, Kenya.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CampusCard 
              image="https://images.unsplash.com/photo-1543505298-b8be9b52a21a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              title="Main Campus"
              description="Our flagship campus features modern classrooms, science laboratories, computer labs, extensive sports facilities, and comfortable boarding accommodations for our senior students."
              link="/campuses/main"
            />
            
            <CampusCard 
              image="https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              title="Annex Campus"
              description="Our annex campus provides a focused learning environment for our junior students with dedicated facilities including library resources, arts studios, and recreational areas."
              link="/campuses/annex"
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
            Tumaini Kiage Boys High School provides a character-focused, values-driven education 
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
                src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" 
                alt="Student with VR headset" 
                className="rounded-lg shadow-lg w-full h-auto"
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
              image="https://images.unsplash.com/photo-1629872430082-93d8912bece9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380&q=80"
              title="Junior High School"
              ageRange="Ages 12 - 14 Years Old"
              description="Our junior program focuses on building a solid academic foundation while developing essential life skills and character values."
              link="/academics/junior"
            />
            
            <AcademicStage
              image="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380&q=80"
              title="Senior High School"
              ageRange="Ages 15 - 18 Years Old"
              description="Our senior program prepares students for KCSE examinations and higher education with specialized subjects and advanced learning."
              link="/academics/senior"
            />
            
            <AcademicStage
              image="https://images.unsplash.com/photo-1604761773777-95d3a2dd2348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380&q=80"
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
            As a member of the Kenya Secondary Schools Association, Tumaini Kiage Boys High School is committed 
            to providing a modern, forward-looking education while remaining anchored in the culture and 
            traditions of Kenya and actively participating in the local community.
          </p>
          
          <p className="text-center text-gray-700 mb-8">Our students benefit from the following:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <ProgramCard
              image="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
              title="Technology In Education"
              description="Integrating the latest educational technologies to enhance learning and prepare students for the digital age."
              link="/programs/technology"
            />
            
            <ProgramCard
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
              title="University Counselling"
              description="Personalized guidance for students to help them make informed decisions about their higher education paths."
              link="/programs/counselling"
            />
            
            <ProgramCard
              image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
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
