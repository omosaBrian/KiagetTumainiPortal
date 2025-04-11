import { Link } from "wouter";
import { 
  Book, 
  Microscope, 
  Music, 
  Dumbbell, 
  Users, 
  GraduationCap,
  Globe,
  PenTool,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AcademicStage from "@/components/AcademicStage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Academics() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-[#0a2463] relative">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-4">
              Academic Excellence
            </h1>
            <p className="text-gray-200 max-w-3xl mx-auto">
              Discover our comprehensive educational programs designed to develop well-rounded students prepared for future success.
            </p>
          </div>
        </div>
      </section>
      
      {/* Academic Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">
                Our Educational Philosophy
              </h2>
              <div className="w-20 h-1 bg-[#ffc857] mb-6"></div>
              <p className="text-gray-700 mb-6">
                At Tumaini Kiage Boys High School, we believe that every student possesses unique talents and abilities. 
                Our educational approach focuses on nurturing these individual strengths while providing a strong 
                foundation in academics, character development, and life skills.
              </p>
              <p className="text-gray-700 mb-6">
                We follow the Kenyan 8-4-4 curriculum, enhanced with innovative teaching methodologies and 
                technology integration. Our dedicated teachers employ student-centered approaches that 
                encourage critical thinking, problem-solving, and creativity.
              </p>
              <p className="text-gray-700 mb-6">
                Beyond academic excellence, we emphasize character formation, leadership development, and 
                community service, preparing our students to become responsible citizens and future leaders.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Students in classroom discussion" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Stages */}
      <section id="stages" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Academic Stages
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          </div>
        </div>
      </section>
      
      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Curriculum Overview
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <Tabs defaultValue="junior" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="junior" className="text-lg py-3">Form 1 & 2 (Junior)</TabsTrigger>
              <TabsTrigger value="senior" className="text-lg py-3">Form 3 & 4 (Senior)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="junior" className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">Junior Secondary Curriculum</h3>
              <p className="text-gray-700 mb-6">
                Our junior secondary program builds a strong foundation in core subjects while introducing students to a wide range of disciplines. The curriculum emphasizes fundamental concepts, critical thinking, and study skills.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-[#0a2463] mb-3">Core Subjects</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Mathematics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>English Language</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Kiswahili</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Biology</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Chemistry</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Physics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>History & Government</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Geography</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-[#0a2463] mb-3">Additional Subjects</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Religious Education</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Agriculture</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Business Studies</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Computer Studies</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Physical Education</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Music</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Art & Design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="senior" className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">Senior Secondary Curriculum</h3>
              <p className="text-gray-700 mb-6">
                Our senior secondary program focuses on specialized subject areas to prepare students for KCSE examinations and higher education. Students select subject combinations based on their career aspirations and strengths.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-[#0a2463] mb-3">Compulsory Subjects</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Mathematics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>English Language</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Kiswahili</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-[#0a2463] mb-3">Subject Groups</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Sciences: Biology, Chemistry, Physics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Humanities: History, Geography, Religious Education</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Technicals: Computer Studies, Agriculture, Business Studies</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-xl font-bold text-[#0a2463] mb-3">Subject Combinations</h4>
                <p className="text-gray-700 mb-4">
                  Students select a minimum of 8 subjects, including the 3 compulsory subjects and at least 2 sciences.
                  Some popular combinations include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                    <span><strong>Science-oriented:</strong> Mathematics, English, Kiswahili, Biology, Chemistry, Physics, Geography, Computer Studies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                    <span><strong>Business-oriented:</strong> Mathematics, English, Kiswahili, Biology, Chemistry, Business Studies, Geography, History</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Academic Departments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Academic Departments
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0a2463] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Sciences Department</h3>
              <p className="text-gray-700 mb-4">
                Our Science Department excels in practical, hands-on learning with well-equipped laboratories for Biology, Chemistry, and Physics.
              </p>
              <p className="text-gray-700">
                Led by experienced educators with strong backgrounds in scientific research and education.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0a2463] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Mathematics Department</h3>
              <p className="text-gray-700 mb-4">
                Our Mathematics Department fosters analytical thinking and problem-solving skills with innovative teaching approaches.
              </p>
              <p className="text-gray-700">
                Consistently produces top-performing students in national and international mathematics competitions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0a2463] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Humanities Department</h3>
              <p className="text-gray-700 mb-4">
                Our Humanities Department nurtures critical thinking and communication skills through the study of history, geography, and religious education.
              </p>
              <p className="text-gray-700">
                Emphasizes cultural awareness, ethical understanding, and citizenship education.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0a2463] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Book className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Languages Department</h3>
              <p className="text-gray-700 mb-4">
                Our Languages Department develops strong communication skills in English and Kiswahili through comprehensive language and literature programs.
              </p>
              <p className="text-gray-700">
                Promotes reading culture and creative writing through various literary activities and competitions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0a2463] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <PenTool className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Technical Department</h3>
              <p className="text-gray-700 mb-4">
                Our Technical Department offers practical skills in computer studies, agriculture, and business studies with modern facilities.
              </p>
              <p className="text-gray-700">
                Prepares students for both higher education and practical career paths with real-world applications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0a2463] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Music className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Creative Arts Department</h3>
              <p className="text-gray-700 mb-4">
                Our Creative Arts Department nurtures talent in music, art, and design, providing opportunities for artistic expression and cultural appreciation.
              </p>
              <p className="text-gray-700">
                Regular participation in music festivals, art exhibitions, and cultural events.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Co-Curricular Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Co-Curricular Programs
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-6"></div>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We believe in holistic education that extends beyond the classroom. Our co-curricular programs provide students with opportunities to develop leadership, teamwork, and practical skills.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-[#0a2463] text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <Dumbbell className="h-8 w-8" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-[#0a2463] mb-3 text-center md:text-left">Sports Programs</h3>
                <p className="text-gray-700 mb-4">
                  We offer a wide range of sports including soccer, basketball, volleyball, rugby, athletics, and more. Our teams regularly participate in county and regional competitions.
                </p>
                <p className="text-gray-700">
                  Through sports, our students learn discipline, teamwork, and perseverance while maintaining physical fitness.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-[#0a2463] text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-[#0a2463] mb-3 text-center md:text-left">Clubs & Societies</h3>
                <p className="text-gray-700 mb-4">
                  Our diverse clubs include Science Club, Debate Club, Environmental Club, Christian Union, Drama Club, and more, allowing students to pursue their interests outside of academics.
                </p>
                <p className="text-gray-700">
                  Clubs meet weekly and organize various activities, competitions, and community service projects.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-[#0a2463] text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <Music className="h-8 w-8" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-[#0a2463] mb-3 text-center md:text-left">Music & Drama</h3>
                <p className="text-gray-700 mb-4">
                  Our music and drama programs encourage artistic expression and cultural appreciation. Students participate in choir, instrumental music, drama, and traditional dance.
                </p>
                <p className="text-gray-700">
                  Regular participation in music and drama festivals at county and national levels.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-[#0a2463] text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <Globe className="h-8 w-8" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-[#0a2463] mb-3 text-center md:text-left">Community Service</h3>
                <p className="text-gray-700 mb-4">
                  We encourage social responsibility through community service programs including environmental conservation, mentorship of younger students, and visits to local institutions.
                </p>
                <p className="text-gray-700">
                  Students learn empathy, social awareness, and the importance of giving back to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            2023 Academic Results
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-6 text-center">Main Campus</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A</h4>
                    <span className="text-xl font-bold text-[#0a2463]">24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#ffc857] h-2.5 rounded-full" style={{ width: "24%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A - B</h4>
                    <span className="text-xl font-bold text-[#0a2463]">58%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#ffc857] h-2.5 rounded-full" style={{ width: "58%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A - C</h4>
                    <span className="text-xl font-bold text-[#0a2463]">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#ffc857] h-2.5 rounded-full" style={{ width: "82%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-6 text-center">Annex Campus</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A</h4>
                    <span className="text-xl font-bold text-[#0a2463]">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#ffc857] h-2.5 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A - B</h4>
                    <span className="text-xl font-bold text-[#0a2463]">52%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#ffc857] h-2.5 rounded-full" style={{ width: "52%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A - C</h4>
                    <span className="text-xl font-bold text-[#0a2463]">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#ffc857] h-2.5 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold text-[#0a2463] mb-4">Subject Performance Highlights</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                <span>Top performance in Mathematics with 65% of students achieving A and A-</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                <span>Outstanding results in Sciences (Biology, Chemistry, Physics) with over 70% achieving B+ and above</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                <span>Strong performance in Humanities with History and Geography showing significant improvement</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                <span>86% of students qualified for university admission</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Academic Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Academic Support
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-6"></div>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We provide comprehensive support to ensure every student reaches their full potential.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Mentorship Program</h3>
              <p className="text-gray-700">
                Every student is assigned a teacher-mentor who provides academic guidance, 
                monitors progress, and offers personal support throughout their time at the school.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Remedial Classes</h3>
              <p className="text-gray-700">
                Additional support classes are available for students who need extra help in specific subjects,
                ensuring no student is left behind.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Advanced Learning</h3>
              <p className="text-gray-700">
                Special programs for gifted students to challenge them beyond the standard curriculum,
                including participation in academic competitions and advanced projects.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Career Guidance</h3>
              <p className="text-gray-700">
                Comprehensive career counseling to help students make informed decisions about 
                subject choices and future career paths.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Study Skills Development</h3>
              <p className="text-gray-700">
                Regular workshops on effective study techniques, time management, and exam preparation
                to help students optimize their learning.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Library Resources</h3>
              <p className="text-gray-700">
                Well-stocked library with textbooks, reference materials, and digital resources
                to support research and independent learning.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-16 bg-[#0a2463]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-4">
            Ready to Join Our Academic Community?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the excellence of Tumaini Kiage Boys High School education. Apply now for admission or contact us to learn more.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              className="bg-[#ffc857] hover:bg-[#ffe09a] text-[#0a2463] font-bold"
              asChild
            >
              <Link href="/admissions">Apply for Admission</Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#0a2463]"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

            <AcademicStage
              image="https://web.facebook.com/photo/?fbid=581407347010329&set=pb.100054232071372.-2207520000"
              title="Senior High School"
              ageRange="Ages 15 - 18 Years Old"
              description="Our senior program prepares students for KCSE examinations and higher education with specialized subjects and advanced learning."
              link="/academics/senior"
            />
            
            <AcademicStage
              image="https://web.facebook.com/photo/?fbid=1950747975013792&set=pb.100054232071372.-2207520000"
              title="Boarding Facilities"
              ageRange="Ages 13 - 18 Years Old"
              description="Our boarding program provides a supportive community environment that fosters independence, discipline, and academic focus."
              link="/academics/boarding"
            />
          </div>
        </div>
      </section>
      
      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Curriculum Overview
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <Tabs defaultValue="junior" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="junior" className="text-lg py-3">Form 1 & 2 (Junior)</TabsTrigger>
              <TabsTrigger value="senior" className="text-lg py-3">Form 3 & 4 (Senior)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="junior" className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">Junior Secondary Curriculum</h3>
              <p className="text-gray-700 mb-6">
                Our junior secondary program builds a strong foundation in core subjects while introducing students to a wide range of disciplines. The curriculum emphasizes fundamental concepts, critical thinking, and study skills.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-[#0a2463] mb-3">Core Subjects</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Mathematics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>English Language</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Kiswahili</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Biology</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Chemistry</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Physics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>History & Government</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Geography</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-[#0a2463] mb-3">Additional Subjects</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Religious Education</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Agriculture</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Business Studies</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Computer Studies</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Physical Education</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Music</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Art & Design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="senior" className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">Senior Secondary Curriculum</h3>
              <p className="text-gray-700 mb-6">
                Our senior secondary program focuses on specialized subject areas to prepare students for KCSE examinations and higher education. Students select subject combinations based on their career aspirations and strengths.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-[#0a2463] mb-3">Compulsory Subjects</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Mathematics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>English Language</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Kiswahili</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-[#0a2463] mb-3">Subject Groups</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Sciences: Biology, Chemistry, Physics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Humanities: History, Geography, Religious Education</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-[#ffc857] rounded-full w-2 h-2 mr-3"></div>
                      <span>Technicals: Computer Studies, Agriculture, Business Studies</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-xl font-bold text-[#0a2463] mb-3">Subject Combinations</h4>
                <p className="text-gray-700 mb-4">
                  Students select a minimum of 8 subjects, including the 3 compulsory subjects and at least 2 sciences.
                  Some popular combinations include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                    <span><strong>Science-oriented:</strong> Mathematics, English, Kiswahili, Biology, Chemistry, Physics, Geography, Computer Studies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                    <span><strong>Business-oriented:</strong> Mathematics, English, Kiswahili, Biology, Chemistry, Business Studies, Geography, History</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Academic Departments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Academic Departments
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0a2463] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Sciences Department</h3>
              <p className="text-gray-700 mb-4">
                Our Science Department excels in practical, hands-on learning with well-equipped laboratories for Biology, Chemistry, and Physics.
              </p>
              <p className="text-gray-700">
                Led by experienced educators with strong backgrounds in scientific research and education.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0a2463] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Mathematics Department</h3>
              <p className="text-gray-700 mb-4">
                Our Mathematics Department fosters analytical thinking and problem-solving skills with innovative teaching approaches.
              </p>
              <p className="text-gray-700">
                Consistently produces top-performing students in national and international mathematics competitions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0a2463] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Humanities Department</h3>
              <p className="text-gray-700 mb-4">
                Our Humanities Department nurtures critical thinking and communication skills through the study of history, geography, and religious education.
              </p>
              <p className="text-gray-700">
                Emphasizes cultural awareness, ethical understanding, and citizenship education.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0a2463] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Book className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Languages Department</h3>
              <p className="text-gray-700 mb-4">
                Our Languages Department develops strong communication skills in English and Kiswahili through comprehensive language and literature programs.
              </p>
              <p className="text-gray-700">
                Promotes reading culture and creative writing through various literary activities and competitions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0a2463] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <PenTool className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Technical Department</h3>
              <p className="text-gray-700 mb-4">
                Our Technical Department offers practical skills in computer studies, agriculture, and business studies with modern facilities.
              </p>
              <p className="text-gray-700">
                Prepares students for both higher education and practical career paths with real-world applications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0a2463] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Music className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Creative Arts Department</h3>
              <p className="text-gray-700 mb-4">
                Our Creative Arts Department nurtures talent in music, art, and design, providing opportunities for artistic expression and cultural appreciation.
              </p>
              <p className="text-gray-700">
                Regular participation in music festivals, art exhibitions, and cultural events.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Co-Curricular Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Co-Curricular Programs
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-6"></div>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We believe in holistic education that extends beyond the classroom. Our co-curricular programs provide students with opportunities to develop leadership, teamwork, and practical skills.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-[#0a2463] text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <Dumbbell className="h-8 w-8" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-[#0a2463] mb-3 text-center md:text-left">Sports Programs</h3>
                <p className="text-gray-700 mb-4">
                  We offer a wide range of sports including soccer, basketball, volleyball, rugby, athletics, and more. Our teams regularly participate in county and regional competitions.
                </p>
                <p className="text-gray-700">
                  Through sports, our students learn discipline, teamwork, and perseverance while maintaining physical fitness.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-[#0a2463] text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-[#0a2463] mb-3 text-center md:text-left">Clubs & Societies</h3>
                <p className="text-gray-700 mb-4">
                  Our diverse clubs include Science Club, Debate Club, Environmental Club, Christian Union, Drama Club, and more, allowing students to pursue their interests outside of academics.
                </p>
                <p className="text-gray-700">
                  Clubs meet weekly and organize various activities, competitions, and community service projects.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-[#0a2463] text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <Music className="h-8 w-8" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-[#0a2463] mb-3 text-center md:text-left">Music & Drama</h3>
                <p className="text-gray-700 mb-4">
                  Our music and drama programs encourage artistic expression and cultural appreciation. Students participate in choir, instrumental music, drama, and traditional dance.
                </p>
                <p className="text-gray-700">
                  Regular participation in music and drama festivals at county and national levels.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-[#0a2463] text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <Globe className="h-8 w-8" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-[#0a2463] mb-3 text-center md:text-left">Community Service</h3>
                <p className="text-gray-700 mb-4">
                  We encourage social responsibility through community service programs including environmental conservation, mentorship of younger students, and visits to local institutions.
                </p>
                <p className="text-gray-700">
                  Students learn empathy, social awareness, and the importance of giving back to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            2023 Academic Results
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-6 text-center">Main Campus</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A</h4>
                    <span className="text-xl font-bold text-[#0a2463]">24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#ffc857] h-2.5 rounded-full" style={{ width: "24%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A - B</h4>
                    <span className="text-xl font-bold text-[#0a2463]">58%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#ffc857] h-2.5 rounded-full" style={{ width: "58%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A - C</h4>
                    <span className="text-xl font-bold text-[#0a2463]">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#ffc857] h-2.5 rounded-full" style={{ width: "82%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-6 text-center">Annex Campus</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A</h4>
                    <span className="text-xl font-bold text-[#0a2463]">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#ffc857] h-2.5 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A - B</h4>
                    <span className="text-xl font-bold text-[#0a2463]">52%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#ffc857] h-2.5 rounded-full" style={{ width: "52%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Achieved A - C</h4>
                    <span className="text-xl font-bold text-[#0a2463]">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#ffc857] h-2.5 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold text-[#0a2463] mb-4">Subject Performance Highlights</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                <span>Top performance in Mathematics with 65% of students achieving A and A-</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                <span>Outstanding results in Sciences (Biology, Chemistry, Physics) with over 70% achieving B+ and above</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                <span>Strong performance in Humanities with History and Geography showing significant improvement</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                <span>86% of students qualified for university admission</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Academic Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Academic Support
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-6"></div>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We provide comprehensive support to ensure every student reaches their full potential.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Mentorship Program</h3>
              <p className="text-gray-700">
                Every student is assigned a teacher-mentor who provides academic guidance, 
                monitors progress, and offers personal support throughout their time at the school.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Remedial Classes</h3>
              <p className="text-gray-700">
                Additional support classes are available for students who need extra help in specific subjects,
                ensuring no student is left behind.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Advanced Learning</h3>
              <p className="text-gray-700">
                Special programs for gifted students to challenge them beyond the standard curriculum,
                including participation in academic competitions and advanced projects.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Career Guidance</h3>
              <p className="text-gray-700">
                Comprehensive career counseling to help students make informed decisions about 
                subject choices and future career paths.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Study Skills Development</h3>
              <p className="text-gray-700">
                Regular workshops on effective study techniques, time management, and exam preparation
                to help students optimize their learning.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Library Resources</h3>
              <p className="text-gray-700">
                Well-stocked library with textbooks, reference materials, and digital resources
                to support research and independent learning.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-16 bg-[#0a2463]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-4">
            Ready to Join Our Academic Community?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the excellence of Tumaini Kiage Boys High School education. Apply now for admission or contact us to learn more.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              className="bg-[#ffc857] hover:bg-[#ffe09a] text-[#0a2463] font-bold"
              asChild
            >
              <Link href="/admissions">Apply for Admission</Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#0a2463]"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
