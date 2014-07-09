var prompt = require('sync-prompt').prompt;

var birthdate = prompt("What is your date of birth (mm/dd/yyyy)? ");

birthdate = new Date(birthdate);
var today = new Date();

var userYear = birthdate.getFullYear();
var currentYear = today.getFullYear();
var userMonth = birthdate.getMonth() + 1;
var currentMonth = today.getMonth() + 1;
var userDay = birthdate.getDate();
var currentDay = today.getDate();
var yearDif = currentYear - userYear;

if(userMonth > currentMonth){
  console.log("You are " + yearDif + " years old.");
}else if(userMonth < currentMonth){
  console.log("You are " + (yearDif - 1) + " years old.");
}else if(userDay < currentDay){
  console.log("You are " + (yearDif - 1) + " years old.");
}else{
  console.log("You are " + yearDif + " years old.")};

if ((userMonth = 1) & (userDay <20)



// Class demo
// if(today.getTime() < bd.getTime()){
//  age--;
//}
//
var sign;

switch(userMonth){
  case 1:
    if(userMonth < 20){
      sign = 'Capricorn';
    }else{
      sign = 'Aquarius';
    }
    break;
  case 2:
    if(userMonth < 19){
      sign = 'Aquarius';
    }else{
      sign = 'Pisces';
    }
    break;
  case 3:
    if(userMonth < 21){
      sign = 'Pisces';
    }else{
      sign = 'Aries';
    }
    break;
  case 4:
    if(userMonth < 20){
      sign = 'Aries';
    }else{
      sign = 'Taurus';
    }
    break;
  case 5:
    if(userMonth < 21){





