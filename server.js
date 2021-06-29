
var HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const exphbs = require('express-handlebars');
const app = express();
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set('view engine', '.hbs');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

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
res.render('account', {
  layout: false
})
});

app.get("/CWH", (req, res) =>{
    res.render('CWH', {
      layout: false
    })
  });

  app.get("/signIn", (req, res) =>{
  const web ={signIn: true};
  res.render('signIn',{

    layout: false

  });
  });
  app.post('/signIn', function(req, res) {
    let data = req.body;
    let Emailerror = false;
    let Passerror = false;

    if (data.inputEmail3.length ===0) {
           errorU = "You did not enter a valid username";

    }
   if(data.inputPassword3.length ===0) 
    {
     errorP = "You did not enter a valid password";
    }
    else { 
          error ===false;
    }
    data.errorU = uError;
  data.errorP= pError;
    res.render("signIn", {
     data : data,
      layout: false
    });
});

app.listen(HTTP_PORT);
