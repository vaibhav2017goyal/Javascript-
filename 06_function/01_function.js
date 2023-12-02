// function hello(){
//     console.log("v")
//     console.log("a")
//     console.log("i")
//     console.log("b")
//     console.log("h")
//     console.log("a")
//     console.log("v")
// }   // Function make 
// hello()  // Function call

// function addtwonum(num1,num2){
//     console.log(num1+num2)
// }

// addtwonum(3,4)

// function addtwonum(num1,num2){
//     return num1+num2
// }
// console.log(addtwonum(3,4))

function username(username="sam"){

    if(!username){
        console.log("Please Enter Valid  Username")
        return
    }

    return `${username} just login`
}
console.log(username())