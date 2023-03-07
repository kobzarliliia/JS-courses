// Дано масив елементів. Вивести на екран елементи, що більші за 100

let element,
    arr = [],
    resultArr = []

do {
    element = parseFloat(prompt("Введіть будь ласка цифру.", ""))
    if (isFinite(element)) arr.push(element)
} while (isFinite(element))

for (item of arr) {
    if (item > 100) resultArr.push(item)
}

document.write(resultArr)
