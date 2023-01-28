const exponentiation = (x, n) => {
    if (Number.isInteger(x) && Number.isInteger(n)) {
        return x**n;
    }
    return 'Исользуйте целые числа';
}

console.log(exponentiation(2, 4));
console.log(exponentiation(5, 3));
console.log(exponentiation(5.3, 3));
