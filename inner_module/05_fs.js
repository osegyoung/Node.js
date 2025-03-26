//inner_module/05_fs.js
const fs = require('fs');
const data = 'Hello,World!';

fs.writeFile('./sample.txt', data, 'latin1', (err) => { // 작성하는 부분
  if (err) {
    throw err;
  }
  console.log('파일쓰기 완료!');
});

fs.readFile('./sample.txt', 'utf-8', (err, result) => {
  if (err) throw err;
  console.log(result);
});