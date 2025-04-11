import { useState } from "react";
import { Link } from "wouter";
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ChevronLeft, 
  ChevronRight,
  Search,
  ArrowRight,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    id: "news1",
    image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464344009_8534882446600279_5882791894603496916_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFJ-TBvVTZYjHVZPC6qThG09apqlIUBMsD1qmqUhQEywFGLJLnVXTaLYW3Pi8vmvCKYF6haeay_0G-XjL6cS-A3&_nc_ohc=cT-FeJXkXhQQ7kNvwGJo_Na&_nc_oc=AdmoypZGsBcMr6wA3y-_LNG4AE8_yrwpfLbE_l1iVlGoqJBw--Yj1aW1_rJ9fqjMxCc&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=x99haxRZXTdOqz6A7YX2Jw&oh=00_AfH9z1GH0qVtGRUxxUvroHJ_z1scMsYrV9zLS8EkMhanCA&oe=67FEE86C",
    date: "April 12, 2024",
    author: "Admin",
    title: "Math Competition Winners",
    excerpt: "Our students took first place in the county-wide mathematics competition, demonstrating exceptional problem-solving skills.",
    category: "Achievements",
    slug: "/news-events/math-competition"
  },
  {
    id: "news2",
    image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464270956_8534882233266967_862136308672317374_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEoy7RTysyiGKbJcfQHSvNJoX8rjHuUlWChfyuMe5SVYDkp81A6FQJBf8eNR5H1b-F_ANe5VglGaJ9EhP8G6a9b&_nc_ohc=xqeqXkCAZIEQ7kNvwH5QfJQ&_nc_oc=AdkBgkkBSIR-SJwPw-aV0BzVHvfj_VsdFMzQLBpN8DJ6gsv2G6MQin7NQV9Rv5xZ0Xk&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=pfi19TZiTaX9PPYFH-0aag&oh=00_AfGU2bJLr-cflx81e-76H7JG0ygY3uWvnqtixezxuGAidg&oe=67FEEC2B",
    date: "March 28, 2025",
    author: "Principal",
    title: "SPORTS EVENTS",
    excerpt: "TERM 2 SECONDARY SCHOOL GAMES UPDATE.",
    category: "Facilities",
    slug: "/news-events/science-lab"
  },
  {
    id: "news3",
    image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464728546_8563082407113616_4861900156731100576_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHVOY5avjHm--YLljaHrp4Kb33dreXDwkFvfd2t5cPCQUEVmrOgDsrqhnJ6dYaECMdeyNFGMqtSHYialr8eS3YO&_nc_ohc=zMrrGSO0PV8Q7kNvwE3b3HS&_nc_oc=Adlywp0YRWl3NT1naWpq7BEvW2jvxoBp9ICmZbJpoYPVnhVh8Fj2GOMP7J-PIpTKpeM&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=Wt_UvF-JCy4nl33UlITwiw&oh=00_AfGdD8WPHDuXWMihp25naSPwkpRHCUGVttdU3ow-3pscEg&oe=67FEEE1E",
    date: "March 15, 2025",
    author: "Department Head",
    title: "Inter-School Debate Competition",
    excerpt: "Our debate team showcased impressive critical thinking and public speaking skills at the regional debate competition.",
    category: "Competitions",
    slug: "/news-events/debate-competition"
  },
  {
    id: "news4",
    image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464207591_8534882223266968_5634401031224327264_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeENwKWz96ION-u-gD4BFYZKTv6dFNO0KeFO_p0U07Qp4c7huCiAsw0Fk1JPRq6oELfBXMkWy-V5XpDTQRjzOr0y&_nc_ohc=_KqVGiqAVCsQ7kNvwGyLRiv&_nc_oc=AdnqI68gD6jtWlq0cjkb5BXmt_ctEFIHTIoipTWizC1RuHW7mTKH6qaw3AZGTrnFUCE&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=34m2jX3JUWeUWioZDaE7CA&oh=00_AfHmDOQBLdgc9Jbt9hCd6BIrFyfEG9Tf1VbnyKvbsHMvhg&oe=67FEE8FB",
    date: "March 5, 2025",
    author: "Sports Department",
    title: "Soccer Team Advances to Regionals",
    excerpt: "Our school soccer team has qualified for the regional championship after an impressive performance in the county tournament.",
    category: "Sports",
    slug: "/news-events/soccer-regionals"
  },
  {
    id: "news5",
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/485022893_1173333304484394_4550122321825830294_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH0aXhGsIUdyZ-PzxcC_PpQBo_X877e11QGj9fzvt7XVCQbpRwlvvfjDbYFBmthsHH96WF9jHqOM7ECwSgHQufu&_nc_ohc=gNGoE5ujNzMQ7kNvwHDwbe_&_nc_oc=Adk1kGeAtRiyZI7ocgIS2t1OZlcGc3h47x7y9AYZYpXETchBKrkPeJ1qUFqEJp-B_jE&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=Y7DMr0lLQERONFK7vb4hmA&oh=00_AfHRWmIqexYcXhr5IZ9FJbrrW-iTt19V-AuVzYWYM_qnUw&oe=67FED9E4",
    date: "February 20, 2025",
    author: "Academic Board",
    title: "KCSE Results Announcement",
    excerpt: "We are proud to announce outstanding KCSE results with 98% of our students qualifying for university admission.",
    category: "Academics",
    slug: "/news-events/kcse-results"
  },
  {
    id: "news6",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZwra6r2EZ7qvaNI1EWahbLzV2eF-Nd5mpw&s",
    date: "February 10, 2025",
    author: "Admin",
    title: "School Visit by Education Officials",
    excerpt: "The school hosted county education officials who commended our academic excellence and infrastructure development.",
    category: "Recognition",
    slug: "/news-events/education-officials-visit"
  }
];

const eventItems = [
  {
    id: "event1",
    date: "05",
    month: "May",
    year: "2025",
    time: "8:00 AM",
    title: "School Reopening",
    excerpt: "Term 2 begins. All students are expected to report by 8:00 AM with all required materials.",
    location: "Main Campus",
    category: "Academic Calendar",
    slug: "/news-events/school-reopening"
  },
  {
    id: "event2",
    date: "12",
    month: "May",
    year: "2025",
    time: "10:00 AM",
    title: "Parent-Teacher Meeting",
    excerpt: "Form 1 and Form 2 parents are invited to discuss student progress and upcoming term activities.",
    location: "Annex Campus Hall",
    category: "Meetings",
    slug: "/news-events/parent-teacher-meeting"
  },
  {
    id: "event3",
    date: "20",
    month: "May",
    year: "2025",
    time: "2:00 PM",
    title: "Science Fair",
    excerpt: "Annual science exhibition showcasing student projects from all grades. Parents and community members welcome.",
    location: "Main Campus Grounds",
    category: "Academic Events",
    slug: "/news-events/science-fair"
  },
  {
    id: "event4",
    date: "10",
    month: "June",
    year: "2025",
    time: "9:00 AM",
    title: "Inter-House Sports Competition",
    excerpt: "Annual sports competition between school houses featuring track and field events, team sports, and individual competitions.",
    location: "School Sports Grounds",
    category: "Sports",
    slug: "/news-events/inter-house-sports"
  },
  {
    id: "event5",
    date: "25",
    month: "June",
    year: "2025",
    time: "3:00 PM",
    title: "Career Day",
    excerpt: "Professionals from various fields will speak to students about career opportunities and educational pathways.",
    location: "School Assembly Hall",
    category: "Career Guidance",
    slug: "/news-events/career-day"
  },
  {
    id: "event6",
    date: "15",
    month: "July",
    year: "2025",
    time: "10:00 AM",
    title: "Mid-Term Break",
    excerpt: "Students will break for a 3-day mid-term holiday. Boarding students may remain on campus or go home.",
    location: "All Campuses",
    category: "Academic Calendar",
    slug: "/news-events/mid-term-break"
  }
];

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState("news");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Filter items based on search term
  const filteredNews = newsItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredEvents = eventItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate current items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const currentEvents = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalNewsPages = Math.ceil(filteredNews.length / itemsPerPage);
  const totalEventsPages = Math.ceil(filteredEvents.length / itemsPerPage);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-[#0a2463] relative">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-4">
              News & Events
            </h1>
            <p className="text-gray-200 max-w-3xl mx-auto">
              Stay updated with the latest happenings at Kiage Tumaini Boy's High School.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="py-10 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search news and events..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page on search
                }}
                className="pl-10 focus-visible:ring-[#0a2463]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="news" onValueChange={(value) => {
            setActiveTab(value);
            setCurrentPage(1); // Reset to first page when switching tabs
          }}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
              <TabsTrigger value="news" className="text-lg py-3">Latest News</TabsTrigger>
              <TabsTrigger value="events" className="text-lg py-3">Upcoming Events</TabsTrigger>
            </TabsList>
            
            {/* News Tab Content */}
            <TabsContent value="news">
              {filteredNews.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold text-[#0a2463] mb-2">No news articles found</h3>
                  <p className="text-gray-600">Please try a different search term or check back later for updates.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentNews.map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-60 object-cover"
                        />
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {item.date}
                            </div>
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {item.author}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-[#0a2463] mb-3">{item.title}</h3>
                          <p className="text-gray-700 mb-4">{item.excerpt}</p>
                          
                          <div className="flex justify-between items-center">
                            <Badge variant="outline" className="bg-gray-100">
                              <Tag className="h-3 w-3 mr-1" />
                              {item.category}
                            </Badge>
                            
                            <Link 
                              href={item.slug}
                              className="text-[#0a2463] font-medium hover:underline flex items-center"
                            >
                              Read More <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Pagination */}
                  {totalNewsPages > 1 && (
                    <div className="flex justify-center mt-10">
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => paginate(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        
                        {[...Array(totalNewsPages)].map((_, i) => (
                          <Button 
                            key={i}
                            variant={currentPage === i + 1 ? "default" : "outline"}
                            onClick={() => paginate(i + 1)}
                            className={currentPage === i + 1 ? "bg-[#0a2463]" : ""}
                          >
                            {i + 1}
                          </Button>
                        ))}
                        
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => paginate(Math.min(totalNewsPages, currentPage + 1))}
                          disabled={currentPage === totalNewsPages}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </TabsContent>
            
            {/* Events Tab Content */}
            <TabsContent value="events">
              {filteredEvents.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold text-[#0a2463] mb-2">No upcoming events found</h3>
                  <p className="text-gray-600">Please try a different search term or check back later for updates.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentEvents.map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="bg-[#0a2463] text-white text-center p-3 rounded-md w-20">
                              <span className="block text-2xl font-bold">{item.date}</span>
                              <span className="block text-sm">{item.month}</span>
                              <span className="block text-xs">{item.year}</span>
                            </div>
                            
                            <div className="flex items-center text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {item.time}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-[#0a2463] mb-3">{item.title}</h3>
                          <p className="text-gray-700 mb-4">{item.excerpt}</p>
                          
                          <div className="flex items-center text-gray-500 mb-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{item.location}</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <Badge variant="outline" className="bg-gray-100">
                              <Tag className="h-3 w-3 mr-1" />
                              {item.category}
                            </Badge>
                            
                            <Link 
                              href={item.slug}
                              className="text-[#0a2463] font-medium hover:underline flex items-center"
                            >
                              More Details <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Pagination */}
                  {totalEventsPages > 1 && (
                    <div className="flex justify-center mt-10">
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => paginate(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        
                        {[...Array(totalEventsPages)].map((_, i) => (
                          <Button 
                            key={i}
                            variant={currentPage === i + 1 ? "default" : "outline"}
                            onClick={() => paginate(i + 1)}
                            className={currentPage === i + 1 ? "bg-[#0a2463]" : ""}
                          >
                            {i + 1}
                          </Button>
                        ))}
                        
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => paginate(Math.min(totalEventsPages, currentPage + 1))}
                          disabled={currentPage === totalEventsPages}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* School Announcements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Important Announcements
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="border-l-4 border-[#0a2463] bg-gray-50 p-5">
              <h3 className="text-xl font-bold text-[#0a2463] mb-2">School Reopening Date</h3>
              <p className="text-gray-700 mb-1">
                School reopens for Term 2 on May 5th, 2025. All students are expected to report by 8:00 AM.
              </p>
              <p className="text-sm text-gray-500">Posted on: April 10, 2025</p>
            </div>
            
            <div className="border-l-4 border-[#0a2463] bg-gray-50 p-5">
              <h3 className="text-xl font-bold text-[#0a2463] mb-2">Fee Payment Deadline</h3>
              <p className="text-gray-700 mb-1">
                All Term 2 fees should be paid in full by April 30th, 2025. Please contact the accounts office for any clarification.
              </p>
              <p className="text-sm text-gray-500">Posted on: April 8, 2025</p>
            </div>
            
            <div className="border-l-4 border-[#0a2463] bg-gray-50 p-5">
              <h3 className="text-xl font-bold text-[#0a2463] mb-2">School Uniform Update</h3>
              <p className="text-gray-700 mb-1">
                New school sweaters are now available at the school store. All students are required to have the updated uniform by the start of Term 2.
              </p>
              <p className="text-sm text-gray-500">Posted on: April 5, 2025</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* School Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Academic Calendar 2025
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-2">Term 1</h3>
                <p className="text-gray-700">(January - April)</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">Opening Date</span>
                    <span>January 10, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Half Term Break</span>
                    <span>February 24 - 28, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Closing Date</span>
                    <span>April 15, 2025</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-2">Term 2</h3>
                <p className="text-gray-700">(May - August)</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">Opening Date</span>
                    <span>May 5, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Half Term Break</span>
                    <span>June 25 - 29, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Closing Date</span>
                    <span>August 10, 2025</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-2">Term 3</h3>
                <p className="text-gray-700">(September - November)</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">Opening Date</span>
                    <span>September 3, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">KCSE Examinations</span>
                    <span>November 4 - 28, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Closing Date</span>
                    <span>November 30, 2025</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mt-6 italic">
              * Dates are subject to change based on Ministry of Education directives.
            </p>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-16 bg-[#0a2463]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-4">
            Stay Updated with School News
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, events, and announcements from Kiage Tumaini Boy's High School.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-white text-gray-800 placeholder:text-gray-500"
              />
              <Button 
                variant="default" 
                className="bg-[#ffc857] hover:bg-[#ffe09a] text-[#0a2463] font-bold shrink-0"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
