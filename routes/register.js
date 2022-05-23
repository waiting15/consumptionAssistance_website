const express = require('express');
const router = express.Router();
const path = require('path');
var bodyParser = require('body-parser');
const mysqlConnect = require('../public/js/mysql_connect');
const dataDirect = require('../public/js/data_direct');

var urlencodedParser = bodyParser.urlencoded({extended:false});
//注册页面请求
router.get('/',function(req,res) {
	res.sendFile(path.join(__dirname,'../','views/register.html'));
});

//处理注册表单
router.post('/process',urlencodedParser,function(req,res) {
	var user_name = req.body.usr;
	var user_password = req.body.pwd;

	mysqlConnect.user_register(req,res,user_name,user_password,dataDirect.checkRegister);
});

module.exports = router;