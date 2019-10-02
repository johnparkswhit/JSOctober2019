//For Of Loops is good for arrays, which In Loops are better for objects

let student = {
    name: "Peter",
    awesome: true,
    degree:"javaScreipt",
    week:1
}

for (item of student){
    console.log(item);
}
//this does not work.  does not like objects


let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for(cat of catArray) { //just like In Loops, cat is a placeholder so the loop can cycle and change the value.
    console.log(cat, 'says meow');
}