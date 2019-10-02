//Parameters

function hi(name) { //name is a placeholder
    console.log(`Hi ${name}`); //string interpolation
}
hi('John');
hi('Danielle');
hi('Kiana');
hi('Eli');


function pet(animal) {
    console.log(`My pet's name is ${animal}!`);
}
pet('Alfie');
pet('Finn');
pet('Pippin');
pet('Sasha');



function name(firstName, lastName){
    let fullName = `${firstName} ${lastName}`;
    console.log('Hello, my name is', fullName);
}
name('John', 'Whitaker');
name('Inigo', 'Montoya');