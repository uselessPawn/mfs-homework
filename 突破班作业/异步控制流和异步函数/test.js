
//我们的目标，将异步代码写得像同步代码。

function asnyFun() {
    //let data1 = asnyFun1()
    //do something using data1

    //let data2 = asnyFun1()
    //do something using data1 data2

    //let data2 = asnyFun1()
    //do something using data1 data2

}


// 什么时候会出现回调地狱。————当出现串行的异步请求的时候。

// 那么为什么我们最开始不能写成这样
// 因为如果不等，那么data系列的变量里会什么都没有。
// 那该怎么办？
// JS是一门单线程，事件驱动的语言。那么很自然会想，能不能给这个asnyFun函数安个事件监听，监听是否出现了异步操作。
// 如果执行到了异步操作，那就切出去，执行完再切回来继续执行。
// 那我们只要把涉及到异步操作的代码全放到asnyFun里面就行了。

// 这个思路很简单。剩下的就是实现。
// 很明显，JS里能执行到一半停止，切出去执行别的代码。等时机合适再切回来的函数，那就是用了yeild关键字的generator函数了。

// 但是还有一个问题，外面的代码怎么知道什么时候切回来。
// 还是回到最初，JS是怎么知道异步请求执行完成的？
// 对，每个异步操作都会要求我们输入一个回调函数，等异步操作完成就执行。这本质也是事件监听。

// 也就是说，我们只要给每个异步操作的回调函数，设置成返回异步操作完成的数据，以及让asnyFun继续执行的指令就完事了。（yield关键字）

// 那不妨让asnyFun对外暴露一个回调函数的接口。
// 回调函数里只写一件事，将异步请求的结果（data或者err）传到生成器中，以及一个继续向下执行的指令。
// 这个指令为什么要写在外面。


// Generator函数想要接收函数外的数组，用 yield 关键字。
// 有完成的数据，也有继续执行的指令。 好家伙，这不是执行一遍用AsynFun产生的next函数，而且在next函数里有异步请求完成的数据就行了吗。
// 挺简单的。


// 看上去理论清晰，好像也不难，那就让我们实际做一做，毕竟talk is cheap，很多问题只有实操才知道。

// 先给个场景，我们需要依次读取文件file1,file2,file3。
// 要求读完file1之后用file1的数据做一些事情。读完file2的时候，再用file1,file2的数据做一些事情。读完123再做一些事情。

let fs = require('fs')

// 先写Generator函数。
function* useFile() {
    let file1 = yield;
    // using file1
    let file2 = yield;
    // using file1 file2
    let file3 = yield;
    // using file1 file2 file3
    return 'job done.'
}

// 然后写迭代器
let itr = useFile()
itr.next(fs.readFile('file1', (err, data) => { }))

// ？？？坏了，data在回调函数里，不能用next传进useFile里，我们遇到大麻烦了，而且好像解决不了。

// 别慌，我们得想想我们现在想干嘛。
// 对，我们现在想取到一个函数的实参。
// 这怎么做到？在JS里只有在函数内部才能使用函数的实参啊。
// 好像没办法，那就进到有data的那个函数里吧。让我们硬着头皮写一写，看看效果怎么样。

// 只是试试看
let itr = useFile()
fs.readFile('file1', (err, data) => {
    itr.next(data)
    fs.readFile('file2', (err, data) => {
        itr.next(data)
        fs.readFile('file3', (err, data) => {
            itr.next(data)
        })
    })
})

// 得，搞了半天，还是变成了回调地狱。

// 但是我们仔细观察一下，不难发现，这个回调地狱，它好工整啊。
// 除了文件名不同，其他部分几乎一模一样。而且就算再有代码拓展，那也只会是报错，这样还是很工整。

// 在编程里，一段结构高度类似的代码意味着什么？ 
// 对，意味着我们能用循环或递归去简化它。
// 循环解决不断重复，而递归解决不断嵌套（想想递归算阶乘，不就是结构高度相似的嵌套吗）。

// 为了能简化这段代码，让它自己嵌套起来，我们得想办法把这个函数改造成输入的参数只剩回调函数。
// Thunk化能做到这一点。（有点机器降神，不自然）

// 我们将fs.readFile('filename',(err,data)=>{}) Thunk化

// 写个Thunk函数转换器，把我们的readFile函数转换一下
let Thunk = function (fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments)
        return function (callback) {
            args.push(callback)
            return fn.apply(this, args)
        }
    }
}

var readFileThunk = Thunk(fs.readFile);
// 使用方式就成了readFileThunk(fileA)(callback);

function* useFile() {
    let file1 = yield readFileThunk('file1');//返回一个函数变量
    // using file1
    let file2 = yield readFileThunk('file2');
    // using file1 file2
    let file3 = yield readFileThunk('file3');
    // using file1 file2 file3
    return 'job done.'
}

// 那么

// itr里面返回的的就是 
let r1 = itr.next()

r1.value((err, data) => {
    let r2 = itr.next(data)   //有效操作只有这步
    r2.value((err, data) => {
        let r3 = itr.next(data)
    })
})


function run(gen) {
    let itr = gen();

    function next(err, data) {
        var result = itr.next(data); // 给data，向下调用
        if (result.done) return
        result.value(next) // 递归，不是显式的，而是把自己加入到回调函数，执行完了，自动返回数据，加向下next()     // 那这算
    }
    next()
}

run(gen)





// 这是一段嵌套的代码，我们该用递归。终止条件应该是itr.next(data).done = true
// 

// 试着写一段

// function readFileSelf() {

//     if(itr.next())    
// }




// 比如AsynFun函数内，可以写成 let data = yield 

// 要写成这样的形式就好了 let data = yield 
// yield关键字的作用有3个，1 

// 这两件事都能用yield关键字做到。左边的变量接收外边异步操作完成的数据，右边的变量可以
// 那这和以前疯狂嵌套回调函数的写法有什么区别，不还是疯狂嵌套吗？
// 有，而且是很大的区别。细心的同学可能会注意到，这样做了之后，外面的回调函数都是高度类似的。




// 可以看到，这么写明显不对，因为前面我们说了，