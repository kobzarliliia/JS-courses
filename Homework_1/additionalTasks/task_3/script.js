const firstPrice = parseFloat(
    prompt("Введіть будь ласка вартість першого товару у гривнях", "")
);
const firstQuantity = parseFloat(
    prompt("Введіть будь ласка кількість першого товару", "")
);
const secondPrice = parseFloat(
    prompt("Введіть будь ласка вартість другого товару у гривнях", "")
);
const secondQuantity = parseFloat(
    prompt("Введіть будь ласка кількість другого товару", "")
);

const firstTotalCost = firstPrice * firstQuantity;
const secondTotalCost = secondPrice * secondQuantity;
const totalCost = firstTotalCost + secondTotalCost;
const totalQuality = firstQuantity + secondQuantity;

document.write(
    `
        <table border="2px">
            <thead>
                <tr>
                    <th>Товар</th>
                    <th>Кількість</th>
                    <th>Ціна, грн</th>
                    <th>Вартість, грн</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>${firstQuantity.toFixed(2).replace(/\.0+/, "")}</td>
                    <td>${firstPrice.toFixed(2)}</td>
                    <td>${firstTotalCost.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>${secondQuantity.toFixed(2).replace(/\.0+/, "")}</td>
                    <td>${secondPrice.toFixed(2)}</td>
                    <td>${secondTotalCost.toFixed(2)}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Загальна вартість</td>
                    <td>${totalQuality.toFixed(2).replace(/\.0+/, "")}</td>
                    <td>-</td>
                    <td>${totalCost.toFixed(2)}</td>
                </tr>
            </tfoot>
        </table>
    `
);
