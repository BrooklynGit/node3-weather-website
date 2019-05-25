const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/13375759673550f9359a75506979a3f3/' + latitude + ',' + longitude 

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Low Level Error', undefined)
        } else if (body.error) {
            callback('Coordinate error', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.  The high today is ' + body.daily.data[0].temperatureHigh + 'with a low of ' + body.daily.data[0].temperatureLow + '.  There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast