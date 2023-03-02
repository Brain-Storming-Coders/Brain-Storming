// call, apply and bind

// let person = {
//     firstName : "Riya",
//     lastName : "Tiwari",
//     printFullname : function () {
//         console.log(`Fullname of the person: ${this.firstName} ${this.lastName}`);
//     }
// }

// person.printFullname();

// let person2 = {
//     firstName : "Laxmi",
//     lastName : "Jaishi"
// }

// person.printFullname.call(person2);

// let person = {
//     firstName : "Riya",
//     lastName : "Tiwari",
// }

// let person2 = {
//     firstName : "Laxmi",
//     lastName : "Jaishi"
// }

// let printFullname = function () {
//     console.log(`Fullname of the person: ${this.firstName} ${this.lastName}`);
// }

// printFullname.call(person);
// printFullname.call(person2);

// let person = {
//     firstName : "Riya",
//     lastName : "Tiwari",
// }

// let person2 = {
//     firstName : "Laxmi",
//     lastName : "Jaishi"
// }

// let printFullname = function (hometown, state) {
//     console.log(`Fullname of the person: ${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
// }

// printFullname.call(person, "Jaipur", "Raj");
// printFullname.call(person2, "Bangalore", "Karnataka");

// Apply
// printFullname.apply(person, ["Chittorgarh", "Raj"])
// printFullname.apply(person2, ["Bangalore", "Karnataka"])

// Bind
// let person = {
//     firstName : "Riya",
//     lastName : "Tiwari",
// }

// let person2 = {
//     firstName : "Laxmi",
//     lastName : "Jaishi"
// }

// let printFullname = function (hometown, state) {
//     console.log(`Fullname of the person: ${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
// }

// let printRiya = printFullname.bind(person)
// console.log(printRiya);
// printRiya("Chittorgarh", "Raj");

// let printLaxmi = printFullname.bind(person2)
// printLaxmi("Bangalore", "Karnataka");


// filter -> Array
// myfilter -> Array.prototype

// myBind -> Function.prototype

let person = {
    firstName : "Riya",
    lastName : "Tiwari",
}

let person2 = {
    firstName : "Laxmi",
    lastName : "Jaishi"
}

let printFullname = function (hometown, state) {
    console.log(`Fullname of the person: ${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
}

Function.prototype.myBind = function (obj, ...args) {

    let main = this;
    return function (...args){
        main.apply(obj, args)
    }  
}

let printName = printFullname.myBind(person,"Jaipur", "India");
printName();




