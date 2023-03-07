// Користувач вводить кількість елементів. Створити масив, що
// складається з вказаної кількості елементів заповнених нулями.

const numberElements = parseInt(
    prompt("Введіть буль ласка кількість елементів для масива", "")
)

function getArray(numberElements) {
    return new Array(numberElements).fill(0)
}

const arr = getArray(numberElements)

document.write(arr)
