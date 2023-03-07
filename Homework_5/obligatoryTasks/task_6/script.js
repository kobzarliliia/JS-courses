// Дано послідовність цін товарів та назв (у окремих масивах). Вивести
// на екран ті, які може собі дозволити користувач (кількість грошей
// задається).

let price, goodName
const priceList = [],
    goodNameList = [],
    moneyValue = parseFloat(
        prompt("Введіть будь ласка скільки у вас є грошей.", "")
    )

do {
    goodName = prompt("Введіть будь ласка назву товара.", "")
    price = parseFloat(prompt("Введіть будь ласка ціну товара.", ""))
    if (goodName !== null && isFinite(price)) {
        goodNameList.push(goodName)
        priceList.push(price)
    }
} while (isFinite(price) && goodName !== null)

function getAvailableGoodList(goodNameList, priceList, moneyValue) {
    let availableGoodList = []

    for (let i = 0; i < priceList.length; i++) {
        if (priceList[i] < moneyValue) availableGoodList.push(goodNameList[i])
    }

    return availableGoodList
}

const availableGoodList = getAvailableGoodList(
    goodNameList,
    priceList,
    moneyValue
)

document.write(`Ви можете купити: ${availableGoodList}`)
