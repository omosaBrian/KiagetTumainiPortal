import { 
  applicants, 
  type Applicant, 
  type InsertApplicant,
  contactMessages,
  type ContactMessage,
  type InsertContact 
} from "@shared/schema";

export interface IStorage {
  // Applicant operations
  getApplicants(): Promise<Applicant[]>;
  getApplicant(id: number): Promise<Applicant | undefined>;
  createApplicant(applicant: InsertApplicant): Promise<Applicant>;
  
  // Contact messages operations
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  createContactMessage(message: InsertContact): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private applicants: Map<number, Applicant>;
  private contactMessages: Map<number, ContactMessage>;
  private applicantCurrentId: number;
  private contactCurrentId: number;

  constructor() {
    this.applicants = new Map();
    this.contactMessages = new Map();
    this.applicantCurrentId = 1;
    this.contactCurrentId = 1;
  }

  // Applicant methods
  async getApplicants(): Promise<Applicant[]> {
    return Array.from(this.applicants.values());
  }

  async getApplicant(id: number): Promise<Applicant | undefined> {
    return this.applicants.get(id);
  }

  async createApplicant(insertApplicant: InsertApplicant): Promise<Applicant> {
    const id = this.applicantCurrentId++;
    const now = new Date();
    
    // Create a clean applicant object with all required fields
    const applicant: Applicant = { 
      id, 
      studentName: insertApplicant.studentName,
      dateOfBirth: insertApplicant.dateOfBirth,
      gradeApplying: insertApplicant.gradeApplying,
      previousSchool: insertApplicant.previousSchool,
      parentName: insertApplicant.parentName,
      parentPhone: insertApplicant.parentPhone,
      parentEmail: insertApplicant.parentEmail,
      address: insertApplicant.address,
      additionalInfo: insertApplicant.additionalInfo || null,
      applicationDate: now,
      status: "pending" 
    };
    
    this.applicants.set(id, applicant);
    return applicant;
  }

  // Contact message methods
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }

  async createContactMessage(insertContact: InsertContact): Promise<ContactMessage> {
    const id = this.contactCurrentId++;
    const now = new Date();
    const contactMessage: ContactMessage = { 
      ...insertContact, 
      id, 
      createdAt: now,
      responded: false 
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
}

export const storage = new MemStorage();
