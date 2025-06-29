import type { Express, Request as ExpressRequest, Response } from "express";
import { createServer, type Server } from "http";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Router } from "express";
import { z } from "zod";
import nodemailer from "nodemailer";

// Extend Request type to include user
interface AuthRequest extends ExpressRequest {
  user?: jwt.JwtPayload;
}

const router = Router();

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

// Authentication middleware
const authMiddleware = (req: AuthRequest, res: Response, next: Function) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret");
    if (typeof decoded === "string") {
      throw new Error("Invalid token payload");
    }
    
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form endpoint
  app.post("/api/contact", async (req: ExpressRequest, res: Response) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);

      // Create transporter for sending emails
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'fianawahyulaura@gmail.com',
          pass: process.env.EMAIL_PASS || ''
        }
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER || 'fianawahyulaura@gmail.com',
        to: 'fianawahyulaura@gmail.com',
        subject: `Portfolio Contact: ${validatedData.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again later." 
        });
      }
    }
  });

  // Admin authentication endpoints
  app.post("/api/admin/login", async (req: ExpressRequest, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: "Username and password are required" });
    }

    try {
      // Simple hardcoded credentials
      if (username === "admin" && password === "password123") {
        return res.json({ success: true });
      }

      return res.status(401).json({ success: false, message: "Invalid credentials" });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Protected admin routes
  app.get("/api/admin/check", (req: ExpressRequest, res: Response) => {
    res.json({ success: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}

export default router;
