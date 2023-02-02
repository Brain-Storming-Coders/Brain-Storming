const arr = [2,3,4,5,6,7,8,9]
// const isOdd = arr.filter(x=>x%2);
// console.log(isOdd)

function odd (x){
    if(x%2 !== 0){
        return x
    }
}

Array.prototype.savinderKaFilter =  function(callback){
    const output = [];
    for(let i = 0; i<this.length; i++){
        if(callback(this[i])){
            output.push(callback(this[i]))
        } 
    }
    return output
}

console.log(arr.savinderKaFilter(odd))
console.log(arr.savinderKaFilter((x)=>{
    if(x%2 === 0){
        return x
    }
}))

