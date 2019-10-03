'use strict';
var counter = 0;

//var number = 4;
//var string = 'string';
//var boolean = true;

/* var likesStrangers = prompt('Do you like strangers ?');
likesStrangers = likesStrangers.toLowerCase();

if (likesStrangers === 'yes') {
  alert('Me too');
} else {
  alert ('Go meet some');
}

if(typeof string === 'string'){
  alert ('I am') + likesStrangers;
}
*/


var userName = prompt('what is your name ?');
alert('Greetings ' + userName + '.  Let\'s see how well you know me.');

var nycStreets = prompt('Did I grow up in Florida ?');
nycStreets = nycStreets.toLowerCase();

if (nycStreets === 'yes' || nycStreets === 'y') {
  //console.log('I didnt, Check my about me page');
  alert('I didnt, Check my about me page');
  counter++;
} else {
  //console.log('Correct! I grew up in NYC');
  alert('Correct! I grew up in NYC');
}

var likeTotravel = prompt('Do I like to travel ?');
likeTotravel = likeTotravel.toLowerCase();

if (likeTotravel === 'yes' || likeTotravel === 'y') {
  //console.log('You\'re correct. Been many places');
  alert('You\'re correct. Been many places');
  counter++;
} else {
  //console.log('Truth is - I love to travel');
  alert('Truth is - I love to travel');
}

var likeTechnology = prompt('Do I like technology ?');
likeTechnology = likeTechnology.toLowerCase();

if (likeTechnology === 'no' || likeTechnology === 'n') {
  //console.log('Check out my About me page');
  alert('Check out my About me page');
  counter++;
} else {
  //console.log('Technology is part of the future');
  alert('Technology is part of the future');
}

var workFormilitary = prompt('Have I ever worked for the Military ?');
workFormilitary = workFormilitary.toLowerCase();

if (workFormilitary === 'yes' || workFormilitary === 'y') {
  //console.log('Correct, I was in the best branch !');
  alert('Correct, I was in the best branch !');
  counter++;
} else {
  //console.log('Think again, I did');
  alert('Think again, I did');
}

var codedWithbasic = prompt('Have I ever coded in BASIC ?');
codedWithbasic = codedWithbasic.toLowerCase();

if (codedWithbasic === 'yes' || codedWithbasic === 'y') {
  //console.log('True.  BASIC was the stuff.');
  alert('True.  BASIC was the stuff.');
  counter++;
} else {
  //console.log('I did too code with BASIC');
  alert('I did too code with BASIC');
}

for (var i = 0; i < 4; i++) {
  var computerNumber = 3;
  var userNumber = prompt('Let\'s play a game ' + userName + '. Guess my favirote number ?');
  if (computerNumber == userNumber) {
    alert('Correct ! You\'re a good guesser');
    counter++;
    break;
  }

  else if ((computerNumber > userNumber) && (i !== 3)) {
    alert('Try again.  It\'s higher');
  } else if ((computerNumber < userNumber) && (i !== 3)) {
    alert('Try again.  It\'s lower');
    //} else if (i === 3) {
    //alert('My secret # is actually ' + computerNumber);
    //break;
  }
  if (i === 3) {
    alert('My secret # is actually ' + computerNumber);
  }
}

var statesIvisited = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Idaho', 'Illinois', 'Kansas', 'Massachusetts', 'Mississippi', 'Montana',
  'Nebraska', 'Michigan', 'Oklahoma', 'Minnesota', 'Maine', 'Ohio', 'Maryland', 'Texas', 'Vermont', 'Tennessee', 'Missouri',
  'Indiana', 'Kentucky', 'Louisiana', 'Oregon', 'Utah', 'Pennsylvania', 'Rhode Island', 'North Dakota', 'North Carolina',
  'West Virginia', 'New Mexico', 'New Jersey', 'New York', 'South Carolina', 'Nevada', 'South Dakota', 'Iowa', 'Virginia',
  'Washington', 'Wisconsin', 'Wyoming'];

var guessCorrectly = false;
for (var i1 = 0; i1 < 6; i1++) {
  if (guessCorrectly === true) {
    break;
  }
  var promptUserforstatesivisited = prompt('Can you name some states I visited in ?');
  for (var i = 0; i < statesIvisited.length; i++) {
    if (promptUserforstatesivisited === statesIvisited[i]) {
      alert('Correct! Been there, done that');
      alert('Been to every state except Vermont (I think), NH and HI');
      counter++;
      guessCorrectly = true;
      break;
    }
  }
  if (i1 === 5) {
    alert('Sorry, no more guesses');
    alert('Been to every state except Vermont (I think), NH and HI');
    break;
  }

}

alert('Thank you ' + userName + ' for playing');
alert('You got ' + counter + ' questions correct');
