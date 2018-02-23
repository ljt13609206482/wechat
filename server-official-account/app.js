/**
 * Created by web-01 on 2018/2/23.
 */
//使用express搭建微信服务器
const EXPRESS = require('express');
const WECHAT = require('wechat');
const MYSQL = require('mysql');

let  pool=MYSQL.createPool({
    user:'root'
});
//配置服务器信息
let config={
  token:'weixin',
    appid:'wx519e354b8c69057d',
    encodingAESKey:'dxcfZDO9qhWqUSi3B6MwDuHNzM6RTYaXtChkHBQwFCW',
    checkSignature:true
};
let app=new EXPRESS();

app.use(EXPRESS.query());
//处理客户端请求
app.use('/',WECHAT(config,(req,res,next)=>{
    let message = req.weixin;
    let content=message.Content;
    console.log(content);

    let sql=`SELECT * FROM db.chat WHERE question LIKE ?`;
    pool.query(sql,['%'+content+'%'],(err,results)=>{
        if(results.length==1){
            res.reply(results[0].answer);
        }else{
            res.reply('你说什么？我听不懂！')
        }
    })

}));
app.listen(3000);