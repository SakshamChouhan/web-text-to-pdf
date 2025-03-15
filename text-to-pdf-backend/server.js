const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/generate-pdf", async (req, res) => {
  const { text } = req.body;
  const doc = new PDFDocument();
  const fileName = `${Date.now()}.pdf`;
  const filePath = path.join(__dirname, "pdfs", fileName);

  const writeStream = fs.createWriteStream(filePath);
  doc.pipe(writeStream);
  doc.text(text);
  doc.end();

  writeStream.on("finish", () => {
    res.download(filePath, fileName);
  });
});

app.get("/", (req, res) => {
  fs.readdir(path.join(__dirname, "pdfs"), (err, files) => {
    if (err) return res.status(500).send("Error reading PDFs");
    res.render("allpdfs", { files });
  });
});

app.get("/pdfs/:filename", (req, res) => {
  const filePath = path.join(__dirname, "pdfs", req.params.filename);
  res.sendFile(filePath);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
