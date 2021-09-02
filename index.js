// Importing readline sync npm
var readlineSync = require('readline-sync');

// Importing chalk npm
const chalk = require('chalk');

//Take input from the user
var username = readlineSync.question('Enter your name: ');
console.log('Welcome ' + username + ' to DO YOU KNOW ROHITH ')
console.log("---------------------------")

// Declaring global variable with inital value 0
score = 0;

// Defining a function
function play(question,answer){
  var userInput = readlineSync.question(question);
  if(userInput === answer){
    console.log('YAY!, Your right')
    score++;
    console.log(chalk.green('Your score is: ' + score))
  }else{
    console.log('OOPS!, Your wrong')
    score--;
    console.log(chalk.red('Your score is: ' + score))
  }
  return console.log("---------------------------")
}

// All questions in an array
var questionset = [{
  question:'What is my age? \n 1.20 \n 2.19 \n 3.21 \n 4.22 \n Answer (1 or 2 or 3 or 4)',
  answer:'1'
},
{
  question:'Where do i live? \n 1.Mumbai \n 2.Banglore \n 3.Hyderabad \n 4.Chennai \n Answer (1 or 2 or 3 or 4)',
  answer:'3'
},
{
  question:'What is my favourite tech company? \n 1.mi \n 2.Apple \n 3.Samsung \n 4.Oneplus \n Answer (1 or 2 or 3 or 4)',
  answer:'2'
},
{
  question:'What is my twitter ID? \n 1.rohith \n 2.rohiththalla \n 3.thallarohith \n 4._rohiththalla_ \n Answer (1 or 2 or 3 or 4)',
  answer:'4'
},
{
  question:'What bike do i own? \n 1.Royal Enfield Meteor  \n 2.Ola S1 \n 3.Bajaj Pulsar  \n 4.Honda Activa \n Answer (1 or 2 or 3 or 4)',
  answer:'1'
},
]

// calling the function 
for(i=0;i<questionset.length;i++){
  var currentQuestion = questionset[i]
  play(currentQuestion.question,currentQuestion.answer)
}

// Storing a high score value
var highScore = {
  name:"Rohith",
  score:"5"
}

console.log("Thanks for playing the game, Your score is: " + score)
console.log("Highest Score is " + highScore.name + 'with a score of ' + highScore.score)