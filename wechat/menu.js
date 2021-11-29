/*
  自定义菜单
 */
const {url} = require('../config');

module.exports = {
  "button":[
    {
      "type":"view",
      "name":"电影🎬",
      "url":`${url}/movie`
    },
    {
      "type":"click",
      "name":"一键登录😆",
      "key":'login'
    },
    {
      "name": "戳我💋",
      "sub_button": [
        {
          "type": "view",
          "name": "官网☀",
          "url": "https://www.yangsong.cool"
        },
        {
          "type": "click",
          "name": "帮助🙏",
          "key": "help"
        }
      ]
    }
  ]
}