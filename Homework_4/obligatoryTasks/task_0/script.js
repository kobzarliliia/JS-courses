// Створити функцію, яка за номером місяця повертає пору року, до якої
// відноситься цей місяць.

function getSeasonName(monthIndex) {
    let seasonName

    switch (monthIndex) {
        case 1:
        case 2:
        case 12:
            seasonName = "Зима"
            break
        case 3:
        case 4:
        case 5:
            seasonName = "Весна"
            break
        case 6:
        case 7:
        case 8:
            seasonName = "Літо"
            break
        case 9:
        case 10:
        case 11:
            seasonName = "Осінь"
            break
        default:
            seasonName = "Номер місяця може бути від 1 до 12."
            break
    }
    return seasonName
}

const userMonthIndex = parseInt(
    prompt(
        "Введіть будь ласка номер місяця для якого ви хотіли б визначити пору року",
        ""
    )
)

const seasonName = getSeasonName(userMonthIndex)

document.write(seasonName)
