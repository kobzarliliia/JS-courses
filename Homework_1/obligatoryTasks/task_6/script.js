const firstPrice = parseFloat(
    prompt("Введіть будь ласка ціну першого товару", "")
);
const firstQuantity = parseInt(
    prompt("Введіть будь ласка кількість першого товару", "")
);
const secondPrice = parseFloat(
    prompt("Введіть будь ласка ціну другого товару", "")
);
const secondQuantity = parseInt(
    prompt("Введіть будь ласка кількість другого товару", "")
);
const thirdPrice = parseFloat(
    prompt("Введіть будь ласка ціну третього товару", "")
);
const thirdQuantity = parseInt(
    prompt("Введіть будь ласка кількість третього товару", "")
);

const firstTotalCost = (firstPrice * firstQuantity).toFixed(2);
const secondTotalCost = (secondPrice * secondQuantity).toFixed(2);
const thirdTotalCost = (thirdPrice * thirdQuantity).toFixed(2);
const totalCost =
    parseInt(firstTotalCost) +
    parseInt(secondTotalCost) +
    parseInt(thirdTotalCost);
const totalQuality = firstQuantity + secondQuantity + thirdQuantity;

document.write(
    `
        <table border="2px">
            <thead>
                <tr>
                    <th>Товар</th>
                    <th>Кількість</th>
                    <th>Ціна</th>
                    <th>Вартість</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>${firstQuantity}</td>
                    <td>${firstPrice}</td>
                    <td>${firstTotalCost}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>${secondQuantity}</td>
                    <td>${secondPrice}</td>
                    <td>${secondTotalCost}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>${thirdQuantity}</td>
                    <td>${thirdPrice}</td>
                    <td>${thirdTotalCost}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Загальна вартість</td>
                    <td>${totalQuality}</td>
                    <td>-</td>
                    <td>${totalCost}</td>
                </tr>
            </tfoot>
        </table>
    `
);
