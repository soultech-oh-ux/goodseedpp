import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      
      res.json({ success: true, data: inquiry });
    } catch (error) {
      console.error("Error creating inquiry:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid data" 
      });
    }
  });

  app.get("/api/inquiries", async (_req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json({ success: true, data: inquiries });
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch inquiries" 
      });
    }
  });

  app.get("/api/news", async (_req, res) => {
    try {
      const news = await storage.getNews();
      res.json({ success: true, data: news });
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch news" 
      });
    }
  });

  app.get("/api/news/:id", async (req, res) => {
    try {
      const news = await storage.getNewsById(req.params.id);
      if (!news) {
        res.status(404).json({ 
          success: false, 
          error: "News not found" 
        });
        return;
      }
      res.json({ success: true, data: news });
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch news" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
