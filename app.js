//jshint esversion:6

//////////////
// requiring our two packages we just installed: express and body-parser
const express = require("express");
const bodyParser = require("body-parser");


////////////
// creates our app const by using express.
const app = express();


//////////
// create a simple get route, that sends the browser the word, "Hello", when a user trys to access the Home route "/."
app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 1 || currentDay === 7) {
        res.write("<h1>Yay it's the weekend!</h1>");
    } else {
        res.sendFile(__dirname + "/index.html");
    }

});



///////
// Listen on port 3000 that our server has been started.
app.listen(3000, function(){
    console.log("Server started on Port 3000 !")
});