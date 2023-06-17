const fibonacci2 = (n) => {
    if (n <= 1) {
        return [0, 1]
    } else {
        let fib = fibonacci2(n - 1);
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        // console.log(fib);
        return fib;
    }
}
console.log(fibonacci2(7));

const fibonacci3 = (n) => {
    if (n <= 1) {
        return [0, -1]
    } else {
        let fib = fibonacci3(n - 1);
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        return fib;
    }
}
console.log(fibonacci3(7));