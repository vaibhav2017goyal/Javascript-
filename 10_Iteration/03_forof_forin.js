//for of
// const arr=[1,2,3,4]
// for (const num of arr) {
//     console.log(num);
// }
// const greeting="Hello World!"
// for (const greet of greeting) {
//     console.log(`${greet}`)
// }
//map
const map=new Map()
map.set('In',"India")
map.set('USA',"America")
map.set('Fr',"France")

for (const [key,value] of map) {
   // console.log(key,':-',value)
}
//for in
//object
const obj={
    cpp:"c++",
    rb:"ruby",
    py:"python"
}
for (const key in obj) {
    console.log(key,"is the shortcut of ",obj[key])
}