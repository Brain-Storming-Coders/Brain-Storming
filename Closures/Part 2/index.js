// const counterBtn = document.getElementsByTagName("button")[0]
// const zeroBtn = document.getElementsByTagName("button")[1]

// let counter = 0

// function incrementCounter () {
//     let counter = 0
//     function increment () {
//         counter++
//         console.log(counter);
//         counterBtn.innerText = counter
//     }
//     return increment
// }

// const retainCount = incrementCounter()
// counter = 10
// counterBtn.addEventListener("click", retainCount)

// zeroBtn.addEventListener("click", backToZero)

// function backToZero() {
//     counter = 0
//     counterBtn.innerText = counter
// }

// function buttonCounter () {
//     let counter = 0
//     function incrementCounter () {
//         counter++
//         counterBtn.innerText = counter
//     }
//     function restartCounter() {
//         counter = 0
//         counterBtn.innerText = counter
//     }
//     return {
//         incrementCounter: incrementCounter,
//         restartCounter: restartCounter,
//     };
// }

// const retainCount = buttonCounter()

// counterBtn.addEventListener("click", retainCount.incrementCounter)
// zeroBtn.addEventListener("click", retainCount.restartCounter)

// counter = 10;






// let count = 0;
// function incrementCounter(){
//     count++
//     counterBtn.innerText = count;
// }

// counterBtn.addEventListener("click", incrementCounter)

const counterBtn = document.getElementsByTagName("button")[0]
const restartCounter = document.getElementsByTagName("button")[1]
const decrementCounter = document.getElementsByTagName("button")[2]

function counterWrapper () {
    let count = 0
    function incrementCounter(){
        count++
        counterBtn.innerText = count;
}
    function restartCounter(){
        count = 0
        counterBtn.innerText = count;
    }

    function decrementCounter(){
        if (count > 0){
            count--
            counterBtn.innerText = count;
        }
        
    }

    return {
        incrementCounter : incrementCounter,
        restartCounter : restartCounter,
        decrementCounter : decrementCounter
    }

}

let store = counterWrapper()

counterBtn.addEventListener("click", store.incrementCounter)
restartCounter.addEventListener("click", store.restartCounter)
decrementCounter.addEventListener("click", store.decrementCounter)

count = 15;
