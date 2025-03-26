//inner_module/03_path.js
//전역변수, 절대경로(어디에서나 찾아갈수 있는 경로)
console.log(__filename);
console.log(__dirname);

const path = require('path');

console.log(' 폴더 정보 : %s', path.dirname(__filename));
console.log(' 실제 파일명 : %s', path.basename(__filename));
console.log(' 확장자 : %s', path.extname(__filename));