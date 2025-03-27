//mapper/mapper.js
const mariaDB = require('mariadb/callback');
const sqlList = require('./sql/customers.js');
const connectionPool = mariaDB.createPool({
  // 필수 
  host: process.env.DB_HOST,
  port:process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_LIMIT,

  // 선택 - 편하게 쓸려면 추가 하는게 좋다.!!
  permitSetMultiParamEntries : true,
  insertIdAsNumber : true,
  bigIntAsNumber : true, 
}); // connectionPool은 무조건 쓰기 

let testSql = `select * from customers`;

const query = (alias, values)=>{
  return new Promise((resolve,reject)=>{
    let executeSql = sqlList[alias]; // sqlList['selectAll']
    console.log(`sql : ${executeSql}`)
    connectionPool.query(executeSql, values, (err, result)=>{
if(err){
  reject({err});
}else{
  resolve(result);
}
    });
  })
  .catch(err => {
    console.log(err);
    return err;
  });
}
  


module.exports = {
  query,
}