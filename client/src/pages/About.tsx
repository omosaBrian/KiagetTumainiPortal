import { Link } from "wouter";
import { ArrowRight, Book, Award, Users, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-[#a7d1ab] relative"> {/* Changed background color to a pastel green */}
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-darkred mb-4"> {/* Changed text color to dark red */}
              About Kiage Tumaini Boys High School
            </h1>
            <p className="text-white max-w-3xl mx-auto"> {/* Changed text color to white */}
              Discover the history, values, and excellence that make Kiage Tumaini Boys High School a premier educational institution in Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-darkred mb-4"> {/* Changed text color to dark red */}
                Our History
              </h2>
              <div className="w-20 h-1 bg-[#ffc857] mb-6"></div>
              <p className="text-gray-700 mb-6">
                Established in 1970, Kiage Tumaini Boys High School has grown from humble beginnings to become one of the most respected educational institutions in Kisii County, Kenya. The school was founded with a vision to provide quality education that develops young men intellectually, physically, and morally.
              </p>
              <p className="text-gray-700 mb-6">
                Over the decades, our school has expanded its facilities, enhanced its curriculum, and strengthened its teaching staff to maintain educational excellence. What began as a small community school has evolved into a comprehensive educational institution serving over a thousand students from diverse backgrounds across the region.
              </p>
              <p className="text-gray-700 mb-6">
                Throughout our history, we have maintained a tradition of academic excellence, producing graduates who have gone on to succeed in various fields including medicine, engineering, law, business, and public service at both national and international levels.
              </p>
            </div>

            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Kiage Tumaini Boys High School historic building" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white"> {/* Changed background color */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-darkred mb-4"> {/* Changed text color to dark red */}
              Our Mission & Vision
            </h2>
            <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-darkred text-white rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto"> {/* Changed background color to dark red */}
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-darkred mb-4 text-center"> {/* Changed text color to dark red */}Our Mission</h3>
              <p className="text-gray-700 text-center">
                To provide a comprehensive, character-focused education that develops young men academically, 
                physically, and morally, preparing them to be responsible citizens and leaders who contribute 
                positively to society while upholding the values of integrity, excellence, and service.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-darkred text-white rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto"> {/* Changed background color to dark red */}
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-darkred mb-4 text-center"> {/* Changed text color to dark red */}Our Vision</h3>
              <p className="text-gray-700 text-center">
                To be a premier educational institution that nurtures each student's unique potential, 
                creates lifelong learners, and serves as a beacon of academic excellence and character 
                development in Kenya and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-darkred text-center mb-4"> {/* Changed text color to dark red */}
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-darkred text-white rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto"> {/* Changed background color to dark red */}
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-darkred mb-3"> {/* Changed text color to dark red */}Excellence</h3>
              <p className="text-gray-700">
                We strive for the highest standards in all we do, encouraging our students to pursue 
                excellence in academics, sports, and character development.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-darkred text-white rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto"> {/* Changed background color to dark red */}
                <Book className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-darkred mb-3"> {/* Changed text color to dark red */}Integrity</h3>
              <p className="text-gray-700">
                We instill the values of honesty, transparency, and accountability in our students, 
                teaching them to be principled young men in all circumstances.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="bg-darkred text-white rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto"> {/* Changed background color to dark red */}
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-darkred mb-3"> {/* Changed text color to dark red */}Community</h3>
              <p className="text-gray-700">
                We foster a sense of belonging and responsibility, teaching our students to 
                contribute positively to their communities and the broader society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Leadership */}
      <section className="py-16 bg-white"> {/* Changed background color */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-darkred text-center mb-4"> {/* Changed text color to dark red */}
            School Leadership
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="bg-darkred text-white text-3xl font-bold rounded-full w-24 h-24 flex items-center justify-center"> {/* Changed background color to dark red */}
                  JP
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-darkred mb-1"> {/* Changed text color to dark red */}John Patrice, M.Ed</h3>
                <p className="text-gray-500 mb-4">Principal</p>
                <p className="text-gray-700 mb-4">
                  With over 25 years in education, Mr. Patrice brings extensive experience and visionary leadership to our school.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="bg-darkred text-white text-3xl font-bold rounded-full w-24 h-24 flex items-center justify-center"> {/* Changed background color to dark red */}
                  MO
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-darkred mb-1"> {/* Changed text color to dark red */}Mary Omweri, BSc</h3>
                <p className="text-gray-500 mb-4">Deputy Principal, Academics</p>
                <p className="text-gray-700 mb-4">
                  Mrs. Omweri oversees our academic programs and ensures excellence in curriculum delivery and student achievement.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="bg-darkred text-white text-3xl font-bold rounded-full w-24 h-24 flex items-center justify-center"> {/* Changed background color to dark red */}
                  SO
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-darkred mb-1"> {/* Changed text color to dark red */}Samuel Omwenga, MA</h3>
                <p className="text-gray-500 mb-4">Deputy Principal, Administration</p>
                <p className="text-gray-700 mb-4">
                  Mr. Omwenga manages school operations, student welfare, and facilities to provide a conducive learning environment.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden"> {/* Added new leadership position */}
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="bg-darkred text-white text-3xl font-bold rounded-full w-24 h-24 flex items-center justify-center"> {/* Changed background color to dark red */}
                  KK
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-darkred mb-1"> {/* Changed text color to dark red */}Dr. Kiage Joseph</h3>
                <p className="text-gray-500 mb-4">Director</p>
                <p className="text-gray-700 mb-4">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-darkred text-center mb-4"> {/* Changed text color to dark red */}
            Our Achievements
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-darkred mb-4"> {/* Changed text color to dark red */}Academic Excellence</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-5 h-5 mt-1 mr-3"></div>
                  <span>Consistently ranked among the top 50 schools in Kenya in KCSE results</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-5 h-5 mt-1 mr-3"></div>
                  <span>98% pass rate in the 2023 KCSE examinations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-5 h-5 mt-1 mr-3"></div>
                  <span>Top performing school in mathematics and sciences in Kisii County</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-5 h-5 mt-1 mr-3"></div>
                  <span>Multiple national champions in science and mathematics competitions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-darkred mb-4"> {/* Changed text color to dark red */}Co-Curricular Excellence</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-5 h-5 mt-1 mr-3"></div>
                  <span>Regional champions in soccer for three consecutive years</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-5 h-5 mt-1 mr-3"></div>
                  <span>National level performance in music and drama festivals</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-5 h-5 mt-1 mr-3"></div>
                  <span>Award-winning debate team with national recognition</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#ffc857] rounded-full w-5 h-5 mt-1 mr-3"></div>
                  <span>Successful environmental conservation and community service programs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <StatCard count={98} label="KCSE Pass Rate" suffix="%" />
            <StatCard count={53} label="Years of Excellence" />
            <StatCard count={45} label="Expert Teachers" suffix="+" />
            <StatCard count={1200} label="Students" suffix="+" />
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-16 bg-white"> {/* Changed background color */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-darkred text-center mb-4"> {/* Changed text color to dark red */}
            Our Facilities
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80" 
                alt="Modern Classrooms" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-darkred mb-2"> {/* Changed text color to dark red */}Modern Classrooms</h3>
                <p className="text-gray-700 mb-4">
                  Spacious, well-lit classrooms equipped with modern teaching aids and multimedia facilities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80" 
                alt="Science Laboratories" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-darkred mb-2"> {/* Changed text color to dark red */}Science Laboratories</h3>
                <p className="text-gray-700 mb-4">
                  Well-equipped physics, chemistry, and biology labs that support practical learning.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80" 
                alt="Sports Facilities" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-darkred mb-2"> {/* Changed text color to dark red */}Sports Facilities</h3>
                <p className="text-gray-700 mb-4">
                  Extensive sports grounds, including soccer fields, basketball courts, and athletic tracks.
                </p>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-darkred"> {/* Changed background color to dark red */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-4">
            Join Our School Community
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto"> {/* Changed text color to white */}
            Experience the excellence of Kiage Tumaini Boys High School. Apply now for admission or contact us to learn more.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              className="bg-[#ffc857] hover:bg-[#ffe09a] text-darkred font-bold" {/* Changed text color to dark red */}
              asChild
            >
              <Link href="/admissions">Apply for Admission</Link>
            </Button>

            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-darkred" {/* Changed text color to dark red */}
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}