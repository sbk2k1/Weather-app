const request = require('request')

const forecast = (lat, long, callback) => {
 const url = 'http://api.weatherstack.com/current?access_key=5ffe734b37519e030e693326e95e7747&query='+lat+','+long
 request({ url: url, json: true }, (error, response) => {
  if (error) {
   callback('Unable to connect to weather services!', undefined)
  } else if (response.body.error) {
   callback('Unable to find location. Try another search.', undefined)
  } else {
   callback(undefined, {
    data: response.body.current.weather_descriptions[0] +'. It is currently ' + response.body.current.temperature + ' degrees out. Humidity is ' + response.body.current.humidity
   }
   )
  }
 })
}

module.exports = forecast