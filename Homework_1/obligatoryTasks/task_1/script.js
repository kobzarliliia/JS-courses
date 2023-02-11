const firstNumber = parseFloat(
    prompt('Введіть будь ласка значення першого числа', "")
);
const secondNumber = parseFloat(
    prompt('Введіть будь ласка значення другого числа', "")
);

const sumOfNumbers = firstNumber + secondNumber;
const multiplicationOfNumbers = firstNumber * secondNumber;
const divisionOfNumbers = firstNumber / secondNumber;

document.write(
    `
        <table border="2px">
            <thead>
                <tr>
                    <th>Показник</th>
                    <th>Значення</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Сума чисел</td>
                    <td>${sumOfNumbers}</td>
                </tr>
                <tr>
                    <td>Добуток чисел</td>
                    <td>${multiplicationOfNumbers.toFixed(2).replace(/\.0+/, "")}</td>
                </tr>
                <tr>
                    <td>Частка чисел</td>
                    <td>${divisionOfNumbers.toFixed(2).replace(/\.0+/, "")}</td>
                </tr>
            </tbody>
        </table>
    `
);
