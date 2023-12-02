const myArr =[1,2,3,4]

const heros=["Antman","spider-man","Iron Man","Captain America"]

const arr=new Array(1,2,3,4,6)
//console.log(arr[1]);

// Array Method 

myArr.push(6)//insert
//console.log(myArr)

myArr.pop(6) //delete
//console.log(myArr)

myArr.unshift(9)//Insert At Start
//console.log(myArr)
myArr.shift()//Delete At start
//console.log(myArr)

//console.log(myArr.includes(7))
//console.log(myArr.indexOf(8))

const newarray=myArr.join()// use for making array in string
// console.log(newarray)

//slice, splice

console.log("A",myArr)
const mna1=myArr.slice(1,3)
console.log(mna1)
console.log("B",myArr)

const mna2= myArr.splice(1,3)
console.log(mna2)
console.log("c",myArr)