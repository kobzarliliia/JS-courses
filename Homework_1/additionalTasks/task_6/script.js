let a = parseFloat(prompt('Введіть будь ласка значення змінної "a"', ""));
let b = parseFloat(prompt('Введіть будь ласка значення змінної "b"', ""));
let c = parseFloat(prompt('Введіть будь ласка значення змінної "c"', ""));

const d = a;
a = b;
b = c;
c = d;

document.write(`
    <table border="2px">
        <thead>
            <tr>
                <th>Назва змінної</th>
                <th>Модифіковане значення</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>a</td>
                <td>${a.toFixed(2).replace(/\.0+/, "")}</td>
            </tr>
            <tr>
                <td>b</td>
                <td>${b.toFixed(2).replace(/\.0+/, "")}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>c</td>
                <td>${c.toFixed(2).replace(/\.0+/, "")}</td>
            </tr>
        </tfoot>
    </table>
`);
