//시작점
const express = require('express') //express 모듈 가져오기
const app = express() //function 이용 새로윤 express 만들기
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin@cluster.wh7vb.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false

}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World'))
app.listen(port, () => console.log(`Example port${port}`))