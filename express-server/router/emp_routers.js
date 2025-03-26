const express = require('express');
const router = express.Router();
const {query} = require('../mapper/emp-map.js');

// REST API 
// 전체조회 : GET + '/emps'
// app.get('/emps', (req, res) => { // end point
//   let list = query('SELECT'); // 서비스
//   res.send(list); //응답
// });


// 단건조회 : GET +'/emps/100' -> 고정값
router.get('/emps/:empId', (req, res) => { // :을 사용 , 위치에 있는 값을 받는 변수(empId)에 100이 담긴다.
  let searchId = req.params.empId;
  let info = query('SELECT', null, {
    id: searchId
  });
  res.send(info[0]); // 1개만 찾고 싶다
});

//등록 : POST + '/emps' + JSON
router.post('/emps',(req,res)=>{
  let addInfo = req.body;
  query('INSERT',addInfo);
  res.send({ 'result' : 'success'});
});

// 수정 : PUT + '/emps/100' + JSON // '/'는 경로
router.put('/emps/:eId',(req,res)=>{
  let searchId = req.params.eId;
  let updateInfo = req.body;
  query('UPDATE', updateInfo, { id: searchId});
  res.send({'result' : 'succes', 'id' : searchId});
});

// 삭제 : DELETE + '/emps/100' // 100: primary key -> 이 방식으로 적는 거는 숨기는 것
router.delete('/emps/:empId', (req, res) => { 
  let searchId = req.params.empId;
   query('DELETE', null, { id : searchId});
  res.status(204).send('Completed'); // 상태코드값을 변경할떄 사용(status)
});


module.exports = router;//  위에 router 가 담긴다. , router 별로 고유 경로 설정 가능.