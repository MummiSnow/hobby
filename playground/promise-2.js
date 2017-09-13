const request = require('request');
const rp = require('request-promise');
const options = require('./options.js');


var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
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
        reject('Unable to connect to google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address.');
      } else if (body.status === 'OK') {

        resolve({
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
      }
    });
  });

};


/*geocodeAddress('14923').then((location) => {
  console.log(JSON.stringify(location, undefined, 1));
}).catch((err) => {
  console.log(err);
});
*/
console.log('Accessing service..');
//1. Check mongodb for OrderID
//2.1 If found, download label from pakkelabels
//2.2 if not, create new label from pakkelabels
  //2.2.1 download label from pakkelabels

const short_id = '';
rp(options.login)
.then((data)=> {
  console.log(data);
  return rp({
    method:'GET',
    uri: options.shiplistUrl,
    qs: {
      token: data.token,
      order_id:
    },
    json: true
  })
}).then((shipments) => {
    if (shipments.shipment_count > 1) {
      console.log(`Found multiple orders(${shipments.shipment_count}) assocatiated with order_id`);
    } else {
      console.log('Found label with associated order_id');
      //console.log(shipments);
    }
})
.catch(function(error) {
  console.log(error);
})
