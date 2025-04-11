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
              src="https://scontent.fnbo13-1.fna.fbcdn.net/v/t1.6435-9/45288703_1950747978347125_3936876227352068096_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGoWCXCi7EGUO5qGeJ3OzYP9F6HSlbGIuf0XodKVsYi59JuSokirfcUilcWQVXRFkwOZPPTNHgWF6G6Ph2nRMVH&_nc_ohc=i4TTkTprKU8Q7kNvwH79dws&_nc_oc=AdnMjD4favbScjVrnC_blvngO3QnmUz8-uKYeqClzEZIdFkStYIcWXgeejbg_atr1LI&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=fHwzLET6rHh2S-TgJ-0Tuw&oh=00_AfE1nVZno2F0Jvw1GZZgBpJbUT9uzKfAi-nNJbpuEkTywA&oe=6820A0E1" 
              alt="Kiage Tumaini Boy's High School students in classroom" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="section-heading">Welcome to Kiage Tumaini Boy's High School</h2>
            <div className="section-divider"></div>
            <p className="text-gray-700 mb-6">
              Established in 2005, Kiage Tumaini Boy's High School is a premier educational institution located in Kitutu Chache South Sub County, Kisii County, in the Nyanza region of Kenya. Our school provides exceptional modern education with a comprehensive curriculum.
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
