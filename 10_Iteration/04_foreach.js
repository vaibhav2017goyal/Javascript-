//for each
 const coding=["c++","ruby","python","java"]
// coding.forEach(function (val){
//     console.log(val)
// });
coding.forEach((val,index,arr)=>{
//console.log(val,index,arr)
})
//filter
// const numbers=[10,20,30,40]
// const mynums=numbers.filter((val)=>{
//     return val<25
// })

// console.log(mynums)

// map
const nums=[10,20,30,40];
const mymap=nums.map((val)=>{
    return val+10
})
//console.log(mymap)//[ 20, 30, 40, 50 ]

const newNums = nums
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 240)

//console.log(newNums);//[ 301, 401 ]

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal)