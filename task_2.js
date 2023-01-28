function isPrimeNumber(num) {
    if ((num < 2) || (num > 1000)) {
        return 'Данные не верны';
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return 'Составное';
            }
        }
        return 'Простое';
    }
}

let randomNumber = Math.floor(Math.random() * 1000);
let result = isPrimeNumber(randomNumber);
console.log(`Число ${randomNumber} - ${result}`);