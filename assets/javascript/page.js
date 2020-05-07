var wordGuess = {
    id: "wordGuess",
    largeImg: "assets/images/compHM.png",
    title: "Hang Man Game",
    gitHub: "https://github.com/baileedastugue/Word-Guess-Game",
    deployed: "https://baileedastugue.github.io/Word-Guess-Game/"
}

var trivia = {
    id: "trivia",
    largeImg: "assets/images/compBJ3.png",
    title: "Billy Joel Trivia Game",
    gitHub: "https://github.com/baileedastugue/TriviaGame",
    deployed: "https://baileedastugue.github.io/TriviaGame/"
}

var rpgGame = {
    id: "rpg",
    largeImg: "assets/images/compRPG.jpg",
    title: "Role Play Game",
    gitHub: "https://github.com/baileedastugue/RPG-game",
    deployed: "https://baileedastugue.github.io/RPG-game/"
}

var rockPaperScissors = {
    id: "rps",
    largeImg: "assets/images/compRPS.jpg",
    title: "Rock Paper Scissors Game",
    gitHub: "https://github.com/baileedastugue/RPS-Multiplayer",
    deployed: "https://baileedastugue.github.io/RPS-Multiplayer/"
}

var giphyAPP = {
    id: "giphy",
    largeImg: "assets/images/compGiphy.jpg",
    title: "Giphy API Application",
    gitHub: "https://github.com/baileedastugue/GiphyApp",
    deployed: "https://baileedastugue.github.io/GiphyApp/"
}

var marvel = {
    id: "project1",
    largeImg: "assets/images/compMarvel.jpg",
    title: "Marvel + OMDb API Group Project",
    gitHub: "https://github.com/Kianimal/Marvel_Comics_Central",
    deployed: "https://Kianimal.github.io/Marvel_Comics_Central"
}

var liri = {
    id: "liri",
    largeImg: "assets/images/liri.jpg",
    title: "LIRI - a Node.js application",
    gitHub: "https://github.com/baileedastugue/liri-node-app",
    deployed: "https://www.youtube.com/watch?v=oMQSGsOPXQE&feature=youtu.be"
}

var wgNode = {
    id: "wgNode",
    largeImg: "assets/images/giphy.gif",
    title: "Word-Guess Game using Node.js",
    gitHub: "https://github.com/baileedastugue/wordGuess-node-app",
    deployed: "https://www.youtube.com/watch?v=1iMAbYFv838&feature=youtu.be"
}

// var bamazon = {
//     id: "bamazon",
//     largeImg: "NA",
//     title: "Bamazon Application using Node.js and MySQL",
//     gitHub: "",
//     deployed: [],
// }


var optionsArray = [wordGuess, trivia, rpgGame, rockPaperScissors, giphyAPP, marvel, liri, wgNode]

var currentPick;

function addCards() {
    for (var i = 0; i < optionsArray.length; i++) {
        var newDiv = $("<div>");
        if (i === 0) {
            newDiv.attr("class", "carousel-item active card");
        }
        else {
            newDiv.attr("class", "carousel-item card");
        }
        var image = $("<img>");
        image.attr("src", optionsArray[i].largeImg).attr("class", "port card-img-top");
        newDiv.append(image);
        var cardBody = $("<div>").attr("class", "card-body");
        var cardTitle = $("<h5>").attr("class", "card-title").html(optionsArray[i].title);
        cardBody.append(cardTitle);
        var cardInfo = $("<p>").attr("class", "card-text")
        var links = `<a href='${optionsArray[i].deployed}' target="_blank">Deployed</a> <br> <a href='${optionsArray[i].gitHub}' target="_blank"    >GitHub Repo</a>` ;
        cardInfo.append(links);
        cardBody.append(cardInfo);
        newDiv.append(cardBody);
        $(".carousel-inner").append(newDiv);
    }
};

function addIndicators() {
    for (var i = 0; i < optionsArray.length; i++) {
        if (i === 0) {
            var listItem = $("<li>").attr("data-target", "#demo").attr("data-slide-to", i).attr("class", "active");
        }
        else {
            var listItem = $("<li>").attr("data-target", "#demo").attr("data-slide-to", i);
        }
        $(".carousel-indicators").append(listItem);
    }
}

addCards();
addIndicators();
