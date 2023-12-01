//Types Of Object are;-
//singleton
//Object.create

//object litereals
const mys=Symbol("vaibhav")//that's how symbol initiate
const JsUser={
name:"Vaibhav",
lastname:"Goyal",
"fullname":"Vaibhav Goyal",
[mys]:"vaibhav",  //symbal value insert
age:22,
location:"Delhi",
isloggedin:false,
email:"vaihav2017goyal",
lastlogindays:["Monday","Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullname"])
// console.log(JsUser.fullname)
// console.log(JsUser[mys])//this method use to call symbols

JsUser.email="vaibhav2017goyal@gmail.com"
//Object.freeze(JsUser)//use for freeze object
JsUser.email="vaibhav2017goyal@yahoo.com"
//console.log(JsUser)

JsUser.g=function(){
    console.log("hello Vaibhav ")
}
JsUser.g2=function(){
    console.log(`hello Vaibhav ${this.lastname} `)
}


console.log(JsUser.g())
console.log(JsUser.g2())