function add(a,b){
    return a+b;
}



const sub =  function(a,b){
     return a-b;
}


const mul = (a,b)=>{
    return a*b;
}

module.exports = {add , sub , mul};

// function callback (){
//     console.log("its callback");
// }

// const add = function(a,b){
//         var res  = a+b;
//         console.log("result", res);
//         callback();
//     }

//     add(3,5);