// const score=950
// if(score<250){
//     console.log('Less than 250');
// }
// else if(score<500){
//     console.log('Less than 500');
// }
// else if(score<750){
//     console.log('Less than 750');
// } else {
//     console.log('near 1000');
// }
const userlogIn=true
const debitcard=true
const LoginFromGoogle=true
const Loginfromemail=false

if(userlogIn&&debitcard&&LoginFromGoogle){
console.log("All And Function True")
}
else if(userlogIn&&debitcard&&Loginfromemail){
    console.log("due to true and false use in and so not run")
}
else if(userlogIn &&debitcard&&Loginfromemail||LoginFromGoogle){
    console.log("All And Or Function Use Successfully")

}else if(userlogIn|| Loginfromemail){
    console.log("Or Function Use")
}