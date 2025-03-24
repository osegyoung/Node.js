//js with server/07_parmeter.js
// 1) Default prarameter
function say(message) {
  let msg = (message == undefined ? '매개변수가 넘어오지 않습니다.' : message);
  console.log(msg);
}
say('Hello!!');
say();

function msg(message =
  '매개변수가 넘어오지 않습니다.') {
  console.log(message);
}
msg('Hello');
msg();

// 2) Rest parameter
const plus = function (x, y, ...rests) {
  let result = x + y;
  for (let rest of rests) {
    result += rest;
  }
  return result;
}
console.log(plus(1, 2));
console.log(plus(1, 2, 3, 4, 5));
console.log(plus(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));