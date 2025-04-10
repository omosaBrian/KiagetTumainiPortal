import { useState } from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const dummyNewsData = [
  {
    id: 1,
    type: 'news',
    title: 'National Science Competition Winners',
    content: 'Our team won first place in the National Science Competition, showcasing exceptional talent in physics and chemistry.',
    date: '2025-05-01',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 2,
    type: 'news',
    title: 'New Computer Lab Inauguration',
    content: "We're proud to announce the opening of our state-of-the-art computer laboratory with 50 new workstations.",
    date: '2025-04-15',
    imageUrl: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 3,
    type: 'news',
    title: 'Alumni Career Day Success',
    content: 'Over 30 alumni returned to share their career experiences and advice with our current students.',
    date: '2025-04-10',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80',
  }
];

const dummyEventsData = [
  {
    id: 4,
    type: 'event',
    title: 'Annual Sports Day',
    content: 'Join us for our annual sports day featuring athletics, team sports, and various competitions.',
    date: '2025-05-20',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 5,
    type: 'event',
    title: 'Parent-Teacher Meeting',
    content: 'An opportunity for parents to discuss their child's academic progress with our teachers.',
    date: '2025-05-15',
    imageUrl: 'https://images.unsplash.com/photo-1577896852418-3555d69dc4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80',
  }
];

const NewsEventsSection = () => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');

  // This would typically fetch from the backend
  const { data: newsEvents, isLoading, isError } = useQuery({
    queryKey: ['/api/news-events'],
    queryFn: async () => {
      // Simulating API response with dummy data
      await new Promise(resolve => setTimeout(resolve, 1000));
      return activeTab === 'news' ? dummyNewsData : dummyEventsData;
    },
    enabled: true,
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const handleTabChange = (tab: 'news' | 'events') => {
    setActiveTab(tab);
  };

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Latest News & Events</h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Stay informed about our school's activities, achievements, and upcoming events.
        </p>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8 border-b border-gray-300">
          <button 
            className={`news-tab ${activeTab === 'news' ? 'active' : 'text-gray-500'}`}
            onClick={() => handleTabChange('news')}
          >
            Latest News
          </button>
          <button 
            className={`news-tab ${activeTab === 'events' ? 'active' : 'text-gray-500'}`}
            onClick={() => handleTabChange('events')}
          >
            Upcoming Events
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="tab-content">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <Skeleton className="w-full h-48" />
                  <CardContent className="p-6">
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-6 w-full mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-4/5" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : isError ? (
            <div className="text-center py-12 text-gray-500">
              <p>Failed to load. Please try again later.</p>
            </div>
          ) : newsEvents && newsEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsEvents.map((item) => (
                <Card key={item.id} className="overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <div className="flex items-center text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      {activeTab === 'news' ? (
                        <Clock className="mr-2 h-3 w-3" />
                      ) : (
                        <Calendar className="mr-2 h-3 w-3" />
                      )}
                      {formatDate(item.date)}
                    </div>
                    <h3 className="text-xl font-bold font-heading mt-2 mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.content}</p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-4 px-6">
                    <Link 
                      href={`/news-events/${item.id}`} 
                      className="text-primary font-medium hover:text-primary/80 inline-flex items-center"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>No {activeTab} available at the moment. Please check back soon!</p>
            </div>
          )}
          
          <div className="text-center mt-10">
            <Button 
              asChild
              variant="default" 
              className="bg-primary hover:bg-primary/80 px-6 py-3"
            >
              <Link href="/news-events">
                View All {activeTab === 'news' ? 'News' : 'Events'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
