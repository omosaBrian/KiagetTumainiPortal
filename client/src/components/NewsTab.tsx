import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface NewsItem {
  id: string;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

interface EventItem {
  id: string;
  date: string;
  month: string;
  time: string;
  title: string;
  excerpt: string;
  slug: string;
}

export default function NewsTab() {
  const [activeTab, setActiveTab] = useState("news");

  const newsItems: NewsItem[] = [
    {
      id: "news1",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      date: "April 12, 2025",
      title: "Math Competition Winners",
      excerpt: "Our students took first place in the county-wide mathematics competition, demonstrating exceptional problem-solving skills.",
      slug: "/news-events/math-competition"
    },
    {
      id: "news2",
      image: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      date: "March 28, 2025",
      title: "New Science Laboratory",
      excerpt: "We are excited to announce the opening of our new state-of-the-art science laboratory, equipped with the latest technologies.",
      slug: "/news-events/science-lab"
    },
    {
      id: "news3",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      date: "March 15, 2025",
      title: "Inter-School Debate Competition",
      excerpt: "Our debate team showcased impressive critical thinking and public speaking skills at the regional debate competition.",
      slug: "/news-events/debate-competition"
    }
  ];

  const eventItems: EventItem[] = [
    {
      id: "event1",
      date: "05",
      month: "May",
      time: "8:00 AM",
      title: "School Reopening",
      excerpt: "Term 2 begins. All students are expected to report by 8:00 AM with all required materials.",
      slug: "/news-events/school-reopening"
    },
    {
      id: "event2",
      date: "12",
      month: "May",
      time: "10:00 AM",
      title: "Parent-Teacher Meeting",
      excerpt: "Form 1 and Form 2 parents are invited to discuss student progress and upcoming term activities.",
      slug: "/news-events/parent-teacher-meeting"
    },
    {
      id: "event3",
      date: "20",
      month: "May",
      time: "2:00 PM",
      title: "Science Fair",
      excerpt: "Annual science exhibition showcasing student projects from all grades. Parents and community members welcome.",
      slug: "/news-events/science-fair"
    }
  ];

  return (
    <div className="mb-8">
      <Tabs defaultValue="news" onValueChange={setActiveTab}>
        <div className="border-b border-gray-200">
          <TabsList className="h-auto bg-transparent p-0 justify-start">
            <TabsTrigger
              value="news"
              className={`px-4 py-3 font-medium rounded-none ${
                activeTab === "news"
                  ? "border-b-2 border-[#0a2463] text-[#0a2463]"
                  : "border-b-2 border-transparent text-gray-500 hover:text-[#0a2463] hover:border-[#0a2463]"
              }`}
            >
              Latest News
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className={`px-4 py-3 font-medium rounded-none ${
                activeTab === "events"
                  ? "border-b-2 border-[#0a2463] text-[#0a2463]"
                  : "border-b-2 border-transparent text-gray-500 hover:text-[#0a2463] hover:border-[#0a2463]"
              }`}
            >
              Upcoming Events
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="news" className="p-4 bg-white rounded-lg md:p-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <CardContent className="p-5">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold text-[#0a2463] mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link href={item.slug} className="text-[#0a2463] font-medium hover:underline flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="events" className="p-4 bg-white rounded-lg md:p-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventItems.map((item) => (
              <Card key={item.id} className="rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-[#0a2463] text-white text-center p-2 rounded-md w-16">
                      <span className="block text-xl font-bold">{item.date}</span>
                      <span className="block text-sm">{item.month}</span>
                    </div>
                    <span className="text-gray-500">{item.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a2463] mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link href={item.slug} className="text-[#0a2463] font-medium hover:underline flex items-center">
                    More Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
