var express=require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var mysqlConnect = require('./mysql_connect');
var dataDirect = require('./data_direct');
var app = express();

var project = require('./project');
var daka = require('./daka');

// 创建 application/x-www-form-urlencoded 编码解析并使用
var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(session({
	secret : 'keyboard pig',
	resave : 'true',
	saveUninitialized: 'false'
}));

/*  渲染页面的设置，引擎ejs  */
app.set('views',path.join(__dirname,'../'));
app.set('view engine','html');
app.engine('.html',require('ejs').__express);
/* 设置静态文件目录 */
app.use('/static',express.static(path.join(__dirname,'../','client_side')));

/* ---挂载路由--- */
app.use('/project',project);
app.use('/daka',daka);

//首页请求
app.get('/',function(req,res) {
	res.redirect('/index');
});
app.get('/index',function(req,res) {
	if(req.session.userName) {
		//用render()渲染，把index_main.html作为模版文件
		res.render('index_main',{username: req.session.userName});
	} else {
		res.sendFile(path.join(__dirname,'../','index.html'));
	}
});
//登录页面请求
app.get('/login',function(req,res) {
	res.sendFile(path.join(__dirname,'../','login.html'));
});
//注册页面请求
app.get('/register',function(req,res) {
	res.sendFile(path.join(__dirname,'../','register.html'));
});

//处理登录表单
app.post('/login/process',urlencodedParser,function(req,res) {
	var user_name = req.body.usr;
	var user_password = req.body.pwd;

	/* 连接数据库验证登录，返回用户名或false */
	mysqlConnect.user_login(req,res,user_name,user_password,dataDirect.loginDirect_index);

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

/* 临时测试 */
app.get('/test',function(req,res) {
	res.send("响应成功");
});
