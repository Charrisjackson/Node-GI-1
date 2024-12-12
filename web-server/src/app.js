const path = require('path') //built in no need to install
const express = require('express')
const app = express()
const hbs = require('hbs')

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs') 
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))



app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather ',
        name:' carmani h. jackson'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'about me',
name: ' carmani h. jackson'  })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help page',
        message:'Do you need help?',
        name:' carmani h. jackson'
    })
})


app.get('/weather',(req,res)=>{
    res.send({forecast:"50 degrees",
       location:'philidelphia'
    })
    })

    app.get('/help/*',(req,res)=>{
        res.render('error',{
            title:'404 help',
            name:'Carmani H jackson',
            errorMessage:'Help article not found'
        })
    })
    
    app.get('*', (req,res)=>{
        res.render('error',{
            title:"404",
            name:"Carmani H Jackson",
            errorMessage:"Page not found"
        })
    })

    app.listen(3000,()=>{
       
        console.log('server is up in port 3000')
    }) 

 