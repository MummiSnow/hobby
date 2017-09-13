var loginUrl = 'https://app.pakkelabels.dk/api/public/v2/users/login';
var csUrl = 'https://app.pakkelabels.dk/api/public/v2/shipment/shipments';
var shiplistUrl = 'https://app.pakkelabels.dk/api/public/v2/shipments/shipments';

var mongoUrl = 'mongodb://127.0.0.1:27017/admin';

const loginData = {
    api_user: '0b744d7b-b37f-4b3b-be12-6be2b29a75f3',
    api_key: 'dcdd6f40-7065-4ce4-8a81-50e5bba2afb4'
};

const login = {
  method: 'POST',
  uri: `${loginUrl}`,
  body: loginData,
  json: true
};

const createShipment = {
  method: 'POST',
  uri: `${csUrl}`,
  qs: {
    token: 'UeGdkBg4ec-w5IRKWk1S67BcY8L4CbQfPnZlbwdG',
    receiver_name: 'Mulle',
    receiver_address1: 'Vej 2',
    receiver_zipcode: '4000',
    receiver_city: 'Roskilde',
    receiver_country: 'DK',
    receiver_email: 'm@m.com',
    sender_name: 'The 2nd Edit ApS',
    sender_address1: 'Østbanegade 9',
    sender_zipcode: '2100',
    sender_city: 'København Ø',
    sender_country: 'DK',
    sender_email: 'info@the2ndedit.com',
    shipping_agent: 'gls',
    shipping_product_id: '103',
    services: '15',
    weight: '5000',
    order_id: '1234',
    receipt: true,
    label_format: '10x19',
    reference: '1234',
    test: true
  }
};

module.exports = {
  mongoUrl,
  loginUrl,
  shiplistUrl,
  login,
  createShipment
}
