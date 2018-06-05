var friends = require("../data/friends.js");
var path = require("path");

module.exports = function (app) {
    app.get("/api/friends", function(request, response) {
       response.json(friends)
    });

    app.post("/api/friends", function(request, response) {
        
        var newFriendToBeMatched = request.body;

        var newFriendScores =  request.body["scores"];

        var lowestDiff = 90000;
        var bestMatch;

        // absolute value and calculate difference for each user score and friends score
        for(var i = 0; i<friends.length; i++){
            var currentFriend = friends[i];
            var currentFriendScores = friends[i]["scores"];
            var totalDif;

           // console.log("currentFriendScores", currentFriendScores)
            for(var j = 0; j< currentFriendScores.length;j++){
                totalDif += Math.abs(parseInt(currentFriendScores[j]) - parseInt(newFriendScores[j]));
            }
            if(totalDif<lowestDiff){
                lowestDiff = totalDiff;
                bestMatch = currentFriend;
            }
           // matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i] - parseInt(friends.scores[i]))))
        }

        friends.push(newFriendToBeMatched);
        // console.log(bestMatch);
        response.json(bestMatch);
        
    });
}