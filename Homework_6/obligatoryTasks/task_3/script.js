// Користувач вводить кількість елементів. Створити масив, у якому
// перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені
// 7-ками.

const numberElements = parseInt(
    prompt("Введіть буль ласка кількість елементів для масива", "")
)

function getArray(numberElements) {
    return new Array(numberElements).fill(1, 0, 5).fill(7, 5)
}

const arr = getArray(numberElements)

document.write(arr)
