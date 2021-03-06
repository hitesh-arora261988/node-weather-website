const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=1b022ba271ee6d36b3bcc49aac6f1649&query=${latitude},${longitude}&units=f`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `Current Temprature is: ${body.current.temperature} but it feels like:  ${body.current.feelslike}`, body.current.weather_icons[0])
        }
    })
}

module.exports = forecast