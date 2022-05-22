const express = require('express');
const router = express.Router();
const mysqlConnect = require('./mysql_connect');
const dataDirect = require('./data_direct');

/* 项目页面请求 */
router.get('/',function(req,res) {
	if(req.session.userId) {
		var user_id = req.session.userId;
	} else {
		//请重新登录
		res.setHeader("Content-type","text/html;charset=utf8");
		res.write("<script language= 'javascript'> alert('登录状态失效，请重新登录');window.location.href='/index';</script>");
		res.end();
	}
	//查找项目信息
	mysqlConnect.show_projectList(req,res,user_id,"project",dataDirect.projectList_process);
	//渲染页面，加载项目信息
});

//处理新建项目表单
router.get('/project_init',function(req,res) {
	if(req.session.userId) {
		var user_id = req.session.userId;
	} else {
		//请重新登录
		console.log("登陆状态失效，请重新登录");
	}
	var project_name = req.query.projectname;
	var project_budget = req.query.budget;
	var project_demands = req.query.demands;
	mysqlConnect.user_projectInit(req,res,user_id,project_name,project_budget,project_demands);
});

module.exports = router;