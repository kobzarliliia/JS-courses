// Дано одновимірний масив, у якому зберігається певна виграшна сума
// (елементи заповнюються випадковим чином значеннями від -500 до 500).
// Надаючи користувачу можливість вибирати номери елементів (поки він
// не відмовиться). Знаходити сумарний виграш.

const winsArrayLength = parseInt(
    prompt(
        "Введіть будь ласка з якої кількості комірок ви хотіли б вгадувати елементи.",
        ""
    )
)

function getRandomNumber(minValue, maxValue) {
    const randomNumber =
        minValue + Math.floor(Math.random() * (maxValue - minValue + 1))

    return randomNumber
}

function getWinsArray(winsArrayLength, minValue, maxValue) {
    const winsArray = []

    for (let i = 0; i < winsArrayLength; i++) {
        const winNumber = getRandomNumber(minValue, maxValue)
        winsArray.push(winNumber)
    }

    return winsArray
}

const winsArray = getWinsArray(winsArrayLength, -500, 500)

function getUserNumberList(winsArray) {
    let userAnswer,
        userNumber,
        winAmount = 0

    do {
        userNumber = parseInt(prompt("Введіть загадане число", ""))

        winAmount += winsArray[userNumber - 1]

        userAnswer = confirm(
            `Ваш виграш становить ${winAmount}грн. Бажаєте продовжити?`
        )
    } while (userAnswer)

    return winAmount
}

const userWinningAmount = getUserNumberList(winsArray)

document.write(`Ви виграли ${userWinningAmount}грн.`)
