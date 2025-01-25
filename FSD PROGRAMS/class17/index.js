//Scope
//global

// var a=5
// let a=50
// console.log(window.a);

// {

// }
//  if ('false'){
//     console.log('heeelo');
    
//  }
//  else{
//     console.log('hiii');
    //  }

//  {

//  }

//  if('')console.log('heollo');
//  else
//  console.log('hiiii');
 








let obj={
    firstName:"angel",
    lastName:"priya",
    fullName:function(city,age){
        console.log(this.firstName+ " "+ this.lastName +city +age);   
    }
}

let user={
    firstName:"ritik",
    lastName:"rosan"
}
obj.fullName.apply(user,['bhopal',93])