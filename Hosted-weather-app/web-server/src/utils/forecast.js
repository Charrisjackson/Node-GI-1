const request = require('postman-request');



const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=42dbd0af240c24715cebe41186164b6f&query='+ latitude + ',' + longitude + '&units=f'

    request({url, json:true}, (error,{body})=>{
        if(error){
            callback('unable to connect to weather service!', undefined)
        }else if (body.error){
            callback('unable to find location', undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0] + `. It is currently `+ body.current.temperature+ ` degrees out. It feels like ` + body.current.feelslike +  ` degrees out.` )
        }
    })
}
module.exports = forecast