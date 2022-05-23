const express = require('express');
const router = express.Router();
const path = require('path');
var bodyParser = require('body-parser');
const mysqlConnect = require('../public/js/mysql_connect');
const dataDirect = require('../public/js/data_direct');

var urlencodedParser = bodyParser.urlencoded({extended:false});
//登录页面请求
router.get('/',function(req,res) {
	res.sendFile(path.join(__dirname,'../','views/login.html'));
});

//处理登录表单
router.post('/process',urlencodedParser,function(req,res) {
	var user_name = req.body.usr;
	var user_password = req.body.pwd;

	/* 连接数据库验证登录，返回用户名或false */
	mysqlConnect.user_login(req,res,user_name,user_password,dataDirect.loginDirect_index);

});

module.exports = router;