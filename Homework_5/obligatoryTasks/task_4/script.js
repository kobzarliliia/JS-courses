// Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які:
// починаються на букву «А»;
// перша і остання літери співпадають;
// складаються з більше ніш 5 символів;

let carNumber
const carNumbersList = []

do {
    carNumber = prompt("Введіть будь ласка номер авто англійською.", "")
    if (carNumber !== null) carNumbersList.push(carNumber)
} while (carNumber !== null)

function getCountCarByFirstLetter(carNumbersList, firstLetter) {
    let countCarByFirstLetter = 0

    for (let i = 0; i < carNumbersList.length; i++) {
        if (carNumbersList[i][0] === firstLetter) countCarByFirstLetter++
    }

    return countCarByFirstLetter
}

function getCountCarsSameFirstAndLastLetters(carNumbersList) {
    let acc = 0

    for (let i = 0; i < carNumbersList.length; i++) {
        if (
            carNumbersList[i][0] ===
            carNumbersList[i][carNumbersList[i].length - 1]
        )
            acc++
    }

    return acc
}

function getCountCarsByCountSymbols(carNumbersList, countSymbols) {
    let acc = 0

    for (let i = 0; i < carNumbersList.length; i++) {
        if (carNumbersList[i].length > countSymbols) acc++
    }

    return acc
}

const countCarByFirstLetter = getCountCarByFirstLetter(carNumbersList, "A")
const countCarsSameFirstAndLastLetters =
    getCountCarsSameFirstAndLastLetters(carNumbersList)
const countCarByCountSymbols = getCountCarsByCountSymbols(carNumbersList, 5)

document.write(
    `Кількість номерів, які починаються на букву «А»: ${countCarByFirstLetter}</br>
    кількість номерів, перша і остання літери яких співпадають: ${countCarsSameFirstAndLastLetters}</br>
    кількість номерів, що складаються з більше ніш 5 символів: ${countCarByCountSymbols}`
)
