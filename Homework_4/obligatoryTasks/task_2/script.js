// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей
// день робочим.

function getDayStatus(dayIndex) {
    let dayStatus

    switch (dayIndex) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            dayStatus = "Робочий день"
            break
        case 6:
        case 7:
            dayStatus = "Вихідний день"
            break
        default:
            dayStatus = "Номер дня може бути від 1 до 7."
            break
    }
    return dayStatus
}

const userDayIndex = parseInt(
    prompt(
        "Введіть будь ласка номер дня для якого ви хотіли б визначити є він робочим чи вихідним",
        ""
    )
)

const dayStatus = getDayStatus(userDayIndex)

document.write(dayStatus)
