// Дано масив цін у грн. Податок складає 20%. Сформувати масив,
// який буде містити величину сплаченого податку у грн.

let price,
    priceList = []
const VAT_TAX_INDEX = 0.2

do {
    price = parseFloat(prompt("Введіть будь ласка ціну.", ""))
    if (isFinite(price)) priceList.push(price)
} while (isFinite(price))

const taxArray = priceList.map((item) => item * VAT_TAX_INDEX)

document.write(taxArray)
