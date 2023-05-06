const numBtn = document.querySelectorAll(".num")
const display = document.querySelector(".display")
const addBtn = document.querySelector(".add")
const multiBtn = document.querySelector(".multiply")
const divBtn = document.querySelector(".divide")
const subBtn = document.querySelector(".subtract")
const opBtn = document.querySelectorAll(".op")
const equalBtn = document.querySelector(".equal")
const clearBtn = document.querySelector(".clear")

let numbersInput = ""
let numbers1
let numbers2
let operator
let result

opBtn.forEach((op) => {
    op.addEventListener("click", () => setOperator(op.textContent))
})

numBtn.forEach((num) => {
    num.addEventListener("click", () => appendNum(num.textContent))
})

equalBtn.addEventListener("click", calculate)
clearBtn.addEventListener("click", clearDisplay)

function appendNum(number){
    numbersInput += number
    display.innerHTML += number
}

function setOperator(oper){
    numbers1 = numbersInput
    operator = oper
    display.innerHTML += oper
    numbersInput = ""
}

function calculate(){
    numbers2 = numbersInput
    result = Math.round(operate(numbers1, numbers2, operator) * 100)/100
    display.innerText = String(result)
}

function operate(num1, num2, operator){
    num1 = Number(num1)
    num2 = Number(num2)
    switch (operator){
        case "+" :
            return add(num1, num2)
        case "-":
            return subtract(num1, num2)
        case "x" :
            return multiply(num1, num2)
        case ":":
            return divide(num1, num2)
    }
}

function clearDisplay(){
    numbersInput = ""
    numbers1 = ""
    numbers2 = ""
    display.innerText = ""
}

function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}