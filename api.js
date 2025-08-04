import express from "express";
import AirtablePlus from "airtable-plus";
import camelcase from "camelcase";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend from Vite build
app.use(express.static(path.join(__dirname, "dist")));

const camelizeObject = (obj) => {
  Object.keys(obj).forEach((key) => {
    obj[camelcase(key)] = obj[key];
    if (key !== camelcase(key)) {
      delete obj[key];
    }
  });
  return obj;
};

app.get("/api/parts", async (req, res) => {
  try {
    const airtable = new AirtablePlus({
      apiKey: process.env.AIRTABLE_API_KEY,
      baseID: "appn5LTtzmsgmboWY",
      tableName: "Parts",
    });

    const records = await airtable.read();
    const parts = records.map((record) =>
      camelizeObject(record.fields)
    );

    res.status(200).json(parts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Catch-all route to serve index.html for SPA routing
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
