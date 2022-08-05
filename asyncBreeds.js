const fs = require('fs')

const breedDetailsFromFile = function(breed, callback) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf-8', (error, data) => {
    // console.log("In readFile's Callback: it has the data.");

    if (!error) {
    callback(data);
    } else {
      callback(undefined);
    }
  });
}


const print = (breed) => {
  console.log('Return Value: ', breed);
  // console.log(typeof breed);
}

// breedDetailsFromFile('Bombay', print)

module.exports = breedDetailsFromFile;

/* 
const expectedBombay = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";

const expect = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."

console.log(expect == expectedBombay); */