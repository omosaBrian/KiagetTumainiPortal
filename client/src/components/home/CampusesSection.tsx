import { Link } from 'wouter';

const campuses = [
  {
    id: 'main',
    name: 'Main Campus',
    image: 'https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/299172793_581407337010330_517400459563407425_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHgLBwFUP1aShtirHL7gWdNZ0F03qHkThdnQXTeoeROF_yvBU82sz5q5Q2bsmb9X9gI-wTsaK3t8Mbv6hwWPkPb&_nc_ohc=nvkFr2t4KOIQ7kNvwGGpQ4S&_nc_oc=AdndJbEeM-G5EJLPUgYbHME0XOx0SwlVeK71REDPArzxbTgPeqmQKhRoQSw0CmY6t8g&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=tul-xrStWqqruPKJQTq4WA&oh=00_AfHDGVA5-ZGLlW3cA_k3F71ZWC3wvN-nzw7fvUyAVQpaRQ&oe=67FEEC66',
    description: 'Our main campus features modern classrooms, science laboratories, and extensive sports facilities to support our comprehensive educational approach.'
  },
  {
    id: 'annex',
    name: 'tuition Campus',
    image: 'https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464464819_8538625366225987_8631993693029559043_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeENfKjaQlsmvDZopBJp2_XuNwaEKK6EKfQ3BoQoroQp9E0b894JcVXBy5YTE17jZyuRH43ryJwc6j2gaPi-adfy&_nc_ohc=TwmS45G4RCMQ7kNvwE6VvAv&_nc_oc=Adnr_cWiMeR_R9LH_0KJEqNmkNRhv18CBwBvgfAVX7A0kF7lUw4GZn_nMoImQP-F8Sk&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=y0peO_O1K0QsiMVN9ivu1g&oh=00_AfHfWtCm91cVcYr21obfk5IGQ8FC_b7cYTC-JpgPUPAllA&oe=67FEDFE2',
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
          Kiage Tumaini Boys High School educates our bright, young learners at our two expansive sites within Kisii County, Kenya.
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
