//Array 2
const marvel_heros=["Thor","Iron-Man","Spider-Man"]
const dc=["Flash","superman","Batman"]

marvel_heros.push(dc)//array in array
console.log(marvel_heros)
const newarray=marvel_heros.concat(dc)
console.log(newarray)

const new_array=[...marvel_heros,...dc]
console.log(new_array)

const another_array=[1,2,3,[4,5],[5,6,[7,8]]]
const real_another_array=another_array.flat(Infinity)

console.log(real_another_array)

console.log(Array.from("Vaibhav"))

console.log(Array.isArray("vaibhav"))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))