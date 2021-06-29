/**** Amanda Lee
 * Student number: 101630200
 * WEB322 Section NCC
 */
var HTTP_PORT = process.env.PORT || 8080;
const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-handlebars');



app.use(express.static(path.join(__dirname, "/images")));
app.use(express.static(path.join(__dirname, "/css")));
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');


/*
* Default route for the web app
*/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
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


app.listen(HTTP_PORT);
