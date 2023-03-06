// Revise concept of closure 

// function multiply(x){
//     function inner(y){
//         return x*y
//     }
//     return inner
// }

// let res1 = multiply(2);
// console.log(res1(10));

// 😂 let's not form closure with our ex-bf/gf

// Currying

// It will transform a function that accepts multiple arguments into nested functions where each function will accept a single argument until all arguments are completed.
// function(a) -> function(b) -> function(c)

// function sum(a, b, c){
//     return a+b+c
// }

// sum(1,2,3) //6
// sum(1)(2)(3) //6

// function currySum(a){
//     return function (b){
//         return function (c){
//             return a + b + c
//         }
//     }
// }

// console.log(currySum(1)(2)(3));

// evaluate("sum")(2)(2)
// evaluate("multiply")(2)(2)
// evaluate("subtract")(2)(2)
// evaluate("divide")(2)(2)

// function evaluate(operator){
//     return function(a){
//         return function(b){
//             if(operator === "sum"){
//                 return a + b
//             } else if (operator === "multiply"){
//                 return a * b
//             } else if(operator === "subtract"){
//                 return a - b
//             } else if (operator === "divide"){
//                 return a / b
//             } else {
//                 return "Invalid Operation"
//             }
//         }
//     }
// }

// console.log(evaluate("sum")(2)(2));

// function evaluate (param){
//     if (param === "sum"){
//         param = "+"
//     } else if (param === "multiply"){
//         param = "*"
//     } else if (param === "subtract"){
//         param = "-"
//     } else if (param === "divide"){
//         param = "/"
//     }  
//         return function (a){
//             return function (b){
//                 return eval(`${a} ${param} ${b}`)
//             }
//         }
//     }

// console.log(evaluate("sum")(1)(2));
// console.log(evaluate("multiply")(1)(2));
// console.log(evaluate("subtract")(1)(2));
// console.log(evaluate("divide")(1)(2));

// Infinite currying - sum(1)(2)(3)....(n)

// function sum(a){
//     return function (b){
//         if(b){
//             return sum(a+b)
//         } 
//         return a
//     }
// }

// let store = sum(1)(2)(3)(4)

// console.log(store());

// function sum (a){
//     return function (b) {
//         if (b) {
//             return sum(a + b);
//         }
//         return a;
//     }
// }

// console.log(sum(5)(2)(4)(5)())

// partial application

// function sum(a = 10){
//     return function (b, c){    
//         return a + b + c
//     }
// }

// let static = sum(10)

// console.log(static(20, 30));
// console.log(static(40, 50));

// console.log(sum()(20, 30));
// console.log(sum()(40, 50));

// Manipulating DOM 😂

