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
const equalBtn = document.querySelector(".equalBtn")

clearBtn.addEventListener("click", () => {
    numOne = ""
    numTwo = ""
    realVal = ""
    setValue = []
    lastNumDisplay.textContent = ""
    numberDisplay.textContent = ""
})

for (let i = 0; i < numBtn.length; i++) {
    let currentBtn = numBtn[i]
    currentBtn.addEventListener("click", () => {
        
        let buttonVal = currentBtn.value
        if (buttonVal === ".") {
            for (let i = 0; i < setValue.length; i++) {
                let cleanValue = setValue[i]
                if (cleanValue === ".") {
                    return
                }
            }
        }
        
        setValue.push(currentBtn.value)
        numberDisplay.textContent += currentBtn.value
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
        
        if (typeof numOne === "undefined") {
            numOne = realVal
        } else {
            numTwo = realVal
            numOne = operate(+numOne, setOperator, +numTwo)
            realVal = numOne
        } 
        
        setOperator = currentOperatorBtn.value
        setValue = []
        numberDisplay.textContent = ""
        lastNumDisplay.textContent = realVal + " " + setOperator
    })   
}

equalBtn.addEventListener("click", () => {
    let realVal = ""
    for(let i = 0; i < setValue.length; i++) {
        let value = setValue[i]
        realVal += value
    }

    realVal = operate(+numOne, setOperator, +realVal)
    numOne = realVal
    numberDisplay.textContent = ""
    lastNumDisplay.textContent = realVal
    setValue = []
})

function operate(numOne, operator ,numTwo) {

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
