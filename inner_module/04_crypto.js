//inner_module/04_crypto
const crypto = require('crypto');
const data = 'pw1234';
let secret = 'dddddddd';

let encData = crypto.createHmac('sha512',secret) // 비밀번호를 암호화 시키는 , 알고리즘
  .update(data)
  .digest('base64'); // 알고리즘을 적용하고 나서 출력하는 것!

  console.log(encData);