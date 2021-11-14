const cmp = (a, b) => {
    if (a == b) return 0;
    else if (a < b) return -1;
    else if (a > b) return 1;
}

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


const bubble = (arr, cmp, swap) => {
    for (let i = 0, l = arr.length; i < l; i++) {
        for (let j = 0; j < l - i - 1; j++) {
            if (cmp(arr[j], arr[j + 1]) === 1) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr;
}

let arr = [1, 5, 2, 6, 8, 2, 4, 7];
console.log(bubble(arr, cmp, swap))