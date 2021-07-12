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
////////////////////////////////////////////////////////////////////////////////////

////////////Magic 8 Ball//////////////////////////////////////////////////////////
const magicball8 = 
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get("/magic/:index", (req, res) => {
      res.send(`<h1> ${req.params.index} and the answer is ${magicball8[Math.floor(Math.random()*magicball8.length)]}</h1>`);
    }
  );
///////////////////////////////////////////////////////////////////////////////////////

///////////Take one Down and Pass it Around////////////////////////////////////////////\
const bugMax = 99;
  app.get("/bugs", (req, res) => {
      res.send(`
      <h1>${bugMax} little bugs in the code</h1>
      <a href='http://localhost:3000/bugs/${bugMax-1}'>take one down, patch it around</a>
      `);
    });
  
  app.get("/bugs/:number_of_bugs", (req, res) => {
      res.send(`
      <h1>${req.params.number_of_bugs}  little bugs in the code</h1>
      <a href='http://localhost:3000/bugs/${Math.round(Math.random()) === 1? (parseInt(req.params.number_of_bugs)-1) : (parseInt(req.params.number_of_bugs) + Math.floor(Math.random()*100))}'>take one down, patch it around</a>
      `);
    });
    
const max = 99;
app.get("/", (req, res) => {
    res.send(`
    <h1>${max} Bottles of beer on the wall</h1>
    <a href='http://localhost:3000/${max-1}'>take one down, pass it around</a>
    `);
  });

app.get("/:number_of_bottles", (req, res) => {
    res.send(`
    <h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1>
    <a href='http://localhost:3000/${parseInt(req.params.number_of_bottles)-1}'>take one down, pass it around</a>
    `);
  });



app.listen(PORT, () => {
    console.log("app is running on port:", PORT);
  });