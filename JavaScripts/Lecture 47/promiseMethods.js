

function fun1() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve ("fun1")
        }, 3000)
    })
}

function fun2() {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve ("fun2")
        }, 1000)
    })
}

function fun3() {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve ("fun3")
        }, 5000)
    })
}


// let result = Promise.all([fun1(), fun2(), fun3()])      //results will be at max time bcz it works parallel and no one code will execue first
// let result = Promise.allSettled([fun1(), fun2(), fun3()])      //ALL RESULTS
let result = Promise.race([fun1(), fun2(), fun3()])      //ALL RESULTS
result.then((data) =>{
    console.log(data);
}).catch(err => {
    console.log(err);
})