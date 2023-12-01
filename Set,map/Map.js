let mymap= new Map([["a1","hello"],["b1","Goodbye"]])
mymap.set("c3","Vaibhav")
mymap.delete("b1")
mymap.clear()
//console.log(mymap.size)

//weakmap
let carWeakMap=new WeakMap();
let key1={
    id:1
}
let car1={
    company:'maruti',
    model:'800'
}

carWeakMap.set(key1,car1);

let key2={
    id:2
}
let car2={
    company:'maruti',
    model:'800'
}

carWeakMap.set(key2,car2);
console.log(carWeakMap)