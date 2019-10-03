let list = ['orange', 'banana', 'oreos']

console.log(list[1]);

let students = ['tony', 'marshall', 'rhys', 'ray', 23, true, ['josh', 'eric', 'sam']]
console.log(typeof students);
console.log(students instanceof Array);
console.log(students[1]);
console.log(students[3]);
console.log('Hello', (students[6][2]), 'how are you?');
//or, with string interpolation
let name = students[6][2];
console.log(`Hello ${name}, how are you today?`);



//These are a bunch of methods to play with your arrays
let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];
food.push('cool beans');  ///This is .push to add to the end of the array
food.splice(1, 1, 'cookies'); //position we are cutting, how many we are cutting, replacement
food.pop(); //removes last item in the array
food.shift(); //removes the first element in the array
food.unshift('pasta', 'hamburger'); //adds items to start of the array
for(f of food) {
    console.log(f);
}





//For Each
let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];
food.forEach(f => {console.log(f)})
food.forEach((f, number) => {console.log(f); console.log(number)})
food.forEach((f, number, array) => {console.log(f);console.log(number); console.log(array);})

let foodFunction = () => { //this is just a different way to type the last example
    for (f in food){
        console.log(f),
        console.log(food[f]),
        console.log(food)
    }
}
foodFunction();




let movies = ['A New Hope', 'Empire Strikes Bank', 'Return of the Jedi']
movies.unshift('Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith');
movies.push('The Force Awakens', 'The Last Jedi','The Rise of Skywalker');
movies.splice(0, 3, 'Literally anything else');
movies.forEach(x => {console.log(x)})





let long = [1,2,3,4,5,6,7,8,9,10]
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length);
console.log(colors.toString());
console.log(typeof colors);
console.log(typeof colors.toString());
console.log(colors instanceof Array);
colors.forEach(c => console.log(c));



let arr = [1,2,3,4,5]
console.log(arr instanceof Array)
console.log(arr.reverse());

