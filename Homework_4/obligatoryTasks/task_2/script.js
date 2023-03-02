// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей
// день робочим.

function isWorkingDay(dayIndex) {
    return dayIndex >= 1 && dayIndex <= 5
}

const userDayIndex = parseInt(
    prompt(
        "Введіть будь ласка номер дня для якого ви хотіли б визначити є він робочим чи вихідним",
        ""
    )
)

const dayStatus = isWorkingDay(userDayIndex)
    ? "Так, це є робочий день"
    : "Ні, це вихядний день"

document.write(dayStatus)
