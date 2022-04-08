var express=require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var mysqlConnect = require('./mysql_connect');
var dataDirect = require('./data_direct');
var app = express();

// 创建 application/x-www-form-urlencoded 编码解析并使用
var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(session({
	secret : 'keyboard pig',
	resave : 'true',
	saveUninitialized: 'false'
}));

//处理登录表单
app.post('/login/process',urlencodedParser,function(req,res) {
	var user_name = req.body.usr;
	var user_password = req.body.pwd;
	res.setHeader("Content-Type","text/html");

	/* 连接数据库验证登录，返回用户名或false */
	mysqlConnect.user_login(user_name,user_password,dataDirect.loginDirect_index);

	res.end();
});

//处理注册表单
app.post('/register/process',urlencodedParser,function(req,res) {
	var user_name = req.body.usr;
	var user_password = req.body.pwd;

	mysqlConnect.user_register(user_name,user_password);
	res.end();
});

var server = app.listen(8888,function() {
	console.log("server is running");
});

//处理新建项目表单
app.get('/project_init',function(req,res) {

});

//处理打卡项目表单

//首页请求
app.get('/',function(req,res) {
	res.redirect('/index');
});
app.get('/index',function(req,res) {
	if(req.session.userName) {
		//用render()渲染，把index_main.html作为模版文件
	} else {
		res.sendFile(path.join(__dirname,'../','index.html'));
	}
});
app.get('/login',function(req,res) {
	res.sendFile(path.join(__dirname,'../','login.html'));
});
app.get('/register',function(req,res) {
	res.sendFile(path.join(__dirname,'../','register.html'));
});