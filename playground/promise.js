/*var somePromise = new Promise((resolve, reject)=> {
  //do any async stuff you want
  //ONLY resolve or reject ONCE, not both
  setTimeout(()=> {
    //success
    //resolve('Hey it worked');
    //failed
    reject('unable to fulfill promise');
  }, 2000);

});

somePromise.then((msg)=> {
  //only called if promise is fulfilled
  //which is the value from resolve
  console.log('Success: '+msg);
}, (err)=> {
  //only called if promise isnt fulfilled
  //which is the valie from reject
  console.log('Error: '+err);
});
*/

var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('arguments must be numbers');
      }
    },2000);
  });
};

/*asyncAdd('2',2).then((res)=> {
  console.log('Result: '+res);
}, (err)=> {
  console.log(err);
});
*/

//Promise Chaining
/*asyncAdd(2,2).then((res)=> {
    console.log('Result: '+res);
    //Chaining
    return asyncAdd(res,'33');
  }, (err)=> {
    console.log(err);
  }).then((res) => {
    console.log('Chain 2, Result: '+res);
  }, (err) => {
    console.log('Chain 2, Error: '+err);
  });
*/

//Promise chaining error handling better
asyncAdd(2,2).then((res)=> {
    console.log('Result: '+res);
    //Chaining
    return asyncAdd(res,33);
  }).then((res) => {
    console.log('Result: '+res);
  }).catch((err) => {
    console.log(err);
  });
