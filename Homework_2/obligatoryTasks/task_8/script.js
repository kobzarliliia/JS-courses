//Знайти 2 найбільших числа з 4 цілих чисел.

const firstNumber = parseInt(prompt("Number 1", ""))
const secondNumber = parseInt(prompt("Number 2", ""))
const thirdNumber = parseInt(prompt("Number 3", ""))
const fourthNumber = parseInt(prompt("Number 4", ""))

let max = firstNumber

if (secondNumber > max) max = secondNumber
if (thirdNumber > max) max = thirdNumber
if (fourthNumber > max) max = fourthNumber

let secondMax

if (firstNumber === max) {
    secondMax = secondNumber
    if (thirdNumber > secondMax) secondMax = thirdNumber
    if (fourthNumber > secondMax) secondMax = fourthNumber
} else if (secondNumber === max) {
    secondMax = firstNumber
    if (thirdNumber > secondMax) secondMax = thirdNumber
    if (fourthNumber > secondMax) secondMax = fourthNumber
} else if (thirdNumber === max) {
    secondMax = firstNumber
    if (secondNumber > secondMax) secondMax = secondNumber
    if (fourthNumber > secondMax) secondMax = fourthNumber
} else {
    secondMax = firstNumber
    if (secondNumber > secondMax) secondMax = secondNumber
    if (thirdNumber > secondMax) secondMax = thirdNumber
}

let a,
    b = 12
switch (b) {
    case 12:
        a = 5
        break
    case "12":
        a = 7
        break
}

console.log(a)

document.write(`${max}, ${secondMax}.`)
