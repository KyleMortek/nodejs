console.log("starting app");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')
const notes = require('./notes.js');

const argsv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('yargs:',argsv);
// console.log(process.argv);



if(command === 'add'){
  let note = notes.addNote(argsv.title, argsv.body);
  if(note){
    console.log('Note create');
    notes.logNote(note);
  }else{
    console.log("note taken");
  }
}else if(command ==='list'){
  let allNotes = notes.getAll();
  allNotes.forEach(note => notes.logNote(note));
  console.log(allNotes);
}else if(command === 'read'){

  let note = notes.getNote(argsv.title);
  if(note){
    console.log("note found")
  }else{
    console.log("Note not found");
  }
}else if(command === 'remove'){
  let noteRemoved = notes.removeNote(argsv.title);
  console.log(noteRemoved);

  let message = noteRemoved ?'note was removed': "note not found";
  console.log(message);
}else{
  console.log('command not recognized');
}