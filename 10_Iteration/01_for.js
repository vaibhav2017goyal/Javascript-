//for loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (i==5) {
//         console.log(`${i} is best number`)
//     }
//     console.log(element)
// }
// for (let i = 1; i <=10; i++) {
    //     console.log(` outer loop ${i}`)
    //     for (let j = 1; j <=10; j++) {
        //         console.log(i+"*"+j+"="+(i*j))
        //     }
        
        // }
// let Myarr=["Flash","Batman","Superman"]
// console.log(Myarr.length);
// for (let i = 0; i < Myarr.length; i++) {
//     const element = Myarr[i];
//     console.log(element);
    
// }
    // for (let i = 0; i < 10; i++) {                  // 0
    //     const element = i;                          // 1
    //     if (i==5) {                                 // 2
    //         console.log(`${i} is best number`)      // 3
    //         break;                                  // 4
    //     }                                           // 5 is best number
    //     console.log(element)
    // }
    for (let i = 0; i < 10; i++) {                  // 0
        const element = i;                          // 1
        if (i==5) {                                 // 2
            console.log(`${i} is best number`)      // 3
            continue                                  // 4
        }                                           // 5 is best number
        console.log(element)                        // 6
    }                                               // ...
                                                    // 9