//For Loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition, is reached.

for (let i = 0; i < 10; i ++){
    //1         2       3
    console.log(i);
}

//1 starting condition
//2 stopping condition
//iteration statement, what do you want it to do each time the loop runs

for (let i = 0; i <= 20; i += 2){
    console.log(i);
}

for (let i = 10; i >= 0; i--){
    console.log(i);
}

for (let i = 0; i >= -24; i -= 2){
    console.log(i);
}

let name = 'ingeborg';
for (let i = 0; i <= name.length; i ++){
console.log(name[i]);
}

let sum = 0
for (let i=1; i<=50; i++){
    sum += i;
}
console.log(sum);


let n = 50;
console.log((n*(n+1))/2);
