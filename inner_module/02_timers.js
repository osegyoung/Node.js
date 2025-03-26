//inner_module/02_timers.js
const timeout = setTimeout(() => { // 1000 = 1초
  let today = new Date();
  console.log(today.toLocaleTimeString());
}, 2000);

let count = 0;
const interval = setInterval(() => {
  console.log('interval %d', count++);
  if (count == 2) {
    clearInterval(interval); // 이거 없으면 무한 루프에 빠짐.
  }
}, 1000);
console.log('End!');