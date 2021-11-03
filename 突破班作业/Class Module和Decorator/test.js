function Thunk(fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return function (callback) {
            args.push(callback)
            return fn.apply(this, args)
        }
    }
}


function test(a1, a2, callback) {
    console.log(a1)
    console.log(a2)
    console.log(callback(a1, a2))
}

const add = (a1, a2) => a1 + a2

let thunkTest = Thunk(test)

thunkTest(1,2)(add)
