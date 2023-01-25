let enter = document.getElementById("enter");
let numbers = Array.from(document.querySelectorAll('[data-number]'))
let operators = Array.from(document.querySelectorAll('[data-operator]'))
let calculate = document.querySelector('[data-equal]')
let clear = document.querySelector('[data-clear]')
const dotOperator = document.getElementsByClassName("dot")[0];
let y = "*"
let n = 0;
dotOperator.addEventListener("click", () => {
    if (n === 0) {
        console.log("......")
        n = 1
        enter.value += "."
    }
    else {
       return
    }
})

// console.log(numbers);
// console.log(operators);

numbers.forEach(num => {
    num.addEventListener("click", () => {
        enter.value += num.innerText
        // console.log(enter.value);
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {

        if (enter.value === "") {
            if (operator.innerText === "-" | operator.innerText === "("  ) {
                enter.value += operator.innerText
            } else {
                return
            }
        } else {
                 if(operator.innerText === "x"){
                    operator.innerText = "*"
                  
                    enter.value += operator.innerText
                    operator.innerText = "x"
                    return
                 }
                n = 0;
                enter.value += operator.innerText
            
        }
    })
})


calculate.addEventListener("click", () => {
    enter.value = eval(enter.value)
    console.log(enter.value);
});

clear.addEventListener("click", () => {
    enter.value = ""
})