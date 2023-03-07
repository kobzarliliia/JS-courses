// Дано масив, який містить оцінки з К предметів. Знайти середній бал і
// з’ясувати до якої категорії він відноситься (відмінник, двійочник
// (має хоча би одну двійку), хорошист (оцінки добре і відмінно),
// трійочник(є хоча би одна трійка)).

function getAverageMark(marks) {
    let averageMark
    let marksSum = 0

    for (let i = 0; i < marks.length; i++) marksSum += marks[i]

    marks.length > 0
        ? (averageMark = marksSum / marks.length)
        : (averageMark = 0)

    return averageMark
}

function getStatus(marks) {
    let status

    // if (marks.includes(2)) status = "двійочник"
    // else if (marks.includes(3)) status = "трійочник"
    // else if (marks.includes(4)) status = "хорошист"
    // else status = "відмінник"

    let minMark = marks[0]

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] < minMark) minMark = marks[i]
    }

    if (minMark === 2) status = "двійочник"
    else if (minMark === 3) status = "трійочник"
    else if (minMark === 4) status = "хорошист"
    else if (minMark === 5) status = "відмінник"
    else status = "невідомо"

    return status
}

let userMark
const userMarks = []

do {
    userMark = parseInt(
        prompt("Введіть будь ласка оцінку (від 2 до 5) з предмету.", "")
    )
    if (isFinite(userMark)) userMarks.push(userMark)
} while (isFinite(userMark))

const averageMark = getAverageMark(userMarks).toFixed(2)
const userStatus = getStatus(userMarks)

document.write(`Середній бал: ${averageMark}. Категорія ${userStatus}.`)
