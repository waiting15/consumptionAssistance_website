const express = require('express');
const router = express.Router();
const mysqlConnect = require('./mysql_connect');
const dataDirect = require('./data_direct');
const path = require('path');

router.get('/daka1',function(req,res) {
	/* 传递username,project_name */
});

router.get('/daka2',function(req,res) {

});
router.get('/daka3',function(req,res) {

});

router.get('/daka1/submit',function(req,res) {
	/* 提交时，更新dakadays,dakatimes */
});
router.get('/daka22/submit',function(req,res) {

});
router.get('/daka23/submit',function(req,res) {

});
router.get('/daka3/submit',function(req,res) {

});

module.exports = router;