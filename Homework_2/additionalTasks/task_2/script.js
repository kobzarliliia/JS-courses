// Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах
//  від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або
//  розташоване від нього (від лівого або правого краю) не більше ніж на 10.

const userNumber = parseInt(prompt("Введіть будь ласка номер", ""))

const minNumber = 1
const maxNumber = 100

const minRandomNumber = minNumber + Math.floor(Math.random() * maxNumber) - 10
const maxRandomNumber =
    minRandomNumber +
    Math.floor(Math.random() * (maxNumber - minRandomNumber + 1)) +
    10

let result

if (userNumber > minRandomNumber && userNumber < maxRandomNumber)
    result = "виграли"
else result = "програли"

document.write(
    `Ви ${result}! Загаданий проміжок був від ${minRandomNumber + 10} до ${
        maxRandomNumber - 10
    } з можливістю відклонення від данного діапазону не більше ніж на 10.`
)
