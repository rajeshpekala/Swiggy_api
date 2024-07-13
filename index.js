const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Sample JSON data (replace this with your actual JSON data)
const data = require("./data.json");

const data01 = require("./data01.json");
const data02 = require("./data02.json");
const data03 = require("./data03.json");
const data04 = require("./data04.json");
const data05 = require("./data05.json");
const data06 = require("./data06.json");
const data07 = require("./data07.json");
const data08 = require("./data08.json");
const data09 = require("./data09.json");
const data10 = require("./data10.json");
const data11 = require("./data11.json");
const data12 = require("./data12.json");
const data13 = require("./data13.json");
const data14 = require("./data14.json");
const data15 = require("./data15.json");
const data16 = require("./data16.json");
const data17 = require("./data17.json");
const data18 = require("./data18.json");
const data19 = require("./data19.json");
const data20 = require("./data20.json");


// Use CORS middleware
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.get("/api/711368", (req, res) => {
  res.json(data01);
});
app.get("/api/263485", (req, res) => {
  res.json(data02);
});
app.get("/api/612861", (req, res) => {
  res.json(data03);
});
app.get("/api/241027", (req, res) => {
  res.json(data04);
});
app.get("/api/255801", (req, res) => {
  res.json(data05);
});
app.get("/api/70012", (req, res) => {
  res.json(data06);
});
app.get("/api/107443", (req, res) => {
  res.json(data07);
});
app.get("/api/558763", (req, res) => {
  res.json(data08);
});
app.get("/api/733092", (req, res) => {
  res.json(data09);
});
app.get("/api/307", (req, res) => {
  res.json(data10);
});
app.get("/api/288678", (req, res) => {
  res.json(data11);
});
app.get("/api/8736", (req, res) => {
  res.json(data12);
});
app.get("/api/826449", (req, res) => {
  res.json(data13);
});
app.get("/api/25645", (req, res) => {
  res.json(data14);
});
app.get("/api/799947", (req, res) => {
  res.json(data15);
});
app.get("/api/91628", (req, res) => {
  res.json(data16);
});
app.get("/api/751353", (req, res) => {
  res.json(data17);
});
app.get("/api/381854", (req, res) => {
  res.json(data18);
});
app.get("/api/381853", (req, res) => {
  res.json(data19);
});
app.get("/api/125956", (req, res) => {
  res.json(data20);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
