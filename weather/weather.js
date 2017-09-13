const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/4e6006b322db478ffddf55edba35c00d/${lat},${lng}`,
    json: true
  }, (err, response, body) => {

    if (!err && response.statusCode === 200) {
      //no error, return result
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('unable to fetch weather.');
    }
  });

};


module.exports.getWeather = getWeather;
