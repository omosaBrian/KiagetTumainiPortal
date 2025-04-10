import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// School events data based on school calendar
const upcomingEvents = [
  {
    id: "event1",
    date: "25",
    month: "Apr",
    year: "2025",
    time: "8:00 AM",
    title: "Term 2 Begins",
    excerpt: "All students are expected to report to school with all required materials for the new term.",
    location: "Both Campuses",
    slug: "/news-events/term-2-begins"
  },
  {
    id: "event2",
    date: "10",
    month: "May",
    year: "2025",
    time: "9:00 AM",
    title: "Kiage Tumaini Annual Sports Day",
    excerpt: "Annual inter-house sports competition featuring athletics, football, volleyball, and other games.",
    location: "Main Campus Sports Grounds",
    slug: "/news-events/annual-sports-day"
  },
  {
    id: "event3",
    date: "17",
    month: "Jun",
    year: "2025",
    time: "10:00 AM",
    title: "Form 4 Career Day",
    excerpt: "Professionals from various fields will mentor our Form 4 students on career choices and university selection.",
    location: "Annex Campus Hall",
    slug: "/news-events/career-day"
  }
];

export default function EventCalendar() {
  const currentMonth = "April-June 2025";

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-[#77995D]">Upcoming Events</h3>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">{currentMonth}</span>
        </div>
      </div>

      <div className="space-y-4">
        {upcomingEvents.map(event => (
          <Card key={event.id} className="border-l-4 border-[#9B2226] hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex">
                <div className="mr-4 bg-gray-100 text-center rounded p-2 w-16">
                  <span className="block text-xl font-bold text-[#9B2226]">{event.date}</span>
                  <span className="block text-sm text-gray-600">{event.month}</span>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-semibold text-[#77995D] mb-1">{event.title}</h4>
                  <div className="text-xs text-gray-500 flex items-center mb-1">
                    <Clock className="h-3 w-3 mr-1" /> {event.time}
                  </div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" /> {event.location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button 
          variant="outline" 
          size="sm"
          className="border-[#77995D] text-[#77995D] hover:bg-[#77995D] hover:text-white"
          asChild
        >
          <Link href="/news-events?tab=events">
            View All Events
          </Link>
        </Button>
      </div>
    </div>
  );
}