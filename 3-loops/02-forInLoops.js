//great for iterating over values in an object

let student = {
    name:"Peter",
    awesome: true,
    degree:"javascript",
    week:1
}

for (item in student){
    console.log('item =>', item);
    console.log('student[item] =>', student[item]);
}

for (element in student) {
    console.log('element', element);
    console.log('student[element]', student[element])
}




//take the first letter, capitalize it, lower the others, and console log the name

let studentName = 'pAuL';
let newName = ''; //empty string because it gives undefined if it's not there

for (letter in studentName){ //letter is a placeholder.  The word could be anything
    if(letter == 0){ //if it's the first letter, do the following
        newName = newName + studentName[letter].toUpperCase();
    } else { //otherwise, do this
        newName += studentName[letter].toLowerCase();
    }
}
console.log(newName);


let dogBreed = 'cOlLiE';
let newBreed = '';
for (letter in dogBreed){
    if (letter == 0){
        newBreed += dogBreed[letter].toUpperCase();
    } else {
        newBreed += dogBreed[letter].toLowerCase();
    }
    
}
console.log(newBreed);