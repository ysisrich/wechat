/*
  处理用户发送的消息类型和内容，决定返回不同的内容给用户
 */

//引入config
const {url,appID,appsecret} = require('../config');

module.exports = async message => {
  
  let options = {
    toUserName: message.FromUserName,
    fromUserName: message.ToUserName,
    createTime: Date.now(),
    msgType: 'text'
  }
  
  let content = '您在说什么，我听不懂？';
  //判断用户发送的消息是否是文本消息
  if (message.MsgType === 'text') {
    //判断用户发送的消息内容具体是什么
    if (message.Content === '1') {  //全匹配
		content = '干什么！！'
    } else if (message.Content === '2') {
		content = '到底想干啥！！'
    } else if(message.Content.match('爱')){
		content = '我爱你很久很久！！'
    }
  } else if (message.MsgType === 'voice') {
      //说明没有数据
      content = '暂时没有语音回复';
  } else if (message.MsgType === 'event') {
    if (message.Event === 'subscribe') {
      //用户订阅事件
      content = '欢迎您关注会秃的程序猿公众号~ \n' +
      '1.回复 我爱你 \n' +
      '2.回复 我爱你 \n' +
      '3.回复 我爱你 \n';
    } else if (message.Event === 'unsubscribe') {
      //用户取消订阅事件
      console.log('无情取关~');
    } else if (message.Event === 'CLICK') {
		if(message.EventKey =='login'){
			
			let code = ''
			// 生成字符
			  let str = 'ABCDEFGHKMNPQRSTUVWXYZ1234567890'
			  for (var i = 0; i < 6; i++) { 
			    code += str.charAt(Math.floor(Math.random() * str.length))
			  }
			content = `动态码：${code} \n`+
					`请在十分钟内登录的🕑 \n`+
					`或直接访问：<a href="https://www.yangsong.cool">个人仓库</a>`
		}
      
    }
  }
  
  options.content = content;
  
  return options;

}