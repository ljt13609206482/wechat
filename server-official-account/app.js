/**
 * Created by web-01 on 2018/2/23.
 */
const EXPRESS = require('express');
const WECHAT =require('wechat');

let config={
  token:'weixin',
    appid:'wx519e354b8c69057d',
    encodingAESKey:'dxcfZDO9qhWqUSi3B6MwDuHNzM6RTYaXtChkHBQwFCW'
};
let app=new EXPRESS();

app.use(EXPRESS.query());
app.get('/',WECHAT(config,(req,res,next)=>{
    let message = req.weixin;
    console.log(message);
}));
app.listen(3000);