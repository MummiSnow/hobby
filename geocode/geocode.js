const request = require('request');


var geocodeAddress = (address, callback) => {
  var encodedAddr = encodeURIComponent(address);
  request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`,
  json: true
  }, (error, response, body) => {
  /*pretty print object
  3rd argument formats the json
  console.log(JSON.stringify(body, undefined, 1));
  */

  if (error) {
    callback('Unable to connect to google servers.');
  } else if (body.status === 'ZERO_RESULTS') {
    callback('Unable to find that address.');
  } else if (body.status === 'OK') {
    //set error to undefined
    callback(undefined, {
      //What is returned
      address: body.results[0].formatted_address,
      lat: body.results[0].geometry.location.lat,
      lng: body.results[0].geometry.location.lng
    });
  }
  });
};

//for url from user input

decodeURIComponent('Mummi%20Snow');


module.exports = {
  geocodeAddress
}
