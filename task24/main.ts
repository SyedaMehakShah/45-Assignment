// Tests for equality and inequality with strings

let name1 :string = "hello"
let name2 : string = "mehak"
let name3 : string = "hello"

console.log(name1 == name2);   //false
console.log(name2 != name1);  //true
console.log(name3 == name1);  //true
console.log(name3 != name1);  //false

// Tests using the lower case function

let country = "mehakshah"

console.log(country.toLowerCase() == country);  //true
console.log(country.toLowerCase() != country);  //false

// Numerical tests 
let num1 = 25
let num2 = 65

console.log(num1 == num2); //false
console.log(num1 != num2); //true
console.log(num1 > num2);  //false
console.log(num1 < num2);  //true
console.log(num1 <= num2);  //true
console.log(num1 >= num2);  //false

// Tests using "and" and "or" operators:


  let  num5 = 10
  let num6 = 20
 let num7 = 5
    
    console.log(num5 < num6 && num5 < num7);  // false
    console.log(num5 < num6 || num5 > num7);   // True

    //test on Array
   let array = [1, 2, 3, 4, 5]

console.log(3 in array);   // True
console.log(2 in array);   //true

console.log(8 in array);   //false
console.log(6 in array);   //false






