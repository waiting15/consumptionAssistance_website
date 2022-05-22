// 接收用户名，实行跳转至主页操作，并传递用户名。
function loginDirect_index(req,res,username,result) {
	if(username) {
		//处理result格式转换为json
		var dataString = JSON.stringify(result);
		var data = JSON.parse(dataString);
		//存储至会话session
		req.session.userId = data[0].user_id;
		req.session.userName = username;

		console.log("user_id= "+req.session.userId);
		res.redirect('/index');
	}
	else {
		res.setHeader("Content-type","text/html;charset=utf8");
		res.write("<script language= 'javascript'> alert('密码错误，请重试');window.location.href='/login';</script>");
		res.end();
	}
}

function checkRegister(req,res,isSuccess) {
	if(isSuccess) {
		res.setHeader("Content-type","text/html;charset=utf8");
		res.write("<script language= 'javascript'> alert('注册成功');window.location.href='/index';</script>");
		res.end();
	}
	else {
		res.setHeader("Content-type","text/html;charset=utf8");
		res.write("<script language= 'javascript'> alert('注册失败，请重试');window.location.href='/index';</script>");
		res.end();
	}
}

function projectList_process(req,res,sendPage,result) {
/* result = [{project_name,project_id,suggest,budget,initDay,dakatimes,datediff}] */
	
	var dataString = JSON.stringify(result);
	var data = JSON.parse(dataString);
	/* promise 处理插入isDaka变量，再渲染页面 */
	new Promise(function(resolve,reject) {
		var sData = insertIsDaka_toData(data);
		resolve(sData);
	}).then(function(data) {
		if(sendPage == "project") {
			res.render('project',{projectList: data,username:req.session.userName});			
		}
		if(sendPage == "index") {
			res.render('index_main',{projectList: data,username:req.session.userName});	
		}
	}).catch(function(reason) {
		console.log("promise发生错误 ->"+reason);
	});

}
function insertIsDaka_toData(data) {
	for( p in data ) { //遍历每一个项目,处理是否需要打卡
		if(data[p].dakatimes == 0) { 
			data[p]["isDaka"] = "今日未打卡(点击打卡)";
			continue;
		}
		if(data[p].datediff>=1&&data[p].dakatimes<3) {
			data[p]["isDaka"] = "今日未打卡(点击打卡)";
			continue;
		}
		if(data[p].datediff<1&&data[p].dakatimes<3) {
			data[p]["isDaka"] = "今日已完成打卡";
			continue;
		}
		if(data[p].dakatimes == 3) {// 打卡已经完成但未给建议
			data[p]["isDaka"] = "打卡已完成";
		}
	}
	return data;
}

module.exports = {
	loginDirect_index,
	projectList_process,
	checkRegister
}