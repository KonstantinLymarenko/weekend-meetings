const fibonacci = (n) => {
    let a = 0;
    let b = 1;

    const arrayFib = [0];
    do {
        let c = a + b;
        b = a;
        a = c;
        arrayFib.push(c)
    } while (arrayFib.length <= n)
    console.log(arrayFib)
    return arrayFib;

}
console.log(fibonacci(15))