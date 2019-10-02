let hi = () => {
    return 'hello';
    //1
}

let newName = hi();
//  2           3

console.log(newName);

//1. the return keyword lets our data be available outside of our function
//2. we need a new variable to hol dthe value of the return
//3. when called, the function becomes the value of the return