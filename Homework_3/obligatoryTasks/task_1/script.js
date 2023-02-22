// Вивести з використанням циклів маркований список з випадковими
// числами (1-100). Кількість випадкових чисел вводиться користувачем.

const randomNumbersCount = parseInt(
    prompt("З якої кількості чисел необхідно створити маркований список?", "")
)
const minRandomValue = 1
const maxRandomValue = 100

document.write("<ul>")
for (let i = 0; i < randomNumbersCount; i++) {
    let randomNumber =
        minRandomValue +
        Math.floor(Math.random() * (maxRandomValue - minRandomValue + 1))
    document.write(`<li>${randomNumber}</li>`)
}
document.write("</ul>")
