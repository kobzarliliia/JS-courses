// Морський бій. Випадковим чином на двовимірному полі розміром
// 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи
// координати. Гра продовжується поки не потоплено усі кораблі
// або у користувача не закінчаться снаряди.

// creating source data

function getRandomNumber(minValue, maxValue) {
    const randomNumber =
        minValue + Math.floor(Math.random() * (maxValue - minValue + 1))

    return randomNumber
}

function getEmptyTable(tableSize) {
    const table = []
    for (let row = 0; row < tableSize; row++) {
        const rowArray = new Array(tableSize).fill(0)
        table.push(rowArray)
    }

    return table
}

function getFilledTable(emptyTable, shipsNumber, minValue, maxValue) {
    for (let ship = 0; ship < shipsNumber; ship++) {
        let coordinateX
        let coordinateY

        do {
            coordinateX = getRandomNumber(minValue, maxValue)
            coordinateY = getRandomNumber(minValue, maxValue)
        } while (emptyTable[coordinateY][coordinateX] === 1)

        emptyTable[coordinateY][coordinateX] = 1
    }

    return emptyTable
}

const TABLE_SIZE = 6
const SHIPS_NUMBER = 5
const shellsNumber = parseInt(
    prompt(
        "Скільки снарядів вам потрібно для гри(розмір ігрового поля 6*6)?",
        ""
    )
)

const emptyTable = getEmptyTable(TABLE_SIZE)
const filledTable = getFilledTable(emptyTable, SHIPS_NUMBER, 0, TABLE_SIZE - 1)

console.log(filledTable)

// game

function getGame(filledTable, shipsCount, shellsNumber) {
    let userCoordinateX = parseInt(
        prompt(
            "Введіть будь ласка коордінату X ячєйки по якій ви хотіли б поцілити(від 1 до 6)",
            ""
        )
    )
    let userCoordinateY = parseInt(
        prompt(
            "Введіть будь ласка коордінату Y ячєйки по якій ви хотіли б поцілити(від 1 до 6)",
            ""
        )
    )
    shellsNumber--

    do {
        if (filledTable[userCoordinateY - 1][userCoordinateX - 1] === 1) {
            shipsCount--
            filledTable[userCoordinateY - 1][userCoordinateX - 1] = 0
            userCoordinateX = parseInt(
                prompt(
                    "Вітаємо! Ви потопили корабель! Введіть будь ласка коордінату X наступної ячєйки по якій ви хотіли б поцілити(від 1 до 6)",
                    ""
                )
            )
            userCoordinateY = parseInt(
                prompt(
                    "Введіть будь ласка коордінату Y наступної ячєйки по якій ви хотіли б поцілити(від 1 до 6)",
                    ""
                )
            )
        } else {
            userCoordinateX = parseInt(
                prompt(
                    "Нажаль ви не попали. Введіть будь ласка коордінату X наступної ячєйки по якій ви хотіли б поцілити(від 1 до 6)",
                    ""
                )
            )
            userCoordinateY = parseInt(
                prompt(
                    "Введіть будь ласка коордінату Y наступної ячєйки по якій ви хотіли б поцілити(від 1 до 6)",
                    ""
                )
            )
        }
        shellsNumber--
    } while (shipsCount > 0 && shellsNumber > 0)

    return shipsCount === 0 ? "Вітаємо, ви виграли!" : "Нажаль ви програли"
}

alert(getGame(filledTable, SHIPS_NUMBER, shellsNumber))
