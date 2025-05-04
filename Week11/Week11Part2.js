
const newPara = document.createElement("p"); // a new paragraph empty element <p> has been created. 

newPara.textContent = "Here is the address for the picnic"; // add text inside the <p> tag by access its textContent property
newPara.id="newPara"; // assign the new <p> an id using its .id property
newPara.className = "paragraph"; // assign the new <p> a class using its .class property

// the new <p> can be styled using the .style object or adding CSS classes

//document.body.append(newPara); 
/* the <body> will be the parent of the newPara. 
 newPara will be inserted (appended) as the LAST element child inside <body>*/
 
//document.body.prepend(newPara);
/* the <body> will be the parent of the newPara. 
 newPara will be inserted (prepended) as the FIRST element child inside <body>*/

 //divPara2 = document.getElementById("Divpara2");

//document.getElementById("Divpara2").append(newPara);
// for the parent <div> element gotten through its id, the newPara will be inserted as its child 
// document.getElementById("Divpara2").prepend(newPara);

//const bigBox = document.getElementById("bigBox"); //we want to insert the new <p> exactly before this element in the DOM
 //document.body.insertBefore(newPara, bigBox); 
 // 1st parameter is the new element to be inserted, the 2nd is the element before which it should be inserted

errorButton = document.getElementById("errorButton");
myLink = document.getElementById("mylink"); // an <a> tag

myGuestList=document.querySelectorAll("li.guestlist");
console.log(myGuestList);

errorButton.addEventListener("click", () =>{ // arrow function
    myLink.removeAttribute('href'); // delete the original href inside the <a> tag
    myLink.setAttribute("href", "https://www.beanilla.com/blog/refreshing-summer-drink-recipes");
    // add the href attribute to the <a> tag, and set its value as the link
    myGuestList[0].remove(); // deletes the element from the DOM
})


