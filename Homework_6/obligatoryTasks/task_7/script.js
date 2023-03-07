// Дано масив цін. Змінити цей масив так, що на ціни товарів, які
// більші за 1000 грн. дати 30% знижки.

let price,
    priceList = []

const discontIndex = 0.3

do {
    price = parseFloat(prompt("Введіть будь ласка ціну.", ""))
    if (isFinite(price)) priceList.push(price)
} while (isFinite(price))

priceList.forEach((item, index, refArr) => {
    if (item > 1000) refArr[index] = item * (1 - discontIndex)
})

document.write(priceList)
