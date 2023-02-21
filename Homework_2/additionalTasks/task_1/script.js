// На екран виводиться меню:
// 1. Веселий
// 2. Сумний
// 3. Обурений
// Користувач вводить номер пункту меню і на екрані з’являється
// відповідне зображення смайла.

const userMood = parseInt(
    prompt(
        "Введіть будь ласка цифру, яка відповідає вашому поточному настрою",
        ""
    )
)

let userSmile

switch (userMood) {
    case 1:
        userSmile = "&#128512"
        break
    case 2:
        userSmile = "&#128532"
        break
    case 3:
        userSmile = "&#128548"
        break
    default:
        userSmile = "некорректне значення"
        break
}

document.write(`${userSmile}`)
