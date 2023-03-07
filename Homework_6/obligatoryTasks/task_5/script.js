// Дано масив елементів. Знайти добуток додатних елементів

let element,
    arr = [],
    product = 1

do {
    element = parseFloat(prompt("Введіть будь ласка цифру.", ""))
    if (isFinite(element)) arr.push(element)
} while (isFinite(element))

for (item of arr) {
    if (item > 0) product *= item
}

document.write(product)
