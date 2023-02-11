const length = parseInt(prompt("Введіть будь ласка довжину у сантіметрах", ""));

const COUNT_CM_IN_METERS = 100;
const COUNT_METERS_IN_KM = 100000;

const lengthInMeters = Math.floor(length / COUNT_CM_IN_METERS);
const lengthInKilometers = Math.floor(length / COUNT_METERS_IN_KM);

document.write(`
    У ${length} см ${lengthInMeters} м.</br>
    У ${length} см ${lengthInKilometers} км.
`);
