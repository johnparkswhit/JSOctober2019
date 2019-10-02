//Calling Functions

//you can have washing machines and microwaves and all kinds of machines, but they don't do anything until you press the on button

function hi(){
    console.log('Hi');
    return "HI";
}
hi();
console.log(hi());


function list(){
    for (let i = 1; i <= 10; i++){
        console.log(i);
    }
}
list()


let arr = ['This', 'is', 'really', 'cool'];
function arrList(){
    for (word of arr){
        console.log(word);
    }
}
arrList();