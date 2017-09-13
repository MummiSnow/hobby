var getUser = (id, callback) => {
  var user = {
    id: id,
    name: "Snow"
  };
  setTimeout(()=> {
    callback(user);
  }, 3000);
};

getUser(1, (userObj)=> {
  console.log(userObj);
});

//https://maps.googleapis.com/maps/api/geocode/json?address=1301 lombarb street philadelphia
