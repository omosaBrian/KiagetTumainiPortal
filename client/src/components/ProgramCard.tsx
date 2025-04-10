import { Link } from "wouter";

interface ProgramCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function ProgramCard({ image, title, description, link }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-[#0a2463] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link 
            href={link}
            className="bg-white text-[#0a2463] px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#0a2463] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
