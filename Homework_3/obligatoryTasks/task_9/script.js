// Користувач загадує число. Комп’ютер задає питання поки не
// вгадає число користувача (використати confirm).

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

let userAnswer

do {
    let estimatedNumber =
        minUserNumber +
        Math.floor(Math.random() * (maxUserNumber - minUserNumber + 1))
    userAnswer = confirm(`Ви загадали число ${estimatedNumber}?`)
} while (!userAnswer)

document.write("Ура, я вгадав!")
