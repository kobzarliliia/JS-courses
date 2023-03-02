// Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.

function getInchesFromCentimeters(num) {
    const COUNT_INCHES_IN_CANTIMETER = 0.393701

    return num * COUNT_INCHES_IN_CANTIMETER
}

function getPoundsFromKilograms(num) {
    const COUNT_POUNDS_IN_KILOGRAM = 2.20462

    return num * COUNT_POUNDS_IN_KILOGRAM
}

function getMilesFromKilometers(num) {
    const COUNT_MILES_IN_KILOMETER = 0.621371

    return num * COUNT_MILES_IN_KILOMETER
}

const userNum = parseFloat(
        prompt("Введіть будь ласка число яке потрібно трансформувати", "")
    ),
    inches = getInchesFromCentimeters(userNum).toFixed(2),
    pounds = getPoundsFromKilograms(userNum).toFixed(2),
    miles = getMilesFromKilometers(userNum).toFixed(2)

document.write(
    `
    ${userNum} сантіметрів це ${inches} дюймів.</br>
    ${userNum} кілограм це ${pounds} фунтів.</br>
    ${userNum} кілометрів це ${miles} миль.
    `
)
