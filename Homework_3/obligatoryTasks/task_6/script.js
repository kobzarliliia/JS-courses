// Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній)

const tablesNumber = 3
const rowsNumber = 3
const columnsNumber = 3

let number = 1

document.write("<div style='display: flex; column-gap: 40px;'>")
for (let table = 0; table < tablesNumber; table++) {
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
}
document.write("</div>")
