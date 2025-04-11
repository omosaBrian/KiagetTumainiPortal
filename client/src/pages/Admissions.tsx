import { Button } from "@/components/ui/button";
import AdmissionForm from "@/components/AdmissionForm";

export default function Admissions() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-[#0a2463] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-white mb-4">
              Apply for Admission
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Start your journey with Kiage Tumaini Boy's High School. Our application process is designed to be straightforward and informative.
            </p>
          </div>
        </div>
      </section>
      
      {/* Application Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto -mt-28 relative z-10">
            <div className="mb-8">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">
                Admission Application Form
              </h3>
              <p className="text-gray-600 mb-6">
                Please fill out the form below to begin the application process. Fields marked with * are required.
              </p>
            </div>
            
            <AdmissionForm />
          </div>
        </div>
      </section>
      
      {/* Admission Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Admission Process
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0a2463] rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-2">Apply Online</h3>
              <p className="text-gray-600">
                Complete the online application form with all required information.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#0a2463] rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-2">Document Submission</h3>
              <p className="text-gray-600">
                Submit required documents including previous academic records.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#0a2463] rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-2">Assessment</h3>
              <p className="text-gray-600">
                Students may be required to take entrance assessments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#0a2463] rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-[#0a2463] mb-2">Enrollment</h3>
              <p className="text-gray-600">
                Upon acceptance, complete the enrollment process and fees payment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fee Structure Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Fee Structure
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-[#0a2463] text-white p-4">
                <h3 className="text-xl font-bold">Form 1 & Form 2 Fees</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Tuition & Boarding</span>
                    <span>KSh 45,000 per term</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Development Fund</span>
                    <span>KSh 5,000 one-time</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Activity Fee</span>
                    <span>KSh 2,500 per year</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Caution Money</span>
                    <span>KSh 2,000 refundable</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#0a2463] text-white p-4">
                <h3 className="text-xl font-bold">Form 3 & Form 4 Fees</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Tuition & Boarding</span>
                    <span>KSh 48,000 per term</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Development Fund</span>
                    <span>KSh 5,000 one-time</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Activity Fee</span>
                    <span>KSh 2,500 per year</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">KCSE Examination Fee</span>
                    <span>KSh 7,500 in Form 4</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Caution Money</span>
                    <span>KSh 2,000 refundable</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-sm text-gray-600">
              * All fees are subject to change. Please contact the school administration for the most current fee structure.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0a2463] mb-2">When is the application deadline?</h3>
              <p className="text-gray-600">
                Applications for the new academic year typically open in September and close in December. 
                However, we accept applications throughout the year for mid-term admissions based on availability.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0a2463] mb-2">What documents are required for admission?</h3>
              <p className="text-gray-600">
                Required documents include previous school reports, birth certificate, 
                KCPE certificate (for Form 1 applicants), transfer letter (for mid-term admissions), 
                and two passport-sized photographs.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0a2463] mb-2">Are there scholarships available?</h3>
              <p className="text-gray-600">
                Yes, we offer a limited number of scholarships based on academic excellence, 
                financial need, and special talents. Contact the admissions office for more information 
                on scholarship applications and deadlines.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0a2463] mb-2">Can parents visit the school?</h3>
              <p className="text-gray-600">
                Yes, we encourage prospective parents and students to visit our campus. 
                School tours can be arranged by contacting our admissions office to schedule an appointment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">Have More Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our admissions team is here to help you through every step of the application process.
          </p>
          
          <Button 
            variant="default" 
            className="bg-[#0a2463] hover:bg-[#173681] text-white transition duration-300 transform hover:-translate-y-1 hover:shadow-md"
            asChild
          >
            <a href="mailto:admissions@kiagetumaini.ac.ke">Contact Admissions Office</a>
          </Button>
        </div>
      </section>
    </>
  );
}
