var wordGuess = {
     id: 'wordGuess',
     largeImg: 'assets/images/chicken-little.png',
     title: 'Chicken Little',
     about: `A word-guess game completed entirely with vanilla JavaScript - meaning there's not an ounce of jQuery to be found. A PG-play on the game Hangman, help Chicken Little guess the every letter in the unknown words before his sky falls. All images hand-drawn with love - watch the background change with each wrong guess!`,
     skills: `JavaScript, HTML, CSS.`,
     concepts: `Dynamic updates in response to user input, vanilla JavaScript, modular programming.`,
     gitHub: 'https://github.com/baileedastugue/Word-Guess-Game',
     deployed: 'https://baileedastugue.github.io/Word-Guess-Game/',
};

var trivia = {
     id: 'trivia',
     largeImg: 'assets/images/trivia-game.png',
     title: 'Billy Joel Trivia Game',
     about: `A short trivia game dedicated to the Piano Man himself. For each question, a timer appears and ticks down from 20 seconds. After user responds to the individual question, the game displays the correct result and a relevant YouTube video. Once all questions have been answered, the user's game score is revealed with the option to play again.`,
     skills:
          'jQuery, JavaScript, HTML, CSS, timers (setInterval(), clearInterval())',
     concepts:
          'Implementing timers, game creation using JavaScript logic and jQuery HTML manipulation, dynamic game responses dependent on user input',
     gitHub: 'https://github.com/baileedastugue/TriviaGame',
     deployed: 'https://baileedastugue.github.io/TriviaGame/',
};

var rpgGame = {
     id: 'rpg',
     largeImg: 'assets/images/compRPG.jpg',
     title: 'Dino Role Play Game',
     about:
          "A role-playing game where the dinosaur of your choosing battles a total of three opponents. Your dino's strength points dynamically increase as the game continues, giving even the smallest triceratops a fighting chance.",
     skills: 'jQuery, HTML, CSS, Bootstrap',
     concepts: 'DOM manipulation, this, event handling',
     gitHub: 'https://github.com/baileedastugue/RPG-game',
     deployed: 'https://baileedastugue.github.io/RPG-game/',
};

var rockPaperScissors = {
     id: 'rps',
     largeImg: 'assets/images/compRPS.jpg',
     title: 'Rock Paper Scissors',
     about: 'The Rock, Paper, Scissors',
     skills: '',
     concepts: '',
     gitHub: 'https://github.com/baileedastugue/RPS-Multiplayer',
     deployed: 'https://baileedastugue.github.io/RPS-Multiplayer/',
};

var giphyAPP = {
     id: 'giphy',
     largeImg: 'assets/images/musically-giph.png',
     title: 'Musically GIPH-ted',
     about:
          'Search for GIFs of bands and musicians with this application, which implements the GIPHY API. Save your favorite searches and find them next time, with the help of session storage. Future expansion of this mini-app includes searching the Spotify API for each saved artist.',
     skills: 'JSON, Ajax, local storage, jQuery, JavaScript, HTML, CSS',
     concepts:
          'Accessing server-side APIs, HTTP requests, parsing JSON to generate HTML, implementing asynchronous JavaScript',
     gitHub: 'https://github.com/baileedastugue/GiphyApp',
     deployed: 'https://baileedastugue.github.io/GiphyApp/',
};

var marvel = {
     id: 'project1',
     largeImg: 'assets/images/marvel-comics.png',
     title: 'Marvel-verse',
     about:
          'A collaborative group project utilizing the Marvel and OMDb APIs. Personal responsibilites for this project include all HTML and CSS, with the exception of the search bar, implementing the search history through session storage, and returning the movie posters from the OMDb API.',
     skills:
          'Git, GitHub, Kanban board project management, Bootstrap, session storage, HTML, CSS, jQuery, JavaScript',
     concepts:
          'Version control within a group, implementing new technologies, team dynamics on a deadline',
     gitHub: 'https://github.com/Kianimal/Marvel_Comics_Central',
     deployed: 'https://kianimal.github.io/Marvel-Comics-Central/',
};

var liri = {
     id: 'liri',
     largeImg: 'assets/images/liri.gif',
     title: 'LIRI',
     about: `A Node.js application that acts as a Language Interpretation and Recognition Interface - basically a refined search engine for the user. Users have the option to search for song information through Spotify, movie information through OMDb, and concert information through Bands In Town. Searches are stored in a separate file, essentially acting as a search history. This aggregation of information is intended to save time for the user. As this is a Node.js application, it is not deployed on Heroku. However, a demonstration of a potential app prototype created with Adobe XD can be found <a href='https://youtu.be/1cJlDloAIVI' target='_blank'>here</a>`,
     skills:
          'Node.js, JavaScript, obscuring API keys, utilizing Node-spotify API, OMDb API, Bands in Town API, and Moment.js, Adobe XD',
     concepts: `Evaluating user input to search the corresponding API, initializing a Node.js project from the command line, implementing third-party dependencies, utilizing the 'fs' package, and executing server-side HTTP requests`,
     gitHub: 'https://github.com/baileedastugue/liri-node-app',
     deployed: 'https://www.youtube.com/watch?v=oMQSGsOPXQE&feature=youtu.be',
};

var wgNode = {
     id: 'wgNode',
     largeImg: 'assets/images/giphy.gif',
     title: 'Word-Guess Game, pt. 2',
     about:
          'A word-guess game played from the command line. This application heavily implements constructor functions.',
     skills: 'Callbacks, constructors, Node.js, prototypes, inquirer',
     concepts:
          'Reducing written code through implementing constuctor functions',
     gitHub: 'https://github.com/baileedastugue/wordGuess-node-app',
     deployed: 'https://www.youtube.com/watch?v=1iMAbYFv838&feature=youtu.be',
};

var bamazon = {
     id: 'bamazon',
     largeImg: 'assets/images/bamazon.gif',
     title: 'Bamazon',
     about:
          'A nod to the online-retailer powerhouse, Bamazon acts as a storefront application utilizing the command line. There are three different views executed in this application: customer view, manager view, and superviser view. The customer view allows users to "buy" a certain quantity of their preferred item and notifies if there is an insufficient quantity for available for purchase. The manager view allows users to view products for sale, view low inventory (products with <5 items in stock), add to inventory, and add a new product. The supervisor view allows users to view product sales by department and create a new department, The three different views are related - a change in one view persists in other views. For example, if the manager adds a new item with in the manager view, that new item is available within the customer view for purchase and impacts product sales by department within the supervisor view.',
     skills: 'Node.js, MySQL, inquirer',
     concepts:
          'Creating and dropping databases and tables, creating schema and seed files, CRUD operations, primary and foreign keys, joins',
     gitHub: 'https://github.com/baileedastugue/bamazonApplication',
     deployed:
          'https://www.youtube.com/watch?v=EL20Kvpa8Vs&list=PL4WQTJxFmC3xAJKh7wnPPy0tk3DWtbNkZ',
};

var friendFinder = {
     id: 'friendFinder',
     largeImg: 'assets/images/compFF.jpg',
     title: 'Furry Friend Finder',
     about: `The compatability-based "Friend Finder" application that acted as inspiration for the Friendly Neighborhood Pet Finder project! After answering a series of pet-preference questions, users get matched to their furry soulmate! Matches are made through comparing each of the user's responses to the respective qualities each pup possesses. A full-stack application using Node and Express Servers.`,
     skills: 'Express.js, Postman, Express.static(), routing, Node.js',
     concepts:
          'Relating client-side requests to server-side responses, configuring GET and POST requiests within an Express.js application, submitting client-side form data to a server, organizing a full-stack application directory, deploying to Heroku',
     gitHub: 'https://github.com/baileedastugue/Friend-Finder',
     deployed: 'https://quiet-stream-07571.herokuapp.com/',
};

var burg = {
     id: 'burg',
     largeImg: 'assets/images/build-burg.gif',
     title: 'Build-a-Burg',
     about:
          'A full-stack application utilizing a MySQL database and all CRUD operations. Users act as customers - they can place an order, which will then be stored in the database and be displayed on screen. Customers can pick up their order, re-order their burger, or delete the order permanently.',
     skills:
          'MySQL, Handlebars.js, Express.js, Node.js, gif creation, template engine partials',
     concepts:
          'MVC paradigm and modularization, organizing full-stack codebases, rendering dynamic HTML using template engines, implmenting a cutom ORM in within the model of the MVC, Heroku deployment, creating schema and seed files',
     gitHub: 'https://github.com/baileedastugue/burger-app',
     deployed: 'https://build-a-burg.herokuapp.com/',
};

var project2 = {
     id: 'project2',
     largeImg: 'assets/images/pet-finder.png',
     title: 'Friendly Neighborhood Pet Finder',
     about:
          'A group project utilizing MySQL, the PetFinder API, and SASS. As lead front-end developer, I was responsible for all page aesthetics (HTML, CSS, JavaScript) and collaborating with the back-end team. All banners, images, and logos were drawn digitally myself. My favorite features were the two implementations of Bootstrap carousels.',
     skills:
          'Dyanmic rendering, SASS, jQuery, JavaScript, ESLint, GitHub version control, Bootstap',
     concepts: 'Ongoing agile development, continued group collaboration, ',
     gitHub: 'https://github.com/baileedastugue/ProjectTwo',
     deployed: 'https://project-bbers.herokuapp.com/',
};

var austin = {
     id: 'austin',
     largeImg: 'assets/images/austin-acc.png',
     title: 'Austin Accumulated',
     about:
          'An application using Cheerio, Mongoose, Axios, and Express that scrapes three different Austin, Texas-focused websites: Austin Eater, Austin Culture Map, and Austin Monthly. Allows users to comment on articles, view previous comments, scrape new articles, clear articles, and save articles they want to come back to.',
     skills:
          'MongoDB, Mongoose.js, Express.js, Express-handlbars, Cheerio, Axios, MongoLab, Chrome inspector',
     concepts:
          'NoSQL databases, CRUD operations, data scraping, utilizing query builders to populate documents, deploying to Heroku',
     gitHub: 'https://github.com/baileedastugue/austin-documented',
     deployed: 'https://austin-accumulated.herokuapp.com/',
};

var click = {
     id: 'click',
     largeImg: 'assets/images/memory-game.gif',
     title: 'Huperzia - a memory game',
     about:
          'Huperzia is known as a memory enhancer and this application is just that. Test your memory by ensuring you never click on the same plant twice. Application utilizes React to shuffle plants and update your score and high score.',
     skills: 'React, Create React App, JSX',
     concepts:
          'Updating the virtual DOM, manipulating state, dynamically rendering HTML through JSX and JSX variables, deploying to GitHub Pages using gh-pages',
     gitHub: 'https://github.com/baileedastugue/click-and-memorize',
     deployed: 'https://baileedastugue.github.io/click-and-memorize/',
};

var elephantsMemory = {
     id: 'elephantsMemory',
     largeImg: 'assets/images/elephants-memory.png',
     title: `Elephant's Memory - a MERN app`,
     about:
          'A collaborative, private and digital memory album. This application allows users to create memory albums that others with the link can also contribute to. Memory posts include uploading a picture with a caption or a text prompt and response. Users can protect their albums and the posts within those albums with an encrypted password. Additional functionality includes changing user passwords, deleting user account, deleting albums, changing album names, adding, updating, or removing album passwords, and deleting memory posts. Both user and album passwords are encrypted though BCrypt.',
     skills:
          'React, Redux, Express.js, Mongoose.js, Node.js, JSX, Reactstrap/Bootstrap, Cloudinary, JSON Web Tokens, SASS, CSS animations, React Spring, React Helmet, React UUID, Express Validator',
     concepts:
          'Creating a full-stack application independently, modularization, user authentication, sending image files and creating permanent image URLs, deploying to Heroku',
     gitHub: 'https://github.com/baileedastugue/elephants-memory',
     deployed: 'https://elephantsmemory.herokuapp.com/',
};

var optionsArray = [
     elephantsMemory,
     project2,
     austin,
     marvel,
     giphyAPP,
     bamazon,
     liri,
     burg,
     trivia,
     // friendFinder,
     click,
     // rpgGame,
     wordGuess,
     // wgNode,
];

var currentPick;

function addPorts() {
     for (var i = 0; i < optionsArray.length; i++) {
          var newDiv = $('<div>');
          if (i === 0) {
               newDiv.attr('class', 'carousel-item active port-card');
          } else {
               newDiv.attr('class', 'carousel-item port-card');
          }
          let newRow = $(`<div class='row'>`);
          let imgContainer = $(
               '<div class="port-img-container col-lg-6 col-sm-12">'
          );
          let infoContainer = $(
               `<div class='port-info-container col-lg-6 col-sm-12'>`
          );
          var image = $('<img>');
          image.attr('src', optionsArray[i].largeImg).attr('class', 'port-img');
          imgContainer.append(image);
          newRow.append(imgContainer);
          const navigationDiv = $('<div class="indicator-container">');
          const lArrow = $(
               '<a class="carousel-control-prev" href="#demo" data-slide="prev"><img src="./assets/images/left-arrow.png" class="caro-control"></a>'
          );
          const rArrow = $(
               '<a class="carousel-control-next" href="#demo" data-slide="next"><img src="./assets/images/right-arrow.png" class="caro-control"></a>'
          );
          let location = $(`<p>${i + 1} of ${optionsArray.length}</p>`);
          navigationDiv.append(lArrow).append(location).append(rArrow);
          var portBody = $('<div>').attr('class', 'port-body');
          var portTitle = $('<h2>')
               .attr('class', 'port-title')
               .html(optionsArray[i].title);
          var portText = $('<p>').attr('class', 'port-text');

          portText.append(portTitle);
          var link1 = `<a href='${optionsArray[i].deployed}' target="_blank">Deployed</>`;
          var link2 = `<a href='${optionsArray[i].gitHub}' target="_blank">GitHub Repo</a>`;
          portText.append(link1 + ' | ' + link2);
          var info = $("<p class='port-info'>").html(optionsArray[i].about);
          portText.append(info);
          var techSkills = $('<p class="tech">').html(
               '<em>Skills utilized: <br></em>' + optionsArray[i].skills
          );
          var techConcepts = $('<p class="tech">').html(
               '<em>Programming concepts: <br></em>' + optionsArray[i].concepts
          );
          portText.append(techSkills);
          portText.append(techConcepts);
          portBody.append(portText);
          portBody.append(navigationDiv);

          infoContainer.append(portBody);
          newRow.append(infoContainer);
          newDiv.append(newRow);
          $('#portfolio-container .carousel-inner').append(newDiv);
     }
}

function addIndicators() {
     for (var i = 0; i < optionsArray.length; i++) {
          if (i === 0) {
               var listItem = $('<li>')
                    .attr('data-target', '#demo')
                    .attr('data-slide-to', i)
                    .attr('class', 'active');
          } else {
               var listItem = $('<li>')
                    .attr('data-target', '#demo')
                    .attr('data-slide-to', i);
          }
          $('.carousel-indicators').append(listItem);
     }
}

addPorts();
addIndicators();
