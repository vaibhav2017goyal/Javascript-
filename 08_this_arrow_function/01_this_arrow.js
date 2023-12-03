const user={
    name:"Vaibhav",
    price:999,

welcomemessage: function(){
    console.log(`${this.name}, welcome to javascript`);
}
}

user.welcomemessage()
// console.log(this)

//arrow function 🙃
// function ()={}  ,   ()=>{}

// const add= (x,y)=>{return x+y;}//first method
const add= (x,y)=> x+y//second method use in react 
console.log(add(5,6))