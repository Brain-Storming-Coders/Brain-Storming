// let's get closer to Closure

// Closure and setTimeOut

// JavaScript runtime environment
// Synchronous and single-threaded

// setTimeout(()=>{
//     console.log("JavaScript6");
//  }, 6000) 

// setTimeout(()=>{
//    console.log("JavaScript");
// }, 3000) 

// function callName() {
//     console.log("Riya");
// }

// function sayBye() {
//     console.log("Bye.");
// }

// callName();
// sayBye();

// var - function scope 

// var myname = "Riya"

// function callName() {
//     var myname = "JavaScript"
//     console.log(myname);
// }

// callName();

// console.log(myname);

//  var - not, block scope

// var a = "Riya"

// if (true) {
//     var a = "Javascript"
// }

// console.log(a);

//  let - block scope

// let a = "Riya"

// if (true) {
//     let a = "Javascript"
// }

// console.log(a);

// for (var i = 0; i<5; i++) {
//     console.log(`Loop number: ${i}`);
//     setTimeout(()=>{
//         console.log(`time Number: ${i}`);
//     }, i*1000)
// }

// for (let i = 0; i<5; i++) {
//     console.log(`Loop number: ${i}`);
// }

// for (let i = 0; i<5; i++) {
    
// }

// console.log(i);

// for (var i = 0; i<5; i++) {
//     console.log(`Loop number: ${i}`);
//     function retain (){
//         var x = i;
//         setTimeout(()=>{
//             console.log(`time Number: ${x}`);
//         }, x*1000)
//     }
//     retain();
// }

// for(var i = 0; i < 5; i++) {
//     function timer(){ // create a unique function (scope) each time
//        var k = i; // save i to the variable k which
//        setTimeout(()=>{
//           console.log(k);
//        },1000);
//     }
//     timer();
//  }

// for (var i = 0; i<5; i++) {
//     let retainValue = i
//     console.log(`Loop number: ${i}`);
//     function retain (retainValue){
//         function x (retainValue){
//             console.log(retainValue);
//         }
//         setTimeout( x(retainValue) , retainValue*1000)
//     }
//     retain(retainValue);
// }


// var myname = "I want to be present everywhere."

// function firstName(i){
//     var myname = "Riya Tiwari"
//     console.log(myname);
//     console.log(i);
// }

// function firstLove(i){
//     var myname = "JavaScript"
//     console.log(myname);
//     console.log(i);
// }

// function secondLove(i){
//     var myname = "React"
//     console.log(myname);
//     console.log(i);
// }

// firstName(myname);
// firstLove(myname);
// secondLove(myname);

// function wrap () {
//     var myname = "I want to be present everywhere."
//     return myname;
// }

// function firstName(){
//     var myname = "Riya Tiwari"
//     console.log(myname);
//     console.log(wrap());
// }

// function firstLove(){
//     var myname = "JavaScript"
//     console.log(myname);
//     console.log(wrap());
// }

// function secondLove(){
//     var myname = "React"
//     console.log(myname);
//     console.log(wrap());
// }

// firstName();
// firstLove();
// secondLove();

// var - block scope nhi hai
var a = 10
if (1){
    var a = 12
}
console.log(a);

// call stack

// for (var i= 0; i < 5; i++){
//     console.log(i);
    
// }


