
var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var routes = require("./controllers/planner_controller.js");


var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
     extended:false
})); // end bodyp arser
app.use(methodOverride('_method'));

app.engine("handlebars",exphbs({defaultLayout : "main"}));
app.set("view engine","handlebars");

app.use("/",routes);




app.listen(PORT,function()
{
  console.log('The student planner application is running on : '+PORT);
});



/* This Code written by Sangeetha
Uses Mysql, express handlebars, mysql */
/* works with index.handlebars , main.handlebars */
