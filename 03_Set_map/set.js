//create set
let myarr=[1,2,3,4]
let myset=new Set(myarr)

//method in set
//myset.add("100") //insert string in set
myset.add({a:1,b:2}) //insert object in set
//myset.delete(2) // delete in set
//myset.clear()//clear all element
//console.log(myset.size)//size of set

myset.forEach(function(val){
    console.log(val)
})


// Weak set

let carWeakset=new WeakSet();

let car1={
    company:'maruti',
    model:'800'
};

carWeakset.add(car1);


let car2={
    company:'honda',
    model:'i10'
};

carWeakset.add(car2);

console.log(carWeakset);

