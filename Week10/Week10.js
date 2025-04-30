// SYNTAX: element.addEventListener(event, listener);

const mainPic = document.getElementById("mainpic");
let mainPara=document.getElementById("mainpara");
//const mydivItems = document.querySelectorAll("div.mydiv");

mainPic.addEventListener("click", imageClick);
//when the element with id mainpic is clicked, the funtion imageClick will be executed

mainPic.addEventListener("mouseover", imageMouseover);
//when the element with id mainpic is mouseovered, the funtion imageMouseover will be executed

function imageClick(event){ // listener function
 // can also be written as imageClick(e);
    console.log("The image has been clicked");
    mainPic.classList.add("image_clicked"); // add the CSS class image_clicked for styling
    mainPic.style.opacity = "0.4"; //inline style, unchangable once the event has occured
    console.log(event); // can also be written as: console.log(e);
}

function imageMouseover(event){
 
    console.log("The image has been hovered over");
    //mainPic.classList.toggle("image_mouseovered"); // interaction is not as expected
    mainPic.classList.add("image_mouseovered");
    //mainPic.style.opacity = "0.7"; //inline
    mainPara.textContent="Hello, welcome to interactions!";
    event.target.style.opacity = "0.7"; // modify the self element
    console.log(event);
}

//mainPic.addEventListener("mouseout", imageMouseOut);
mainPic.addEventListener("mouseout", (event) =>{
    event.target.classList.remove("image_mouseovered");
    //here arrow function is used
})

document.body.addEventListener("keydown", e => {
    console.log("User pressed a key down");
    console.log(e); // try capitalizing letters and see the difference
    console.log("The user just pressed the\t" + e.key +  "\tkey");
// "\n" is for new line
    if(e.key=="g" && ctrlKey){
        console("Both the lowercase g key and the CTRL keys were pressed together");
    }
})

document.body.addEventListener("keyup", changeFunc);
//whenever a key is released, changeFunc() will be called

function changeFunc(event) {
    mydivItems[1].classList.add("red-bg");
    console.log(event);
}

// how to figure out how many times the mouse has been clicked
// and use that info for return
// look up the contains() method
