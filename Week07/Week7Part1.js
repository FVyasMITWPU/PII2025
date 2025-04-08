
document.getElementById("weather").textContent="It's a sunny day :)"; 
/* Get the element from the DOM which has the Id="weather". (<H2> element ih HTML)
Then, change the text content of that HTML element to be "It's a sunny day :)" */

//document.getElementById("weather").innerHTML="It's a sunny day!!";

let username; // declaring a varible which will be used to store user input

document.getElementById("mySubmit").onclick=function(event) { 
  /*The element from the DOM with the given Id (Submit button) will execute this function
    When the Submit button is click, an event will occur. 
    Inside the {} brackets we write what should happen in the event of submit button being clicked.
  */
    event.preventDefault(); // To prevent the values going back to default because Live Server keeps refreshing page
    username=document.getElementById("LOL").value; // take the value of the user input and assign in to the variable username
    console.log(username);
   
    document.getElementById("printName").textContent=username; 
    // change the text content of the <H3> element to the value of the username varible
   
}

let x=-20;
let y=-100;

if(x>=0 && y>=0){ // only if BOTH the conditions are true
  console.log("Both x and y are positive (+,+)");
}
else if(x>=0 && y<0) { // the first conditon wasn't satisfied, create another alternative conditon
  console.log("Only x is positive (+,-)");
}

else if(x<0 && y>=0) { // the second conditon wasn't satisfied, create another alternative conditon
  console.log("Only y is positive (-,+)");
}
else { // if none of the above if/else if statements are true
  console.log("Both the numbers are negative (-,-)");
}