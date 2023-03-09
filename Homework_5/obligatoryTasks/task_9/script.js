// Морський бій. Користувач вводить кількість клітинок одновимірного
// масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує
// ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0,
// то клітинка пуста, якщо 1 – то це означає, що там є корабель.
// Користувач вводить номер клітинки, куди стріляє. Гра продовжується
// до тих пір, поки не будуть потоплені усі кораблі.

const numberCells = parseInt(
        prompt("Введіть будь ласка кількість клітинок для гри", "")
    ),
    numberShips = parseInt(
        prompt("Введіть будь ласка кількість коравблів для гри", "")
    )

function getRandomNumber(minValue, maxValue) {
    const randomNumber =
        minValue + Math.floor(Math.random() * (maxValue - minValue + 1))

    return randomNumber
}

function getCompletedCard(numberCells, numberShips) {
    let completedCard = new Array(numberCells).fill(0)

    for (let i = 0; i < numberShips; i++) {
        let shipIndex
        do {
            shipIndex = getRandomNumber(0, numberCells - 1)
        } while (completedCard[shipIndex] === 1)
        completedCard[shipIndex] = 1
    }

    return completedCard
}

function getGame(completedCard, numberShips) {
    let userNumber = parseInt(
        prompt(
            "Введіть будь ласка номер клітинки у якій ви думаєте, що є корабель",
            ""
        )
    )
    let numberHits = 0

    do {
        if (completedCard[userNumber - 1] === 1) {
            numberHits++
            completedCard[userNumber - 1] = 0
            if (numberHits < numberShips)
                userNumber = parseInt(
                    prompt(
                        "Ви влучили! Введіть будь ласка наступний номер клітинки у якій ви думаєте, що є корабель",
                        ""
                    )
                )
            else alert("Вітаємо, ви виграли!")
        } else
            userNumber = parseInt(
                prompt(
                    "Нажаль ви не влучили. Введіть будь ласка наступний номер клітинки у якій ви думаєте, що є корабель",
                    ""
                )
            )
    } while (numberHits < numberShips)
}

const completedCard = getCompletedCard(numberCells, numberShips)
getGame(completedCard, numberShips)
