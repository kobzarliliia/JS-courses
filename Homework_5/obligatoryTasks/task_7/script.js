// Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

let payment
const paymentList = []

for (let i = 1; i <= 12; i++) {
    payment = parseFloat(
        prompt(`Введіть будь ласка суму по платіжці за ${i} місяць .`, "")
    )
    if (isFinite(payment)) paymentList.push(payment)
    else i--
}

function getPaymentForPeriod(paymentList, startPeriod, endPeriod) {
    let acc = 0

    for (let i = startPeriod - 1; i < endPeriod; i++) {
        acc += paymentList[i]
    }

    return acc
}

function getPaymentForEvenMonth(paymentList) {
    let acc = 0

    for (let i = 0; i < paymentList.length; i++) {
        if ((i + 1) % 2 === 0) acc += paymentList[i]
    }

    return acc
}

function getPaymentForSeasonStart(paymentList) {
    let acc = 0

    for (let i = 0; i < paymentList.length; i++) {
        if ((i + 1) % 3 === 0) acc += paymentList[i]
    }

    return acc
}

const paymentForYear = getPaymentForPeriod(paymentList, 1, 12)
const paymentForFirstHalfYear = getPaymentForPeriod(paymentList, 1, 6)
const paymentForLasttHalfYear = getPaymentForPeriod(paymentList, 7, 12)
const paymentForSummer = getPaymentForPeriod(paymentList, 6, 8)
const paymentForSecondQuarter = getPaymentForPeriod(paymentList, 4, 6)
const paymentForEvenMonth = getPaymentForEvenMonth(paymentList)
const paymentForSeasonStart = getPaymentForSeasonStart(paymentList)

document.write(`
    Cумарнa кількість грошей за весь рік ${paymentForYear}</br>
    Cумарнa кількість грошей за першу половину року ${paymentForFirstHalfYear}</br>
    Cумарнa кількість грошей за другу половину року ${paymentForLasttHalfYear}</br>
    Cумарнa кількість грошей за літо ${paymentForSummer}</br>
    Cумарнa кількість грошей за ІІ квартал ${paymentForSecondQuarter}</br>
    Cумарнa кількість грошей за парні місяці (з парними номерами) ${paymentForEvenMonth}</br>
    Cумарнa кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима) ${paymentForSeasonStart}.
`)
