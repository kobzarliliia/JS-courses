const salary = parseFloat(
    prompt("Введіть будь ласка розмір вашої зарплати у гривнях", "")
);
const livingWage = parseFloat(
    prompt("Введіть будь ласка розмір прожиткового мінімуму у гривнях", "")
);

const socialHelp = Math.floor(livingWage > salary ? livingWage - salary : 0);

document.write(
    `Якщо ваша зарплата становить ${salary}грн, а розмір прожиткового мінімуму ${livingWage}, то соціальна допомога буде становити ${socialHelp}грн.`
);
