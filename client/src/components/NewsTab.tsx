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
      image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464344009_8534882446600279_5882791894603496916_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFJ-TBvVTZYjHVZPC6qThG09apqlIUBMsD1qmqUhQEywFGLJLnVXTaLYW3Pi8vmvCKYF6haeay_0G-XjL6cS-A3&_nc_ohc=cT-FeJXkXhQQ7kNvwGJo_Na&_nc_oc=AdmoypZGsBcMr6wA3y-_LNG4AE8_yrwpfLbE_l1iVlGoqJBw--Yj1aW1_rJ9fqjMxCc&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=AhGvInVEsZx_4ya-IAsEpQ&oh=00_AfFNF3q583ocmmwS3C5qyQCplG6x6jYarCPa-7BqVf4mnw&oe=67FEE86C",
      date: "April 12, 2024",
      title: "Math Competition Winners",
      excerpt: "Our students took first place in the county-wide mathematics competition, demonstrating exceptional problem-solving skills.",
      slug: "/news-events/math-competition"
    },
    {
      id: "news2",
      image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464207591_8534882223266968_5634401031224327264_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeENwKWz96ION-u-gD4BFYZKTv6dFNO0KeFO_p0U07Qp4c7huCiAsw0Fk1JPRq6oELfBXMkWy-V5XpDTQRjzOr0y&_nc_ohc=_KqVGiqAVCsQ7kNvwGyLRiv&_nc_oc=AdnqI68gD6jtWlq0cjkb5BXmt_ctEFIHTIoipTWizC1RuHW7mTKH6qaw3AZGTrnFUCE&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=h7AZxVSdG6wHyOEXO3v9fw&oh=00_AfHMHXnHWgW3t1I_U4SFkAYXBnJznH0DHoe3cDtGDQCY6w&oe=67FEE8FB",
      date: "March 28, 2025",
      title: "TERM TWO SECONDARY SCHOOL SPORTS EVENTS",
      excerpt: "We are excited to announce we will be participating in the 2025 National Secondary School Sports Competition Term 2..",
      slug: "/news-events/science-lab"
    },
    {
      id: "news3",
      image: "https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464207497_8534882236600300_2460176837166733438_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeEWLX5YdZL0RFeTXRFITGqU_Hvfm7SFAYD8e9-btIUBgGgUbHwe4qna_8M6RRHy_c3tQDAxpfmAqlXFJkzqICe9&_nc_ohc=PqWbZVv_7e8Q7kNvwF6gcjr&_nc_oc=Adl6vHPDtUmzI1H5Mjk4Q-3PuEHViF32y6RUaKqD68dd_IQtf3kBCSgkc-fj5BlY8FU&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=h7AZxVSdG6wHyOEXO3v9fw&oh=00_AfHMxzUncufwazOB9KGbLUhbhp_IoadNuUEhEbipaKZTxw&oe=67FF05BE",
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
                  ? "border-b-2 border-[#a30000] text-[#a30000]"
                  : "border-b-2 border-transparent text-gray-500 hover:text-[#a30000] hover:border-[#a30000]"
              }`}
            >
              Latest News
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className={`px-4 py-3 font-medium rounded-none ${
                activeTab === "events"
                  ? "border-b-2 border-[#a30000] text-[#a30000]"
                  : "border-b-2 border-transparent text-gray-500 hover:text-[#a30000] hover:border-[#a30000]"
              }`}
            >
              Upcoming Events
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="news" className="p-4 bg-white rounded-lg md:p-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-[#a30000]/70 font-medium mb-3">{item.date}</p>
                  <h3 className="text-xl font-bold text-[#a30000] mb-3 group-hover:text-[#173681] transition-colors">{item.title}</h3>
                  <p className="text-gray-600 mb-5 line-clamp-2">{item.excerpt}</p>
                  <Link href={item.slug} className="text-[#a30000] font-medium hover:text-[#173681] flex items-center transition-colors">
                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                    <div className="bg-[#a30000] text-white text-center p-2 rounded-md w-16">
                      <span className="block text-xl font-bold">{item.date}</span>
                      <span className="block text-sm">{item.month}</span>
                    </div>
                    <span className="text-gray-500">{item.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#a30000] mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link href={item.slug} className="text-[#a30000] font-medium hover:underline flex items-center">
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