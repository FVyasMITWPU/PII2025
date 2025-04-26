
console.dir(document); // DOCUMENT OBJECT MODEL

let x=0;
console.log("The value of x is:");
console.log(x);

console.log(`The value of x is ${x} so that is the value`); // string literal syntax
console.log("Some string \t" + x + "\t More string"); // concatenation of string and varibles in one line

let person1_data = { // OBJECT LITERAL SYNTAX
    name: "Pranav", 
    age: 23, // separate the different properties and methods using commas
    job: "Engineer",
  
    mycoding: function(){console.log(`I am currently working my ${this.job} job`)}, //method 
    // asssociated with the object person1_data
    //mycoding: function(){console.log(`I am currently working my ${person1_data.job} job`)}, // what's the problem here?
    //mycoding: function(){console.log("I am currently working my job")},
  };


  
person1_data.mycoding(); // METHOD INVOCATION

//console.log(person1_data);

person1_data.hasLicense=true; // adding property to the person1_data object

console.log("The object person1_data is:");
console.log(person1_data);

console.log("This person's current age is =\t" + person1_data.age );

person1_data.age=24; // modifying the age property of person1_data object
console.log(`Person1's updated age is = ${person1_data.age} `);

delete person1_data.name; // deleting the name property of person1_date
if(person1_data.hasOwnProperty("name")){ 
  /* this pre-defined method checks whether the current object has a certain property.
     It takes the property name to be checked as the parameter. It returns boolean value as the out
     1 or TRUE = yes, the property exists for that object. 0 or FALSE = no, the property doesn't exist for that object
  */
  console.log("Yes, we have person1's name on our database");
}

else{ 
  console.log("No, we do not have person1's name on our database");
}

console.log("CHECKPOINT");
  
let person2_data = new Object(); // OBJECT CONSTRUCTOR METHOD
person2_data.name="Patricia";
person2_data.job="Assistant";
person2_data.age=22;

console.log(person2_data);

let a=3,b=5; // global variables
let e=2,f=6;

// REGULAR FUNCTION SYNTAX

function addNumbers(m,n){  // FUNCTION DEFINITON // parameter
 let c=m+n; 
 return c;
}

console.log(addNumbers(a,b)); // arguments

 // ARROW FUNCTIONS
const addNums = (a, b) => a + b;



















/*let person1_data = { // OBJECT LITERAL SYNTAX
    name: "Pranav",
    age: 23,
    job: "Engineer",
  
    //mycoding: function(){console.log(`I am currently working my ${this.job} job`)}, //method 
    // asssociated with the object person1_data

    mycoding: function(){console.log(`I am currently working my ${job} job`)}, // what's the problem here?
    
  };*/
  
  
/*
  person1_data.mycoding(); // METHOD INVOCATION
  
  let person2_data = new Object(); // OBJECT CONSTRUCTOR METHOD
  person2_data.name="Patricia";
  person2_data.job="Assistant";
  person2_data.age=22;
  
  console.log(person2_data);
  
  delete person1_data.name;
  
  console.log(person1_data);
  
  if(person1_data.hasOwnProperty("name")){
    console.log("Yes, we have this person's name on our database");
  }
  
  else{ 
    console.log("No, we do not have this person's name on our database");
  }*/
    