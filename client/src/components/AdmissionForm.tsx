import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertApplicantSchema } from "@shared/schema";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

const formSchema = insertApplicantSchema.extend({
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function AdmissionForm() {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      dateOfBirth: "",
      gradeApplying: "",
      previousSchool: "",
      parentName: "",
      parentPhone: "",
      parentEmail: "",
      address: "",
      additionalInfo: "",
      acceptTerms: false,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: Omit<FormData, "acceptTerms">) => {
      const response = await apiRequest("POST", "/api/admissions/apply", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: "Your application has been submitted successfully. We will contact you soon.",
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
    // Remove the acceptTerms field as it's not needed in the backend
    const { acceptTerms, ...applicationData } = data;
    mutate(applicationData);
  }

  if (formSubmitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#0a2463] mb-4">Thank You for Your Application!</h3>
        <p className="text-gray-600 mb-4">Your application has been received. Our admissions team will review your application and contact you shortly.</p>
        <Button 
          type="button" 
          onClick={() => setFormSubmitted(false)}
          className="bg-[#0a2463] hover:bg-[#173681]"
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="studentName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Student's Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full name" {...field} className="focus:ring-[#0a2463]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Date of Birth *</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="focus:ring-[#0a2463]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gradeApplying"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Grade Applying For *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="focus:ring-[#0a2463]">
                      <SelectValue placeholder="Select Grade" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="form1">Form 1</SelectItem>
                    <SelectItem value="form2">Form 2</SelectItem>
                    <SelectItem value="form3">Form 3</SelectItem>
                    <SelectItem value="form4">Form 4</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="previousSchool"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Previous School *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter previous school" {...field} className="focus:ring-[#0a2463]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="parentName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Parent/Guardian Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter parent/guardian name" {...field} className="focus:ring-[#0a2463]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="parentPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Parent/Guardian Phone *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone number" {...field} className="focus:ring-[#0a2463]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="parentEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Parent/Guardian Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email" {...field} className="focus:ring-[#0a2463]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Home Address *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter home address" {...field} className="focus:ring-[#0a2463]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="additionalInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">Additional Information</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Enter any additional information or special requirements" 
                  className="resize-none focus:ring-[#0a2463]"
                  rows={4} 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-[#0a2463] data-[state=checked]:border-[#0a2463]"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-gray-700 text-sm">
                  I certify that the information provided above is accurate and complete. I understand that any false or misleading information may result in the rejection of this application. *
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button 
            type="submit" 
            disabled={isPending}
            className="bg-[#d00000] hover:bg-red-700 text-white font-medium px-8 py-3 transition duration-300 transform hover:-translate-y-1 hover:shadow-md"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
