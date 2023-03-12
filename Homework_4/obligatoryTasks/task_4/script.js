// Створити функцію, яка для 3 заданих чисел знаходить одночасно
// декілька результатів: кількість парних, кількість додатних,
// кількість більших за 100.

function getNumData(userNumList) {
    let countEvenNum = 0,
        countPositiveNum = 0,
        countNumOver100 = 0

    for (let i = 0; i < userNumList.length; i++) {
        if (userNumList[i] % 2 === 0) countEvenNum++
        if (userNumList[i] > 0) countPositiveNum++
        if (userNumList[i] > 100) countNumOver100++
    }

    return [countEvenNum, countPositiveNum, countNumOver100]
}

function getUserNumbers() {
    let userNum,
        acc = 1
    const userNumList = []

    do {
        userNum = parseInt(prompt(`Введіть будь ласка ${acc} число.`, ""))
        if (isFinite(userNum)) {
            userNumList.push(userNum)
            acc++
        }
    } while (isFinite(userNum))

    return userNumList
}

const userNumList = getUserNumbers()

const [countEvenNum, countPositiveNum, countNumOver100] =
    getNumData(userNumList)

document.write(`
    Кількість парних чисел: ${countEvenNum}</br>
    Кількість додатних чисел: ${countPositiveNum}</br>
    Кількість чисел більших за 100: ${countNumOver100}
`)
