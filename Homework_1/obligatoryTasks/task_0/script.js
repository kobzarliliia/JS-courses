const a = parseFloat(prompt('Введіть будь ласка значення змінної "a"', ""));
const b = parseFloat(prompt('Введіть будь ласка значення змінної "b"', ""));
const c = parseFloat(prompt('Введіть будь ласка значення змінної "c"', ""));

const s1 = a + b + c;
const s2 = Math.sqrt(((a + b) / 2) * a).toFixed(2);
const s3 = Math.cbrt((a + b) * c).toFixed(2);
const s4 = Math.sin(a / -b).toFixed(2);

document.write(`
    S1 = ${s1};</br>
    S2 = ${s2};</br>
    S3 = ${s3};</br>
    S4 = ${s4}.`);
