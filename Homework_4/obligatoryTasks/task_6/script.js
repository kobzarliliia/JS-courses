// Створити функцію, яка створює таблицю з вказаною кількістю рядків і
// стовпців (таблиця заповнюється заданим фіксованим повідомленням).

function getTable(rowsCount, columnsCount, message) {
    let str = ""

    for (let row = 0; row < rowsCount; row++) {
        let cols = ""
        for (let column = 0; column < columnsCount; column++) {
            cols += `<td>${message}</td>`
        }
        str += `<tr>${cols}</tr>`
    }

    return `<table border="2px"><tbody>${str}</tbody></table>`
}

const rowsCount = parseInt(prompt("Скільки строк має бути у таблиці?", "")),
    columnsCount = parseInt(prompt("Скільки колонок має бути у таблиці?", "")),
    content = prompt("Яким контентом ви хотіли б наповнити таблицю?", "")

const table = getTable(rowsCount, columnsCount, content)

document.write(table)
