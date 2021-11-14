
// console.log("main")

// setTimeout(()=>{
//     console.log('time')
// },0)

// process.nextTick(() => {
//     console.log('tick')
// })



function add(a,b) {
    return a+b;
}

function addCurring(a) {
    addNum = function (b) {
        return a+b;
    }
    return addNum;
}

console.log(addCurring(1)(2))



