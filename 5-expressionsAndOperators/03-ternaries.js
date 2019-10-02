//Ternary is a shorthand version of an else if statement.

let w = 6;

if (w>0) {
    console.log('yes');
} else {
    console.log('no');
}
//SHORTHAND
let w = 6;
(w > 0) ? console.log('yes') : console.log('no');


let w = 6;
if (w === 0){
    console.log('hello');
} else if (w < 0) {
    console.log('hi');
} else {
    console.log('goodbye');
};

//SHORTHAND
let w = 6;
(w === 0) ? console.log('hello') : (w < 0 ) ? console.log ('hi') : console.log('goodbye');



let age = 20;
(age <= 17) ? console.log('Sorry') : (age < 21) ? console.log ('vote') : (age < 25) ? console.log('drink') : console.log('rental');