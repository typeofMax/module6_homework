function foo(x) {
    return function someFoo(y) {
        return x + y;
    }
}

const increaseTwo = foo(2);
console.log(increaseTwo(4));
console.log(increaseTwo(3));

const increaseFour = foo(4);
console.log(increaseFour(4));
console.log(increaseFour(6));
