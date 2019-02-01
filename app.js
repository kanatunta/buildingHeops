//Matrix aproach
//To run type in terminal
//npm start

const testValue =56; // set test value of n, number of bricks

let bricks = testValue;

const pyramid = [];
pyramid.push([]);
pyramid[0] = [];
pyramid[0][0] = "0";

let row = 0;
let col = 0;

//loop to n>1 , because we set pyramid[0][0]='0' alredy and use 1 brick
while (bricks > 1) {
  if (row !== 0) {
    row--;
    col++;
  } else {
    row = col + 1;
    col = 0;
  }
  //console.log(row,col) //uncommet to trace index movement ...

  //add row or col id not exist
  if (!pyramid[row]) {
    pyramid.push([]);
  }
  if (!pyramid[row][col]) {
    pyramid[row].push([]);
  }

  //set cell
  pyramid[row][col] = "0";

  //decrease number of bricks
  bricks--;
}

//console.table(pyramid);
console.log(beautifyResults(pyramid));
console.log(`Columns are ${pyramid[0].length}`);

//human readable format
function beautifyResults(arr) {
  let result = "";

  for (const row of arr) {
    let temp = "";
    for (const cell of row) {
      temp += cell;
    }
    result = temp + "\n" + result;
  }
  return result;
}
