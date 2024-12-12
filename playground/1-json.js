

const fs = require('fs')

// const book ={
//     title:'ego is the enemy',
//     author:'ryan holiday'
// }

// const bookJSON = JSON.stringify(book) //take in object and give json string back
// console.log(bookJSON) //will log json version of js object into the console

// const parsedData = JSON.parse(bookJSON) //returns json strings as js object
// console.log(parsedData.author)

// fs.writeFileSync('1-jason.json', bookJSON)
//allows us to read files 
// const dataBuffer = fs.readFileSync('1-jason.json') //retrns bits/bytes
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)



//cchallenge :work with json and the file system
// load and parse json data
// change name and age property using personal info
// stringify the changed object and override og data
// test

const dataBuffer = fs.readFileSync('1-jason.json') //load json data
const dataJSON = dataBuffer.toString() //convert it to a string
const data = JSON.parse(dataJSON)
data.name = 'gunther'
data.age = 54

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-jason.json',userJSON) //what file we want to sync changes to, what changes we want to sync (variable)


