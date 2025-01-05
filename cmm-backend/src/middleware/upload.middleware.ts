// middleware/upload.middleware.ts

import multer from "multer";

// Set up storage (in memory to store files as Buffer)
const storage = multer.memoryStorage();

// Create multer instance for handling file uploads
const upload = multer({ storage });

export default upload;
