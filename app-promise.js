//APIKEY: 4e6006b322db478ffddf55edba35c00d
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h') //alias for help
  .argv;


var encodedAddr = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`;

axios.get(geocodeUrl).then((response) => {
  //throw error if ZERO_RESULTS
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/4e6006b322db478ffddf55edba35c00d/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);

  return axios.get(weatherUrl);

}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`Current temperature: ${temperature}`);
  console.log(`Feels like: ${apparentTemperature}`);
}).catch((err) => {
  if (err.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers');
  } else {
    console.log(err.message);
  }
});
