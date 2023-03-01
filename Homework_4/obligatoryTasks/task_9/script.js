// Дано покази температур (довільна кількість). Розробити функцію, яка
// дозволить підрахувати кількість від’ємних показів температури.

function getCountNegativeIndicators() {
    let countNegativeIndicators = 0

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0) countNegativeIndicators++
    }

    return countNegativeIndicators
}

const countNegativeIndicators = getCountNegativeIndicators(5, -1, 10, -20, 3, 5)

document.write(`
    Показ температури: 5, -1, 10, -20, 3, 5</br>
    Кількість від’ємних показів температури: ${countNegativeIndicators}
`)
