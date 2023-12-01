//const tinder=new Object()// singleton
const mys=Symbol("vaibhav")
const tinder={

}
//Object.freeze(tinder)
tinder.id="123abc"
tinder.name="Vaibhav Goyal"
tinder.status="single"
tinder.age=22
tinder[mys]=" Goyal"
// console.log(tinder)

const regular={
    email:"some@js.com",
    Username:{
        fullname:{
            Firstname:"vaibhav",
            Lastname:"goyal",
        },
    },
} // object in object

//console.log(regular)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//const obj4 =Object.assign({},obj1,obj2,obj3)// merge object method 1
const obj4={...obj1,...obj2,...obj3}// method 2
//console.log(obj4)
const user=[
    {

    },
    {

    },
    {

    }
]// objects in array
//console.log(user)

console.log(tinder)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))
console.log(tinder.hasOwnProperty('name'))