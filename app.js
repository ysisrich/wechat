//引入express模块
const express = require('express');

//创建app应用对象
const app = express();
const reply = require('./reply/index.js');

const Wechat = require('./wechat/wechat.js')

const w = new Wechat()


app.use(reply())

//监听端口号
app.listen(3000, () => console.log('服务器启动成功了~'));