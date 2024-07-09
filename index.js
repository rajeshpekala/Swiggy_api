const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Sample JSON data (replace this with your actual JSON data)
const data = require("./data.json");
const data1 = require("./data1.json");

// Use CORS middleware
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json(data);
});
app.get("/api/resId",(req,res)=>{
  res.json(data1)
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
