function outputRange(start, end) {
    let count = start;
    const timer = setInterval(() => {
        console.log(count);
        count++;
        if (count > end) {
            clearInterval(timer);
        }
    }, 1000);
}

outputRange(5, 15);