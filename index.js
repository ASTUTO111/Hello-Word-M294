const express = require("express");
const path = require("path"); // Asegúrate de esta línea
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "test.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
