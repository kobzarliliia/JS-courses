// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий
// автомобіль, С-вантажний автомобіль). Вивести на екран назву
// транспортного засобу, яким він може керувати.

const licenseCategory = prompt(
    "Введіть будь ласка назву водійської категорії у верхньому реїстрі англійською мовою, яка в вас зараз відкрита. Наприклад, A, B, C.",
    ""
);
let vehicleType;

switch (licenseCategory) {
    case "A":
        vehicleType = "мотоцикл";
        break;
    case "B":
        vehicleType = "легковий автомобіль";
        break;
    case "C":
        vehicleType = "вантажний автомобіль";
        break;
    default:
        vehicleType = "невірні дані";
}

document.write(
    `Ви можете керувати таким транспортним засобом як ${vehicleType}`
);
