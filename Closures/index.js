// Let's get closer to Closure()

// function multiply (x, y){
//     return x*y
// }

// console.log(multiply(10, 20));

let a = 40

function mayur () {

    let n = 777;

    function multiply (x) {
    
        function inner (y) {
    
            return x*y*a*n
        }
    
        return inner
        
    }
    return multiply
}

// let store = mayur();
// let store1 = store(10)
// console.log(store1(20));

// console.log(store(10)(20));

// console.log(multiply(10)(20));

// let a = 30;
// function multiply (x) {
//     function inner (y) {
//         return x*y*a
//     }
//     return inner
// }

// let store = multiply(10);
// console.log(store);
// console.log(store(20));

// let count = 0;

// function setCounter () {
//     count++;
//     console.log(count);
// }

// count = 5;

// setCounter();
// setCounter();
// setCounter();
// setCounter();

function wrapCounter () {
    let count = 0
    function setCounter () {
        count++;
        return count;       
    }
    return setCounter
}

count = 5;

let store = wrapCounter();
console.log(store());
console.log(store());
console.log(store());

