var wordGuess = {
    id: "wordGuess",
    largeImg: "assets/images/compHM.png",
    title: "Chicken Little",
    about: "A word-guess game completed entirely with vanilla JavaScript - meaning there's not an ounce of jQuery to be found. All images hand-drawn with love.",
    gitHub: "https://github.com/baileedastugue/Word-Guess-Game",
    deployed: "https://baileedastugue.github.io/Word-Guess-Game/"
}

var trivia = {
    id: "trivia",
    largeImg: "assets/images/compBJ3.png",
    title: "Billy Joel Trivia Game",
    about: "A short trivia game dedicated to the Piano Man himself. For each question, a timer appears and ticks down from 20 seconds.",
    gitHub: "https://github.com/baileedastugue/TriviaGame",
    deployed: "https://baileedastugue.github.io/TriviaGame/"
}

var rpgGame = {
    id: "rpg",
    largeImg: "assets/images/compRPG.jpg",
    title: "Dino Role Play Game",
    about: "A role-playing game where the dinosaur of your choosing battles a total of three opponents. Your dino's strength points dynamically increase as the game continues, giving even the smallest triceratops a fighting chance.",
    gitHub: "https://github.com/baileedastugue/RPG-game",
    deployed: "https://baileedastugue.github.io/RPG-game/"
}

var rockPaperScissors = {
    id: "rps",
    largeImg: "assets/images/compRPS.jpg",
    title: "Rock Paper Scissors",
    about: "The Rock, Paper, Scissors", 
    gitHub: "https://github.com/baileedastugue/RPS-Multiplayer",
    deployed: "https://baileedastugue.github.io/RPS-Multiplayer/"
}

var giphyAPP = {
    id: "giphy",
    largeImg: "assets/images/compGiphy.jpg",
    title: "Musically GIPH-ted",
    about: "Search for GIFs of bands and musicians with this application, which implements the GIPHY API. Save your favorite searches and find them next time, with the help of session storage.",
    gitHub: "https://github.com/baileedastugue/GiphyApp",
    deployed: "https://baileedastugue.github.io/GiphyApp/"
}

var marvel = {
    id: "project1",
    largeImg: "assets/images/compMarvel.jpg",
    title: "Marvel-verse",
    about: "A collaborative group project utilizing the Marvel and OMDb APIs. Personal responsibilites for this project include all HTML and CSS, with the exception of the search bar, implementing the search history, and returning the movie posters",
    gitHub: "https://github.com/Kianimal/Marvel_Comics_Central",
    deployed: "https://Kianimal.github.io/Marvel_Comics_Central"
}

var liri = {
    id: "liri",
    largeImg: "assets/images/liri.jpg",
    title: "LIRI",
    about: "",
    gitHub: "https://github.com/baileedastugue/liri-node-app",
    deployed: "https://www.youtube.com/watch?v=oMQSGsOPXQE&feature=youtu.be"
}

var wgNode = {
    id: "wgNode",
    largeImg: "assets/images/giphy.gif",
    title: "Word-Guess Game, pt. 2",
    about: "",
    gitHub: "https://github.com/baileedastugue/wordGuess-node-app",
    deployed: "https://www.youtube.com/watch?v=1iMAbYFv838&feature=youtu.be"
}

var bamazon = {
    id: "bamazon",
    largeImg: "assets/images/compBamazon.gif",
    title: "Bamazon",
    about: "",
    gitHub: "https://github.com/baileedastugue/bamazonApplication",
    deployed: "https://www.youtube.com/watch?v=EL20Kvpa8Vs&list=PL4WQTJxFmC3xAJKh7wnPPy0tk3DWtbNkZ",
}

var friendFinder = {
    id: "friendFinder",
    largeImg: "assets/images/compFF.jpg",
    title: "Furry Friend Finder",
    about: "",
    gitHub: "https://github.com/baileedastugue/Friend-Finder",
    deployed: "https://quiet-stream-07571.herokuapp.com/"
}

var burg = {
    id: "burg",
    largeImg: "assets/images/CompBurg2.png",
    title: "Build-a-Burg",
    about: "",
    gitHub: "https://github.com/baileedastugue/burger-app",
    deployed: "https://build-a-burg.herokuapp.com/"
}

var project2 = {
    id: "project2",
    largeImg: "assets/images/CompP2.png",
    title: "Friendly Neighborhood Pet Finder",
    about: "A group project utilizing MySQL, the PetFinder API, and SASS. As lead front-end developer, I was responsible for all page aesthetics (HTML, CSS, JavaScript) and collaborating with the back-end team. All banners, images, and logos were drawn digitally myself. My favorite features were the two implementations of Bootstrap carousels.",
    gitHub: "https://github.com/baileedastugue/ProjectTwo",
    deployed: "https://project-bbers.herokuapp.com/"
}

var austin = {
    id: "austin",
    largeImg: "assets/images/AustinComp.png",
    title: "Austin Accumulated",
    about: "An application using Cheerio, Mongoose, Axios, and Express that scrapes Austin Eater articles. Allows users to comment on articles, view previous comments, scrape new articles, and clear articles.",
    gitHub: "https://github.com/baileedastugue/austin-documented",
    deployed: "https://austin-accumulated.herokuapp.com/"
}


var optionsArray = [wordGuess, trivia, rpgGame, giphyAPP, marvel, liri, wgNode, bamazon, friendFinder, burg, project2, austin];

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
        var about = $("<p class='port-info'>").text(optionsArray[i].about);
        cardInfo.append(about);
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
