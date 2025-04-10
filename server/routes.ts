import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { ZodError } from "zod";
import { insertApplicantSchema, insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Admissions application API endpoint
  app.post("/api/admissions/apply", async (req: Request, res: Response) => {
    try {
      const validatedData = insertApplicantSchema.parse(req.body);
      const applicant = await storage.createApplicant(validatedData);
      res.status(201).json({
        message: "Application submitted successfully",
        data: applicant
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        res.status(500).json({
          message: "Internal server error"
        });
      }
    }
  });

  // Contact form API endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({
        message: "Message sent successfully",
        data: message
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        res.status(500).json({
          message: "Internal server error"
        });
      }
    }
  });

  // Get all applications (for admin purposes)
  app.get("/api/admissions/applications", async (_req: Request, res: Response) => {
    try {
      const applications = await storage.getApplicants();
      res.status(200).json({
        data: applications
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error"
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact/messages", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json({
        data: messages
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
