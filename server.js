var express = require("express");
var bodyParser = require("body-parse");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.JSON());

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
});