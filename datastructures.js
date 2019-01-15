/* DATA STRUCTURES: OBJECTS AND ARRAYS */

/* Yay, Arrays */
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);


let doh = "Doh";
console.log(typeof doh.toUpperCase());
console.log(doh.toUpperCase());

/* Sequence/Stack */
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// [1, 2, 3, 4, 5]
console.log(sequence.pop());
// 5
console.log(sequence);
// [1, 2, 3, 4]

/* Objects */

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
// false
console.log(day1.wolf);
// undefined
day1.wolf = false;
console.log(day1.wolf);
// false

let descriptions = {
    work: "Went to work",
    "touched tree" : "Touched a tree"
};

/* Delete operator cuts off "tentacles" or pointers */
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// 1
delete anObject.left;
console.log(anObject.left);
// undefined
console.log("left" in anObject);
// false
console.log("right" in anObject);
// true

/* The "in" operator tells you whether an object has a property with that name */
/* To find out what properties an object has, you can use Object.keys */
console.log(Object.keys({x: 0, y: 0, z: 2}));

/* Object.assign function copies all properties from one object into another */
let objectA = {a: 1, b:  2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// {a: 1, b: 3, c: 4}

/* Arrays are actually objects according to typeOf */

/* Lets represent a journal as an array of objects */
/* let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
    squirrel:true}
]; */

/* Mutability */
/* The types of values such as numbers, strings, and booleans are all immutable
- it's impossible to change values of those types - for example, if you have a string
that says "cat" you cannot change a character to make it spell "rat"

Objects are different, you can change their properties - causing a single object
value to have different content at different times
 */

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 === object2);
// true, as they have the same "identity"
console.log(object1 === object3);
// false

object1.value = 15;
console.log(object2.value);
// 15, since object 2 is bound to object 1
console.log(object3.value);
// 10

/*  While a const binding can't be changed, the contents still can change */
const score = {visitors: 0, home: 0};
score.visitors = 1;
/* The above is allowed, but this is not: score = {visitors: 1, home: 1}; */
/* When you use the === operator, it compares the IDENTITY - it will only produce true
if both objects are precisely the same value, even if they have identical properties */

console.log("\n\n\n\n");

/* Implementation of Lycanthrope's Log */
let journal = [];

function addEntry(events, squirrel){
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], true);

/* Computing Correlation */
/* Value from -1 to 1 to express relation between variables */
/* sigma = (n11n00 - n10n01) / (sqrt(n1.n0.n1.n0)) */

let table = [76, 9, 4, 1];

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}
console.log(phi(table));

/* Extracts a 2x2 table, counts "pizza" event in relation to squirrels */
const JOURNAL = require('./journal.js');

function tableFor(event, journal){
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++){
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index +=1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL));

/* Array Loops: Simpler Way */

for (let entry of JOURNAL){
    console.log(`${entry.events.length} events.`);
}

/* The Final Analysis
We need to compute a correlation for every type of event, we first need to find every
type of event */

function journalEvents(journal){
    let events = [];
    for (let entry of journal){
        for (let event of entry.events){
            if (!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}

console.log(journalEvents(JOURNAL));

/* Using events, we can observe all the correlations */
for (let event of journalEvents(JOURNAL)){
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
}

/* Most correlations seem to lie close to zero. Lets filter to show only
greater than 0.1 or less than -0.1 */
console.log("\n\n");

for (let event of journalEvents(JOURNAL)){
    let correlation = phi (tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1){
        console.log(event + ":", correlation);
    }
}

/* Peanuts have a strong effect on turning into a squirrel, whereas brushing teeth has a negative
effect. Let's try something */
console.log("\n\n");

for (let entry of JOURNAL){
    if(entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")){
        entry.events.push("peanut teeth");
    }
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));

/* That’s a strong result.
The phenomenon occurs precisely when Jacques eats peanuts and fails to brush his teeth. */

/* FURTHER ARRAYOLOGY */
/* The methods for adding and removing things at the start of an array are called
unshift and shift */

let todoList = [1, 2, 3, 4];
function remember(task){
    todoList.push(task);
}

function getTask(){
    return todoList.shift();
}

function rememberUrgently(task){
    todoList.unshift(task);
}

remember(5);
console.log(todoList);
console.log(getTask());
console.log(todoList);
rememberUrgently(1);
console.log(todoList);

console.log("\n");

/* To search for a specific value, arrays provide an indexOf method to search for elements */
console.log([1, 2, 3, 2, 1].indexOf(2));
// 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// 3

/* Another array method is slice */
/* Takes the start and end indices and returns an array that has only the elements between them */
/* Includes start index, excludes end index */

console.log([0, 1, 2, 3, 4].slice(2, 4));
// [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// [2, 3, 4]

/* The concat method can be used to glue arrays together */
/* This example combines concat and slice */

function remove(array, index){
    return array.slice(0, index).concat(array.slice(index+1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));

/* Strings And Their Properties */
/* Can't add properties to strings */
let kim = "Kim";
kim.age = 88;
console.log(kim.age);

/* Strings do have methods though, including slice and indexOf */
console.log("coconuts".slice(4, 7));
// nut
console.log("coconut".indexOf("u"));
// 5

/* indexOf can search for a string containing more than one character */
console.log("one two three".indexOf("ee"));

/* The trim method removes whitespace from the start and end of a string */
console.log("   okay \n".trim());
// okay

/* The zeroPad function also exists as a method and takes the desired length and padding */
console.log(String(6).padStart(3, "0"));

/* You can split a string on every occurrence of another string with split and join it again with join */
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// ["Secretarybirds", "specialize, "in", "stomping"]
console.log(words.join(". "));
// Secretarybirds. specialize. in. stomping

/* A string can be repeated with the repeat method */
console.log("LA".repeat(3));
// LALALA

/* Accessing individual characters in a string looks like accessing array elements */
let string = "abc";
console.log(string.length);
//3
console.log(string[1]);
//b

/* Rest Parameters
It can be useful for a function to accept any number of arguments, to do this you put three
dots before the function's last parameter */

function max(...numbers){
    let result = -Infinity;
    for(let number of numbers){
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
//9

/* You can use the three-dot notation to call a function with an array of arguments */
let numbers = [5, 1, 7];
console.log(max(...numbers));
// 7

/* Square bracket array notation allows the triple-dot operator to spread another array into the new array */
let words1 = ["never", "fully"];
console.log(["will", ...words1, "understand"]);
// ["will", "never", "fully", "understand"]

/* The MATH Object */
/* Math contains trig: cos, sin, tan, acos, asin, and a tan. Math.PI is always available */

function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));

// {x: 0.3667, y: 1.966}
// By default, Math.random returns a number between zero (inclusive) and one (exclusive)
// If we want a whole random number instead of a fractional one, we can use Math.floor on result

// Between 0 and 9
console.log(Math.floor(Math.random() * 10));

// There's also Math.ceil(), Math.round(), and Math.abs()

/* Destructuring */

// Original :
function phi1(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

// One of the reasons this function is awkward is we have a binding pointing at our array,
// but it'd be preferable to have bindings for the elements of the array

function phi2([n00, n01, n10, n11]){
    return (n11 * n00 - n10 * n01)/
        Math.sqrt((n10 + n11) * (n00 + n01) *
                     (n01 + n11) * (n00 + n10));
}

console.log(phi2(table));

/* This works for binding created with let, var, or const. If you know the value you are binding
is an array, you can use square brackets to "look inside" the value, binding its contents

A similar trick works for objects using braces instead of square brackets */
let {name} = {name: "Faraji", age: 23};
console.log(name);

/* Objects and arrays are stored in computer memory as sequences of bits - an array with another
array inside of it has two separate memory addresses. If you want to save data in a file or send
it to another computer, you have to somehow convert these tangles of memory addresses to a description
that can be stored or sent.

The solution is to serialize the data. That means convert into a flat description. A popular serialization
format is called JSON (Javascript Object Notation).

{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}

JavaScript gives us JSON.stringify and JSON.parse to convert data to and from this format. The first
takes a JavaScript value and returns a JSON-encoded string. The second takes such a string and converts
it to the value it encodes
*/

let string1 = JSON.stringify({squirrel: false, events: ["weekend"]});

console.log(string1);
// {"squirrel":false, "events:["weekend"]}
console.log(JSON.parse(string1).events);
// ["weekend"]

// A LIST
// Nested set of objects with the first object holding a reference to the second, second to third, etc

let list = {
    value: 1,
    rest : {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

// value: 1 ---> value: 2 ---> value: 3

/* Write a function arrayToList and listToArray */

let arr = [1, 2, 3];

function arrayToList( array ){
    let list = null;

    for ( let i = array.length-1; i >= 0; i--){
        list = { value: array[i], rest: list};
    }
return list;
}

console.log(arrayToList(arr));


function listToArray( list ){
    let array = [];
    for (let node = list; node; node = node.rest)
        array.push(node.value);

    return array;
}

console.log(listToArray(arrayToList(arr)));

/* Add a helper function prepend which takes an element and a list and creates a new list that adds
the element to the front of the input list and nth, which takes a list and a number and returns
the element at the given position in the list or undefined when there is no such element */

let input = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function prepend(element, list){
    let newList = {value:element, rest: list};
    return newList;
}

console.log("\nPREPEND: \n");
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

/* Smart solution
function nth(list, index){
    return listToArray(list)[index];
}
*/

function nth(list, index){
    if(index === 0)
        return list.value;
    else
        return nth(list.rest, index - 1);
}

console.log("\n" + nth(arrayToList([10, 20, 30, 40, 50]), 3));

/* Write a function deepEqual that takes two values and returns true only if they are the same value
or are objects with the same properties

To find out whether values should be compared directly (use the === operator for that)
or have their properties compared, you can use the typeof operator. */

function deepEqual (x, y){
    // This is to handle the case where both objects have the same memory location
    if (x === y)
        return true;

    // We need to define if both arguments are objects and none of them are null
    if (x == null || typeof x != "object" || y == null || typeof y != "object")
        return false;

    // These variables are for counting the number of loops and the # of properties in each object
    let propertiesInX = 0, propertiesInY = 0;

    for (let prop in x) {
        propertiesInX++; }

    for (let prop in y){
        propertiesInY++;

        // This is where it gets complicated; We recursively called the function again using the
        // properties as parameters
        if(!(propertiesInX) || !deepEqual(x[prop], y[prop]))
            return false;
    }

    return propertiesInX === propertiesInY;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));