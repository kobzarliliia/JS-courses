// Дано покази температур (довільна кількість). Розробити функцію, яка
// дозволить знайти середнє значення для додатних показів температури.

function getAveragePositiveIndicators() {
    let countPositiveIndicators = 0
    let sumPositiveIndicators = 0

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > 0) {
            sumPositiveIndicators += arguments[i]
            countPositiveIndicators++
        }
    }

    return sumPositiveIndicators / countPositiveIndicators
}

const averagePositiveIndicators = getAveragePositiveIndicators(
    5,
    -1,
    10,
    -20,
    3,
    5
).toFixed(2)

document.write(`
    Показ температури: 5, -1, 10, -20, 3, 5</br>
    Cереднє значення для додатних показів температури: ${averagePositiveIndicators}
`)
