console.log('Starting Notes app');
// console.log(module);
// module.exports.age = 29;
// module.exports.addNote= ()=>{
//   console.log('add Note');
//   return 'newNote'
// }

const fs = require('fs');

/**
 *
 * @returns {Array}
 * 
 */
let fetchNotes = ()=>{
  try {
    let notesString = fs.readFileSync('notes-data.json');

    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
  
};
let saveNotes=(notes)=>{
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};
let addNote=(title,body)=>{
  console.log('addingnote', title,body);
  let notes = fetchNotes();
  let note ={
    title,
    body
  }
  
  let duplicateNotes = notes.filter((note)=>note.title === title);
  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return notes
  }else{
    return console.log("duplicate note")
  }
}

/**
 *
 * @param {Object} 
 * @returns {}
 */
let getAll=()=>{
  // console.log('getting all notes');
  let notes=fetchNotes();
  notes.forEach( (e)=>{
    console.log(e);
  });
  // return fetchNotes();
}
/**
 *
 *
 * @param {string} title
 * @return {Object}
 */
let getNote=(title)=>{
  // fetch notes
  let notes = fetchNotes();
  // find note
  let findNote = notes.find((note)=>{
    return note.title ===title;
  });
  console.log('getting note', title, findNote)
  return findNote;
}
/**
 *
 *
 * @param {string} title
 * @returns {Boolean}
 */
let removeNote=(title)=>{
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note)=>note.title !== title);
  saveNotes(filteredNotes);
  console.log(removeNote);
  // console.log("removing note",title);
  return notes.length !==  filteredNotes.length
}



module.exports ={
  addNote,
  getAll,
  getNote,
  removeNote
}