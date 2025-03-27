//mapper/sql/cutomer.js
//Table : cutomers;

const selectAll = `SELECT id
,name
,email
,phone
,address
from customers
order by id`; // 세미콜론 안넣는걸 추천

module.exports = {
  selectAll,
}