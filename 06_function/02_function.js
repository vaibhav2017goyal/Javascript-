// Function With Object and array
// function calculateprice(val1,val2,...num1){  //function with array
//     return num1
// }

// console.log(calculateprice(200,400,500,2000)) //[ 500, 2000 ]

const obj={
    name: "vaibhav",
    price:"999"
}

function handleobj(anyobject){
    //console.log(`${anyobject.name} is useername and price is ${anyobject.price}`)
}

handleobj({
    name:"abc",
    price:99
})

const newarray=new Array(100,200,300,400)

function handlearr(getarr){
    console.log(getarr[1])
}

//handlearr(newarray)
handlearr([2,3,4,5,6])