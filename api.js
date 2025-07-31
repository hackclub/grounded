import express from "express";
import AirtablePlus from "airtable-plus";
import camelcase from "camelcase";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;

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

app.listen(PORT, () => {
  console.log(`🚀 API server running at http://localhost:${PORT}`);
});
