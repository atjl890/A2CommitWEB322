
var HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const exphbs = require('express-handlebars');
const app = express();
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set('view engine', '.hbs');

app.use(express.static(__dirname + "/images"));
/*
* Default route for the web app
*/
app.get("/", (req, res) => {
  let home_info =
  {      
    welcome: "Welcome"
   }; 
  res.render("home", {
  home_info : home_info,
  layout: false
});
});


app.get("/account", (req, res) =>{
  res.sendFile(path.join(__dirname, "/account.html"))
});

app.get("/CWH", (req, res) =>{
    res.sendFile(path.join(__dirname, "/CWH.html"))
  });

  app.get("/signIn", (req, res) =>{
    res.sendFile(path.join(__dirname, "/signIn.html"))
  });
app.post('/signInData', (req,res)=> {
let emailErr;
let passwordErr;
  req.body = data;

  if(data.inputEmail3.length ===0)
  {
emailErr = "Enter a valid email address"
  }
  if(data.inputPassword3.length ===0)
  {
passwordErr = "Enter a valid password"
  }

})

app.listen(HTTP_PORT);
