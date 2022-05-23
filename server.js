var express=require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var app = express();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var projectRouter = require('./routes/project');
var dakaRouter = require('./routes/daka');


// 创建 application/x-www-form-urlencoded 编码解析并使用
var urlencodedParser = bodyParser.urlencoded({extended:false});

// session会话
app.use(session({
	secret : 'keyboard pig',
	resave : 'true',
	saveUninitialized: 'false'
}));

/*  渲染页面的设置，引擎ejs  */
app.set('views','./views');
app.set('view engine','html');
app.engine('.html',require('ejs').__express);

/* 设置静态文件目录 */
app.use('/static',express.static('public'));

/* ---挂载路由--- */
app.use('/',indexRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/project',projectRouter);
app.use('/daka',dakaRouter);


var server = app.listen(8888,function() {
	console.log("server is running");
});
