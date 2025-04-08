
window.alert("Hi Welcome to my website"); // a predefined function being CALLED

//window.alert(5+3); // numbers will be added and the result is printed
//window.alert("5+3"); // the string "5+3" will be printed just as you have typed it (string literal)

let z,p,s; // declaring variables without assigning value
let x=5, y=3; // declaring and assigning value to the variables
let m=1, n=2;
let r=1000, t=3000;

function addDigits(a,b) { // Custom Fucntion DEFINITION, a and b are PARAMETERS
 let c=a+b;
 return c; // this makes the OUTPUT of this function to be c, the calculated value
}

z=addDigits(x,y); // Custom Function INVOCATION/CALLING, z and y are ARGUMENTS
window.alert(z);

p=addDigits(m,n);
window.alert(p);

s=addDigits(r,t);
window.alert(s);
