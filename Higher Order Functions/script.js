// Map, Filter, Reduce
let arr = [1,2,3,4,5]
//[1,4,6,8,10]-- Double
//
//Double
const double = arr.map(x=> x*2)
console.log(double)
const square = arr.map(x=> x**2)
console.log(square)
function cube(x){
    return x**3
}
console.log(arr.map(cube))
console.log(arr.map(function cube(x){
    return x**3
}))

//Filter
function isOdd(x){
    return x%2
}
console.log(arr.filter(isOdd))
console.log(arr.filter(x=> x%2 === 0))

//Reduce
arr = [1,2,3,4,5]
function sum (arr){
    let sum = 0;
    for(let i = 0; i <arr.length; i++){
        sum = sum+arr[i]
    }
    return sum
}
console.log(sum(arr));
const sum2 = arr.reduce((acc,curr)=>{
    acc =acc+curr;
    return acc

},0)

// console.log(sum2)



