
// function fun1(){
//     console.log('hello');
    
// }

// let btn= document.querySelector('#one')


// btn.onclick=function(){
//     console.log('byeeee');
    
// }

// let btn1= document.querySelector('#two')
// let body= document.querySelector('body')
// let h1= document.querySelector('h1')

// btn1.addEventListener('click',()=>{
//    body.style.backgroundColor='green'
//    h1.innerText='hiiii'
//     // console.log('jaooooo');
    
// })

// let inp= document.querySelector('input')
// let h2= document.querySelector('h2')

// inp.addEventListener('input',(e)=>{
//     console.log(e.target.value,"kyayayayay");
//     h2.innerText=e.target.value
    
// })



// let inp= document.querySelector('input')

// let btn= document.querySelector('button')
// let h1= document.querySelector('h1')

//  inp.addEventListener('input',(a)=>{
//     console.log(a.target.value,'wehfg');
    
  
//  })


//     btn.addEventListener('click',(e)=>{
//         console.log(e.target.value,'kasgf');
        
//         h1.innerText=e.target.value

//  })


let btn= document.querySelector('button')
let body= document.querySelector('body')

let isbool=false
btn.addEventListener('click',()=>{

if(isbool){
    body.style.backgroundColor='red'
    isbool=false
}
else(isbool){
    body.style.backgroundColor='blue'
    isbool=true


}


})