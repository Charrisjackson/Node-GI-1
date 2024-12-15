//importing request npm module
const request = require('postman-request');


//defining forecast function & params
const forecast = (latitude,longitude,callback) => {
    //defining url variable, constructed to call weatherstack api with access key and queries
    const url = 'https://api.weatherstack.com/current?access_key=42dbd0af240c24715cebe41186164b6f&query='+ latitude + ',' + longitude + '&units=f'

//sends http get request to url, parses json response to js object
//error parm for low level erros 
//{body} param = parsed response body destrcutured
    request({url, json:true}, (error,{body})=>{
        //error handling
        if(error){
            callback('unable to connect to weather service!', undefined)
            //checking for api errors
        }else if (body.error){
            callback('unable to find location', undefined)
        }else {
            //grabbing succesful response info and concatenting into string
            callback(undefined, body.current.weather_descriptions[0] + `. It is currently `+ body.current.temperature+ ` degrees out. It feels like ` + body.current.feelslike +  ` degrees out.` )
        }
    })
}
//export forecast function to be used in other files
module.exports = forecast