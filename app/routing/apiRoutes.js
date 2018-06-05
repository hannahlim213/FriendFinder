var friends = require("../data/friends.js");
var path = require("path");

module.exports = function (app) {
    app.get("/api/friends", function(request, response) {
       response.json(friends)
    });

    app.post("/api/friends", function(request, response) {
        var difference;
        var matchName = "";
        var matchPhoto = "";
        var matchedScoresArray= [];

        // absolute value and calculate difference for each user score and friends score
        for(var i = 0; i<friends.length; i++){
            matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i] - parseInt(friends.scores[i]))))
        }
        
    });
}