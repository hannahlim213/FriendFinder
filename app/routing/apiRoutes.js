var friends = require("../data/friends.js");
var path = require("path");

module.exports = function (app) {
    app.get("/api/friends", function(request, response) {
       return response.json(friends)
    })

    app.post("/api/friends", function(request, response) {
        var newUser = request.body;
        console.log(newUser);
        friends.push(newUser);
        response.json(newUser)
    });
}