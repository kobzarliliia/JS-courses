const TAX_RATE = 0.05;

const price = parseFloat(prompt("Введіть буль ласка ціну товара", ""));
const quantity = parseInt(prompt("Введіть будь ласка кількість товарів", ""));

const totalCost = price * quantity;
const taxValue = totalCost * TAX_RATE;

document.write(`
    Загальна вартість товару склала ${totalCost.toFixed(2)} грн.</br>
    Загальна сума ПДВ до сплати ${taxValue.toFixed(2)} грн.
`);
