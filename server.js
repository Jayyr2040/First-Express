require("dotenv").config();
const express = require("express"); 
const app = express();
const PORT = process.env.PORT;

app.get("/greeting", (req, res) => {
    res.send("Hello, stranger"); // sending back text
  });

app.get("/greeting/:name", (req, res) => {
    res.send(`Wow! Hello there, ${req.params.name}`);
  }); 

app.listen(PORT, () => {
    console.log("app is running on port:", PORT);
  });