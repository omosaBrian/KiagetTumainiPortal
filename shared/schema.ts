import { pgTable, text, serial, integer, boolean, date, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const applicants = pgTable("applicants", {
  id: serial("id").primaryKey(),
  studentName: text("student_name").notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
  gradeApplying: text("grade_applying").notNull(),
  previousSchool: text("previous_school").notNull(),
  parentName: text("parent_name").notNull(),
  parentPhone: text("parent_phone").notNull(),
  parentEmail: text("parent_email").notNull(),
  address: text("address").notNull(),
  additionalInfo: text("additional_info"),
  applicationDate: timestamp("application_date").defaultNow(),
  status: text("status").default("pending").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  responded: boolean("responded").default(false),
});

export const insertApplicantSchema = createInsertSchema(applicants).omit({
  id: true,
  applicationDate: true,
  status: true,
});

export const insertContactSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
  responded: true,
});

export type InsertApplicant = z.infer<typeof insertApplicantSchema>;
export type Applicant = typeof applicants.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
