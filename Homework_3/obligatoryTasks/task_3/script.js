// Вивести таблицю з одним рядком і 7 стовпцями.

const columnsNumber = 7

document.write('<table border="2px"><tbody><tr>')

for (let column = 1; column <= columnsNumber; column++)
    document.write(`<td>${column}</td>`)

document.write("</tr></tbody></table>")
