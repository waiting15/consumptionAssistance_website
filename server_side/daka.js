const express = require('express');
const router = express.Router();
const mysqlConnect = require('./mysql_connect');
const dataDirect = require('./data_direct');
const path = require('path');
const processSuggest = require('./processSuggestion');

router.get('/daka1',function(req,res) {
	/* 传递username,project_name */
	console.log("接收到onclick请求");
	var projectName = req.query.projectName;
	var projectId = req.query.projectId;
	console.log("project_id="+projectId+", project_name="+projectName);
	res.render('daka1',{project_name:projectName,project_id:projectId,username:req.session.userName});
});

router.get('/daka2',function(req,res) {
	/* 传递username,project_name */
	var project_name = req.query.projectName;
	var project_id = req.query.projectId;
	res.render('daka2',{project_name:project_name,project_id:project_id,username:req.session.userName});
});
router.get('/daka3',function(req,res) {
	/* 传递username,project_name */
	var project_name = req.query.projectName;
	var project_id = req.query.projectId;
	res.render('daka3',{project_name:project_name,project_id:project_id,username:req.session.userName});
});

router.get('/daka1/submit/:projectId/',function(req,res) {
	/* 提交时，更新dakadays,dakatimes */
	/* form action="/daka/daka1/submit?projectId=<%= project_id %> */
	var project_id = req.params.projectId;
	/* 插入数据，并返回项目页面，提示打卡成功（更新dakadays，dakatimes <-传递已递加的值）*/
	var dakatimes = 0+1;
	var daka_value = req.query.daka1Radio;
	console.log("daka1_value = "+daka_value);
	mysqlConnect.updateDaka(project_id,dakatimes,daka_value);
});
router.get('/daka22/submit/:projectId/',function(req,res) {
	var project_id = req.params.projectId;
	var daka_value = req.query.daka22Radio;
	var dakatimes = 1+1;
	console.log("daka22_value = "+daka_value);
	mysqlConnect.updateDaka(project_id,dakatimes,daka_value);
});
router.get('/daka23/submit/:projectId/',function(req,res) {
	var project_id = req.params.projectId;
	var daka_value = req.query.daka23Radio;
	var dakatimes = 1+1;
	console.log("daka23_value = "+daka_value);
	mysqlConnect.updateDaka(project_id,dakatimes,daka_value);
});
router.get('/daka3/submit/:projectId/',function(req,res) {
	var project_id = req.params.projectId;
	var daka_value1 = req.query.daka31Radio;
	var daka_value2 = req.query.daka32Radio;
	var dakatimes = 2+1;
	console.log("daka31_value = "+daka_value1);
	console.log("daka32_value = "+daka_value2);
	//返回建议步骤
	var suggest = processSuggest.processSuggestion()

});

module.exports = router;