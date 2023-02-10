const length = parseInt(prompt("Введіть будь ласка довжину у сантіметрах", ""));

const lengthInMeters = Math.floor(length / 100);
const lengthInKilometers = Math.floor(length / 100000);

document.write(`
    У ${length} см ${lengthInMeters} м.</br>
    У ${length} см ${lengthInKilometers} км.
`);
