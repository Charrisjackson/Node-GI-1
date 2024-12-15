const request = require('postman-request');



const geocode = (adress, callback) => {
    //storing api url to variable and adding endcodeuricomponent so browser allows special characters that mean something to be placed into url
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q=' + encodeURIComponent(adress) + '&access_token=pk.eyJ1IjoiY2hhcnJpc2phY2tzb24iLCJhIjoiY200Z2hsb3Q1MWpmOTJqcHZpdW5lNTQ5MCJ9.DNnOHe0Wb1_igkcvCYdaSA&limit=1'
    
    request({url, json:true}, (error,{body})=>{
    if(error){ //low level error handling
        callback('unable to connect to location services!', undefined)
    }else if(body.features.length === 0){ //api error handling (if data not avaliable)
    callback('unable to find location. try another search', undefined)
    }else { //if sucessful, log object with latitude. longitude and location properties from json data inside api res
    callback(undefined,{
        latitude:body.features[0].geometry.coordinates[1],
        longitude:body.features[0].geometry.coordinates[0],
        location:body.features[0].properties.full_address
    })
    }
    })
    }

    
//exporting geocode to be used in other files
    module.exports = geocode