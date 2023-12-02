//Immediately Invoked Function Expressions (IIFE)

(function one(){        //Named IIFE    
    console.log("Hello World ");
})();

((name)=>{              // arrowed or Unnamed IIFE
    console.log(`Hello,${name}`);
})("vaibhav");