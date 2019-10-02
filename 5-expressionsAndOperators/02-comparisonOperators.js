// Equal
'3' == 3; //compares with ==, as opposed to assigning with =.  This looks at value, not data type

//Strictly equal
'3' === 3; //this looks at the data type AND value.  Best practice, use ===

//Not equal
3 != 4;

//strictly not equal
'3' !== 3;

//greater than
3 > 2;

//less than
2 < 3;

//greater than or equal to
3 >= 2;

//less than or equal to
2 <= 3;

// And
2 && 3;

// Or 
2 || 3;

let x = 40;
console.log(x < 50 && x > 30);