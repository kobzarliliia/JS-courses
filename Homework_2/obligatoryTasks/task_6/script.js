// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

const indexOfDay = prompt("Введіть будь ласка номер дня тижня.", "")
let nameOfDay

switch (indexOfDay) {
    case "1":
        nameOfDay = "Понеділок"
        break
    case "2":
        nameOfDay = "Вівторок"
        break
    case "3":
        nameOfDay = "Середа"
        break
    case "4":
        nameOfDay = "Четвер"
        break
    case "5":
        nameOfDay = "Пʼятниця"
        break
    case "6":
        nameOfDay = "Субота"
        break
    case "7":
        nameOfDay = "Неділя"
        break
    default:
        nameOfDay = "Невірні дані."
}

document.write(`${nameOfDay}`)
