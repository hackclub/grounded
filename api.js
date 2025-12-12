import express from "express";
import Airtable from "airtable";
import camelcase from "camelcase";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

console.log("🚀 Starting API server initialization...");
console.log("📦 Imports loaded successfully");

console.log("🔧 Loading environment configuration...");
dotenv.config();
console.log("✅ Environment variables loaded");

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base("appn5LTtzmsgmboWY");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("📁 Directory paths:");
console.log("  - __filename:", __filename);
console.log("  - __dirname:", __dirname);

console.log("🌐 Creating Express app...");
const app = express();
const PORT = process.env.PORT || 3000;
console.log("✅ Express app created, PORT:", PORT);

// Serve frontend from Vite build
console.log("📁 Setting up static file serving...");
const staticPath = path.join(__dirname, "dist");
console.log("  - Static path:", staticPath);
try {
  app.use(express.static(staticPath));
  console.log("✅ Static file serving configured successfully");
} catch (error) {
  console.error("❌ Error setting up static file serving:", error);
  throw error;
}

const camelizeObject = (obj) => {
  Object.keys(obj).forEach((key) => {
    obj[camelcase(key)] = obj[key];
    if (key !== camelcase(key)) {
      delete obj[key];
    }
  });
  return obj;
};

console.log("🛠️ Defining API routes...");

console.log("📍 Setting up /api/parts route...");
try {
  app.get("/api/parts", async (req, res) => {
    console.log("📥 GET /api/parts - Request received");
    console.log("  - Request headers:", JSON.stringify(req.headers, null, 2));
    console.log("  - Request query:", JSON.stringify(req.query, null, 2));
    
    try {
      console.log("🔗 Connecting to Airtable...");
      console.log("  - API Key present:", !!process.env.AIRTABLE_API_KEY);
      console.log("  - API Key length:", process.env.AIRTABLE_API_KEY?.length || 0);
      console.log("  - Base ID: appn5LTtzmsgmboWY");
      console.log("  - Table Name: Parts");

      console.log("📊 Fetching records from Airtable...");
      const records = await base("Parts").select().all();
      console.log(`✅ Retrieved ${records.length} records from Airtable`);
      
      console.log("🔄 Processing records...");
      const parts = records.map((record, index) => {
        console.log(`  - Processing record ${index + 1}/${records.length}`);
        return camelizeObject(record.fields);
      });
      console.log(`✅ Processed ${parts.length} parts`);

      console.log("📤 Sending response...");
      res.status(200).json(parts);
      console.log("✅ Response sent successfully");
    } catch (err) {
      console.error("❌ Error in /api/parts route:", err);
      console.error("  - Error message:", err.message);
      console.error("  - Error stack:", err.stack);
      res.status(500).json({ error: err.message });
    }
  });
  console.log("✅ /api/parts route defined successfully");
} catch (error) {
  console.error("❌ Error defining /api/parts route:", error);
  throw error;
}

// Catch-all route to serve index.html for SPA routing
console.log("🔄 Setting up catch-all route for SPA...");
console.log("⚠️  Both '*' and '(.*)' patterns failed - trying multiple approaches");

let catchAllRouteSuccess = false;

// Approach 1: Try using app.use() instead of app.get()
console.log("📍 Attempt 1: Using app.use() middleware approach...");
try {
  app.use((req, res, next) => {
    // Skip if it's an API route
    if (req.path.startsWith('/api/')) {
      return next();
    }
    
    console.log("📥 Catch-all middleware hit");
    console.log("  - Original URL:", req.originalUrl);
    console.log("  - Path:", req.path);
    console.log("  - Method:", req.method);
    
    const indexPath = path.join(__dirname, "dist", "index.html");
    console.log("  - Index file path:", indexPath);
    
    try {
      console.log("📤 Serving index.html via middleware...");
      res.sendFile(indexPath);
      console.log("✅ Index.html served successfully via middleware");
    } catch (fileError) {
      console.error("❌ Error serving index.html:", fileError);
      res.status(500).send("Internal Server Error");
    }
  });
  console.log("✅ Catch-all middleware defined successfully");
  catchAllRouteSuccess = true;
} catch (middlewareError) {
  console.error("❌ Middleware approach failed:", middlewareError);
}

// Approach 2: If middleware failed, try simpler route patterns
if (!catchAllRouteSuccess) {
  console.log("📍 Attempt 2: Trying simpler route patterns...");
  
  const patterns = [
    "/",
    "/guides",
    "/guides/*"
  ];
  
  for (const pattern of patterns) {
    try {
      console.log(`  - Trying pattern: ${pattern}`);
      app.get(pattern, (req, res) => {
        console.log(`📥 Route ${pattern} hit for:`, req.originalUrl);
        const indexPath = path.join(__dirname, "dist", "index.html");
        res.sendFile(indexPath);
      });
      console.log(`  ✅ Pattern ${pattern} defined successfully`);
    } catch (patternError) {
      console.error(`  ❌ Pattern ${pattern} failed:`, patternError.message);
    }
  }
}

// Approach 3: If all else fails, define a 404 handler
console.log("📍 Setting up 404 fallback handler...");
app.use((req, res) => {
  console.log("📥 404 fallback handler hit");
  console.log("  - Original URL:", req.originalUrl);
  console.log("  - Method:", req.method);
  
  // For non-API routes, serve the SPA
  if (!req.path.startsWith('/api/')) {
    const indexPath = path.join(__dirname, "dist", "index.html");
    console.log("  - Serving SPA for non-API route");
    res.sendFile(indexPath);
  } else {
    console.log("  - Returning 404 for API route");
    res.status(404).json({ error: "API endpoint not found" });
  }
});
console.log("✅ 404 fallback handler defined");

console.log("🚀 Starting server...");
console.log("  - Port:", PORT);
console.log("  - Environment:", process.env.NODE_ENV || 'development');

try {
  const server = app.listen(PORT, () => {
    console.log("✅ SERVER STARTED SUCCESSFULLY!");
    console.log(`🌐 Server running at http://localhost:${PORT}`);
    console.log("📋 Available routes:");
    console.log("  - GET /api/parts - Fetch parts from Airtable");
    console.log("  - GET /* - Serve SPA (index.html)");
    console.log("🎉 Ready to accept requests!");
  });

  server.on('error', (error) => {
    console.error("❌ Server error:", error);
    if (error.code === 'EADDRINUSE') {
      console.error(`  - Port ${PORT} is already in use`);
      console.error("  - Try a different port or stop the existing server");
    }
  });

  console.log("✅ Server startup initiated");
} catch (serverError) {
  console.error("❌ CRITICAL: Failed to start server!");
  console.error("  - Error:", serverError);
  console.error("  - Stack:", serverError.stack);
  process.exit(1);
}

// Global error handlers
process.on('uncaughtException', (error) => {
  console.error("💥 UNCAUGHT EXCEPTION:");
  console.error("  - Error:", error);
  console.error("  - Stack:", error.stack);
  console.error("🚨 Process will exit");
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error("💥 UNHANDLED PROMISE REJECTION:");
  console.error("  - Promise:", promise);
  console.error("  - Reason:", reason);
  console.error("🚨 This may cause the process to exit");
});

console.log("✅ Error handlers registered");
console.log("🏁 API initialization complete!");
