const fs = require('fs')
const chalk = require('chalk')


const getNotes = function (){
    return "your notes...."
}

// debugger //stop application right here and allows you look at things in dev tool


//creating function to add notes
const addNote = function (title,body){
const notes = loadNotes()
const duplicateNote = notes.find((note)=>note.title === title)
console.log(duplicateNote); 
if(!duplicateNote){
    notes.push({
        title:title,
        body: body
    })
    saveNotes(notes)

    console.log(chalk.green.inverse('new note added'))
    }else {
        console.log(chalk.red.inverse('note title taken'))
    }

}



const saveNotes = function(notes){
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = function(){
//if any lines run an error, code will stop ad run catch condition
    try{
        const dataBuffer = fs.readFileSync('notes.json')
const dataJSON = dataBuffer.toString()
return JSON.parse(dataJSON)

    } catch(e){
return []
    }

 
}
const removeNotes = function(title){
    const notes =loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })


    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)

    } else {
        console.log(chalk.red.inverse('No note found!'))
    }


}



const listNotes = ()=> {
const notes = loadNotes()
 console.log(chalk.inverse('your notes'))
 notes.forEach((note)=>{
     console.log(note.title)
 })
}

const readNotes = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>note.title === title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('note not found'))
    }

}
const editNotes = (title, changeBody) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (!note) {
    console.log(`Note with title "${title}" not found.`);
    return;
  }
  note.body = changeBody;
  saveNotes(notes);
  console.log(`Note updated!\nTitle: ${note.title}\nBody: ${note.body}`);
};

// if you want to export more than one function or variable, create an object with value pairs. the name of the function: what function/variable the data is being extracted from
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes:readNotes,
    editNotes: editNotes
}