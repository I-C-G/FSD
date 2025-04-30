//map holds the key value pair where key can be of any datatype

//create a map
const fruits = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);
console.log(fruits);

//the set() method

// const fruits= new Map();
// fruits.set("apples",500);
// fruits.set("bananas",300);
// fruits.set("oranges",200);

//the get() method

fruits.set("apples",200);
fruits.get("apples");
console.log(fruits);

//difference between jsobjects and maps
//obj; iterable, no size prop, keys must be str, keys are not well ordered. hv default keys.
//maps: not iterable, hv size prop, keys can be of any data type, well ordered, no default keys.

// console.log(fruits.size);
// fruits.delete("apples");
// console.log(fruits);
// fruits.clear();
// console.log(fruits);

// console.log(fruits.has("apples"));

// let text="";
// fruits.forEach(function(value,key){
//     text += key + '=' + value;
// })
// console.log(text);

// function judge(grade) {

//     switch (true){
    
//     case grade == "A":
    
//     console.log("You got an", grade, ": amazing!");
    
//     break;
    
//     case grade =="B":
    
//     console.log("You got a", grade, ": well donel");
    
//     break;
    
//     case grade == "C":
    
//     console.log("You got a", grade, ": alright.");
    
//     break;
    
//     case grade == "D":
    
//     console.log("You got a", grade," hmmm...");
    
//     break;
    
//     default:
    
//     console.log("An", grade, "! What?!");
//     }
//     }
    //     function getGrade(score,callback){
//         let grade;
//         switch (true){
//             case score >= 90:
//                 grade = "A";
//                 break;
//             case score >= 80:
//                 grade = "B";
//                 break;
//             case score >= 70:
//                 grade = "C";
//                 break;
//             case score >= 60:
//                 grade = "D";
//                 break;
//             default:
//                 grade = "F";
//         }
//         callback(grade);
//     }
// getGrade(85, judge);

// setInterval(encourage, 1000);
// function encourage() {
//     console.log("You can do it!");
// }

//PROMISES

// let promise = new Promise(function(resolve, reject){
//     let x=20;
//     if (x>10){
//         resolve(x);}
//     else{
//         reject("x is less than 10");}
//     });
// promise.then(function(value){
//     console.log("Success! x is", value);
// }).catch(function(error){
//     console.log("Error:", error);
// });

// const promise = new Promise((resolve, reject) => {
//     resolve("Success!");
// });
// .then(value=>{
//     console.log(value);
//     return "we"
// })
// .then(value=>{
//     console.log(value);
//     return "are"
// })
// .then(value=>{
//     console.log(value);
//     return "the"
// })
// .then(value=>{
//     console.log(value);
//     return "champions"
// })
// .then(value=>{
//     console.log(value);
// })
// .catch(value=>{
//     console.log(value);
// })
