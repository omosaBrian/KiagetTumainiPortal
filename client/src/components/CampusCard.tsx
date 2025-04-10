import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface CampusCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function CampusCard({ image, title, description, link }: CampusCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          href={link}
          className="inline-block bg-[#0a2463] hover:bg-[#173681] text-white font-medium px-4 py-2 rounded-md transition duration-300 transform hover:-translate-y-1 hover:shadow-md flex items-center w-auto"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
