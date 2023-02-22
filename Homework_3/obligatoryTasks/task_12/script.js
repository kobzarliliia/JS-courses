// Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір
// у кожній позиції вибирається як одне з чотирьох зображень. Вивести
// ці зображення і повідомити виграш користувача (три перших зображення
// 100 грн, три других – 200, три третіх – 500, три четвертих
// зображення – 1000грн). Використати цикли і switch (для вибору
// зображення за номером).

document.write(
    `
    3 банана = 100грн</br>
    3 персика = 200грн</br>
    3 апельсина = 500грн</br>
    3 вишні = 1000грн</br>
    `
)

const bananaUrl = "../../img/banana.png",
    peachUrl = "../../img/peach.png",
    orangehUrl = "../../img/orange.png",
    cherryhUrl = "../../img/cherry.png",
    maxRandomValue = 3

let firstCellValue, secondCellValue, thirdCellValue
let prize

for (let i = 0; i < maxRandomValue; i++) {
    let randomNumber = Math.floor(Math.random() * (maxRandomValue + 1))
    let selectedItem
    switch (randomNumber) {
        case 0:
            selectedItem = bananaUrl
            break
        case 1:
            selectedItem = peachUrl
            break
        case 2:
            selectedItem = orangehUrl
            break
        case 3:
            selectedItem = cherryhUrl
            break
    }
    if (i === 0) firstCellValue = randomNumber
    else if (i === 1) secondCellValue = randomNumber
    else thirdCellValue = randomNumber
    document.write(
        `<img src="${selectedItem}" width="50px" height="50px" style='border: 1px solid black; padding: 10px;'/>`
    )
}

let isCellsEqual =
    firstCellValue === secondCellValue && secondCellValue === thirdCellValue

if (isCellsEqual) {
    switch (firstCellValue) {
        case 0:
            prize = "100грн"
            break
        case 1:
            prize = "200грн"
            break
        case 2:
            prize = "500грн"
            break
        case 3:
            prize = "1000грн"
            break
    }
} else prize = "0грн"

document.write(`<br>Сума вашого виграшу склала ${prize}`)
