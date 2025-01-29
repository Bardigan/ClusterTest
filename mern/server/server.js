import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import { dirname } from 'path'
import path from 'path';
import { fileURLToPath } from 'url'

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')));

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
