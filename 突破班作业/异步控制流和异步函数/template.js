const fs = require('fs')

let thunkReadFile = thunky(fs.readFile)

function thunky(fn) {
    return function () {
        let args = Array.prototype.slice.call(arguments)
        return function (callback) {
            args.push(callback)
            return fn.apply(this, args)
        }
    }
}

// thunkReadFile('./text1.txt')((err, data) => { console.log(data.toString()) })

function* gen() {
    let test1 = yield thunkReadFile('./text1.txt')
    console.log('' + test1)
    let test2 = yield thunkReadFile('./text2.txt')
    console.log('' + test1 + test2)
}

function run(gen) {
    var itr = gen()

    function setCb(err, data) {
        var result = itr.next(data)
        if (result.done) return;
        result.value(setCb);
    }
    setCb();// 第一次没有执行异步操作，所以也就不需要取出回调中的数据，不需要输入参数
}

run(gen)


