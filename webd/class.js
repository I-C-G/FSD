// class ClassName{
//     constructor(name, description) {    
//         this.name = name;
//         this.description = description;
//     }
// }
// let obj=new ClassName("IT-4C", "This class is cool.");
// console.log(obj.name);
// console.log(obj.description);
// this keyword refers to the object it belongs to.

// class Dog{
//     constructor(name,weight,colour, breed) {
//         this.name = name;
//         this.breed = breed;
//         this.weight = weight;
//         this.colour = colour;
//     }}
// let dog1=new Dog("Rex", 20, "brown", "bulldog");
// console.log(dog1.name);
// console.log(dog1.weight); 
// console.log(dog1.colour);
// console.log(dog1.breed);

//CLASSES:
//There can only be 1 constructor in a class.
//It is convention to start class name with a capital letter

// class Person{
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let person1=new Person("Ishan", "Chandra");
// console.log("Hi",person1.firstname);
// // METHODS:
// // Methods are functions that belong to an object.

// class Person{
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hello", this.firstname, this.lastname);
//     }
//     compliment(name,object){
//         return "That's a wonderful " + object + " " + name + "!";
//     }
// }
// let person1=new Person("Ishan", "Grover");
// let compliment=person1.compliment("Ishan", "car");
// console.log(compliment);
// person1.greet();

// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//            this.#firstname=firstname;
       
//         this.#lastname=lastname;

//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
// this.#firstname=firstname;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
// this.#lastname=lastname;
//     }
// }
// let q=new Person("Harry","hat");
// console.log(q.firstname);
// class Vehicle {
//     constructor(make, model, year, color) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
//     start() {
//         console.log("Starting vehicle...");
//     }
//     stop() {
//         console.log("Stopping vehicle...");
//     }
// }
// class Motorcycle extends Vehicle {
//     constructor(make, model, year, color) {
//         super(make, model, year, color);
//         this.type = "Motorcycle";
//     }
//     start() {
//         console.log("Starting motorcycle...");
//     }
//     stop() {
//         console.log("Stopping motorcycle...");
//     }
// }

// let motorcycle1 = new Motorcycle("Harley Davidson", "Street 750", 2020, "Black");
// console.log(motorcycle1.color);
