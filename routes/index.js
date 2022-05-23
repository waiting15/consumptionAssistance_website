const express = require('express');
const router = express.Router();
const path = require('path');
const mysqlConnect = require('../public/js/mysql_connect');
const dataDirect = require('../public/js/data_direct');

//首页请求
router.get('/',function(req,res) {
	res.redirect('/index');
});
router.get('/index',function(req,res) {
	if(req.session.userName) {
		//用render()渲染，把index_main.html作为模版文件
		var user_id = req.session.userId;
		mysqlConnect.show_projectList(req,res,user_id,"index",dataDirect.projectList_process);
	} else {
		res.sendFile(path.join(__dirname,'../','views/index.html'));
	}
});

module.exports = router;