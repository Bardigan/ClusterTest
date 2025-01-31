import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import { dirname } from 'path'
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https'

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')));

const sslOptions = {
  key: fs.readFileSync('path/to/your/ssl/key.pem'),
  cert: fs.readFileSync('path/to/your/ssl/cert.pem')
};

// Start the HTTPS server
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
