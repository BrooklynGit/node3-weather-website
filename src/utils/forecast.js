const request = require('request')

const forcast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/13375759673550f9359a75506979a3f3/' + latitude + ',' + longitude 

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Low Level Error', undefined)
        } else if (body.error) {
            callback('Coordinate error', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.  There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forcast