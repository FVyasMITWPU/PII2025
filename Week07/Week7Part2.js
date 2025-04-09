console.log("For loop 1 - Print numbers 0 to 10");

for(let i=0; i<=10; i++){
    console.log(i);
}

console.log("For loop 2 - Decrement from 12 to 0 with step size 3");

for(let i=12; i>-1; i-=3) { // i=i-3

    console.log(i);
    
    }

let flowers=["rose", "lily", "lotus", "jasmine", 120, true, 1000];

console.log("These are the elements in my array named flowers - ");
console.log(flowers);
console.log(flowers[2]);

let numofFlowers=flowers.length;
console.log("The number of elements in my flowers array are:");
console.log(numofFlowers);

for(let j=0; j<numofFlowers; j++){ // j is BLOCK SCOPE

  if(typeof flowers[j] =="string"){
    console.log(flowers[j]); 
  }
}

//let j=10;


