//З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься.

const month = parseInt(prompt("Напишіть будь ласка номер місяця.", ""))

const firstWinterMonth = 12
const lastWinterMonth = 2
const firstSummerMonth = 6
const lastSummerMonth = 8
const firstAutumnMonth = 9

if (month > firstSummerMonth && month < firstSummerMonth)
    document.write(`${month} це весна.`)
else if (month >= firstSummerMonth && month <= lastSummerMonth)
    document.write(`${month} це літо.`)
else if (month > lastSummerMonth && month < firstWinterMonth)
    document.write(`${month} це осінь.`)
else if (month == lastSummerMonth || month > firstAutumnMonth)
    document.write(`${month} це зима.`)    
else document.write("Ви ввели некорректні дані, спробуйте знову.")
