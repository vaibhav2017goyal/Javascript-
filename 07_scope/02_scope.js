addone(5)
function addone(num1) {
return num1+1
}

//addtwo(5)
const addtwo=function (num2) { //addtwo(5) 
return num2+2                   //ReferenceError: Cannot access 'addtwo' before initialization
}

function one(){
    const username="Vaibhav"
    function two(){
        const game="Bgmi"
        console.log(username)
    }
    //console.log(game)   //can't access outside function
    two()
}
one()


