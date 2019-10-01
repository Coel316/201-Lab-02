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

var nycStreets = prompt('Did I grow up in Florida');
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