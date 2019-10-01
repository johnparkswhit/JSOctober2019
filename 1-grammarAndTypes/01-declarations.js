/*What is a variable? Variables are named containers for storing data values.
    We name the variables so that we can refer to this data again*/

let a = 2;

let     b       =       1;
/*(1)   (2)     (3)     (4)

1- Keyword (like "let", "var", and "const")
2- variable name
3- assignment operator
4- value of the variable
*/

/*notes on variables:
//1)  A variable name must begin with a letter, underscore, or dollar sign
//2)  Numbers may follow the above characters, but cannot come first
//3)  JavaScript is case sensitive-- 'hello' and 'HeLlo' are different variables
//4)  variables must be identified with unique names
//5)  No spaces are allowed in variable names
//6)  camelCase is the best practice for naming variables. 
This is good practice because it helps keep variables readable--  var myName = 'John'; 

Declarations are the LEFT SIDE of a variable
    It is simply the var x
    It is on the left side of the assignment operator (=)
Initializations are the RIGHT SIDE of a variable
    It sets the value of the variable
*/

let x;
console.log('Declaration:', x);

x = 10;
console.log('Initializing 1:', x);

x = 33;
console.log('Initializing 2:', x);

let y = 'Hello';
console.log('Both:', x,y);

let today = 'Great!';
const elevenFifty = 'Wonderful';
console.log(today, elevenFifty);

today = 'Great!';
console.log(today, elevenFifty);

elevenFifty = 'Superr';
console.log(today, elevenFifty);