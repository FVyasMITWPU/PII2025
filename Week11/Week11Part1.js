
let parentDiv = document.querySelector(".div-border"); 
// get  the <div> element with class name .div-border
console.log("The parent element is:\t"+parentDiv);
console.log(parentDiv); // print the element

let firstChildDiv=parentDiv.firstElementChild; // get the first child of the <div> element and store it
console.log("Its first child is:\t" +firstChildDiv); // print the first child
console.log(firstChildDiv);

// add firstChild and print the difference on the console

let DivPara2 = document.getElementById("Divpara2"); 
// get the <p> which has this id and textContent is "Div2"
console.log("The Paragraph element is:\t"+DivPara2);
console.log(DivPara2);
let parentofDivPara2=DivPara2.parentElement; 
//get the parent of the <p> element, which is a <div> element
console.log("Its parent element is:\t"+parentofDivPara2);
console.log(parentofDivPara2);


parentDiv.addEventListener("click", divClick); 
// when the parent <div> is clicked, the following function will be executed

function divClick(){
    firstChildDiv.style.background = "pink";
    parentofDivPara2.style.background = "blue";
}


const ulElements = document.querySelectorAll("ul"); // creates a Node List of all the <ul> elements in the DOM
console.log(ulElements); // In my HTML doc, there are 2 unordered lists.
//const myULElements=document.getElementsByTagName("ul"); //creates an HTMLCollection

ulElements.forEach(ulElement => { 
    // for.Each method can be used with Node Lists, which ulElements is
   const firstChild = ulElement.firstElementChild; 
   // for both of my UL lists, the BG-Color of the first child (first <li>) will be green
    firstChild.style.backgroundColor = "#00FF7F";
});

const firstList = document.querySelector("ul.guestlist"); 
// here we are targeting unordered lists that have the class name .guestlist
// only one such UL exists in the HTML document

console.log(firstList);

const lastChildUL = firstList.lastElementChild; 
// get the last child of the UL, which is, the the last <li> element
    lastChildUL.style.backgroundColor = "yellow";

const prevSibling = lastChildUL.previousElementSibling; 
// sibling means they share the same parent element. So, the <li> element right before the current one will be targeted

    prevSibling.style.backgroundColor = "orange";

const secondList = document.querySelector("ul.picniclist");

const picChildren = secondList.children; 
// creates an HTMLCollection of all the <li> elements in this particular unordered list

for(let ulItem of picChildren){ // enhanced for loop or "for of" loop because its an HTMLCollection
    ulItem.style.fontStyle="italic"; // ALL the <li> elements will have this inline styling applied
  }

/*Array.from(picChildren).forEach(child => {
    child.style.fontStyle="italic";
});*/


