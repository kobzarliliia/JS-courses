// Дано масив елементів. Усі елементи, які більші за перший елемент
// помножити на 2

let element,
    arr = []

do {
    element = parseFloat(prompt("Введіть будь ласка цифру.", ""))
    if (isFinite(element)) arr.push(element)
} while (isFinite(element))

arr.forEach((item, index, refArr) => {
    if (item > refArr[0]) refArr[index] *= 2
})

document.write(arr)
