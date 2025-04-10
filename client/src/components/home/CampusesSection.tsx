import { Link } from 'wouter';

const campuses = [
  {
    id: 'main',
    name: 'Main Campus',
    image: 'https://images.unsplash.com/photo-1543505298-b8be9b52a21a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Our main campus features modern classrooms, science laboratories, and extensive sports facilities to support our comprehensive educational approach.'
  },
  {
    id: 'annex',
    name: 'Annex Campus',
    image: 'https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Our Annex campus provides additional learning spaces, boarding facilities, and specialized resources for junior students in a nurturing environment.'
  }
];

const CampusesSection = () => {
  return (
    <section id="campuses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Our School Campuses</h2>
        <div className="section-divider mx-auto"></div>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Tumaini Kiage Boys High School educates our bright, young learners at our two expansive sites within Kisii County, Kenya.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {campuses.map((campus) => (
            <div key={campus.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <img 
                src={campus.image}
                alt={campus.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold font-heading text-primary mb-4">{campus.name}</h3>
                <p className="text-gray-600 mb-6">{campus.description}</p>
                <Link 
                  href={`/campus/${campus.id}`}
                  className="inline-block px-5 py-2 bg-primary text-white font-medium rounded hover:bg-primary/80 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusesSection;
