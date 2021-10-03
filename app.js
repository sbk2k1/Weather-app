const request = require('request');

const url= 'http://api.weatherstack.com/current?access_key=5ffe734b37519e030e693326e95e7747&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
 console.log(`It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
})