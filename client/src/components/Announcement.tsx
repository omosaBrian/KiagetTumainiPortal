import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Announcement() {
  return (
    <section className="bg-[#800000] py-4 mt-[4.5rem]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 text-white mb-3 md:mb-0">
          <span className="font-bold mr-2">School Reopening:</span>
          <span>School reopens for Term 2 on May 5th, 2025. All students are expected to report by 8:00 AM.</span>
        </div>
        <Link 
          href="/news-events" 
          className="text-white border border-white hover:bg-white hover:text-[#a30000] px-4 py-1 rounded-sm transition duration-300 text-sm flex items-center"
        >
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
