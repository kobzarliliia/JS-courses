// Знайти суми елементів у вказаній області
// 1. верхній лівий кут
// 2. верхній правий кут
// 3. нижній лівий кут
// 4. нижній правий кут
// 5. Суму парних рядків
// 6. Суму непарних стовпців
// 7. У парних рядках – непарні стовпці, у непарних – парні

// creating source data

function getRandomNumber(minValue, maxValue) {
    const randomNumber =
        minValue + Math.floor(Math.random() * (maxValue - minValue + 1))

    return randomNumber
}

function getArray(arrayLength, minValue, maxValue) {
    const arr = []
    for (let i = 0; i < arrayLength; i++)
        arr.push(getRandomNumber(minValue, maxValue))

    return arr
}

function getTable(tableHeight, tableWidth, minValue, maxValue) {
    const table = []
    for (let i = 0; i < tableHeight; i++)
        table.push(getArray(tableWidth, minValue, maxValue))

    return table
}

function getTableLayout(tableHeight, tableWidth, tableArr) {
    let tableLayout = ""

    for (let row = 0; row < tableHeight; row++) {
        let cols = ""
        for (let column = 0; column < tableWidth; column++)
            cols += `<td>${tableArr[row][column]}</td>`
        tableLayout += `<tr>${cols}</tr>`
    }

    return `<table border="2px"><tbody>${tableLayout}</tbody></table>`
}

const tableHeight = parseInt(prompt("Скільки рядочків має бути у таблиці?", ""))
const tableWidth = parseInt(prompt("Скільки колонок має бути у таблиці?", ""))
const minValue = parseFloat(
    prompt("Яке мінімальне значення може бути у ячєйці?", "")
)
const maxValue = parseFloat(
    prompt("Яке максимальне значення може бути у ячєйці?", "")
)

const table = getTable(tableHeight, tableWidth, minValue, maxValue)
const tableLayout = getTableLayout(tableHeight, tableWidth, table)

document.write(`Вихідна матриця даних:<br> ${tableLayout}`)

// 1. сума у верхньому лівому кутку
// 2. верхній правий кут
// 3. нижній лівий кут
// 4. нижній правий кут

const middleTablesHeight = Math.floor(tableHeight / 2)
const middleTablesWidth = Math.floor(tableWidth / 2)

function getTablesSum(
    firstSumRow,
    lastSumRow,
    firstSumColumn,
    lastSumColumn,
    tableArr
) {
    let sumUpperLeftCorner = 0

    for (let row = firstSumRow; row < lastSumRow; row++)
        for (let column = firstSumColumn; column < lastSumColumn; column++)
            sumUpperLeftCorner += tableArr[row][column]

    return sumUpperLeftCorner
}

const sumUpperLeftCorner = getTablesSum(
    0,
    middleTablesHeight,
    0,
    middleTablesWidth,
    table
)

const sumUpperRightCorner = getTablesSum(
    0,
    middleTablesHeight,
    middleTablesWidth,
    tableWidth,
    table
)

const sumBottomLeftCorner = getTablesSum(
    middleTablesHeight,
    tableHeight,
    0,
    middleTablesWidth,
    table
)

const sumBottomRightCorner = getTablesSum(
    middleTablesHeight,
    tableHeight,
    middleTablesWidth,
    tableWidth,
    table
)

document.write(
    `Сума у верхньому лівому кутку таблиці дорівнює ${sumUpperLeftCorner}.<br>
    Сума у верхньому правому кутку таблиці дорівнює ${sumUpperRightCorner}.<br>
    Сума у нижньому лівому кутку таблиці дорівнює ${sumBottomLeftCorner}.<br>
    Сума у нижньому правому кутку таблиці дорівнює ${sumBottomRightCorner}.<br>`
)

// 5. Суму парних рядків

function getSumEvenRows(tableArr) {
    let sumEvenRows = 0

    for (let row = 0; row < tableArr.length; row++)
        if ((row + 1) % 2 === 0)
            for (let column = 0; column < tableArr[row].length; column++)
                sumEvenRows += tableArr[row][column]

    return sumEvenRows
}

const sumEvenRows = getSumEvenRows(table)

document.write(`Сума парних рядків таблиці дорівнює ${sumEvenRows}.<br>`)

// 6. Суму непарних стовпців

function getSumOddColumns(tableArr) {
    let sumOddColumns = 0

    for (let row = 0; row < tableArr.length; row++)
        for (let column = 0; column < tableArr[row].length; column++)
            if ((column + 1) % 2 !== 0) sumOddColumns += tableArr[row][column]

    return sumOddColumns
}

const sumOddColumns = getSumOddColumns(table)

document.write(`Сума непарних стовпців таблиці дорівнює ${sumOddColumns}.<br>`)

// 7. У парних рядках – непарні стовпці, у непарних – парні

function getSumCustomCells(tableArr) {
    let sumCustomCells = 0

    for (let row = 0; row < tableArr.length; row++)
        if ((row + 1) % 2 === 0) {
            for (let column = 0; column < tableArr[row].length; column++)
                if ((column + 1) % 2 !== 0)
                    sumCustomCells += tableArr[row][column]
        } else {
            for (let column = 0; column < tableArr[row].length; column++)
                if ((column + 1) % 2 === 0)
                    sumCustomCells += tableArr[row][column]
        }

    return sumCustomCells
}

const sumCustomCells = getSumCustomCells(table)

document.write(
    `Сума у парних рядках – непарнх стовпці, у непарних – парних дорівнює ${sumCustomCells}.`
)
