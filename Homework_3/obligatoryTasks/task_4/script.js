//Вивести таблицю з 3 рядків і 7 стовпців

const rowsNumber = 3
const columnsNumber = 7

document.write('<table border="2px"><tbody>')

for (let row = 1; row <= rowsNumber; row++) {
    document.write('<tr>')
    for (let column = 1; column <= columnsNumber; column++)
        document.write(`<td>${column}</td>`)
    document.write('</tr>')
}

document.write("</tbody></table>")
