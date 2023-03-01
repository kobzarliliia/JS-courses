// Створити функцію, яка для 3 заданих чисел знаходить одночасно
// декілька результатів: кількість парних, кількість додатних,
// кількість більших за 100.

function getNumData() {
    let countEvenNum = 0,
        countPositiveNum = 0,
        countNumOver100 = 0

    for (let i = 0; i < 3; i++) {
        if (arguments[i] % 2 === 0) countEvenNum++
        if (arguments[i] > 0) countPositiveNum++
        if (arguments[i] > 100) countNumOver100++
    }

    const result = `
        Кількість парних чисел: ${countEvenNum}</br>
        Кількість додатних чисел: ${countPositiveNum}</br>
        Кількість чисел більших за 100: ${countNumOver100}`

    return result
}

const userNum1 = parseInt(prompt("Введіть будь ласка перше число", "")),
    userNum2 = parseInt(prompt("Введіть будь ласка друге число", "")),
    userNum3 = parseInt(prompt("Введіть будь ласка третє число", ""))

const numData = getNumData(userNum1, userNum2, userNum3)

document.write(numData)
