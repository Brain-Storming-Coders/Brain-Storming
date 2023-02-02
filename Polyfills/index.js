//Map
let arr = [2, 4, 6, 8, 10];

function double(x) {
    return x * 2;
}

function binary(x) {
    return x.toString(2);
}
const result = arr.map(binary)
// console.log(result)
/*
function mayurKaMap (arr, callback){
    const output = [];
    for(let i = 0; i<arr.length; i++){
        output.push(callback(arr[i]))
    }
    return output
    const result2 = mayurKaMap(arr,binary);
console.log(result2)
}
*/
Array.prototype.mayurKaMap = function (callback) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(callback(this[i]))
    }
    return output
}
const result2 = arr.mayurKaMap(binary);
// console.log(result2);

// Filter
arr = [2, 4, 6, 8, 10];
function isGreater5(x) {
    if (x > 5) {
        return x
    }
}

const result3 = arr.filter(isGreater5)
console.log(result3)
/*
function BharatKaFilter(arr, callback) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) !== undefined) {
            output.push(callback(arr[i]))
        }

    }
    return output
}*/

Array.prototype.BharatKaFilter = function (callback) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) !== undefined) {
            output.push(callback(this[i]))
        }
    }
    return output
}
const result4 = arr.BharatKaFilter(isGreater5)
console.log(result4)

// Reduce
arr = [2, 4, 6, 8, 10];
// Sum--> 30
const result5 = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc

}, 0)
console.log(result5)

function sum(acc, curr) {
    acc = acc + curr;
    return acc


}

/*
function riyaKaReduce(arr, callback, intial) {
    for (let i = 0; i < arr.length; i++) {
        intial = callback(intial, arr[i])
    }
    return intial
}
console.log(riyaKaReduce(arr, sum, 0))
*/
Array.prototype.riyaKaReduce = function (callback, intial) {
    for (let i = 0; i < this.length; i++) {
        intial = callback(intial, this[i])
    }
    return intial
}
const result6 = arr.riyaKaReduce(sum, 0)
console.log(result6)
const result7 = arr.riyaKaReduce(function (acc, curr) {
    acc = acc + curr;
    return acc
}, 0)
console.log(result7)

/*produce */
const str = "Hi! I love JavaScript"

// // [3,1,4,10]
// String.prototype.apnaProduce = function () {
//     const arr = this.split(" ");
//     const output = [];
//     for (let x of arr) {
//         output.push(x.length)
//     }
//     return output
// }

// console.log(str.apnaProduce())

function upperCase(str) {
    return str.toUpperCase() + " ";
}
function lowerCase(str) {
    return str.toLowerCase() + " ";
}
function titleCase(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase() + " "
}

// function Atul(str, callback) {
//     const arr = str.split(" ");
//     let output = "";
//     for (let i = 0; i < arr.length; i++) {
//         output += callback(arr[i])
//     }
//     return output
// }

// console.log(Atul(str, upperCase))
// console.log(Atul(str, lowerCase))
// console.log(Atul(str, titleCase))
 
String.prototype.atulKaProduce = function (callback){
    const arr = this.split(" ");
        let output = "";
       
        for (let i = 0; i < arr.length; i++) {
            output += callback(arr[i])
        }
        return output
}
const result8 = "hi my name is bharat".atulKaProduce(titleCase)
console.log(result8)