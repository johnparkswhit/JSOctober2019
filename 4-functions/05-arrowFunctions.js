function coffee(){
    console.log('Coffee is good');
}//this is a normal function

let coffee = () => {
    console.log('I love coffee');
}//fat arrow function. It also serves as an expression, meaning no hoisting

coffee()


let cats = (kitten, puppy)=>{
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s).`)
}
cats(1,12);



//concise and block body
//concise body does not need parentheses unless you have more than one parameter
let apples = x => console.log(`there are ${x} apples.`);
apples(10);
//More than one parameter will still require parentheses
//Return (if one-line fat arrow function) is implied.

//block body
let apples = (x) => {console.log(`There are ${x} apples.`)};
apples(20);

//Side note: LINEBREAKS ARE BAD
