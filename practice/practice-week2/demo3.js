 student = {
     name: "Jim",
     age: 24,
     classes: ["WEB", "Math", "IT"],
     print: () => {console.log('printing'); } 
 }

 console.log(student.print)

 let students = [
     { name : "jin", age : 34, classes : ["ITC1", "WEB1", "CS1"] },
     { name : "kim", age : 24, classes : ["ITC2", "WEB2", "CS2"] },
     { name : "son", age : 44, classes : ["ITC3", "WEB3", "CS3"] }
 ];

 console.log(students.length)
 for (i = 0; i < students; i++) {
     console.log(student[i])
 }
console.log('better, faster, stronger')
 students.forEach((student => {
     console.log(students)
 }));

 export { numStudents, findStudent }