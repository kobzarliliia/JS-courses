// Створити функцію, яка за номером місяця повертає його назву.

function getMonthName(monthIndex) {
    let monthName

    switch (monthIndex) {
        case 1:
            monthName = "Січень"
            break
        case 2:
            monthName = "Лютий"
            break
        case 3:
            monthName = "Березень"
            break
        case 4:
            monthName = "Квітень"
            break
        case 5:
            monthName = "Травень"
            break
        case 6:
            monthName = "Червень"
            break
        case 7:
            monthName = "Липень"
            break
        case 8:
            monthName = "Серпень"
            break
        case 9:
            monthName = "Вересень"
            break
        case 10:
            monthName = "Жовтень"
            break
        case 11:
            monthName = "Листопад"
            break
        case 12:
            monthName = "Грудень"
            break
        default:
            monthName = "Номер місяця може бути від 1 до 12."
            break
    }
    return monthName
}

const userMonthIndex = parseInt(
    prompt(
        "Введіть будь ласка номер місяця для якого ви хотіли б визначити назву",
        ""
    )
)

const monthName = getMonthName(userMonthIndex)

document.write(monthName)
