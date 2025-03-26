const express = require('express');
const app = express();
const {
  query
} = require('./mapper/emp-map.js');

app.listen(5000, () => {
  console.log('Server Start!');
  console.log('http://localhost:5000');
});
/*
content-type       | express
GET + QueryString  | request.query
POST + QuerySTring | request.body
JSON               | request.body
경로에 값을 전달   | request.params -> content-type 이 생성 안됨.
*/
// 미들웨어 등록(use) 필수! // 전체 라우터에 적용할때 사용하는 방식
// application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));
//application/json
app.use(express.json());

const empRouter = require('./router/emp_routers.js');
app.use('/', empRouter);

//Error handler
app.use(function (err, req, res, next) {
  // res.status(500).json({
  //   statusCode: res.statusCode,
  //   errMessage: err.errMessage
  //res.status(500).sendFile('error.html');
  });



app.get('/error', (req, res, next) => {
  next(new Error('Process Fail! Check Data!'));
});

//정적파일(css, html,js,image 등) 처리
//app.use(express.static('./image'));

app.use('/img', express.static('./image')); 