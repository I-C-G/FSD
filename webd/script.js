// function sayHello() {
//     let you = prompt('What is your name?');
//    console.log('Hello', you + '!');
// }
// sayHello();

// let varContainingFunction = function() {
//     let varInFunction = "I'm a variable in a function";
//     console.log("hi There!",varInFunction);
// };

// varContainingFunction();

// function tester(para1, para2) {
//     return para1 + " " + para2;
// }
// const test = tester("Hello", "World!");
// console.log(test);


// function add(a, b) {
//     console.log(a+b);
// }
// parseInt(prompt("Enter first number: ", function(a)));
// parseInt(prompt("Enter second number: ", function(b)));
// add(a, b); 


// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }
// addTwoNumbers()
// addTwoNumbers(6,6)
// addTwoNumbers(10)
// addTwoNumbers(1,2,3,4)





// SPECIAL FUNCTIONS

// let doingstuff=(x)=>console.log(x);
// doingstuff("hi there!");

// let addTwoNumbers = (a, b) => console.log(a + b);
// addTwoNumbers(5,3);

// const arr = [1, 2, 3, 4, 5];
// arr.forEach(element => console.log(element));



// SPREAD OPERATOR

// let spread=["some", "random", "words"]; 
// let spread2=["more", "random",...spread, "words"];
// let spread2=["more", "random",spread, "words"];
// console.log(spread2);


// function addNumbers(x,y){
//     console.log(x+y);
// } 
// let arr=[1,2];
// addNumbers(...arr);


//REST OPERATOR

// function someFunction(param1 , ...param2){
//     console.log(param1,param2);
// }   
// someFunction("hello", "world", "this", "is", "a", "test");


//RETURNING FUNCTION VALUES


// function addTwoNumbers(x,y){
//     return x+y; }
// let resultArr=[];
// for(let i=0; i<10; i++){
//     let result=addTwoNumbers(i,2*i);
//     resultArr.push(result);}
        
// console.log(resultArr);

// RETURNING WITH ARROW FUNCTION

// let addTwoNumbers=(x,y) => x+y; 
// let result = addTwoNumbers(5,3);
// console.log(result);

// let addTwoNumbers=(x,y) => {
//     console.log("Adding.....");
//     return x+y;     
// }

//SCOPE

// function testAvailibility(x){
//     console.log("Available here:", x);  
// }
// testAvailibility("hi there!");
// console.log("Not available here:", x);

// function testAvailibility(y){
//     let y="Local Variable";
//     console.log("Available here:", y);
// }
// testAvailibility();
// console.log("Not available here:", y);  

// function doingstuff(){
//     if(true){
//         console.log(x);
//         var x="local";
//     }
// }
// doingstuff();

// function doingstuff(){
//     if(true){
//         console.log(x);
//         let x="local";
//     }
// }
// doingstuff();
// GLOBAL VARIABLE

// let globalVar="Accessible everywhere"
// console.log("Outside function",globalVar);

// function doingstuff(){
//     console.log("Inside function",globalVar);
// }
// doingstuff();

// let x="global";

// function doingstuff(){
//     let x="local";
//     console.log("Inside function",x);
// }   
// doingstuff();
// console.log("Outside function",x);
// IIFE-IMMEDIATELY INVOKED FUNCTION EXPRESSION
// (function (){
//     console.log("IIFE");
// })
// ();

//Recursive functions

// function getRecursive(nr){
//     console.log(nr);
//     getRecursive(--nr);
//     }
// getRecursive(5);

// function getRecursive(nr){
//         console.log(nr);
//         if(nr > 0){
//            getRecursive(--nr);}
// }getRecursive(5);

// function logrecursive(nr){
//     console.log(nr);
//     if(nr > 0){
//         logrecursive(nr-1);
//     }else{
//         console.log("End of recursion");
//     }
//     console.log(nr);
// }
// logrecursive(5);

//Iteration is better than recursion

//Nested functions

// function doOuterFunctionStuff(nr){
//     console.log("Outer function", nr);
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log("Inner function", x+7);
//     console.log("Inner function", nr);
//     }
// }

// let functionvariable = function() {
//     console.log("I am a function variable");
// }
// functionvariable();
// doflexibleStuff = function() {
//     console.log("I am a flexible function variable");
// }

// let youGotIt = function() { 
//     console.log("You got it!");
// };
// setTimeout(youGotIt, 2000);

//SET Interval

// let interval = setInterval(function() {
//     console.log("hi there!");
// }
// , 1000);  

// (function()){
//     console.log("IIFE");
//  }();
