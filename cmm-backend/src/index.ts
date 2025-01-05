import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectPostgres from "./config/postgres";
import connectMongoDB from "./config/mongodb";

import authRoutes from "./routes/auth.routes";
import fieldsRoutes from "./routes/fields.routes";
import formsRoutes from "./routes/forms.routes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connections
connectPostgres();
connectMongoDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/fields", fieldsRoutes);
app.use("/api/forms", formsRoutes);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
