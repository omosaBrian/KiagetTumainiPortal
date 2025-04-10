import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const AnnouncementBanner = () => {
  return (
    <section className="bg-primary text-white py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1">
          <p className="text-sm md:text-base">
            <strong>School Reopening:</strong> School reopens for Term 2 on May 5th, 2025. All students are expected to report by 8:00 AM.
          </p>
        </div>
        <Link 
          href="/news-events" 
          className="mt-2 md:mt-0 text-sm text-secondary hover:text-yellow-300 transition whitespace-nowrap flex items-center"
        >
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default AnnouncementBanner;
