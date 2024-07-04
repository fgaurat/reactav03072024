function getTodo(id) {
    const p = new Promise((resolve, reject) => {
        setTimeout(function () {

            const todo = {
                id,
                title: `Todo id: ${id}`,
                completed: false
            }
            resolve(todo)

        }, 1000)


    })

    return p

}



// const pTodo = getTodo(1)
// pTodo.then(todo => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then(todo => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then(todo => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then(todo => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// })
// const pTodo1 = getTodo(1)
// const pTodo2 = getTodo(2)
// const pTodo3 = getTodo(3)
// const pTodo4 = getTodo(4)

// Promise.all([pTodo1,pTodo2,pTodo3,pTodo4]).then(arr => console.log(arr))


// async function main(){
//     const pTodo1 = await getTodo(1)
//     console.log(pTodo1)
//     const pTodo2 = await getTodo(2)
//     console.log(pTodo2)
//     const pTodo3 = await getTodo(3)
//     console.log(pTodo3)
//     const pTodo4 = await getTodo(4)
//     console.log(pTodo4)

// }

// main()

// const arr = [10,20,30]
// const [a,b,...c] = [0,1,2,3]
// console.log(a,b,c)
// const d = [...arr]

// const o = {
//     name:"GAURAT",
//     firstName:"Frédéric",
//     age:"47"
// }

// const cloneO = {...o,age:35}

