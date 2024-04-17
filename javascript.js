let setValue = []
let setOperator;
let numOne;
let numTwo;
let operator;
let displayValue;
let solutionDisplay;

let addId = "+"
let subId = "-"
let mulId = "*"
let divId = "/"

const numBtn = document.querySelectorAll(".numberBtns")
const operatorBtn = document.querySelectorAll(".operatorBtn")
const numberDisplay = document.querySelector(".currentNum")
const lastNumDisplay = document.querySelector(".lastNumDisplay")
const addBtn = document.querySelector("#addition")
const subBtn = document.querySelector("#subtraction")
const clearBtn = document.querySelector("#clear")

clearBtn.addEventListener("click", () => {
})

for (let i = 0; i < numBtn.length; i++) {
    let currentBtn = numBtn[i]
    currentBtn.addEventListener("click", () => {
        setValue.push(currentBtn.value)
        numberDisplay.textContent += currentBtn.value
        console.log(setValue)
    })
}

for (let i = 0; i < operatorBtn.length; i++) {
    let currentOperatorBtn = operatorBtn[i]
    currentOperatorBtn.addEventListener("click", () => {
        let realVal = ""
        for(let i = 0; i < setValue.length; i++) {
            let value = setValue[i]
            realVal += value
        }

        if (realVal.length == 0 ) {
            if (typeof numOne !== "undefined") {
                setOperator = currentOperatorBtn.value
                lastNumDisplay.textContent = numOne + " " + setOperator
            }
            return;
        }
        
        if (typeof numOne !== "undefined" && typeof numTwo !== "undefined") {
            console.log(numOne)
            console.log(numTwo)
            setOperator = ""
            realVal = operate(+numOne, setOperator, +numTwo)
            console.log(realVal)

        }
        if (typeof numOne === "undefined") {
            numOne = realVal
            console.log(numOne) 
        } else {
            numTwo = realVal
            numOne = operate(+numOne, setOperator, +numTwo)
            realVal = numOne
        } 

        setOperator = currentOperatorBtn.value
        console.log(setOperator)
        setValue = []
        numberDisplay.textContent = ""
        lastNumDisplay.textContent = realVal + " " + setOperator
    })   
}

function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function multiply(a, b){
    return a * b
}

function division(a, b){
    return a / b
}

function operate(numOne, operator ,numTwo) {
    if (operator == addId) {
        return add(numOne, numTwo)
    }
    if (operator == subId) {
        return sub(numOne, numTwo)
    }
    if (operator == mulId) {
        return multiply(numOne, numTwo)
    }
    if (operator == divId) {
        return division(numOne, numTwo)
    }
}
