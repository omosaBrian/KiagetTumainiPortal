import { Link } from 'wouter';

const AboutSection = () => {
  const stats = [
    { value: '98%', label: 'KCSE Pass Rate' },
    { value: '53', label: 'Years of Excellence' },
    { value: '45+', label: 'Expert Teachers' },
    { value: '1200+', label: 'Students' },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Tumaini Kiage Boys High School students in classroom" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="section-heading">Welcome to Tumaini Kiage Boys High School</h2>
            <div className="section-divider"></div>
            <p className="text-gray-700 mb-6">
              Established in 1970, Tumaini Kiage Boys High School is a premier educational institution located in Kitutu Chache South Sub County, Kisii County, in the Nyanza region of Kenya. Our school provides exceptional modern education with a comprehensive curriculum.
            </p>
            <p className="text-gray-700 mb-8">
              Every student is inherently unique. Therefore, at our school, our experienced educators apply a personalized teaching approach to meet the needs of each individual. The effectiveness of our student-centered methodology is outstanding. Our students achieve excellent KCSE results and embody a strong value system that unlocks their full potential, preparing them for lifelong success.
            </p>
            <Link 
              href="/about" 
              className="inline-block px-6 py-3 bg-primary text-white font-bold rounded hover:bg-primary/80 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
