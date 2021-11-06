// Runtime: 180 ms, faster than 81.77% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 48.4 MB, less than 51.36% of JavaScript online submissions for Palindrome Number.

var isPalindrome = function (x) {
    x = x + '';
    if (x[0] === '-') return false;

    let l = x.length;

    for (let i = 0, t = Math.floor(x.length / 2); i < t; i++) {
        if (x[i] !== x[l - i - 1]) return false;
    }
    return true;
};

console.log()