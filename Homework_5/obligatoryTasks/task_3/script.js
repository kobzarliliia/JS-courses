// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я
// «Іван».

let pupilName
const pupilsList = []

do {
    pupilName = prompt("Введіть будь ласка імʼя учня.", "")
    if (pupilName !== null) pupilsList.push(pupilName)
} while (pupilName !== null)

function getCountName(pupilsList, name) {
    let countName = 0
    for (let i = 0; i < pupilsList.length; i++)
        if (pupilsList[i] === name) countName++

    return countName
}

const countPupilName = getCountName(pupilsList, "Іван")

document.write(`Імʼя Іван зустрічається ${countPupilName} разів.`)
