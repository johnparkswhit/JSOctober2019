//booleans
//booleans can represent: true/false, yes/no, on/off

let i = true;
let j = false;
console.log(i);



//Null
//Null does not mean nothing, just that there is no value. It's an empty box.  Not 0 or undefined.

let empty = null; 
console.log(empty);



//Undefined
//Undefined means no value assigned, not even an empty container.
//Undefined is NOT an error.

let undef = undefined //never do this
console.log(undef);

let grass;
console.log(grass); //you have a variable name, but you haven't said what it is yet, so it is Undefined



//Numbers
let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);
//there is only room for 15 number digits in a string

let notQuite = .2 + .1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);



//Strings
//Strings are data types that are used to represent text and are wrapped in either single or double quotes

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//Examples of difference between strings and numbers
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);



//Objects

let car = {
    color:'red', //these are called key value pairs
    tires:4,
    extras:'A/C and Radio',
    cool:true,
}
console.log(car);
console.log(typeof car);



//Arrays
//Arrays are containers that hold lists of items;

let list = ['item1', 'item2', 'item3'];
//  1      2   3
//1-Name of the Array
//2-Square brackets = array
//3-each item, regardless of datatype, is separated by commas.

//Object is a shopping cart. Key value pairs are groceries. Arrays is the grocery list.

let groceryList = ['milk', 'apples', 'cereal'];
console.log(groceryList);
console.log(typeof groceryList); //says the array is an object, because it is a type of object




//addition vs concatenation
//adding numbers vs smushing two strings together



/* 
Challenge: 
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode
Set each variable to its respective type.
console.log your whole address (with the space between variable).
*/

let firstName="John";
let lastName="Whitaker";
let houseNumber="18765";
let street="Edwards Grove Dr.";
let city="Noblesville";
let state="Indiana";
let zipcode="46062";
console.log(firstName, lastName);
console.log(houseNumber, street);
console.log(city+ ',' , state, zipcode);//use a plus to smush it together, a comma to add a space, so + after city to put the comma there




// Strings - Properties
/*
Properties are qualities associated with a dataType.
Strings have properties associated with that string.
E.g. the length of a string is a property
*/

let myName = 'John';
console.log(myName.length);

//Methods
//Methods are tools that can help us manipulate our data.
//* .property = no parentheses;
//* .methods() = parentheses;

let myNameIs = 'John';
console.log(myNameIs.toUpperCase());

let home = 'My home is Indianapolis';
console.log(home.includes('Indianapolis'));

let sent = 'This sentence will be split into individual parts';
console.log(sent.split(' '))




