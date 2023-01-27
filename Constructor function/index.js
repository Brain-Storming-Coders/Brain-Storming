const riyaInfo = {
  firstName: "Riya",
  lastName: "Tiwari",
  getFullname: function () {
    console.log(`Full name: ${this.firstName} ${this.lastName}`);
  }
}

// riyaInfo.getFullname();

const mayurInfo = {
  firstName: "Mayur",
  lastName: "Tiwari",
  getFullname: function () {
    console.log(`Full name: ${this.firstName} ${this.lastName}`);
  }
}

// mayurInfo.getFullname();

// function personInfo (firstName, lastName) {

//   let info = {
//     firstName : firstName,
//     lastName : lastName,
//     getInfo : function () {
//       console.log(`Full name: ${this.firstName} ${this.lastName}`);
//     }
//   }
//   return info

// }

// const person1 = personInfo("Mayur", "Tiwari")
// console.log(person1.firstName);
// person1.getInfo();
// const person2 = personInfo("Riya", "Tiwari")
// person2.getInfo();

// function PersonInfo (firstName, lastName) {

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.getInfo = function () {
//           console.log(`Full name: ${this.firstName} ${this.lastName}`);
//           console.log(this);
//         }    

// }

// const person1 = new PersonInfo("Mayur", "Tiwari");
// console.log(person1);
// person1.getInfo();

// const person2 = new PersonInfo("Riya", "Tiwari")
// person2.getInfo()

// function sayHi () {
//   console.log(this);
// }

// sayHi();


// let object1 = {
//   firstName : "Riya",
//   getName : function () {
//     console.log(`${this.firstName}`);
//     self = this;
//     setTimeout ( function () {
//       console.log(self);
//       console.log(`${self.firstName}`);
//     }, 3000 )
//   }
// }

// object1.getName();

// let object1 = {
//   firstName : "Riya",
//   getName : function () {
//     console.log(`${this.firstName}`);
//     setTimeout ( () => {
//       console.log(`${this.firstName}`);
//     }, 3000 )
//   }
// }

// object1.getName();

// window.document.addEventListener("click", function(){
//       console.log(this);
//   })

// window.document.addEventListener("click", (e) => {
//     console.log(e.target);
// })

// https://www.section.io/engineering-education/how-to-use-javascript-arrow-functions-and-this-keyword/

// Loop

// let count = 0

// while (count <= 5){
//   console.log(count);
//   count++
// }


// let count = 10

// for (let i = 0; i < count; i++ ){
//   console.log(i);
// }


// let count = 7;

// do{
//   console.log(count);
//   count++
// } while (count <= 5)

// For of vs For in

// let arr1 = [10, 20, 30, 40, 50]

// for (num of arr1){
//   console.log(num*num);
// }

// let obj1 = {
//   name : "Riya",
//   stack: "MERN",
//   number : "727"
// }

// for (item in obj1){
//   console.log(obj1[item]);
// }



