const firstNumber = parseFloat(
    prompt('Введіть будь ласка значення першого числа', "")
);
const secondNumber = parseFloat(
    prompt('Введіть будь ласка значення другого числа', "")
);

const sumOfNumbers = firstNumber + secondNumber;
const multiplicationOfNumbers = (firstNumber * secondNumber).toFixed(2);
const divisionOfNumbers = (firstNumber / secondNumber).toFixed(2);

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
                    <td>${multiplicationOfNumbers}</td>
                </tr>
                <tr>
                    <td>Частка чисел</td>
                    <td>${divisionOfNumbers}</td>
                </tr>
            </tbody>
        </table>
    `
);
