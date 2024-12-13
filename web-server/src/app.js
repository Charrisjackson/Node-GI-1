const path = require('path') //built in no need to install
const express = require('express')
const app = express()
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require("./utils/forecast")
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
    if(!req.query.address){
return res.send({
    error:'Must provide an address'
})
    }
    geocode(req.query.address,(error,{latitude,  longitude, location}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(latitude,longitude, (error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({forecast:forecastData,
                location,
                address:req.query.address
            })
        })
    })

    })

app.get('/products',(req,res)=>{
    if(!req.query.search){
 return res.send({
    error:'you must provide a search term'
})
    }
    console.log(req.query.search)
res.send({
    forecast:'It is snowing'

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

 