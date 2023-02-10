const TAX_RATE = 0.05;

const price = parseFloat(prompt("Введіть буль ласка ціну товара", ""));
const quantity = parseInt(prompt("Введіть будь ласка кількість товарів", ""));

const totalCost = (price * quantity).toFixed(2);
const taxValue = (parseFloat(totalCost) * TAX_RATE).toFixed(2);

document.write(`
    Загальна вартість товару склала ${totalCost} грн.</br>
    Загальна сума ПДВ до сплати ${taxValue} грн.
`);
