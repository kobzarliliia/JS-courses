// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати
// число за 2 спроби.

const minNumber = 1
const maxNumber = 5
const randomNumber = minNumber + Math.floor(Math.random() * maxNumber)

let userNumber = parseInt(prompt("Введіть будь ласка цифру від 1 до 5", ""))

if (randomNumber === userNumber) document.write("Молодець! Ви вгадали!")
else {
    userNumber = parseInt(prompt("Нажаль ви не вгадали, спробуйте ще раз.", ""))
    if (randomNumber === userNumber) document.write("Молодець! Ви вгадали!")
    else document.write("Нажаль ви не вгадали, на сьогодні спроби скінчилися.")
}
