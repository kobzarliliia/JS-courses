const a = parseFloat(prompt('Введіть будь ласка значення змінної "a"', ""));
const b = parseFloat(prompt('Введіть будь ласка значення змінної "b"', ""));
const c = parseFloat(prompt('Введіть будь ласка значення змінної "c"', ""));

const s1 = a + 12 + b;
const s2 = Math.sqrt(((a + b) / (2 * a)));
const s3 = Math.cbrt((a + b) * c);
const s4 = Math.sin(a / -b);

document.write(`
    S1 = ${s1};</br>
    S2 = ${s2.toFixed(2).replace(/\.0+/, "")};</br>
    S3 = ${s3.toFixed(2).replace(/\.0+/, "")};</br>
    S4 = ${s4.toFixed(2).replace(/\.0+/, "")}.`);
