// function callBack(a){
//     console.log('hello');
//     setTimeout(()=>{
//         a()
//     },2000)
    
// }

// callBack(function outer(){

// })

// let arr=[1,2,3,4,5,6]

// arr.reduce((a,b,c,d)=>{
//     return a+b
// })



////callback function



// function step1(fn){
//     setTimeout(()=>{
//         console.log('selectttt');
//         fn()
        
//     },5000)
// }

// function step2(fn){
//     setTimeout(()=>{
//         console.log('filtered');
//         fn()
        
//     },4000)
// }

// function step3(fn){
//     setTimeout(()=>{
//         console.log('captionss');
//         fn()
        
//     },3000)
// }

// function step4(){
//     setTimeout(()=>{
//         console.log('post');
        
//     },2000)
// }


////callback hell


// step1(function(){
//     step2(function(){
//         step3(function(){
//             step4()
//         })
//     })
// })



//////// Promise 



// let promise= new Promise((res,rej)=>{
//     let a=false
//     if(a){
//         res()
//     }
//     else{
//         rej()
//     }



//     // rej()
//     // setTimeout(()=>{
//     //     res()
//     // },4000)



// })
// console.log(promise,"hehehehe");


// let p= new Promise((res,rej)=>{
//     res()
// })
// p.then(()=>{
//     console.log('hello');
    
// }).catch(()=>{
//     console.log('hiii');
    
// })



