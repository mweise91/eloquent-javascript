//CHAPTER 3 - FUNCTIONS


const square = function(x){
    return x*x;
};

console.log(square(12));

//No parameters
const makeNoise = function(){
    console.log("Pling!");
};

makeNoise();

//Two parameters
const power = function(base, exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};

console.log(power(2, 10));

//Every binding has a scope. Bindings created for parameters or declared inside can only be referenced
//inside that function. Using "var" keyword has a global scope

let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}

//y is not visible here but z is
console.log(x + z);
//40

//Can only see the innermost n, when halve is called it sees its own n
const halve = function(n){
    return n / 2;
};

let n = 10;
console.log(halve(100));
//50
console.log(n + "\n");
//10

//NESTED SCOPE
const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(2);

//DECLARATION NOTATION
function squareNew(x){
    return x*x;
}

console.log(squareNew(2));

//Functions ignore order of code; They are moved to top of scope so this code works
console.log("The future says: ", future());

function future(){
    return "You'll never have flying cars";
}

//Arrow functions, just so it's less verbose
const powerNew = (base, exponent) => {
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};

console.log(powerNew(2, 4));

//When there's only one parameter, you can omit parentheses around parameter list
const square1 = (x) => {return x * x};
const square2 = x => x*x;

console.log(square2(3));

//THE CALL STACK

//The call to greet jumps to line 2. Returns to line 4 after console.log, and executes line 5
function greet(who){
    console.log("Hello " + who);
}
greet ("Harry");
console.log("Bye");

/*not in function
   in greet
        in console.log
   in greet
not in function
   in console.log
not in function*/

//Every time a function is called the current context is placed on top of a stack
//This is an example of a stack overflow

function chicken(){
    return egg();
}
function egg(){
    return chicken();
}
//console.log(chicken() + " came first.");

//OPTIONAL ARGUMENTS

//This code still executes and ignores the extra arguments, JS is weird
function square3(x){return x * x}
console.log(square(4, true, "hedgehog"));

//Allows the programmer to call a function with different number of arguments
function minus(a, b){
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));
console.log(minus(10, 5));

//This version of power makes its second argument optional, defaults to 2
function power2(base, exponent = 2){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power2(4));
// 16
console.log(power2(2, 6));
// 64

//What happens to local bindings when the function call is no longer active
//Both instances of the binding can still be accessed
function wrapValue(n){
    let local = n;
    return() => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
//1
console.log(wrap2());
//2

//Being able to reference a specific instance of a local binding is called closure

function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
//Twice remembers the environment in which it was initialized with 2
//10

//RECURSION

function powerRecursion(base, exponent){
    if (exponent === 0){
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(powerRecursion(2,3));
//8


function findSolution(target){
    function find(current, history){
        if (current === target){
            return history;
        } else if (current > target){
            return null;
        } else {
            return find(current + 5, `(${history} + 5`) ||
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(13));

/*find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found! */

/* We want to write a program that prints two numbers: the number of cows and chickens,
also print the numbers with zeros padded before so they're always 3 digits
 */

function printFarmInventory(cows, chickens){
    let cowString = String(cows);
    while (cowString.length < 3){
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);

    let chickenString = String(chickens);
    while (chickenString.length < 3){
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

/* We're asked to extend the functionality to pigs
 * The goal is to separate the functionality */

console.log("\n");
function zeroPad(number, width){
    let string = String(number);
    while (string.length < width){
        string = "0" + string;
    }
    return string;
}

function printFarmInventory2(cows, chickens, pigs){
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory2(7, 16, 3);


console.log("\n");
/*Write a function min that takes two arguments and returns their minimum*/
function min(one, two){
    if (one < two)
        return one;
    else
        return two;
}

console.log(min(0, 10));
console.log(min(0, -10));

/*Write a recursive function isEven*/

function isEven(number){
    if (number < 0){
        return isEven(-number);
    }
    else if(number === 0){
        return true;
    }
    else if(number === 1){
        return false;
    }
    else {
        return isEven(number - 2);
    }
}

console.log(isEven(42)); //true
console.log(isEven(-42)); //true
console.log(isEven(-1)); //false
console.log(isEven(27));

/* Write a function that counts the number of uppercase B's in a string */

function countB(sentence){
    let b = 0;
        for (let i = 0; i < sentence.length; i++){
             if (sentence[i] === 'B'){
             b++;
             }
    }
    return b;
}
console.log(countB("BaBaaazBooB"));

/* Next, write a function countChar that takes a second argument that indicates
the character to be counted */

function countChar(sentence, char){
    let count = 0;
        for (let i = 0; i < sentence.length; i++){
            if (sentence[i] === char){
                count++;
            }
        }
        return count;
}
console.log(countChar("kakkerlak", "k"));

/* The fun way */

function countChar2(str, character){
    let matchExp = new RegExp(character, 'g');
    return str.match(matchExp).length;
}

console.log(countChar("kakkerlak", "k"));




