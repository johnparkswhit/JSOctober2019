//if if doesn't work, then...we use else

let weather = 75;
if(weather < 70){
    console.log('wear a jacket');
} else {
    console.log('no jacket necessary');
}

let name = 'John';
if(name === 'John') {
    console.log('Hello, my name is', name);
} else {
    console.log('Hello, is your name', name, '?');
}



/*
? Challenge: 
**********
? Use this string - let name = 'aUTuMN';
? Bronze: 
Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string; 
If it is not console.log 'hey its not written correctly' 
? Silver:
If the first letter of a string is uppercase, only console.log that letter
if it is not, console.log the rest of the string Without the first letter, and change them to lowercase 
? Gold: 
If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/


let name = 'aUTuMN';
let firstLetter = name[0]
let otherLetters = name.slice(1).toLowerCase();
let capFirstLetter = name[0].toUpperCase();

if(firstLetter === firstLetter.toUpperCase()){
    console.log(firstLetter + otherLetters);
} else {
    console.log(capFirstLetter + otherLetters);
}



//Use else if to specify a new condition to test, if the first condition is false
/*if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}*/


/* 
? Challenge:
? Look up the format for an Else If statement
? Set a variable age and give it an age of your choice
? Set an else if statement that convey the following:
? If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
? If the age is at least 18, console.log 'Yay! You can vote!'
? If the age is at least 21, console.log 'Yay! You can drink!'
? If the age is at least 25, console.log 'Yay! You can rent a car!'
*/

let age = 32;

if (age <= 17){
    console.log("Sorry, you're too young to do anything.");
} else if (age < 21){
    console.log('Yay, you can vote!');
} else if (age < 25){
    console.log('Yay, you can drink!');
} else {
    console.log('Yay, you can rent a car!');
};