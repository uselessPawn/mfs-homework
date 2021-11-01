let obj = {
    [0]: "a",
    [1]: "b",
    [2]: "c",
    length: 3
}

obj[Symbol.iterator] = function () {
    let i = 0;
    return {
        next: () => {
            return { value: this[i], done: i++ == this.length }
        }
    }
}

for (let value of obj) {
    console.log(value)
}