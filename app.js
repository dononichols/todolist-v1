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

    if (currentDay === 6 || currentDay === 3) {
        res.send("Yay it's the weekend!");
    } else {
        res.send("Boo! I have to work!");
    }

});



///////
// Listen on port 3000 that our server has been started.
app.listen(3000, function(){
    console.log("Server started on Port 3000 !")
});