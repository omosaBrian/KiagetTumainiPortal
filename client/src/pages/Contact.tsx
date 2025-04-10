import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Loader2,
  Check
} from "lucide-react";

const formSchema = insertContactSchema;
type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully. We will get back to you soon.",
        variant: "default",
      });
      form.reset();
      setFormSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: FormData) {
    mutate(data);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-[#0a2463] relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              We're here to answer any questions you may have about our school, admissions process, or programs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto -mt-24 relative z-10">
            {/* Contact Information */}
            <div className="bg-[#0a2463] rounded-lg shadow-xl p-8 text-white">
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-6">Get In Touch</h2>
              <p className="mb-8">
                Have questions or need more information? Reach out to us through any of the following channels:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-4 h-5 w-5" />
                  <div>
                    <h3 className="font-bold mb-1">School Address</h3>
                    <p>Kitutu Chache South Sub County,<br/>Kisii County, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mt-1 mr-4 h-5 w-5" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p>+254 700 123 456</p>
                    <p>+254 735 789 012</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mt-1 mr-4 h-5 w-5" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p>info@kiagetumaini.ac.ke</p>
                    <p>admissions@kiagetumaini.ac.ke</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mt-1 mr-4 h-5 w-5" />
                  <div>
                    <h3 className="font-bold mb-1">Office Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 8:00 AM - 12:00 PM</p>
                    <p>Sunday & Public Holidays: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a2463] mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">Thank you for reaching out. We will get back to you as soon as possible.</p>
                  <Button 
                    type="button" 
                    onClick={() => setFormSubmitted(false)}
                    className="bg-[#0a2463] hover:bg-[#173681]"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} className="focus:ring-[#0a2463]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Your email address" {...field} className="focus:ring-[#0a2463]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Phone *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} className="focus:ring-[#0a2463]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="resize-none focus:ring-[#0a2463]"
                              rows={5} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="bg-[#0a2463] hover:bg-[#173681] w-full"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0a2463] text-center mb-4">
            Visit Our Campus
          </h2>
          <div className="w-20 h-1 bg-[#ffc857] mx-auto mb-12"></div>
          
          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 h-96 flex items-center justify-center">
                <p className="text-gray-700">
                  Map of Tumaini Kiage Boys High School<br/>
                  (Google Maps integration would appear here)
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a2463] mb-4">Getting Here</h3>
              <p className="text-gray-600 mb-2">
                Tumaini Kiage Boys High School is located in Kitutu Chache South Sub County, Kisii County, 
                approximately 10 kilometers from Kisii Town center.
              </p>
              <p className="text-gray-600">
                <span className="font-medium">By Public Transport:</span> Take a matatu from Kisii Town to Kitutu Chache. 
                The school is clearly marked with signage along the main road.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Book a Tour Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">
            Want to Visit Our School?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We invite prospective parents and students to book a tour of our campus to experience 
            the learning environment firsthand.
          </p>
          
          <Button 
            variant="default" 
            size="lg"
            className="bg-[#0a2463] hover:bg-[#173681] text-white font-bold transition duration-300 transform hover:-translate-y-1 hover:shadow-md"
          >
            Book a Campus Tour
          </Button>
        </div>
      </section>
    </>
  );
}
