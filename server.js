/**** Amanda Lee
 * Student number: 101630200
 * WEB322 Section NCC
 */

const express = require('express')
const app = express()
const path = require('path')
const port = 8080

app.use(express.static(path.join(__dirname, "/images")));
app.use(express.static(path.join(__dirname, "/css")));
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


app.listen(port, () => console.log(`App listening on port ${port}!`))
