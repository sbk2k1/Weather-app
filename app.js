const request = require('request');

const url= 'http://api.weatherstack.com/current?access_key=5ffe734b37519e030e693326e95e7747&query=37.8267,-122.4233&units=m'

request({ url: url, json: true }, (error, response) => {
 console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees celsius out. It feels like ${response.body.current.feelslike} celsius degrees out.`)
})

const geocodeURL= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2JrMmsxIiwiYSI6ImNrdWIydnNjazBtczgydm56M3NuemNncHYifQ.W3LzFWj8DtQf1Ka6Xn3zhw&limit=1'

request({ url: geocodeURL, json: true}, (error, response) => {
 const latitude= response.body.features[0].center[1]
 const longitude= response.body.features[0].center[0]
})