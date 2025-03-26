const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data.json');

// DB 설정
const jsonFile = fs.readFileSync(filePath);
const jsonData = JSON.parse(jsonFile); // JSON -> javascript object or array

const query = (crud, target, where = null)=>{
  let result = null;

  let emps = jsonData;
  switch(crud){
  // 조회
  case 'SELECT' :
    result = (where == null) ? emps :  emps.filter(emp => {
      return findEmp(emp, where);
    });
    break;  

  // 등록
  case 'INSERT' :
    emps.push(target);
    break;
  // 수정
  case 'UPDATE' :
    emps.forEach(emp => {
      if(findEmp(emp, where)){
        for(let field in target){
          emp[field] = target[field];
        }
      }
    });
    break;
  // 삭제
  case 'DELETE' :
    let selected = null;
    emps.forEach((emp, idx) => {
      if(findEmp(emp, where)){
        selected = idx;
      }
    });

    emps.splice(selected, 1);
    break;
  }
  return result;
};

function findEmp(emp, where){
  let fieldNum = 0; // 총 검색조건 갯수
  let selected = 0; // true인 검색조건 갯수

  for(let field in where){
    fieldNum++;
    if(emp[field] == where[field]){
      selected++;
    }
  }
  return (fieldNum == selected);
}

module.exports = { // 외부로 내보내고자 하는 대상을 정의. 
  query, // == "query" : query,
}