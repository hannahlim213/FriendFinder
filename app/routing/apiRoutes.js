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

            var totalDiff = 0;

            for(var j = 0; j< currentFriendScores.length;j++){
                totalDiff += Math.abs(parseInt(currentFriendScores[j]) - parseInt(newFriendScores[j]));
            }
           
            if(totalDiff<lowestDiff){
                lowestDiff = totalDiff;
                bestMatch = currentFriend;
            }

           // matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i] - parseInt(friends.scores[i]))))
        }

        friends.push(newFriendToBeMatched);
        
        response.json(bestMatch);
        
    });
}