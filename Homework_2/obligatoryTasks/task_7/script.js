//З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься.

const month = parseInt(prompt("Напишіть будь ласка номер місяця.", ""))

let nameOfSeason

switch (indexOfDay) {
    case "1":
    case "2":
    case "12":
        nameOfSeason = "Зима"
        break
    case "3":
    case "4":
    case "5":
        nameOfSeason = "Весна"
        break
    case "6":
    case "7":
    case "8":
        nameOfSeason = "Літо"
        break
    case "9":
    case "10":
    case "11":
        nameOfSeason = "Осінь"
        break
    default:
        nameOfSeason = "Невірні дані."
}

document.write(`${nameOfSeason}`)
