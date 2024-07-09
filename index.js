const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Sample JSON data (replace this with your actual JSON data)
const data = require("./data.json");

// Use CORS middleware
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
