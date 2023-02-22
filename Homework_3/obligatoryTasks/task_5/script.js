// Вивести таблицю 3*3 із цифрами від 1 до 9

const rowsNumber = 3
const columnsNumber = 3

let number = 1

document.write('<table border="2px"><tbody>')

for (let row = 1; row <= rowsNumber; row++) {
    document.write("<tr>")
    for (let column = 1; column <= columnsNumber; column++) {
        document.write(`<td>${number}</td>`)
        number++
    }
    document.write("</tr>")
}

document.write("</tbody></table>")
