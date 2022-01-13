module.exports = function check(str, bracketsConfig) {
  let openBrackets = '';
  let closeBrackets = {};
  if (bracketsConfig.length === 1 && bracketsConfig[0][0] === bracketsConfig[0][1]) {
    return true;
  }
  for (i = 0; i < bracketsConfig.length; i++) {
    openBrackets = openBrackets + bracketsConfig[i][0];
    closeBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  let data = [];
  let checkResult = true;
  for (i = 0; i < str.length; i++) {
    let lastSymbol = data[data.length - 1];
    if (openBrackets.includes(str[i]) && data.length === 0) {
      data.push(str[i]);
    } else if (openBrackets.includes(str[i]) && closeBrackets[str[i]] !== lastSymbol) {
      data.push(str[i]);
    } else if (closeBrackets[str[i]] === lastSymbol) {
      data.pop();
    } else if (data.length === 0 && !openBrackets.includes(str[i])) {
      checkResult = false;
      break;
    }
  }
  return data.length === 0 && checkResult ? true : false;
};
