// app.js
const express = require("express");
const app = express();
const path = require("path");

// Set static directory for serving HTML, CSS, JS files
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Misr server is running on port ${PORT}`);
});
