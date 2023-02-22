// Знайти суму всіх непарних чисел, що знаходяться між заданими
// користувачем числами.

const minUserNumber = parseInt(
    prompt("Введіть будь ласка мінімальне значення діапазону", "")
)
const maxUserNumber = parseInt(
    prompt("Введіть будь ласка максимальне значення діапазону", "")
)

let sumNumbers = 0
let i = minUserNumber + 1

while (i < maxUserNumber) {
    if (i % 2 !== 0) sumNumbers += i
    i++
}

document.write(
    `Сума непарних вчисел у діапазоні між ${minUserNumber} та ${maxUserNumber} дорівнює ${sumNumbers}.`
)
