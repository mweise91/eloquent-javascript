function blankLine(){
    console.log("\n");
}

/* Abstractions hide details and give us the ability to talk about problems at a higher level */

for (let i = 0; i < 10; i++){
    console.log(i);
}

function repeatLog(n){
    for(let i = 0; i < n; i++){
        console.log(i);
    }
}

/* What if we want to do something other than logging numbers? */

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

console.log("\n");
repeat(3, console.log);

/* We don't have to pass a predefined function to repeat, can just create a function value on the spot */
let labels = [];
repeat(5, i => {labels.push(`Unit ${i+1}`)});
console.log("\n" + labels);

/* Functions that operate on other functions either by taking them as arguments or by returning them,
are called higher-order functions */

/* We can have functions that create new functions */
function greaterThan(n){
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// true

blankLine();

/* We can also have functions that change other functions */
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3, 2, 1);
// Calling with 3, 2, 1
// Called with 3, 2, 1, returned 1

blankLine();
/* We can also write functions that provide new types of control flow */
function unless (test, then){
    if (!test) then();
}

repeat (3, n=>{
    unless(n%2 === 1, () => {
        console.log(n, "is even");
    })
});

blankLine();
/* There's a built in array function forEach */
["A", "B"].forEach(l => console.log(l));
// A
// B

/* Script Data Set */
