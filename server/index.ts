import express from "express";
import { createServer } from "http";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Crearea serverului simplu fără backend
(async () => {
  const server = createServer(app);

  // Servește doar aplicația client
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Pornește serverul pe portul 5000
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`Serving client-only application on port ${port}`);
  });
})();
