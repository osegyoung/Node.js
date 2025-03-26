
const express = require('express');
const app = express();

//미들웨어 등록
const session = require('express-session');
const cors = require('cors');

let sessionSetting = session({
secret : '$%$%$^$^$#^#',
resave : false,
saveUninitialized : true,
cookie : {
  httpOnly : true,
  secure : false,
  maxAge : 60000 // 유효기간
}
});

app.use(sessionSetting);

app.use(express.json());

// cors 설정
//1) 모든 origin과 모든 요청에 응답 // 서버 보안은 포기 ,, 토큰을 이용한 접근 방식
//app.use(cors());

//2) 지정한 요청에 대해서만 응답
const corsOption = {
  origin : 'http://192.168.0.46:5500',
  optionSuccessStatus : 200,
}
app.use(cors(corsOption));

app.listen(3000, ()=>{
  console.log('http://localhost:3000');
});

app.post('/login', (req,res)=>{
  const { id,pwd } = req.body; // {"id" : "user01","pwd" : "1234"}
  req.session.user = id;
  req.session.pwd = pwd;
  req.session.save(function(err){ 
    if(err) throw err;
   // res.redirect('/');  // /페이지로 넘긴다.
   res.send(req.session);
  })
})

app.get('/', (req,res)=>{
  res.send(req.session.user ); // res.send(req.session.user); // 세션이 가지고 있는 정보가 필요하면 뒤에 붙여서 쓰면 된다.
});

app.get('/logout', (req,res)=>{
  req.session.destroy();
  res.redirect('/');
})