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
  alert('I didnt, Check my about me page');
} else {
  alert('Correct! I grew up in NYC');
}

var likeTotravel = prompt ('Do I like to travel ?');
likeTotravel = likeTotravel.toLowerCase();

if (likeTotravel === 'yes' || likeTotravel === 'y') {
  alert('You\'re correct. Been many places');
} else {
  alert('Truth is - I love to travel');
}

var likeTechnology = prompt('Do I like technology ?');
likeTechnology = likeTechnology.toLowerCase();

if (likeTechnology === 'no' || likeTechnology === 'n') {
  alert('Check out my About me page');
} else {
  alert('Technology is part of the future');
}

var workFormilitary = prompt('Have I ever worked for the Military ?');
workFormilitary = workFormilitary.toLowerCase();

if (workFormilitary === 'yes' || workFormilitary === 'y') {
  alert('Correct, I was in the best branch !');
} else {
  alert('Think again, I did');
}

var codedWithbasic = prompt('Have I ever coded in BASIC ?');
codedWithbasic = codedWithbasic.toLowerCase();

if (codedWithbasic === 'yes' || codedWithbasic === 'y') {
  alert('True.  BASIC was the stuff.');
} else {
  alert('I did too code with BASIC');
}
