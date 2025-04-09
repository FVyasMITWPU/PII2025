
console.log("For loop 1 - Print numbers 0 to 10");

for(let i=0; i<=10; i++){ // i starts at value 0, increments by 1 each iteration until it reaches 11
    console.log(i);
}

console.log("For loop 2 - Decrement from 12 to 0 with step size 3");

for(let i=12; i>-1; i-=3) { // i=i-3

    console.log(i);
    
    }

let flowers=["rose", "lily", "lotus", "jasmine", 120, true, 1000]; // creating an array with []

console.log("These are the elements in my array named flowers - ");
console.log(flowers); // prints ALL the elements in an array
console.log(flowers[2]); // prints the element which has the index 2, i.e, the 3rd element

let numofFlowers=flowers.length; // .length is a property that returns the number of elements in the array
console.log("The number of elements in my flowers array are:");
console.log(numofFlowers);

for(let j=0; j<numofFlowers; j++){ // iterating through the array using a for loop

  if(typeof flowers[j] =="string"){ // checking if the element is of string data type before printing it
    console.log(flowers[j]); 
  }
}



