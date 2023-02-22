//  Морський бій. Комп’ютер випадково розташовує одиночний корабель на
//  полі розміром N*M. Маючи К снарядів користувач намагається потопити
//  корабель.

const fieldHeight = parseInt(
        prompt("Введіть будь ласка висоту поля для гри в морський бій", "")
    ),
    fieldWidth = parseInt(
        prompt("Введіть будь ласка ширину поля для гри в морський бій", "")
    ),
    shellsNumber = parseInt(
        prompt(
            "Введіть будь ласка кількість снарядів для гри в морський бій",
            ""
        )
    ),
    shipСoordinateX = 1 + Math.floor(Math.random() * fieldWidth),
    shipСoordinateY = 1 + Math.floor(Math.random() * fieldHeight)

let resultMessage

for (let i = 0; i < shellsNumber; i++) {
    let shotCoordinateX, shotCoordinateY

    if (resultMessage === "Промах") {
        shotCoordinateX = parseInt(
            prompt(
                "Нажаль ви промазали, введіть будь ласка нову координату X для пострілу",
                ""
            )
        )
        shotCoordinateY = parseInt(
            prompt(
                "Нажаль ви промазали, введіть будь ласка нову координату Y для пострілу",
                ""
            )
        )
    } else {
        shotCoordinateX = parseInt(
            prompt("Введіть будь ласка координату X для пострілу", "")
        )
        shotCoordinateY = parseInt(
            prompt("Введіть будь ласка координату Y для пострілу", "")
        )
    }

    if (
        shotCoordinateX === shipСoordinateX &&
        shotCoordinateY === shipСoordinateY
    ) {
        resultMessage = "Вітаю! Ви поцілили корабель!"
        break
    } else resultMessage = "Промах"

    if (i === shellsNumber - 1) resultMessage = "Нажаль ви програли..."
}

document.write(resultMessage)
