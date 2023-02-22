// Знайти суму 5 непарних чисел, що знаходяться між заданими
// користувачем числами.

const minUserNumber = parseInt(
    prompt("Введіть будь ласка мінімальне значення діапазону", "")
)
const maxUserNumber = parseInt(
    prompt("Введіть будь ласка максимальне значення діапазону", "")
)

const countSumNumbers = 5

let sumNumbers = 0

for (let i = minUserNumber + 1, j = 0; i < maxUserNumber, j < countSumNumbers; i++)
    if (i % 2 !== 0) {
        sumNumbers += i
        j++
    }

document.write(
    `Сума 5 непарних вчисел у діапазоні між ${minUserNumber} та ${maxUserNumber} дорівнює ${sumNumbers}.`
)
