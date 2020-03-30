 var wordGuess = {
     id: "wordGuess",
     largeImg: "'assets/images/compHM.png",
     title: "Hang Man Game",
     gitHub: "",
     deployed: ""
 }

var currentPick;

 $(".port").on("click", function() {
     currentPick = this.id;
     console.log(currentPick);
 })