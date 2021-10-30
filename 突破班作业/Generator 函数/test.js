function* fib() {
    let [a1, a2] = [1, 1]
    while (1) {
        yield a1;
        [a1, a2] = [a2, a1 + a2]
    }
}

[a1, a2, a3] = fib();
console.log(a1, a2, a3) //1,2,1

