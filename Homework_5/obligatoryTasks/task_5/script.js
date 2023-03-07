// Дано послідовність оцінок учня. Підрахувати кількість:
// двійок
// кількість хороших оцінок (добре, відмінно);
// кількість оцінок, які нижче середнього.

let pupilMark
const pupilMarksList = []

do {
    pupilMark = parseInt(prompt("Введіть будь ласка оцінку учня.", ""))
    if (isFinite(pupilMark)) pupilMarksList.push(pupilMark)
} while (isFinite(pupilMark))

function getCountNecessaryMarks(pupilMarksList, ...necessaryMarks) {
    let acc = 0

    for (let i = 0; i < pupilMarksList.length; i++) {
        let j = 0
        do {
            if (pupilMarksList[i] === necessaryMarks[j]) acc++
            j++
        } while (
            pupilMarksList[i] === necessaryMarks[j] &&
            j < necessaryMarks.length
        )
    }

    return acc
}

function getAverageMark(pupilMarksList) {
    let acc = 0

    for (let i = 0; i < pupilMarksList.length; i++) {
        acc += pupilMarksList[i]
    }

    return acc / pupilMarksList.length
}

function getCountMarksLessAverage(pupilMarksList) {
    const averageMark = getAverageMark(pupilMarksList)
    let acc = 0

    console.log(averageMark)

    for (let i = 0; i < pupilMarksList.length; i++) {
        if (pupilMarksList[i] < averageMark) acc++
    }

    return acc
}

const numberOfDeuces = getCountNecessaryMarks(pupilMarksList, 2)
const numberOfGoodMarks = getCountNecessaryMarks(pupilMarksList, 4, 5)
const numberMarksLessAverage = getCountMarksLessAverage(pupilMarksList)

document.write(`
    Кількість двійок: ${numberOfDeuces}</br>
    кількість хороших оцінок (добре, відмінно): ${numberOfGoodMarks}</br>
    кількість оцінок, які нижче середнього: ${numberMarksLessAverage}
`)
