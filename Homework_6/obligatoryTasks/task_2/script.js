// Користувач вводить кількість елементів. Створити масив, у якому
// перша половина заповнена 1-цями, а друга заповнена 7-ками.

const numberElements = parseInt(
    prompt("Введіть буль ласка кількість елементів для масива", "")
)

function getArray(numberElements) {
    return new Array(numberElements)
        .fill(1, 0, numberElements / 2)
        .fill(7, numberElements / 2)
}

const arr = getArray(numberElements)

document.write(arr)
