// Створити функцію, яка випадковим чином виводить на екран одне із 4
// зображень (шляхи до зображень передаються у функцію)

const firstImgPath = "../../../Homework_3/img/banana.png",
    secondImgPath = "../../../Homework_3/img/cherry.png",
    thirdImgPath = "../../../Homework_3/img/orange.png",
    fourthImgPath = "../../../Homework_3/img/peach.png"

function getImgPath(...paths) {
    const randomPath = paths[Math.floor(Math.random() * paths.length)]

    return randomPath
}

const randomImg = getImgPath(
    firstImgPath,
    secondImgPath,
    thirdImgPath,
    fourthImgPath
)

document.write(`<img src="${randomImg}" width="250">`)
