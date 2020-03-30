var wordGuess = {
    id: "wordGuess",
    largeImg: "'assets/images/compHM.png",
    title: "Hang Man Game",
    gitHub: "",
    deployed: ""
}

var trivia = {
    id: "trivia",
    largeImg: "'assets/images/compBJ.png",
    title: "Billy Joel Trivia Game",
    gitHub: "",
    deployed: ""
}

var rpgGame = {
    id: "rpg",
    largeImg: "'assets/images/compRPG.png",
    title: "Role Play Game",
    gitHub: "",
    deployed: ""
}

var rockPaperScissors = {
    id: "rps",
    largeImg: "'assets/images/compRPS.png",
    title: "Rock Paper Scissors Game",
    gitHub: "",
    deployed: ""
}

var giphyAPP = {
    id: "giphy",
    largeImg: "'assets/images/compGiphy.png",
    title: "Giphy API Application",
    gitHub: "",
    deployed: ""
}

var marvel = {
    id: "project1",
    largeImg: "'assets/images/compMarvel.png",
    title: "Marvel + OMDb API Group Project",
    gitHub: "",
    deployed: ""
}

var optionsArray = [wordGuess, trivia, rpgGame, rockPaperScissors, giphyAPP, marvel]

var currentPick;

 $(".port").on("click", function() {
     currentPick = this.id;
     for (var i = 0; i < optionsArray.length; i++) {
         if (optionsArray[i].id === currentPick) {
             console.log(optionsArray[i].title)
         }
     }
 })