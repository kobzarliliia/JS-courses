// Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1. загальний прибуток кожного магазину за тиждень;
// 2. загальний прибуток усіх магазинів по дням (загальний прибуток
// усіх магазинів за понеділок, за вівторок, і т.д.);
// 3. загальний прибуток за робочі дні
// 4. загальний прибуток за вихідні дні
// 5. максимальний прибуток за середу
// 6. сформувати загальний список (одновимірний масив) зі значенням,
// які що більші за 200
// 7.відсортувати кожен тиждень за зростанням
// 8. відсортувати тижні (рядки) за спаданням максимального елементи у
// цьому тижні (рядку), тобто при порівнянні рядків потрібно
// порівнювати максимальні елементи у кожному з цих рядків
// 9. упорядкувати тижні (рядки) за спаданням суми елементів у рядку
// (тобто при порівнянні двох рядків треба знайти суму кожного з
// рядків і порівнювати ці суми, на основі цих сум буде зрозуміло,
// який з елементів повинен іти раніше).

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
    let tablesHeader = ""

    for (let i = 0; i <= tableWidth; i++) tablesHeader += `<th>${i}</th>`

    for (let row = 0; row < tableHeight; row++) {
        let cols = ""
        for (let column = 0; column < tableWidth; column++)
            cols += `<td>${tableArr[row][column]}</td>`
        tableLayout += `<tr><td style="font-weight: 600">${
            row + 1
        }</td>${cols}</tr>`
    }

    return `<table border="2px"><tbody><tr>${tablesHeader}</tr>${tableLayout}</tbody></table>`
}

COUNT_DAYS_IN_WEEK = 7
const tableWidth = parseInt(prompt("Скільки магазинів має бути у таблиці?", ""))

const table = getTable(COUNT_DAYS_IN_WEEK, tableWidth, 100, 250)
const tableLayout = getTableLayout(COUNT_DAYS_IN_WEEK, tableWidth, table)

document.write(
    `Вихідна матриця даних (по вертикалі дні тижня від понеділка до неділі, по горизонталі магазини):<br> ${tableLayout}`
)

// 1. загальний прибуток кожного магазину за тиждень;

function getStoreWeekProfit(table, tableWidth) {
    let storeWeekProfit = 0
    let arrStoresProfit = []

    for (let store = 0; store < tableWidth; store++) {
        for (let day = 0; day < table.length; day++)
            storeWeekProfit += table[day][store]
        arrStoresProfit.push(storeWeekProfit)
        storeWeekProfit = 0
    }

    return arrStoresProfit
}

const storeWeekProfit = getStoreWeekProfit(table, tableWidth)

document.write(
    `Загальний прибуток кожного магазину за тиждень ${storeWeekProfit}.<br>`
)

// 2. загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);

function getTotalStoreDayProfit(table) {
    let totalStoreDayProfit = 0
    let arrTotalStoresDayProfit = []

    for (let day = 0; day < table.length; day++) {
        for (let store = 0; store < table[day].length; store++)
            totalStoreDayProfit += table[day][store]
        arrTotalStoresDayProfit.push(totalStoreDayProfit)
        totalStoreDayProfit = 0
    }

    return arrTotalStoresDayProfit
}

const totalStoreDayProfit = getTotalStoreDayProfit(table)

document.write(
    `Загальний прибуток усіх магазинів по дням ${totalStoreDayProfit}.<br>`
)

// 3. загальний прибуток за робочі дні

function getTotalProfitWorkingDays(table) {
    let totalProfitWorkingDays = 0

    for (let day = 0; day < 5; day++)
        for (let store = 0; store < table[day].length; store++)
            totalProfitWorkingDays += table[day][store]

    return totalProfitWorkingDays
}

const totalProfitWorkingDays = getTotalProfitWorkingDays(table)

document.write(
    `Загальний прибуток за робочі дні ${totalProfitWorkingDays}.<br>`
)

// 4. загальний прибуток за вихідні дні

function getTotalProfitWeekends(table) {
    let totalProfitWeekends = 0

    for (let day = 5; day < table.length; day++)
        for (let store = 0; store < table[day].length; store++)
            totalProfitWeekends += table[day][store]

    return totalProfitWeekends
}

const totalProfitWeekends = getTotalProfitWeekends(table)

document.write(`Загальний прибуток за вихідні дні ${totalProfitWeekends}.<br>`)

// 5. максимальний прибуток за середу

function getMaxWednesdayProfit(table) {
    return Math.max(...table[2])
}

const maxWednesdayProfit = getMaxWednesdayProfit(table)

document.write(`Максимальний прибуток за середу ${maxWednesdayProfit}.<br>`)

// 6. сформувати загальний список (одновимірний масив) зі значенням, що більші за 200

function getProfitValuesMore200(table) {
    let arrProfitValuesMore200 = []

    for (row of table)
        for (column of row)
            if (column > 200) arrProfitValuesMore200.push(column)

    return arrProfitValuesMore200
}

const profitValuesMore200 = getProfitValuesMore200(table)

document.write(
    `загальний список (одновимірний масив) зі значенням, що більші за 200 ${profitValuesMore200}.<br>`
)

// 7.відсортувати кожен день за зростанням

function getTableWithSortedDay(table) {
    const newTable = JSON.parse(JSON.stringify(table))

    for (let day = 0; day < newTable.length; day++)
        for (let store = 0; store < newTable[day].length; store++)
            newTable[day].sort((prev, next) => prev - next)

    return newTable
}

const sortedTable = getTableLayout(
    COUNT_DAYS_IN_WEEK,
    tableWidth,
    getTableWithSortedDay(table)
)

document.write(`відсортувати кожен день за зростанням ${sortedTable}<br>`)

// 8. відсортувати тижні (рядки) за спаданням максимального елементи у
// цьому тижні (рядку), тобто при порівнянні рядків потрібно
// порівнювати максимальні елементи у кожному з цих рядків

function getTableWithSortedMaxDayValue(table) {
    const newTable = JSON.parse(JSON.stringify(table))

    newTable.sort((prevRow, nextRow) => {
        const maxPrevRowValue = Math.max(...prevRow)
        const maxNextRowValue = Math.max(...nextRow)

        if (maxPrevRowValue > maxNextRowValue) return -1
        else if (maxPrevRowValue < maxNextRowValue) return 1
        else return 0
    })

    return newTable
}

const sortedByMaxDaysValuesTable = getTableLayout(
    COUNT_DAYS_IN_WEEK,
    tableWidth,
    getTableWithSortedMaxDayValue(table)
)

document.write(`
    відсортувати тижні (рядки) за спаданням максимального елементи у
    цьому тижні (рядку), тобто при порівнянні рядків потрібно
    порівнювати максимальні елементи у кожному з цих рядків ${sortedByMaxDaysValuesTable}<br>
`)

// 9. упорядкувати тижні (рядки) за спаданням суми елементів у рядку
// (тобто при порівнянні двох рядків треба знайти суму кожного з
// рядків і порівнювати ці суми, на основі цих сум буде зрозуміло,
// який з елементів повинен іти раніше).

function getTableWithSortedMaxSumDayValue(table) {
    const newTable = JSON.parse(JSON.stringify(table))

    newTable.sort((prevRow, nextRow) => {
        let sumPrevRowValue = 0
        let sumNextRowValue = 0
        for (let value of prevRow) sumPrevRowValue += value
        for (let value of nextRow) sumNextRowValue += value

        if (sumPrevRowValue > sumNextRowValue) return -1
        else if (sumPrevRowValue < sumNextRowValue) return 1
        else return 0
    })

    return newTable
}

const sortedByMaxSumDaysValuesTable = getTableLayout(
    COUNT_DAYS_IN_WEEK,
    tableWidth,
    getTableWithSortedMaxSumDayValue(table)
)

document.write(`
    упорядкувати тижні (рядки) за спаданням суми елементів у рядку
    (тобто при порівнянні двох рядків треба знайти суму кожного з
    рядків і порівнювати ці суми, на основі цих сум буде зрозуміло,
    який з елементів повинен іти раніше) ${sortedByMaxSumDaysValuesTable}
`)
