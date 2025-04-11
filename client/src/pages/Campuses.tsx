import { Link } from "wouter";
import { 
  MapPin, 
  Home, 
  Book, 
  Users, 
  Bed,
  Monitor,
  Utensils,
  Activity,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Campuses() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-[#0a2463] relative">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-4">
              Our Campuses
            </h1>
            <p className="text-gray-200 max-w-3xl mx-auto">
              Explore our two expansive campuses designed to provide an exceptional learning environment for our students.
            </p>
          </div>
        </div>
      </section>
      
      {/* Campuses Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Our School Campuses
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-6"></div>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Kiage Tumaini Boy's High School educates our bright, young learners at our two expansive sites 
            within Kisii County, Kenya. Each campus is designed to provide a conducive environment for 
            learning, personal growth, and holistic development.
          </p>
          
          <Tabs defaultValue="main" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="main" className="text-lg py-3">Main Campus</TabsTrigger>
              <TabsTrigger value="annex" className="text-lg py-3">Annex Campus</TabsTrigger>
            </TabsList>
            
            <TabsContent value="main">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <img 
                    src="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464293514_8534882926600231_1725862400436052152_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFhgGFWa72y4JzI6OKcmyZO6XmT0jVFEK_peZPSNUUQr1iL5Mw-U8bkylkY6k8G13M8ocKVYLQ36qO7PcpKsELA&_nc_ohc=rZhA-MbwYS0Q7kNvwHy5-ZV&_nc_oc=AdnOWmWcJFH8HtM-vuUKSawvbYP1jgdeOyzLMqTdCiwPwNshi3fDMes7WATsiE-y23U&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=6D9acsdMJZ-pWxgt-XNx5w&oh=00_AfGiKmI07q5c1VvdlgJzvFiYbbw9x-3qlHyrq2Zm-tT2Ww&oe=67FEFDE3" 
                    alt="Main Campus" 
                    className="rounded-lg shadow-lg w-full h-auto mb-6"
                  />
                  
                  <div className="flex items-center text-[#0a2463] mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="font-medium">Kitutu Chache South Sub County, Kisii County</span>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-bold text-[#0a2463] mb-2">Campus Hours</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>Administrative Office: Monday - Friday, 8:00 AM - 5:00 PM</li>
                      <li>Saturday: 8:00 AM - 12:00 PM</li>
                      <li>Visiting Hours: Sundays, 2:00 PM - 5:00 PM</li>
                    </ul>
                  </div>
                  
                  <Button 
                    variant="default" 
                    className="bg-[#0a2463] hover:bg-[#173681] text-white transition duration-300 transform hover:-translate-y-1 hover:shadow-md w-full"
                    asChild
                  >
                    <Link href="/contact">
                      Book a Campus Tour <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">Main Campus Facilities</h3>
                  <p className="text-gray-700 mb-6">
                    Our flagship campus houses our students (Forms 1,2,3 and Form 4), 
                    as well as administrative offices. The campus features modern facilities designed to provide 
                    a comprehensive learning and living environment.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#0a2463] text-white rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <Book className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0a2463] mb-1">Academic Facilities</h4>
                        <p className="text-gray-700">
                          Modern classrooms, fully equipped science laboratories (physics, chemistry, biology), 
                          computer labs with high-speed internet, a comprehensive library with study areas, 
                          and specialized rooms for technical subjects.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#0a2463] text-white rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <Bed className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0a2463] mb-1">Boarding Facilities</h4>
                        <p className="text-gray-700">
                          Our dormitory blocks with capacity for 500+ students, modern sanitation facilities, 
                          common rooms with recreational amenities, and staff housing for boarding masters.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#0a2463] text-white rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <Activity className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0a2463] mb-1">Sports & Recreation</h4>
                        <p className="text-gray-700">
                          A soccer field, basketball and volleyball courts,an external athletic track, 
                          indoor games facilities, and well-maintained recreation areas.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#0a2463] text-white rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <Utensils className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0a2463] mb-1">Dining & Support</h4>
                        <p className="text-gray-700">
                          Large dining hall with modern kitchen facilities, school clinic with qualified nurse, 
                          administrative block with staff offices, and assembly hall that seats 1,000 people.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="annex">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Annex Campus" 
                    className="rounded-lg shadow-lg w-full h-auto mb-6"
                  />
                  
                  <div className="flex items-center text-[#0a2463] mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="font-medium">5 km from Main Campus, Kitutu Chache South</span>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-bold text-[#0a2463] mb-2">Campus Hours</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>Administrative Office: Monday - Friday, 8:00 AM - 4:30 PM</li>
                      <li>Saturday: 8:00 AM - 12:00 PM</li>
                      <li>Visiting Hours: Sundays, 2:00 PM - 5:00 PM</li>
                    </ul>
                  </div>
                  
                  <Button 
                    variant="default" 
                    className="bg-[#0a2463] hover:bg-[#173681] text-white transition duration-300 transform hover:-translate-y-1 hover:shadow-md w-full"
                    asChild
                  >
                    <Link href="/contact">
                      Book a Campus Tour <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">Annex Campus Facilities</h3>
                  <p className="text-gray-700 mb-6">
                    Our annex campus is situated on 15 acres of land and primarily serves our junior students 
                    (Form 1 and Form 2). The campus provides a nurturing environment specifically designed 
                    for younger students transitioning to high school life.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#0a2463] text-white rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <Home className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0a2463] mb-1">Learning Environment</h4>
                        <p className="text-gray-700">
                          Purpose-built classrooms with multimedia capabilities, junior science laboratories, 
                          computer lab, library with age-appropriate resources, and designated spaces for arts and crafts.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#0a2463] text-white rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0a2463] mb-1">Residential Facilities</h4>
                        <p className="text-gray-700">
                          Four dormitory blocks designed specifically for junior students with enhanced supervision, 
                          modern washing and sanitation facilities, and dedicated house parents for each dormitory.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#0a2463] text-white rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <Monitor className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0a2463] mb-1">Learning Resources</h4>
                        <p className="text-gray-700">
                          Junior library with age-appropriate books and learning materials, 
                          study areas with tutoring support, and computer lab with educational software.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#0a2463] text-white rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <Activity className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0a2463] mb-1">Recreation & Support</h4>
                        <p className="text-gray-700">
                          Soccer field, basketball court, indoor games room, dining facility, 
                          first-aid station, and counseling office for student support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Campus Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Campus Maps
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4 text-center">Main Campus</h3>
              <div className="bg-gray-200 h-80 rounded-lg shadow-md flex items-center justify-center mb-4">
                <p className="text-gray-700">Main Campus Map</p>
              </div>
              <p className="text-gray-700 text-center">
                Located in Kitutu Chache South Sub County, 10 km from Kisii Town.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4 text-center">Annex Campus</h3>
              <div className="bg-gray-200 h-80 rounded-lg shadow-md flex items-center justify-center mb-4">
                <p className="text-gray-700">Annex Campus Map</p>
              </div>
              <p className="text-gray-700 text-center">
                Located 5 km from the Main Campus, in a quiet and serene environment.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold text-[#0a2463] mb-4">Getting to Our Campuses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-[#0a2463] mb-2">From Kisii Town</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                    <span>Take matatu or bus heading to Kitutu Chache South</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                    <span>For Main Campus: Alight at Kiage junction, the campus is 500m from the main road</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                    <span>For Annex Campus: Continue for 5 km past Main Campus and alight at Annex junction</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-[#0a2463] mb-2">By Private Transport</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                    <span>From Kisii Town, take the Kisii-Kilgoris road</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                    <span>Turn right at Kiage junction (approximately 10 km from town)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                    <span>Follow the signage to either campus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Campus Life Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Campus Life
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-6"></div>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Experience the vibrant and enriching life at Tumaini Kiage Boys High School, where academics meet character building in a supportive community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Boarding Experience</h3>
              <p className="text-gray-700 mb-4">
                Our boarding program provides a structured environment where students develop independence, responsibility, and strong community bonds.
              </p>
              <p className="text-gray-700">
                Students follow a daily routine that balances academics, personal time, co-curricular activities, and supervised study periods.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Student Welfare</h3>
              <p className="text-gray-700 mb-4">
                We prioritize student well-being with comprehensive support systems including on-site healthcare, counseling services, and attentive house parents.
              </p>
              <p className="text-gray-700">
                Regular check-ins, mentorship programs, and open communication channels ensure students feel supported and heard.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0a2463] mb-3">Community Building</h3>
              <p className="text-gray-700 mb-4">
                Through house systems, clubs, and school-wide events, we foster a sense of belonging and camaraderie among students from diverse backgrounds.
              </p>
              <p className="text-gray-700">
                Leadership opportunities, community service, and collaborative projects help develop social skills and empathy.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-6">A Typical Day at Tumaini Kiage</h3>
            
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-200 pb-3">
                  <span className="font-bold text-[#0a2463] w-32">5:00 AM</span>
                  <span className="text-gray-700">Wake-up bell and morning preparation</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-200 pb-3">
                  <span className="font-bold text-[#0a2463] w-32">5:30 - 6:30 AM</span>
                  <span className="text-gray-700">Morning study/Personal reading time</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-200 pb-3">
                  <span className="font-bold text-[#0a2463] w-32">6:30 - 7:00 AM</span>
                  <span className="text-gray-700">Breakfast</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-200 pb-3">
                  <span className="font-bold text-[#0a2463] w-32">7:00 - 7:30 AM</span>
                  <span className="text-gray-700">Morning assembly and announcements</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-200 pb-3">
                  <span className="font-bold text-[#0a2463] w-32">8:00 AM - 4:00 PM</span>
                  <span className="text-gray-700">Regular classes with short breaks and lunch period</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-200 pb-3">
                  <span className="font-bold text-[#0a2463] w-32">4:00 - 5:30 PM</span>
                  <span className="text-gray-700">Games and co-curricular activities</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-200 pb-3">
                  <span className="font-bold text-[#0a2463] w-32">5:30 - 6:30 PM</span>
                  <span className="text-gray-700">Dinner and personal time</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-200 pb-3">
                  <span className="font-bold text-[#0a2463] w-32">6:30 - 9:30 PM</span>
                  <span className="text-gray-700">Evening study (supervised)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-bold text-[#0a2463] w-32">9:30 - 10:00 PM</span>
                  <span className="text-gray-700">Bedtime preparation and lights out</span>
                </div>
              </div>
              
              <p className="mt-6 text-gray-700 italic text-sm">
                *Weekend schedules include more recreational activities, religious services, and personal time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Campus Safety and Security */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Campus Safety & Security
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">Your Child's Safety is Our Priority</h3>
              <p className="text-gray-700 mb-4">
                At Tumaini Kiage Boys High School, we maintain a comprehensive approach to campus safety and security 
                to ensure a safe learning environment for all students and staff.
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                  <span><strong>24/7 Security Personnel:</strong> Professional security guards monitor campus entrances and patrol the grounds around the clock.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                  <span><strong>Controlled Access:</strong> All visitors must register at the gate and receive authorized clearance before entering campus premises.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                  <span><strong>Perimeter Security:</strong> Both campuses are enclosed with secure fencing and well-lit at night.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                  <span><strong>Health Services:</strong> On-site clinic with qualified medical staff and arrangements with nearby hospitals for emergencies.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                  <span><strong>House Parents:</strong> Resident house parents provide supervision and emergency response in dormitories.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-2 h-2 mt-2 mr-3"></div>
                  <span><strong>Fire Safety:</strong> Regular fire drills, fire extinguishers in all buildings, and clearly marked emergency exits.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#0a2463] mb-4">Parent Communication & Emergency Protocol</h3>
              <p className="text-gray-700 mb-4">
                We maintain open communication with parents regarding their children's well-being and have established protocols for emergencies.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-[#0a2463] mb-2">Regular Communication</h4>
                  <p className="text-gray-700">
                    Parents receive regular updates about their child's progress through our parent portal, 
                    SMS notifications, and scheduled parent-teacher meetings.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-[#0a2463] mb-2">Emergency Contact System</h4>
                  <p className="text-gray-700">
                    Multiple channels for emergency communication including direct phone lines to administration 
                    and a rapid response system for urgent situations.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-[#0a2463] mb-2">Health Notifications</h4>
                  <p className="text-gray-700">
                    Parents are promptly notified of any health concerns regarding their child, 
                    with clear procedures for medical treatment authorization.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-[#0a2463] mb-2">Visiting Procedures</h4>
                  <p className="text-gray-700">
                    Structured visiting hours on designated days, with clear check-in procedures 
                    to ensure student safety while maintaining family connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-16 bg-[#0a2463]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-4">
            Experience Our Campus Firsthand
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            We invite prospective students and parents to tour our campuses and see the exceptional learning environment we provide.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              className="bg-[#ffc857] hover:bg-[#ffe09a] text-[#0a2463] font-bold"
              asChild
            >
              <Link href="/contact">Book a Campus Tour</Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#0a2463]"
              asChild
            >
              <Link href="/admissions">Apply for Admission</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
