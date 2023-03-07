// Дано масив номерів авто. Сформувати новий масив тих, які починаються
// на «А»

let carNumber
const carNumberList = []

do {
    carNumber = prompt("Введіть будь ласка номер авто англійською.", "")
    if (carNumber !== null) carNumberList.push(carNumber)
} while (carNumber !== null)

const carsArrayStartFromA = carNumberList.filter((item) => item[0] === "A")

document.write(carsArrayStartFromA)
