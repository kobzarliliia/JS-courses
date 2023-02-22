//Користувач загадує число. За 3 спроби комп’ютер намагається
// вгадати число користувача (використати confirm).

const minUserNumber = parseInt(
    prompt(
        "Введіть будь ласка мінімальне значення діапазону у якому ви загадали число",
        ""
    )
)
const maxUserNumber = parseInt(
    prompt(
        "Введіть будь ласка максимальне значення діапазону у якому ви загадали число",
        ""
    )
)

let attempt = 0
let userAnswer

do {
    let estimatedNumber =
        minUserNumber +
        Math.floor(Math.random() * (maxUserNumber - minUserNumber + 1))
    userAnswer = confirm(`Ви загадали число ${estimatedNumber}?`)
    attempt++
} while (attempt < 3 && !userAnswer)

userAnswer
    ? document.write("Ура, я вгадав!")
    : document.write("Ех, щось я не вгадав...")
