//router/customer_router.js
// 라우터 모듈
const express = require('express');
const router = express.Router();
const custService = require('../service/customer_service.js'); // service 호출
//customers
//전체조회 : GET + '/customers'
router.get('/customers',async (req,res)=>{
  let custList = await custService.findAll();
  res.send(custList);
});

//단건조회 : GET + '/customers/:id'
router.get('/customers/:id',(req,res)=>{
  
});

// 등록 : post + '/customers' + JSON(body)
router.post('/customers',(req,res)=>{
  
});

// 수정 : put + '/customers/:id' + JSON
router.put('/customers/:id',(req,res)=>{
  
});

// 삭제 : delete + '/customers/:id'
router.delete('/customers/:id',(req,res)=>{
  
});

module.exports = router;
