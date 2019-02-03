const beautifyResults = matrix => {
  let result = "";

  for (const row of matrix) {
    let temp = "";
    for (const cell of row) {
      temp += cell;
    }
    result = temp + "\n" + result;
  }
  return result;
};

module.exports = beautifyResults;
