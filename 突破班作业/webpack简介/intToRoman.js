// Runtime: 136 ms, faster than 90.35% of JavaScript online submissions for Integer to Roman.
// Memory Usage: 44.9 MB, less than 74.33% of JavaScript online submissions for Integer to Roman.


var intToRoman = function (num) {
    let decMap = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'M', "MM", "MMM"]
    ]

    num = num + '';
    let l = num.length;
    let result = '';

    for (let i = 0; i < l; i++) {
        result += decMap[l - i - 1][num[i] | '0']
    }
    return result;

};


console.log(intToRoman(58))