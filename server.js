require("dotenv").config();
const express = require("express"); 
const app = express();
const PORT = process.env.PORT;

////////// Greetings//////////////////////////////////////////////////////////////
app.get("/greeting", (req, res) => {
    res.send("Hello, stranger"); // sending back text
  });

app.get("/greeting/:name", (req, res) => {
    res.send(`Wow! Hello there, ${req.params.name}`);
  }); 

///////////////////////////////////////////////////////////////////////////////////

///////////Tip Calculator///////////////////////////////////////////////////////////

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`Tip will be  ${(parseInt(req.params.total) * parseInt(req.params.tipPercentage)/100)}, for a bill of ${req.params.total} and tip % at ${req.params.tipPercentage}`);
  }); 



app.listen(PORT, () => {
    console.log("app is running on port:", PORT);
  });