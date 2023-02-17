// https://leetcode.com/problems/zigzag-conversion/description/
const convert = (s, rows) => {
  let fullLinePosition = 1;
  let singleLinePosition = rows - 1;

  let convertedString = '';

  const stringObj = {};

  if (s.length <= rows) {
    return s;
  }

  if (rows === 1) {
    return s;
  }

  s.split('').forEach((el) => {
    console.log(singleLinePosition);

    if (fullLinePosition <= rows) {
      if (!stringObj[fullLinePosition]) {
        stringObj[fullLinePosition] = [];
      }
      stringObj[fullLinePosition].push(el);
      fullLinePosition++;
    } else if (singleLinePosition > 1) {
      stringObj[singleLinePosition].push(el);
      singleLinePosition--;

      // if (singleLinePosition === 1) {
      //   fullLinePosition = 1;
      //   singleLinePosition = rows - 1;
      // }
    }

    if (fullLinePosition === rows + 1 && singleLinePosition === 1) {
      fullLinePosition = 1;
      singleLinePosition = rows - 1;
    }
  });

  Object.keys(stringObj).forEach((el) => {
    stringObj[el].forEach(
      (el) => (convertedString = convertedString.concat(el))
    );
  });
  console.log(stringObj);
  console.log('hello2');
  return convertedString;
};

console.log(convert('PAYPALISHIRING', 3));
