let RNG = () => {
  let val1 = Math.floor(Math.random()*6)+1;
  let val2 = Math.floor(Math.random()*6)+1;
  while(val1 === val2) {
    val2 = Math.floor(Math.random()*6)+1;
  }
  let str = '```';
  return `${str}First Cap: ${val1}\nSecond Cap: ${val2}${str}`;
};


module.exports = {
  RNG
};
