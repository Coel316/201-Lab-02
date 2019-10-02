'use strict';

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

var userName = prompt ('what is your name ?');
alert('Greetings ' + userName + '.  Let\'s see how well you know me.');

var nycStreets = prompt('Did I grow up in Florida ?');
nycStreets = nycStreets.toLowerCase();

if (nycStreets === 'yes' || nycStreets === 'y') {
  //console.log('I didnt, Check my about me page');
  alert('I didnt, Check my about me page');
} else {
  //console.log('Correct! I grew up in NYC');
  alert('Correct! I grew up in NYC');
}

var likeTotravel = prompt ('Do I like to travel ?');
likeTotravel = likeTotravel.toLowerCase();

if (likeTotravel === 'yes' || likeTotravel === 'y') {
  //console.log('You\'re correct. Been many places');
  alert('You\'re correct. Been many places');
} else {
  //console.log('Truth is - I love to travel');
  alert('Truth is - I love to travel');
}

var likeTechnology = prompt('Do I like technology ?');
likeTechnology = likeTechnology.toLowerCase();

if (likeTechnology === 'no' || likeTechnology === 'n') {
  //console.log('Check out my About me page');
  alert('Check out my About me page');
} else {
  //console.log('Technology is part of the future');
  alert('Technology is part of the future');
}

var workFormilitary = prompt('Have I ever worked for the Military ?');
workFormilitary = workFormilitary.toLowerCase();

if (workFormilitary === 'yes' || workFormilitary === 'y') {
  //console.log('Correct, I was in the best branch !');
  alert('Correct, I was in the best branch !');
} else {
  //console.log('Think again, I did');
  alert('Think again, I did');
}

var codedWithbasic = prompt('Have I ever coded in BASIC ?');
codedWithbasic = codedWithbasic.toLowerCase();

if (codedWithbasic === 'yes' || codedWithbasic === 'y') {
  //console.log('True.  BASIC was the stuff.');
  alert('True.  BASIC was the stuff.');
} else {
  //console.log('I did too code with BASIC');
  alert('I did too code with BASIC');
}

alert('Thank you ' + userName + ' for playing');