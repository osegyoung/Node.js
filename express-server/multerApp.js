const multer = require('multer');
const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

const storage = multer.diskStorage({ // 디스크 저장소
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    let saveFile = (new Date()).valueOf() + path.basename(file.originalname); //  없으면 랜덤으로 들어감.
    cb(null, saveFile);
  }
});

const uploads = multer({
  storage: storage
});

app.listen(5000, () => {
  console.log('Server Star!!');
});

app.post('/profile', uploads.single('avatar'), (req, res) => { // 중간에 미들웨어 추가
  console.log(req.file);
  console.log(req.body);
});

app.post('/photos', uploads.array('photos', 8), (req, res) => { // 중간에 미들웨어 추가 array 생략 가능.
  for (let file of req.files) {
    console.log(file);
  }
});