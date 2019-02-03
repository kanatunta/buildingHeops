//Matrix aproach
//Prerun -> preset 'bricks'
//To run type in terminal
//npm start
//To test
//npm test

const pyramid = require("./modules/pyramid");
const showMatrix = require("./modules/showPyramid");

const bricks = 22;

const matrix = pyramid(bricks);

//console.table(pyramid);
console.log(showMatrix(matrix));
console.log(`Columns are ${matrix.columns()}`);
