//APIKEY: 4e6006b322db478ffddf55edba35c00d
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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

//chaining callbacks
geocode.geocodeAddress(argv.address, (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log(results.address);
    weather.getWeather(results.lat, results.lng, (error, weatherResults) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`It's Currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });

  }
});
