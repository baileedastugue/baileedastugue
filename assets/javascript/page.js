var wordGuess = {
    id: "wordGuess",
    largeImg: "assets/images/compHM.png",
    title: "Hang Man Game",
    gitHub: "https://github.com/baileedastugue/Word-Guess-Game",
    deployed: "https://baileedastugue.github.io/Word-Guess-Game/"
}

var trivia = {
    id: "trivia",
    largeImg: "assets/images/compBJ.png",
    title: "Billy Joel Trivia Game",
    gitHub: "https://github.com/baileedastugue/TriviaGame",
    deployed: "https://baileedastugue.github.io/TriviaGame/"
}

var rpgGame = {
    id: "rpg",
    largeImg: "assets/images/compRPG.png",
    title: "Role Play Game",
    gitHub: "https://github.com/baileedastugue/RPG-game",
    deployed: "https://baileedastugue.github.io/RPG-game/"
}

var rockPaperScissors = {
    id: "rps",
    largeImg: "assets/images/compRPS.png",
    title: "Rock Paper Scissors Game",
    gitHub: "https://github.com/baileedastugue/RPS-Multiplayer",
    deployed: "https://baileedastugue.github.io/RPS-Multiplayer/"
}

var giphyAPP = {
    id: "giphy",
    largeImg: "assets/images/compGiphy.png",
    title: "Giphy API Application",
    gitHub: "https://github.com/baileedastugue/GiphyApp",
    deployed: "https://baileedastugue.github.io/GiphyApp/"
}

var marvel = {
    id: "project1",
    largeImg: "assets/images/compMarvel.png",
    title: "Marvel + OMDb API Group Project",
    gitHub: "https://github.com/Kianimal/Marvel_Comics_Central",
    deployed: "https://Kianimal.github.io/Marvel_Comics_Central"
}

var optionsArray = [wordGuess, trivia, rpgGame, rockPaperScissors, giphyAPP, marvel]

var currentPick;

$(document).ready(function() {
    var randomPick = Math.floor(Math.random() * optionsArray.length);
    $(".card-img-top").attr("src", optionsArray[randomPick].largeImg);
    $(".card-title").text(optionsArray[randomPick].title);
    $("#git").attr("href", optionsArray[randomPick].gitHub);
    $("#deployed").attr("href", optionsArray[randomPick].deployed);
})

 $(".port").on("click", function() {
     currentPick = this.id;
     for (var i = 0; i < optionsArray.length; i++) {
         if (optionsArray[i].id === currentPick) {
             $(".card-img-top").attr("src", optionsArray[i].largeImg);
             $(".card-title").text(optionsArray[i].title);
             $("#git").attr("href", optionsArray[i].gitHub);
             $("#deployed").attr("href", optionsArray[i].deployed);
         }
     }
 })