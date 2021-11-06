

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// 下：二维数组 中：盒子  上：映射

// 应该是存在一个映射
// numRows row col
// (n*(numRows+2)) - (n*(numRows +2)+numRows)   垂直向下开始的位置
// (numRows+2)


// 
// Runtime: 108 ms, faster than 65.62% of JavaScript online submissions for Zigzag Conversion.
// Memory Usage: 45.9 MB, less than 25.27% of JavaScript online submissions for Zigzag Conversion.
// 

var convert = function (s, numRows) {
    if (numRows == 1)
        return s;
    if (numRows == 2)
        return s.split('').filter((cur, index) => index % 2 == 0).join('') +
            s.split('').filter((cur, index) => index % 2 == 1).join('')

    let row = []
    for (let i = 0; i < numRows; i++) { // 一共有 numRow排
        row.push([])
    }

    for (let i = 0, l = s.length; i < l; i++) {
        let n = i % (numRows + numRows - 2) // numRows + numRows - 2 个字母一个循环
        if (n < numRows) row[n].push(s[i])
        else row[numRows - (n - numRows) - 2].push(s[i])
    }

    return row.reduce((pre, cur) => { return pre + cur.join('') }, '')
};


console.log(convert('abcd', 2))