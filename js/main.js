/*

JavaScript Operators:

There are times when we may want to make a decision in our code based on if a condition is true or false. 
Comparison Operators allow us to evaluate conditions. 
A comparison operator compares two values (known as operands) and returns a Boolean (True/False) value. 

( Variable1       ==        Variable2 )
     ^            ^             ^
  Operand     Comparison     Operand
               Operator

*/

// Game of Thrones Seasons
let seasons = 8;
let character = 'Snow';

// IS EQUAL TO ==
console.log("seasons == 9");
console.log(seasons == 9); // Returns false

// STRICT EQUAL TO ===
console.log("seasons === 8");
console.log(seasons === 8); // Returns true

console.log("seasons === '8'");
console.log(seasons === '8'); // Returns false

// IS NOT EQUAL TO !=
console.log("character != 'Targaryen'");
console.log(character != 'Targaryen'); // Returns true

console.log("character != 'Snow'");
console.log(character != 'Snow');  // Returns false

// STRICT NOT EQUAL TO !==
console.log("seasons !== 8");
console.log(seasons !== 8); // Returns false

console.log("seasons !== '8'");
console.log(seasons !== '8'); // Returns true

// GREATER THAN  >
console.log("seasons > 5");
console.log(seasons > 5); // Returns true

// GREATER THAN OR EQUAL >=
console.log("seasons >= 12");
console.log(seasons >= 12); // Returns false

console.log("seasons >= 8");
console.log(seasons >= 8); // Returns true

// LESS THAN <
console.log("seasons < 10");
console.log(seasons < 10); // Returns true

// LESS THAN OR EQUAL TO <=
console.log("seasons <= 8");
console.log(seasons <= 8); // Returns true

console.log("seasons <= 7");
console.log(seasons <= 7); // Returns false
 