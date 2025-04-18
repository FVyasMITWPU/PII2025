
console.log(document); // this prints the entire HTML Document Object (all the elements in my HTML document)
console.dir(document); // this does the same as above but also prints the attributes used for the HTML tags

let allparas = document.getElementsByTagName("p"); // Referring to ALL the paragraph <p> elements in my HTML document
console.log("This is my HTML Collection of all <p> tags - ");
console.log(allparas); //an HTMLCollection called allparas is created and stores all <p> elements

console.log("for this HTMLCollection, the item at index 0 is");
console.log(allparas.item(0)); 
/* using the item() method to access one particular tag in this HTML collection
This HTML collection is made up of all the <p> elements in my HTML document 
Out of that, the first item, at index 0 is being returned by the item() method
*/

function changingParaStyles(){ // this same function was referred in the corresponding <button> tag, as onclick = "functionname()"
 //allparas[0].textContent="Summer Lemonade Party!!";

  //allparas.style.fontWeight = "700"; // this doesn't work, so how to access all elements together?
  allparas[0].style.fontSize="24px"; // acess style property of allparas[] object, sub-attribyte is fontSize
  allparas[3].style.color= "rgb(255,255,255)";
 //allparas[0].style.fontSize="1.5em";

  for(let i=0;i<allparas.length;i++){ // i=i+1
    // you can modify all the elements in an HTMLCollection using a for loop
    allparas[i].style.fontWeight = "700";
 }

}

let picList = document.getElementsByClassName("picniclist");

/* Referring to ALL the elements in my HTML document which have the class name "picniclist"
 Whether they are <div>, <p>, <img> or any other element
*/
console.log("This is my HTML Collection of all tags that have the class name picniclist - ");
console.log(picList);
// in my HTML document, an H3 element and 6 LI elements have the class name picniclist

function changingListStyles() {

    picList[0].style.color="blue"; // this is the H3 element
    picList[1].style.color= "yellow";
    picList[4].style.backgroundColor="#7CFC00";

    //picList.style.fontWeight = "700"; // this doesn't work, so how to access all elements together?

    for(let ulItem of picList){ // enhanced for loop or "for of" loop
      ulItem.style.fontStyle="italic"; // ALL the <p> elements will have this inline styling applied
    }

}

      /*Array.from(picList).forEach(ulItem =>{ // typecasting the HTMLCollection picList into an array
        //Because HTMLCollection don't have the forEach method like arrays and NodeLists
        ulItem.style.fontWeight = "700";
      }
    ) */

console.log("Here are the elements found using the querySelector() method");

const infoparas = document.querySelector(".infopara"); // will return the first element with this class name
console.log(infoparas);

const button3 = document.querySelector("#divButton");
// const button3 = document.getElementById("divButton"); // achieves the same thing
console.log(button3);

const firstButton= document.querySelector("button"); // will return the first button element in the document
console.log(firstButton);

const ulItem1 = document.querySelector(".picniclist.red"); // This will return the first element in the DOM which has BOTH the classes picniclist AND red
console.log("The first element in my DOM which has BOTH the class names .picniclist AND .red is - ");
console.log(ulItem1);

const mydivItems = document.querySelectorAll("div.mydiv"); // returns all the div elements that have the class name mydiv
//querySelectorAll methods creates a NodeList. This is also like an array
console.log("The Node List created by the querySelectorAll() method is - ");
console.log(mydivItems);

function changingDivStyles(){

  button3.style.color = "purple";
  button3.style.fontWeight = "700";

  firstButton.style.fontSize="2em";

  mydivItems[1].style.backgroundColor = "white";

  mydivItems.forEach(divItem => { 
    // for Each loop can be directly used with a NodeList. This NodeList was returned by the querySelectorAll() method
    divItem.style.color = "blue";
  })
}







