//CHAPTERS 1 & 2 - BASICS
//!!OPERATOR CHAPTER!!//

//Outputs true
console.log("Itchy" != "Scratchy");

//Ternary operator ?, conditional operator
console.log(true ? 1:2);
//Value on left "picks" which of the values will come out
console.log(false ? 1:2);

//Javascript uses "type coercion" to force data types
console.log("5"-1);
// → 4

//!!BINDING SECTION!!//

//Binding/Variable allows the catching and holding of values
let caught = 5*5;
console.log(caught);

//Can point to a new value at any time
caught = 5;
console.log(caught);

//These are kind of like pointers; Two bindings can refer to the same value
let pointer = caught;
console.log(pointer);

//You can create multiple bindings in a single statement
let one = 1, two = 2;
console.log(one + two);

//You can also use var and const to create bindings
//Var isn't really used
var name = "Ayda";
//Const values point at the same value for as long as it lives
//For example, changing greeting to "test" would fail
const greeting = "Hello ";
console.log(greeting + name);

/*Binding name rules
Cannot start with a digit
Can include $ or _ but no other punctuation/special characters
Can not use keywords such as let

Can not use the following reserved words:

break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
*/

//The collection of bindings and their values that exist at any time is called the environment
//There are values in default environment that have the function type

//When a function produces a value, it is said to return that value
console.log(Math.max(2,4));
console.log(Math.min(2,4) + 100);

/*Cant run without browser due to usage of prompt

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
        theNumber * theNumber);
}
*/

//Simple "if-statement"
if(1 + 1 === 2) console.log("It's true\n");

//While Loop
let number = 0;
while(number <= 12){
    console.log(number);
    number += 2;
}

//Calculates and shows the value of 2^10
let result = 1;
let counter = 0;
while(counter < 10){
    result *= 2;
    counter++;
}
console.log("\n" + result + "\n");

/*Do loop, uses prompt

let yourName;
do{
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
 */

//For loop
for(let number = 0; number <= 12; number += 2){
    console.log(number + "\n");
}

//Breaking out of a loop
for(let current = 20; current += 1;){
    if (current %7 === 0){
        console.log(current + "\n");
        break;
    }
}

//Using Switch in JS
switch (console.log("What is the weather like?")){
    case "rainy":
        console.log("It is rainy");
        break;
    case "sunny":
        console.log("It is sunny");
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("Unknown weather type!" + "\n");
        break;
}

/* Choices for binding names:
fuzzylittleturtle
fuzzy_little_turtle
FuzzyLittleTurtle
fuzzyLittleTurtle
*/


//Print out a triangle
let content = '';
    for(let i = 0; i < 7; i++){
        content += '#';
        console.log(content);
    }

//FizzBuzz
//Switch isn't good for this as it turns out
/* for(let i = 0; i <100; i++){
       switch (true){
        case (i % 3 === 0):
            console.log("Fizz");
            break;
        case (i % 5 === 0):
            console.log("Buzz");
            break;
        case (i % 15 === 0):
            console.log("FizzBuzz");
            break;
        default:
            console.log(i);
            break;
    }
}
*/

//FizzBuzz SEXY SOLUTION
for(let i = 1; i <= 100; i++){
    let output = "";
    if(i % 3 === 0)
        output = "Fizz";
    if(i % 5 === 0)
        output += "Buzz";
    console.log(output || i);
}

//My dumb/smart way
for(let i = 2; i < 10; i++){
    if(i%2 === 0)
        console.log(" # # # #");
    else
        console.log("# # # #")
    }

console.log("\n\n");

//The intended way
let width = 8;
let height = 8;
let board = '';

for(let i = 0; i < height; i ++){
    if (i % 2 === 0){
        board += " ";
    }
    for(let j = 0; j < width; j++){
        board += " # ";
    }
    board += "\n";
}
console.log(board);







