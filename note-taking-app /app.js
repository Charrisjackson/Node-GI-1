
const chalk = require('chalk') //loading chalk npm mod to get   custom colorful console logs
const yargs = require('yargs') //yargs to build interactive cli tools
const notes = require('./notes')
 //linking notes.js file


//customize yargs version
yargs.version('1.1.0');

//remove note, list, read, add
//create add command
yargs.command({
    command:'add', //setting up command name
    describe:'add a new note',//describes what command does
    builder:{  //defines options(arguments) the command accepts
        title:{
            describe:'note title', //what it does/description
            demandOption : true, //require title input
            type:'string' //making sure a string value for title is always there + required
        },
        body:{
            describe:"this is the body for the add command. nexted inside add commands builder object",
            demandOption: true, //makes it required
            type:'string' 
        }
    },
    //function that executes when command is called
    handler: function (argv)//argv=parsed command line arguments
    {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'removes notes',
    builder:{
        title:{
            describe:"note title",
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv){
      //argv parameter and arguments gives access to arguments in our handler 
        notes.removeNotes(argv.title)

    }
})
//creating a command for listing notes
yargs.command({
    command:'list',
    describe:'listing the notes',
    handler: function(){
       notes.listNotes()
    }

})


//creating a command to read notes
yargs.command({
    command:'read',
    describe:'reading the notes',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv){
      notes.readNotes(argv.title)
    }
})
//looks for notes with certain title and updates the blody of that note based on users input
// cyan background on the chalk fetaure
//
yargs.command ({
    command:'edit',
    describe:'editing the notes',
    builder:{
        title:{
            describe:'note title',
            demandOption : true,
            type:'string'
        },
        body:{
            describe:"this is the body for the edit command.",
            demandOption: true, //makes it required
            type:'string'
        }
    }, 
    handler(argv){
        replaceBody(argv.title,argv.body)
    }
})


yargs.parse() //parses arguments with all configuration details provided
// console.log(yargs.argv) //version of process.argv that yargs has parsed //easier access.

// console.log(process.argv[2]) //argv is a array that contaons all arguments provide

