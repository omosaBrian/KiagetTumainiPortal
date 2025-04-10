import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface AcademicStageProps {
  image: string;
  title: string;
  ageRange: string;
  description: string;
  link: string;
}

export default function AcademicStage({ image, title, ageRange, description, link }: AcademicStageProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-3">{title}</h3>
        <p className="text-gray-500 mb-4">{ageRange}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          href={link}
          className="text-[#0a2463] font-medium hover:underline flex items-center"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
