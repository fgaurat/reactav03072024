
function f() {
    // console.log(a)
    // hoisting
    
    if(true){
        var a = 2
        let b =3
        const c =12
        console.log(c)
    }
    console.log(a)
    // console.log(b)

}

f()

const o = {
    name:"GAURAT",
    firstName:"Frédéric",
    age:"47"
}
o.age = 35
o = {}
console.log(o)