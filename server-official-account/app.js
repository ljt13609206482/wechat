/**
 * Created by web-01 on 2018/2/23.
 */
//通过express搭建微信服务器
const EXPRESS = require('express');
const WECHAT =require('wechat');

let config={
  token:'weixin',
    appid:'wx519e354b8c69057d',
    encodingAESKey:'dxcfZDO9qhWqUSi3B6MwDuHNzM6RTYaXtChkHBQwFCW',
    checkSignature:true
};
let app=new EXPRESS();

app.use(EXPRESS.query());
app.use('/',WECHAT(config,(req,res,next)=>{
    let message = req.weixin;
    console.log(message);
}));
app.listen(3000);