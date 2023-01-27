//Strict mode
/*'use strict'

let a = 10;
console.log(a)

function sayHello (){
    // b = 25;
}
// sayHello();
// console.log(b)

// Strict Mode restricts you to use domw reserved words that can be introduced in the future releases

// const private = "I am a reserved keyword"
const interface = "I am an interface"
console.log(interface)*/


//Introduction to Objects

// const bharat = [
//     "Bharat",
//     "Chavhan",
//     23,
//     "Developer"
// ]
// Order is preserved
// console.log(bharat)
// console.log(bharat[3])

//Objects
// const bharat2 = {
//     firstName: "Bharat",
//     lastName: "Chavhan",
//     age: 23,
//     job: "Developer",
//     25: 1568996,

//     // Arrow function ❌

//     intro: function summary() {
//         return `Hi I am a ${this.firstName}`
//     },

//     summary: function () {
//         return `Hi I am a ${this.firstName}`

//     }
// }

/* const summary =  function () {
      return `Hi I am a ${this.firstName}`
}

}*/

// insertion order is not preserved 
//  console.log(bharat2)
// console.log(bharat2.intro())
// console.log(bharat2.summary())

// let first = "firstName";
// console.log(bharat2.firstName)


// console.log(bharat2.first)

// Bracket notation is actually accepting an expression
// console.log(bharat2)
// console.log(bharat2["firstName"])
// console.log(bharat2[first])

// Mini program
// const userInput = prompt("Enter age, firstName, lastName or job ")

// if(userInput){
//     console.log(bharat[userInput])
// }


// console.log(bharat2[12+13])
// console.log(bharat2["first"+"Name"])

// for(let key in bharat2){
//     // console.log(`${key}: ${typeof key}`)
//     console.log(`${key} : ${bharat2[key]}`)
// }

// bharat2.money = 555555555;
// bharat2["money2"] = 66666;
// bharat2.hungry = function (){
//     return `I am hungry`
// }
// console.log(bharat2)

// let str = "Savinder";
// console.log(str[0])


// const arr = [1,2,3,4]
// console.log(arr[0])
// arr[0] = 5555;
// console.log(arr)
// str[0] = "B"
// console.log(str)

// str = "Bavinder"
// console.log(str)


//  const student = {
//     studentName : "Mayur",
//     class:"12th",
//     section : "A",
//     status : function (){
//     return `${this.studentName} is a good Student`
//     }
// }
// console.log(student.status())
// console.log(student.status())
// console.log(student.status())
// console.log(student.status())
// console.log(student.status())

// const student = {
//     studentName : "Mayur",
//     class:"12th",
//     section : "A",
//     status : function (){
//         this.intro = `${this.studentName} is a good Student`;
//         return this.intro

//     }
// }

// console.log(student.status())
// console.log(student.intro)
// console.log(student.intro)
// console.log(student.intro)
// console.log(student.intro)

/**************Constructor Function*********** */

const Person = function (firstName, lastName, birthYear, currentYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.currentYear = currentYear;


    // This is not recommeded
    // this.calcAge = function () {
    //     return `The age of ${this.firstName} ${this.lastName} is 
    //        ${this.currentYear - this.birthYear}`
        
    // }
}

Person.prototype.calcAge = function (){
    return `The age of ${this.firstName} ${this.lastName} is ${this.currentYear - this.birthYear}`

}
const mayur = new Person ('Mayur',"Tiwari",1999,2023);
// console.log(mayur)

const atul = new Person ('Atul',"Singh",1999,2023);
const bharat = new Person ('Bharat',"chavhan",1998,2023);
const riya = new Person ('Riya',"Tiwari",1999,2023);

console.log(mayur)
console.log(riya)
console.log(bharat.calcAge())
console.log(atul.calcAge())
// console.log(atulBhai)

//new operator does these 4  steps
// creates an {} object
// function is being called & this = {}
// {} linked to prototype
// function will return {}

// const str = new String("Savinder")
// console.log(str)


const a = {

}

String.prototype.hello = "Hello I am JavaScript";

