// Користувача поступово вводить показники температури протягом року.
// Знайти середню температуру.

let acc = 0
let averageTemperature

for (let i = 0; ; i++) {
    let temperature = parseInt(prompt("Введіть будь ласка температуру.", ""))
    if (!isFinite(temperature)) break
    acc += temperature
    averageTemperature = acc / (i + 1)
}

document.write(`${averageTemperature}`)
