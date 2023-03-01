// Створити функцію, яка виводить банер (у функцію передаються:
// зображення, заголовок та посилання, куди переходимо при
// кліку на зображення (тег img повине знаходитись у середині
// тега a:
//     <a><img src="”шлях”" /></a>;
// </pre>

function getBanner(
    title,
    link,
    imgPath = "../../../Homework_3/img/banana.png"
) {
    const banner = `
        <article style="width: 50%; background-color: lightyellow; display: flex; flex-direction: column; align-items: center; margin: 0 auto;">
            <h2 style="font-size: 36px; margin-bottom: 24px;">${title}</h2>
            <a href="${link}" target="_blank" style="width: 50%;">
                <img src="${imgPath}" style="width: 100%;">
            </a>
        </article>
    `

    return banner
}

const imgPath = prompt(
        "Додайте будь ласка посилання на картинку, яку б ви хотіли використати для банера.",
        "../../../Homework_3/img/banana.png"
    ),
    title = prompt(
        "Додайте будь ласка заголовок, який би ви хотіли використати для банера."
    ),
    link = prompt(
        "Додайте будь ласка посилання, на яке б ви хотіли перенаправляти користувача по кліку."
    )

const banner = getBanner(title, link, imgPath)

document.write(banner)
