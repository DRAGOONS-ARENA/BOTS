// init project
var http = require ('http');
var express = require('express');
var app = express();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log(`${process.env.PROJECT_DOMAIN} is listening on port ` + listener.address().port);
  
// Ping the website every 5 mins 😉
  setInterval (() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);
  
});

                //-----------------------------------------//

// SETTING THE BOT !

const Discord = require ('discord.js');
const Client  = new Discord.Client();


// Check if the bot is ready !
Client.on('ready', () => {
  console.log(`Yo !! \n We are ready to rock the internet!\n Logged in as ${Client.user.username}`);
});


// LOG the BOT TO DISCORD !
Client.login(process.env.TOKAN);