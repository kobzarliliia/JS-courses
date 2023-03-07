// Дано масив імен. Сформувати масив з перших літер цих імен.

let firstName
const nameList = []

do {
    firstName = prompt("Введіть будь ласка імʼя.", "")
    if (firstName !== null) nameList.push(firstName)
} while (firstName !== null)

const arrFromNamesFirstLetter = Array.from(nameList, (element) => element[0])

document.write(arrFromNamesFirstLetter)
