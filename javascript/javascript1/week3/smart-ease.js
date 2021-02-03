//save a note
const notes=[];
function saveNote(content, id) {
    const resultNote={content:content, id:id};
    notes.push(resultNote);
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

//get a note
function getNote(id) {
    for (let i=0; i < notes.length; i++) {    
        if(notes[i].id===id){
          return notes[i];
        }
    }
    return `There is no object with id:${id}`;
}
const firstNote = getNote(2);
console.log(firstNote);


//log out notes
function logOutNotesFormatted() {
    for (let i=0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)
    }
}
logOutNotesFormatted();