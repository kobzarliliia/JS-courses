// Заполнить массив нулями, кроме первого и последнего
// элементов, которые должны быть равны единице.

let filledArray = new Array(20).fill(0, 1, 19)
filledArray[0] = 1
filledArray[19] = 1

// Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.

let newFilledArray = new Array(20).fill(0)
newFilledArray.forEach((_, i, arr) => {
    if (i % 2 !== 0) arr[i] = 1
})
