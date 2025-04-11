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
                Established in 2005, Kiage Tumaini Boys High School has grown from humble beginnings to become one of the most respected educational institutions in Kenya. The school was founded with a vision to provide quality education that develops young men intellectually, physically, and morally.
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
                src="https://web.facebook.com/photo/?fbid=581407350343662&set=a.581407310343666" 
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
                <h3 className="text-xl font-bold text-darkred mb-1"> {/* Changed text color to dark red */}Dr. Kiage Joseph,Doctor of Philosophy,PhD</h3>
                <p className="text-gray-500 mb-4">Director</p>
                <p className="text-gray-700 mb-4">
                  <img src="https://web.facebook.com/photo/?fbid=1074103732678225&set=pb.100054232071372.-2207520000" alt="Dr. Kiage Joseph" className="w-16 h-16 rounded-full mx-auto mb-2" />
                  Dr. Kiage brings years of experience and expertise to our school's leadership.
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
                <h3 className="text-xl font-bold text-darkred mb-1"> {/* Changed text color to dark red */}Mr.Patrice,M.ED</h3>
                <p className="text-gray-500 mb-4">Principal</p>
                <p className="text-gray-700 mb-4">
                  Mrs.Patrice provides leadership, direction, and coordination within the school, ensuring effective educational programs and promoting the improvement of teaching and learning.
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
                <h3 className="text-xl font-bold text-darkred mb-1"> {/* Changed text color to dark red */}Mrs.Omweri</h3>
                <p className="text-gray-500 mb-4">Deputy Principal, Academics</p>
                <p className="text-gray-700 mb-4">
                  <img src="https://web.facebook.com/photo/?fbid=1074103732678225&set=pb.100054232071372.-2207520000" alt="Mrs.Omweri" className="w-16 h-16 rounded-full mx-auto mb-2" />
                  Mrs.Omweri brings years of experience and expertise to our school's leadership and excellence development.
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
                  <span>98% pass rate in the 2022,2023,2024 KCSE examinations</span>
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
                  <span>champions in soccer</span>
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
                src="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464477996_8534882456600278_362531598242551108_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHQ1juip5VEyWePVHxJ_iq9nL3xlR-_ZZScvfGVH79llN8vwDTB8kFvnk1GhnbEZ_UGG2KQQqLaQtbx5kVd23W9&_nc_ohc=9kmsHumq21kQ7kNvwHMnlF-&_nc_oc=AdlCBE_SPHiawTNBL1Bt9bRe6O3KYxmX81z6ecGDoRvk-Tid_bD9nsOtGsWgXBbeZwQ&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=DqPWRdfETfdud_p_KlJhPw&oh=00_AfGOtUSXUbVrGJeNrQugEs1kXiM9xMqBUZT1pxLu_0h_Hg&oe=67FEEBAD" 
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
                src="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464689655_8563082183780305_8156267925309861272_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHL1VY0wDEQs9ii1n4gfrULaWFn1UmocOBpYWfVSahw4PJgBSTOhb_2aQMXCkTIZq3GUxDBW4x2BHKOrslf1Cxi&_nc_ohc=lYeoeszAKJkQ7kNvwFKDNtJ&_nc_oc=AdnfKsk3DzoYWpFY1Nya3UKaNT0McRNfkf0ESNlHTTXwu68V-cBPvhtYXY9Qj8ic1D0&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=3OowCcSOQPRXmb8_bWJ3bg&oh=00_AfHlmtp8jJXQiZ1hYlDILTvKNAZXIRRz0UYgLIGNqu1tnw&oe=67FEDC1B" 
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
                src="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/464207591_8534882223266968_5634401031224327264_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeENwKWz96ION-u-gD4BFYZKTv6dFNO0KeFO_p0U07Qp4c7huCiAsw0Fk1JPRq6oELfBXMkWy-V5XpDTQRjzOr0y&_nc_ohc=_KqVGiqAVCsQ7kNvwGyLRiv&_nc_oc=AdnqI68gD6jtWlq0cjkb5BXmt_ctEFIHTIoipTWizC1RuHW7mTKH6qaw3AZGTrnFUCE&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&_nc_gid=34m2jX3JUWeUWioZDaE7CA&oh=00_AfHmDOQBLdgc9Jbt9hCd6BIrFyfEG9Tf1VbnyKvbsHMvhg&oe=67FEE8FB" 
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
          <h2 className="text-3xl font-['Playfair_Display'] font-bold text-darkred mb-4">
            Join Our School Community
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto" style={{ backgroundColor: '#000', color: '#fff', padding: '10px', borderRadius: '5px', fontFamily: 'Arial' }}> {/* Changed text color to white */}
            Experience the excellence of Kiage Tumaini Boys High School. Apply now for admission or contact us to learn more.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* Button with dark red text */}
            <Button 
              variant="default" 
              className="bg-[#ffc857] hover:bg-[#ffe09a] text-darkred font-bold"
              asChild
            >
              <Link href="/admissions">Apply for Admission</Link>
            </Button>

            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-darkred" /* Changed text color to dark red */
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