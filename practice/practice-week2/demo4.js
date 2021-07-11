let students = [
    { name : "jin", age : 34, classes : ["ITC1", "WEB1", "CS1"] },
    { name : "kim", age : 24, classes : ["ITC2", "WEB2", "CS2"] },
    { name : "son", age : 44, classes : ["ITC3", "WEB3", "CS3"] }
]; 

const numStudents = () => {
    return students.length;
}

console.log(numStudents())

const findStudent = (name) => {
    return students.find((student) => {
        return student.name === name;
    });
}

export { numStudents, findStudent }