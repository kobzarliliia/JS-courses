const minNumberOfMonth = 1;
const maxNumberOfMonth = 12;
const minNumberOfDay = 0;
const maxNumberOfDay = 6;

const randomMonth =
    minNumberOfMonth +
    Math.floor(Math.random() * (maxNumberOfMonth - minNumberOfMonth + 1));
const randomDay =
    minNumberOfDay +
    Math.floor(Math.random() * (maxNumberOfDay - minNumberOfDay + 1));

const sum = randomMonth + randomDay;

document.write(`
    Сума рандомного місяця та дня складає ${sum}.
`);
