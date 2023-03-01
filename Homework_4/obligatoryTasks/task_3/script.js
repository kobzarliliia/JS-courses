// Створити окремі функції, які для 4 чисел знаходять:
// суму;
// добуток;
// середнє арифметичне;
// мінімальне арифметичне;

function getSum(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4
}

function getProduct(num1, num2, num3, num4) {
    return num1 * num2 * num3 * num4
}

function getAverage(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4
}

function getMin(num1, num2, num3, num4) {
    let min = num1

    if (num2 < min) min = num2
    if (num3 < min) min = num3
    if (num4 < min) min = num4
    return min
}

const userNum1 = parseFloat(prompt("Введіть будь ласка перше число", "")),
    userNum2 = parseFloat(prompt("Введіть будь ласка друге число", "")),
    userNum3 = parseFloat(prompt("Введіть будь ласка третє число", "")),
    userNum4 = parseFloat(prompt("Введіть будь ласка четверте число", "")),
    sum = getSum(userNum1, userNum2, userNum3, userNum4),
    product = getProduct(userNum1, userNum2, userNum3, userNum4),
    average = getAverage(userNum1, userNum2, userNum3, userNum4),
    min = getMin(userNum1, userNum2, userNum3, userNum4)

document.write(
    `Ваші числа: ${userNum1}, ${userNum2}, ${userNum3}, ${userNum4}</br>
    Їх сума дорівнює ${sum}, добуток ${product}, середнє арифметичне ${average}, мінімальне арифметичне ${min}.`
)
