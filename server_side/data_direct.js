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
		res.redirect('/index');
	}
}

function projectList_prosess(req,res,result) {
/* result = [{project_name,project_id,suggest,budget,initDay,dakatimes,datediff()}] */
	
	var dataString = JSON.stringify(result);
	var data = JSON.parse(dataString);
	/* promise 处理插入isDaka变量，再渲染页面 */
	new Promise(function(resolve,reject) {
		var sData = insertIsDaka_toData(data);
		resolve(sData);
	}).then(function(data) {
		res.render('project',{projectList: data,username:req.session.userName});
	}).catch(function() {
		console.log("promise发生错误");
	});

}
function insertIsDaka_toData(data) {
	for( p in data ) { //遍历每一个项目,处理是否需要打卡
		if(data[p].dakatimes == 0) { 
			data[p]["isDaka"] = "今日未打卡(点击打卡)";
			continue;
		}
		if(data[p].datediff(curdate(),dakadays)>=1&&data[p].dakatimes<3) {
			data[p]["isDaka"] = "今日未打卡(点击打卡)";
			continue;
		}
		if(data[p].datediff(curdate(),dakadays)<1&&data[p].dakatimes<3) {
			data[p]["isDaka"] = "今日已完成打卡";
			continue;
		}
		if(data[p].dakatimes == 3) {// 打卡已经完成但未给建议
			data[p]["isDaka"] = "打卡已完成";
		}
	}
	return data;
}

function suggestProcess() {
	
}

module.exports = {
	loginDirect_index,
	projectList_prosess
}