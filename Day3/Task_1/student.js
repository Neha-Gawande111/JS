// create an object representing student  with properties for their name,age,and exam score.
// use conditional statements to check if the students score is above a certsin threshold and display msg

// creating an object student by using Literals
let student = {
    name : "Neha",
    age : 25,
    score : 95  
}
console.log(student.name);
console.log(student.age);
console.log(student.score);

if (student.score >=90) {
    console.log("You are passed in First class division");
} 
else if(student.score >=75){
    console.log("You are passed in distinction");   
}
else if(student.score >=60){
    console.log("You are passed in second class division");   
}
else if(student.score >=35){
    console.log("You are passed ");   
}
else{
    console.log("You are Fail ");
};
