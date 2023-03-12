// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)

const MIN_SECURITIES_NUMBER = 1
const MAX_SECURITIES_NUMBER = 10000

function getRandomNumber(minValue, maxValue) {
    const randomNumber =
        minValue + Math.floor(Math.random() * (maxValue - minValue + 1))

    return randomNumber
}

function getCountSecuritiesPrices() {
    const countSecuritiesPrices = parseInt(
        prompt(
            "Введіть будь ласка для якої кількості періодів ви хотіли б здійснити розрахунок. Допустиме значення від 1 до 10 000.",
            ""
        )
    )

    return countSecuritiesPrices
}

function getSecuritiesPriceList(minValue, MaxValue, countSecuritiesPrices) {
    const securitiesPriceList = []

    for (let i = 0; i < countSecuritiesPrices; i++) {
        securitiesPriceList.push(getRandomNumber(minValue, MaxValue))
    }

    return securitiesPriceList
}

const securitiesPriceList = getSecuritiesPriceList(
    MIN_SECURITIES_NUMBER,
    MAX_SECURITIES_NUMBER,
    getCountSecuritiesPrices()
)

// 1. Сформувати новий масив, у якому є тільки ті, що більші за 1000грн.

const securitiesPricesMoreThan1000 = securitiesPriceList.filter(
    (el) => el > 1000
)

// 2. Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

const indexesSecuritiesPricesMoreThan1000 = securitiesPriceList.reduce(
    (prevValue, el, i) => (el > 1000 ? [...prevValue, i] : prevValue),
    []
)

// 3. Сформувати список з тих цін, які більші за попереднє значення.

const securitiesPricesMoreThanPrevious = securitiesPriceList.reduce(
    (prevValue, el, i, arr) =>
        el > arr[i - 1] ? [...prevValue, el] : prevValue,
    []
)

// 4. Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального.

const maxSecuritiesPrice = Math.max(...securitiesPriceList)

const securitiesPercentagePrices = securitiesPriceList.map(
    (el) => (el * 100) / maxSecuritiesPrice
)

// 5. Підрахувати кількість змін цін

const countPricesChange = securitiesPriceList.reduce(
    (prevValue, el, i, arr) => (el !== arr[i - 1] ? ++prevValue : prevValue),
    -1 //перша зміна ціни з нуля на перший елемент масиву не має враховуватись
)

// 6. Визначити, чи є ціна, що менше 1000

const hasSecurityPriceLess1000 = securitiesPriceList.some((el) => el < 1000)

// 7. Визначати, чи усі ціни більше за 1000

const isAllSecurityPriceMore1000 = securitiesPriceList.every((el) => el > 1000)

// 8. Підрахувати кількість цін, що більше за 1000

const countSecuritiesPricesMoreThan1000 = securitiesPriceList.reduce(
    (prevValue, el) => (el > 1000 ? ++prevValue : prevValue),
    0
)

// 9. Підрахувати суму цін, що більше за 1000

const sumSecuritiesPricesMoreThan1000 = securitiesPriceList.reduce(
    (prevValue, el) => (el > 1000 ? (prevValue += el) : prevValue),
    0
)

// 10. Знайти першу ціну, що більше за 1000

function getFirstSecurityPricesMoreThan1000(arr) {
    for (item of arr) {
        if (item > 1000) return item
    }
}

const firstSecurityPricesMoreThan1000 =
    getFirstSecurityPricesMoreThan1000(securitiesPriceList)

// const firstSecurityPricesMoreThan1000 = securitiesPriceList.find(
//     (el) => el > 1000
// )

// 11. Знайти індекс першої ціни, що більше за 1000

function getIndexFirstSecurityPricesMoreThan1000(arr) {
    for (const [index, value] of arr.entries()) {
        if (value > 1000) return index
    }
}

const indexFirstSecurityPricesMoreThan1000 =
    getIndexFirstSecurityPricesMoreThan1000(securitiesPriceList)

// const indexFirstSecurityPricesMoreThan1000 = securitiesPriceList.findIndex(
//     (el) => el > 1000
// )

// 12. Знайти останню ціну, що більше за 1000

const lastSecurityPricesMoreThan1000 = securitiesPriceList.findLast(
    (el) => el > 1000
)

// 13. Знайти індекс останньої ціни, що більше за 1000

const indexLastSecurityPricesMoreThan1000 = securitiesPriceList.findLastIndex(
    (el) => el > 1000
)

document.write(`
    Новий масив, у якому є тільки ті ціни, що більші за 1000грн.: ${securitiesPricesMoreThan1000}<br>
    Новий масив, у якому є номери тільки тих цін, що більші за 1000 грн.: ${indexesSecuritiesPricesMoreThan1000}<br>
    Cписок з тих цін, які більші за попереднє значення: ${securitiesPricesMoreThanPrevious}<br>
    Новий масив, що міститиме значення цін у відсотках стосовно максимального: ${securitiesPercentagePrices}<br>
    Кількість змін цін: ${countPricesChange}<br>
    Чи є ціна, що менше 1000? ${hasSecurityPriceLess1000}<br>
    Чи усі ціни більше за 1000? ${isAllSecurityPriceMore1000}<br>
    Кількість цін, що більше за 1000 ${countSecuritiesPricesMoreThan1000}<br>
    Сума цін, що більше за 1000 ${sumSecuritiesPricesMoreThan1000}<br>
    Перша ціна, що більше за 1000 ${firstSecurityPricesMoreThan1000}<br>
    Індекс першої ціни, що більше за 1000 ${indexFirstSecurityPricesMoreThan1000}<br>
    Остання ціна, що більше за 1000 ${lastSecurityPricesMoreThan1000}<br>
    Індекс останньої ціни, що більше за 1000 ${indexLastSecurityPricesMoreThan1000}<br>
`)
