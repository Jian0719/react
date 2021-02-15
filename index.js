//시작점
const express = require('express') //express 모듈 가져오기
const app = express() //function 이용 새로윤 express 만들기
const port = 5500
const { User } = require("./models/User");

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require("./config/key");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
//json 타입 인코더
app.use(bodyParser.json());


mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false

}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('react login'))


//회원가입 라우터 만들기
app.post('/register', (req, res) => {

    //회원 가입 할 때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.


    const user = new User(req.body)

    user.save((err, userInfo) =>{
        if(err) return res.json({ succeess: false, err})
        return res.status(200).json({
            succeess: true
        })
    })
})
app.listen(port, () => console.log(`Example port${port}`))