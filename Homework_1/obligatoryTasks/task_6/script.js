const firstPrice = parseFloat(
    prompt("Введіть будь ласка ціну першого товару", "")
);
const firstQuantity = parseFloat(
    prompt("Введіть будь ласка кількість першого товару", "")
);
const secondPrice = parseFloat(
    prompt("Введіть будь ласка ціну другого товару", "")
);
const secondQuantity = parseFloat(
    prompt("Введіть будь ласка кількість другого товару", "")
);
const thirdPrice = parseFloat(
    prompt("Введіть будь ласка ціну третього товару", "")
);
const thirdQuantity = parseFloat(
    prompt("Введіть будь ласка кількість третього товару", "")
);

const firstTotalCost = firstPrice * firstQuantity;
const secondTotalCost = secondPrice * secondQuantity;
const thirdTotalCost = thirdPrice * thirdQuantity;
const totalCost = firstTotalCost + secondTotalCost + thirdTotalCost;
const totalQuality = firstQuantity + secondQuantity + thirdQuantity;

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
                <tr>
                    <td>3</td>
                    <td>${thirdQuantity.toFixed(2).replace(/\.0+/, "")}</td>
                    <td>${thirdPrice.toFixed(2)}</td>
                    <td>${thirdTotalCost.toFixed(2)}</td>
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
