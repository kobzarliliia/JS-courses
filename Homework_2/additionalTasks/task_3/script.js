// Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді.
// Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.

const firstUserNumber = parseInt(
    prompt("Введіть будь ласка число від 1 до 10", "")
)
const secondUserNumber = parseInt(
    prompt("Введіть будь ласка число від 1 до 10", "")
)

const minNumber = 1
const maxNumber = 10

const randomNumber = minNumber + Math.floor(Math.random() * maxNumber)

let result

if (
    Math.abs(randomNumber - firstUserNumber) >
    Math.abs(randomNumber - secondUserNumber)
)
    result = "Виграв ігрок № 2"
else if (
    Math.abs(randomNumber - firstUserNumber) <
    Math.abs(randomNumber - secondUserNumber)
)
    result = "Виграв ігрок № 1"
else "Нічия"

document.write(result)
