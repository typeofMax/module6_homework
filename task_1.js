const someArray = [0, 1, 2, 3, 4, 5, 6, 0, 8, 9, 10, 0, 't', null, NaN, true];

function countEvenOddZeroElements(array) {
    if (!Array.isArray(array)) {
        console.log('Передайте массив');
        return;
    }

    let countOdd = 0;
    let countEven = 0;
    let zeroElementsCount = 0;

    array.forEach(item => {
        if (typeof item === 'number' && !isNaN(item)) {
            if (item === 0) {
                zeroElementsCount++;
            }
            else if (item % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    });

    return {
        countOdd,
        countEven,
        zeroElementsCount
    }
}

const result = countEvenOddZeroElements(someArray);

console.log(`Колличество четных элементов: ${result.countEven}`);
console.log(`Колличество нечетных элементов: ${result.countOdd}`);
console.log(`Колличество нулевых элементов: ${result.zeroElementsCount}`);