
document.getElementById("weather").textContent="It's a sunny day :)";
//document.getElementById("weather").innerHTML="It's a sunny day!!";

let username;

document.getElementById("mySubmit").onclick=function(event) {
    event.preventDefault();
    username=document.getElementById("LOL").value;
    console.log(username);
   
    document.getElementById("printName").textContent=username;
   
}

let x=-20;
let y=-100;

if(x>=0 && y>=0){
  console.log("Both x and y are positive (+,+)");
}
else if(x>=0 && y<0) {
  console.log("Only x is positive (+,-)");
}

else if(x<0 && y>=0) {
  console.log("Only y is positive (-,+)");
}
else {
  console.log("Both the numbers are negative (-,-)");
}