const FastNodeWeiXin = require("fast-node-weixin");

const FastWeixin = new FastNodeWeiXin("appid", "appsecret", "apptoken");

module.exports = FastWeixin;
