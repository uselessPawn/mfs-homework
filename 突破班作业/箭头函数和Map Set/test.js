var p1 = new Promise((resolve, rejected) => {
    throw new Error('err.')
})
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log('???')

        // console.log(err)
    })