// Square bracket notation

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable);

let x = 'vegetable';

console.log(garden.x);//this is undefined.  the dot notation doesn't take the variable x
console.log(garden[x]);

let baking = {};
baking.zucchini = 'better make some bread'; //this or the next line can add a value to the empty object 'baking'
baking ['zucchini'] = 'better make some bread'
console.log(baking);

console.log(baking[garden['vegetable']])




let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let key = 'water';

Object.keys(garden).forEach(g => {
    // console.log(g);
    if (g === key){
        console.log(garden[key]);
    }
})