// Користувач поступово вводить прибуток магазину за кожен день
// протягом N тижнів. Знайти загальну величину прибутку та вивести
// величину прибутку протягом кожного окремого тижня.

const countWeeks = parseInt(
    prompt(
        "Введіть будь ласка кількість тижнів за які ви бажали б розрахувати прибуток.",
        ""
    )
)
const weekDuration = 7

let totalAcc = 0

for (i = 1; i <= countWeeks; i++) {
    let acc = 0
    for (j = 1; j <= weekDuration; j++) {
        dayProfit = parseInt(
            prompt(`Введіть будь ласка прибуток за ${j} день ${i} тижня.`, "")
        )
        if (!isFinite(dayProfit)) continue
        acc += dayProfit
    }
    totalAcc += acc
    document.write(`За ${i} тиждень ваш прибуток склав ${acc}грн.<br>`)
}

document.write(`Загальний прибуток склав ${totalAcc}грн.<br>`)
