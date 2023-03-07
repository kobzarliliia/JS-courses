// Дано масив, який зберігає кількість відвідувачів магазину протягом
// тижня. Вивести на екран:
// 1) номери днів, протягом яких кількість відвідувачів була меншою за
//     20;
// 2) номери днів, коли кількість відвідувачів була мінімальною;
// 3) номери днів, коли кількість відвідувачів була максимальною;
// 4) загальну кількість клієнтів у робочі дні та окремо загальну
//     кількість клієнтів на вихідних.

let visitorsCount
const visitorsCountArray = []

for (let i = 1; i <= 7; i++) {
    visitorsCount = parseInt(
        prompt(`Введіть будь ласка кількість відвідувачів за ${i} день.`, "")
    )
    visitorsCountArray.push(visitorsCount)
}

function getDaysDependingOnVisitors(visitorsCountArray, filterVisitorsCount) {
    let daysDependingOnVisitor = []

    for (let i = 0; i < visitorsCountArray.length; i++)
        if (visitorsCountArray[i] < filterVisitorsCount)
            daysDependingOnVisitor.push(i + 1)

    return daysDependingOnVisitor
}

function getLimitValue(array, typeLimit) {
    let limitValue = array[0]

    for (let i = 1; i < array.length; i++)
        if (typeLimit === "min") {
            if (array[i] < limitValue) {
                limitValue = array[i]
            }
        } else {
            if (array[i] > limitValue) {
                limitValue = array[i]
            }
        }

    return limitValue
}

function getLimitVisitorsDay(visitorsCountArray, typeLimit) {
    const limitValue = getLimitValue(visitorsCountArray, typeLimit)
    let limitVisitorsDay = []

    for (let i = 0; i < visitorsCountArray.length; i++)
        if (visitorsCountArray[i] === limitValue) {
            limitVisitorsDay.push(i + 1)
        }

    return limitVisitorsDay
}

function getVisitorsCount(visitorsCountArray, startDay, endDay) {
    let visitorsCount = 0

    for (let i = startDay - 1; i < endDay; i++)
        visitorsCount += visitorsCountArray[i]

    return visitorsCount
}

const daysDependingOnVisitor = getDaysDependingOnVisitors(
    visitorsCountArray,
    20
)
const minVisitorsDay = getLimitVisitorsDay(visitorsCountArray, "min")
const maxVisitorsDay = getLimitVisitorsDay(visitorsCountArray, "max")
const countVisitorsOnWorkingDays = getVisitorsCount(visitorsCountArray, 1, 5)
const countVisitorsOnWeekend = getVisitorsCount(visitorsCountArray, 6, 7)

document.write(
    `Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${daysDependingOnVisitor}</br>
     номери днів, коли кількість відвідувачів була мінімальною: ${minVisitorsDay}</br>
     номери днів, коли кількість відвідувачів була максимальною: ${maxVisitorsDay}</br>
     загальна кількість клієнтів у робочі дні: ${countVisitorsOnWorkingDays}</br>
     загальна кількість клієнтів на вихідних: ${countVisitorsOnWeekend}`
)
