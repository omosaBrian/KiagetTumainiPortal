import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertApplicationSchema, insertInquirySchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check route
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Application submission route
  app.post("/api/applications", async (req, res) => {
    try {
      const validatedData = insertApplicationSchema.parse(req.body);
      const application = await storage.createApplication(validatedData);
      res.status(201).json({
        success: true,
        message: "Application submitted successfully",
        data: application
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        console.error("Application submission error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to submit application"
        });
      }
    }
  });

  // Get all applications (would be protected in a real application)
  app.get("/api/applications", async (_req, res) => {
    try {
      const applications = await storage.getAllApplications();
      res.json({ 
        success: true,
        data: applications
      });
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve applications"
      });
    }
  });

  // Inquiry/Contact form submission
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json({
        success: true,
        message: "Inquiry submitted successfully",
        data: inquiry
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false, 
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        console.error("Inquiry submission error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to submit inquiry"
        });
      }
    }
  });

  // Get news and events
  app.get("/api/news-events", async (req, res) => {
    try {
      const type = req.query.type as string | undefined; // 'news', 'event', or undefined for all
      const newsEvents = await storage.getNewsEvents(type);
      res.json({
        success: true,
        data: newsEvents
      });
    } catch (error) {
      console.error("Error fetching news/events:", error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve news and events"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
