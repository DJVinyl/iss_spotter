const { nextISSTimesForMyLocation } = require("./iss_promised");
const { printPassTimes } = require("./index");

nextISSTimesForMyLocation()
  .then((passTimes) => {
    //console.log(passTimes);
    printPassTimes(passTimes);
  });