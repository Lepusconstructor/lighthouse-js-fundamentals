let sayHello = function(){
  console.log("Hello, world");
}
sayHello();

sayHello = () =>{ // const functionName = () =>{} zero parameter
  var words = "Hello,hello";
  return words;
}


sayHello = function(name){
  console.log("Hello"+ name);
}
sayHello("J");

let say2para = (p1,p2)=>{// const functionName = (1stP, 2ndP) => {}
console.log("say "+ p1+p2);
}

let sayWow = words =>{ // const functionName = 1parameter => {}
  console.log("Wow, "+ words);
}