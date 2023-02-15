// З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є
// більшою, або вивести, що кількість однакова.

const firstChildName = prompt("Введіть будь ласка імʼя першої дитини", "");
const firstChildTreats = parseInt(
    prompt(`Введіть будь ласка яка кількість цукерок у ${firstChildName}`, "")
);
const secondChildName = prompt("Введіть будь ласка імʼя другої дитини", "");
const secondChildTreats = parseInt(
    prompt(`Введіть будь ласка яка кількість цукерок у ${secondChildName}`, "")
);

if (firstChildTreats > secondChildTreats)
    document.write(
        `У ${firstChildName} більше цукерок, ніж у ${secondChildName}.`
    );
else if (firstChildTreats < secondChildTreats)
    document.write(
        `У ${secondChildName} більше цукерок, ніж у ${firstChildName}.`
    );
else
    document.write(
        `У ${firstChildName} і ${secondChildName} однакова кількість цукерок.`
    );
