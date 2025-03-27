//app.js
require('dotenv').config({path : './mapper/dbConfig.env'}) // dbConfig.env를 들고 오는 코드 
console.log(process.env); // 여기에 값이 저장된다.
const express = require('express');
const app = express();
const custRouter = require('./router/customer_router.js')

//미들웨어
// application/x-www-form-urlencoded
app.use(express.urlencoded({extended : false}));
//application/json
app.use(express.json());

app.listen(3000, ()=>{
  console.log('Server Start');
  console.log('http://localhost:3000');
});

//라우팅
app.get('/',(req,res)=>{
  res.send('Welcome!');
});

app.use('/', custRouter); // serverapp에 등록