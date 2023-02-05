// Constructor Functions
// Convention --> First shoulb be in Upper Case
// Function Expression or Function Declaration
// const Restaurant = function (name, location){
//     this.name = name;
//     this.location = location;
//     this.pendingOrders = [];

// This is not a optimal way of writing methods inside contructor

/*this.booking = function(orderNum,menu,customerName ){
    console.log(`${customerName} has ordered ${menu} and his/her order no. is ${orderNum}`)
    this.pendingOrders.push({order_num : orderNum, menu:menu, customerName : customerName})
};
this.orderDelivered = function (orderNum){
    this.pendingOrders.forEach(item=>{
        if(orderNum == item.order_num){
            this.pendingOrders.splice(this.pendingOrders.indexOf(item),1)
        }
    }) 
}*/
// }

// Restaurant.prototype.booking = function(orderNum,menu,customerName ){
//     console.log(`${customerName} has ordered ${menu} and his/her order no. is ${orderNum}`)
//     this.pendingOrders.push({order_num : orderNum, menu:menu, customerName : customerName})
// };
// Restaurant.prototype.orderDelivered = function (orderNum){
//     this.pendingOrders.forEach(item=>{
//         if(orderNum == item.order_num){
//             this.pendingOrders.splice(this.pendingOrders.indexOf(item),1)
//         }
//     }) 

//     console.log(`${orderNum} is being Delivered`)
// }

// 1. it will create an empty object === {}
//2.  function will be called and this === {}
//3. constructor.prototype property will become prototype of this object
//4. this function will return this object

// const desiDhaba = new Restaurant('Desi Dhaba',"Rajasthan")
// console.log(desiDhaba)
// desiDhaba.booking("001", "Burger", "Mayur")
// desiDhaba.booking("002", "Pizza", "Bharat")
// desiDhaba.booking("003", "Coffee", "Riya")
// const chotiVala = new Restaurant('Choti Vala',"Bhopal")
// console.log(chotiVala)

// const obj = {}
// obj.name = "savi";
// console.log(obj)


/************** Creating a Library using Constructor Function *********************/

// const Library = function (availableBooks) {
//     this.availableBooks = availableBooks;
//     this.issuedBook = [];
// }
// Library.prototype.titleCase = function (bookName) {
//     const arr = bookName.split(' ');
//     console.log(arr)
//     let bookNameUpdated = arr.reduce((acc, curr) => {
//         acc.push(curr[0].toUpperCase() + curr.slice(1).toLowerCase());
//         return acc
//     }, [])
//     return bookNameUpdated.join(' ')
// }

// Library.prototype.givenBook = function (bookName) {
//     const bookNameUpdated = this.titleCase(bookName);
//     if (this.availableBooks.includes(bookNameUpdated)) {
//         this.availableBooks.splice(this.availableBooks.indexOf(bookNameUpdated), 1);
//         this.issuedBook.push(bookNameUpdated)
//         console.log(`${bookNameUpdated} book has been issued`)
//     } else {
//         console.log("The given book  is not available or out of stock ")
//     }
// }
// Library.prototype.returnBook = function (bookName) {
//     const bookNameUpdated = this.titleCase(bookName);
//     if (this.issuedBook.includes(bookNameUpdated)) {
//         this.availableBooks.push(bookNameUpdated)
//         this.issuedBook.splice(this.issuedBook.indexOf(bookNameUpdated), 1);
//         console.log(`${bookNameUpdated} book has been returned`)
//     } else {
//         console.log('This book was never Issued Keep this with yourself')
//     }

// }

// Creating an Instance

// const MayurKiMastLibrary = new Library(['History', "India's Most Fearless", 'The Brave Paramveer Chakra Story', 'The Archer', 'Selfish Gene', 'Sapiens'])
// console.log(MayurKiMastLibrary)


// // ES6 Classes
// //class declaration or class expression
// // Classes are not hoisted like function declaration
// // console.log(Restaurant)
// class Restaurant {
//     constructor(name, location) {
//         this.name = name;
//         this.location = location;
//         this.pendingOrders = [];

//     }
//     booking(orderNum, menu, customerName) {
//         console.log(`${customerName} has ordered ${menu} and his/her order no. is ${orderNum}`)
//         this.pendingOrders.push({ order_num: orderNum, menu: menu, customerName: customerName })
//     }
//     orderDelivered(orderNum) {
//         this.pendingOrders.forEach(item => {
//             if (orderNum == item.order_num) {
//                 this.pendingOrders.splice(this.pendingOrders.indexOf(item), 1)
//             }
//         })
//         console.log(`${orderNum} is being Delivered`)
//     }
// }

// const newDhaba = new Restaurant("New Dhaba", 'Punjab')
// console.log(newDhaba)


// console.log(Restaurant)
//  function Restaurant  (name, location){
//         this.name = name;
//         this.location = location;
//         this.pendingOrders = [];
//      }


//   Restaurant.prototype.booking = function(orderNum,menu,customerName ){
//     console.log(`${customerName} has ordered ${menu} and his/her order no. is ${orderNum}`)
//     this.pendingOrders.push({order_num : orderNum, menu:menu, customerName : customerName})
// };
// Restaurant.prototype.orderDelivered = function (orderNum){
//     this.pendingOrders.forEach(item=>{
//         if(orderNum == item.order_num){
//             this.pendingOrders.splice(this.pendingOrders.indexOf(item),1)
//         }
//     }) 

//     console.log(`${orderNum} is being Delivered`)
// }

// const obj = {
//     fullName: "Savinder",
//     job: "Developer",
//     get role() {
//         return this.job
//     },
//     set role(domain) {
//         return this.job = domain + " " + this.job
//     }
// }
//  obj.role = "555"
// console.log(obj)
// console.log(obj.role)

// const person = {
//     firstName: 'John',
//     lastName: 'Cena',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(value) {
//         if (value.includes(" ")) {
//             const parts = value.split(' ');
//             this.firstName = parts[0][0].toUpperCase() + parts[0].slice(1).toLowerCase();
//             this.lastName = parts[1][0].toUpperCase() + parts[1].slice(1).toLowerCase();
//         } else {
//             alert('Enter full name only')
//         }

//     },
// };

// console.log(person.fullName);
// person.fullName = "SAVINDER SINGH";
// console.log(person.firstName);

/*class People {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
    get fullName() {
        return this.riyaname;
    }

    set fullName(name) {
        if (name.includes(" ")) {
            this.riyaname = name;
        } else {
            alert("Enter full Name")
        }
    }

}

const riya = new People("riya tiwari", 22)
console.log(riya)*/

//Static Methods
// Array.from()
// Number.parseFloat()
// Number.parseInt()

// const arr = new Array(1,2,3,5)
// console.log(Array.from("789"))
// // console.log(arr.from('789'))
// String.hey = function (str){
//     console.log(`Hello ${str}`)
// }
// console.log(String.hey("Javascript"))
// // "fkdjfk".hey("c++")


/*const showRoom1 = {
    showRoomName: "Porche",
    orders: [],
    location: 'NCR',
    booking: function (orderNum, downPayment, color, deliveryDate) {
        this.orders.push({ Order_Number: orderNum, Down_Payment: downPayment, Favourite_Color: color, Delivery_Date: deliveryDate })
        console.log('Booking is Done!😊😃🍷');
    }
}

const booking = showRoom1.booking;
console.log(booking)

const showRoom2 = {
    showRoomName: "Tata Motors",
    orders: [],
    location: 'DCR',

}
console.log(booking.call(showRoom2,"25", "6000USD", "Yellow", "25 Feb"))*/

// Inheritance between Constructors

// const Person = function (fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function () {
//     return `Your age is ${2023 - this.birthYear}`;
// }

// const Student = function (fullName, birthYear, course) {
//     // this.fullName = fullName;
//     // this.birthYear = birthYear;
//     Person.call(this, fullName, birthYear)
//     this.course = course;
// }
// // 
// Student.prototype = Object.create(Person.prototype)
// //Student.prototype = Person.prototype ❌

// Student.prototype.intro = function (){
//     console.log(`Hi! I am ${this.fullName} and currently learning ${this.course}`)
// }

// const riya = new Student("Riya Tiwari", 2000, "JavaScript")
// console.log(riya);

//Inheritance between Classes
class User {
    constructor(fullName, userID, password, course) {
        this.fullName = fullName;
        this.userID = userID;
        this.password = password;
        this.course = course
    }
    accessToUserDashboard(loginID, passcode) {
        if (loginID === this.userID && passcode === this.password) {
            console.log("Access Authorised for" + this.course);
        } else {
            console.log("Access Denied! 😜")
        }
    }
}

class Admin extends User {
    constructor(fullName, userID, password, course, exclusivePerks) {
        super(fullName, userID, password, course)
        this.exclusivePerks = exclusivePerks;
    }

}

const laxmi = new Admin("Laxmi Jaishi", "5555", "88888", 'JavaScript', 'Free Food')
console.log(laxmi)


// 
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`The new Speed is ${this.speed}`)
}
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`The new Speed is ${this.speed}`)
}

const Tesla = new Car('Tesla', 150);

// 

class CarNew {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`The new Speed is ${this.speed}`)
    }
    brake() {
        this.speed -= 5;
        console.log(`The new Speed is ${this.speed}`)
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
        return this.speed;
    }
    get speedUS() {
        return this.speed;
    }

}
const tatamotors = new CarNew("Tata Motors", 200)

