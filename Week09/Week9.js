
let person1_data = { // OBJECT LITERAL SYNTAX
    name: "Pranav",
    age: 23,
    job: "Engineer",
  
    mycoding: function(){console.log("I am currently working")}, //method 
    // asssociated with the object person1_data
  };
  
  console.log("The object person_data is:");
  console.log(person1_data);
  
  console.log("This person's current age is:");
  console.log(person1_data.age);
  
  person1_data.age=24; 
  
  console.log("This person's current age is:");
  console.log(person1_data.age);
  
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
  }
    