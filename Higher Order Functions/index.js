// Higher Order Functions
//Functional Programming or Object Oriented Programming
// Those functions which can take other functions as an arguments or returns a function is called Higher Order Functions
function x (){
    console.log("Hello JavaScript!")
}
// function y (fun){
//     fun();
// }
// y(x)
// // y is a Higher order function and x is a callback. Why it is called callback?

// function z (){
//     return function(){
//         console.log('Hello Python!')
//     }
// }
// console.log(z());
// // z is a Higher order Function


// function m (fun){
//     return fun()
// }
// console.log(m(function(){
//     console.log("Hello Java!")
// }))

// // m is also an Higher order function.

// function n (fun){
//     return fun()
// }
// console.log(n(()=>{
//     console.log("Hello C++!")
// }))


let  radius = [5,6,7,2,3];
// HemiSphere--> Total Area, Total Curved surface Area, Volume

//Area

function calculateArea (r){
  const output = [];

  for(let i = 0; i<r.length; i++ ){
      output.push(2*Math.PI*r[i]**2)
  }
  return output
}
// console.log(calculateArea(radius))

//Curved Surface Area
function curvedSurfaceArea (r){
    const output = [];

    for(let i = 0; i<r.length; i++ ){
        output.push(3*Math.PI*r[i]**2)
    }
    return output 
}
// console.log(curvedSurfaceArea(radius))

//Volume
function calculateVolume (r){
    const output = [];

    for(let i = 0; i<r.length; i++ ){
        output.push((4/3)*Math.PI*r[i]**3)
    }
    return output 
}
// console.log(calculateVolume(radius))
radius = [5,6,7,2,3];

function area (r){
    return 2*Math.PI*r**2
}
function curvedArea (r){
    return 3*Math.PI*r**2
}
function volume (r){
    return (4/3)*Math.PI*r**3
}

// Higher Order Function

/*function calculate (arr, callback){
    const output = [];
    for(let i = 0; i<arr.length; i++){
        output.push(callback(arr[i]))
    }
    return output
}*/

Array.prototype.mayurKaMap  = function (callback){
    const output = [];
    for(let i = 0; i<this.length; i++){
        output.push(callback(this[i]))
    }
    return output
}

console.log(radius.map(curvedArea))
console.log(radius.mayurKaMap(curvedArea))
// console.log(calculate(radius,area))
// console.log(calculate(radius,curvedArea))
// console.log(calculate(radius,volume))
Array.prototype.x = function (){
    console.log(this)
}
console.log(radius.x())