//student manager
const class07Students = [];
function addStudentToClass(studentName) { 
    if(studentName==='Queen') {
        class07Students.push(studentName);
    }
  else if(studentName===''){
      console.log('Please enter a valid name');
  }
  
  else if(class07Students.length>5){
      console.log('Cannot add more students to class 07');
  }
  else if(toCheckStudentExist(studentName)){
      console.log('Student '+ studentName+' is already in the class');
  }  
  else{
      class07Students.push(studentName)      
  }
}

function toCheckStudentExist(studentName){
    for(let i=0;i<class07Students.length;i++){
        if(class07Students[i]===studentName)
        return true;
    }    
}

addStudentToClass('sofia');
addStudentToClass('Ann');
addStudentToClass('')
addStudentToClass('Annie');
addStudentToClass('Jack');
addStudentToClass('willam');
addStudentToClass('Jack');
addStudentToClass('kate');
addStudentToClass('Tomas');
addStudentToClass('Queen');
addStudentToClass('Bella');
console.log(class07Students);


function printNumberOfStudents() {
  console.log('Number of students in class is '+class07Students.length);
}
printNumberOfStudents();