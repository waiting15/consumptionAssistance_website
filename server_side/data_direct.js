// 接收用户名，实行跳转至主页操作，并传递用户名。
function loginDirect_index(req,res,username,result) {
	if(username) {
		//处理result格式转换为json
		var dataString = JSON.stringify(result);
		var data = JSON.parse(dataString);
		//存储至会话session
		req.session.userId = data.user_id;
		req.session.userName = username;

		console.log('user_id = '+req.session.userId);
		res.redirect('/index');
	}
	else {
		res.redirect('/index');
	}
}

function projectList_prosess(req,res,result) {
	var dataString = JSON.stringify(result);
	var data = JSON.parse(dateString);
	if(data.datediff(curdate(),dakadays)==null) {// 情况：从未打卡

	}
}

module.exports = {
	loginDirect_index,
	projectList_prosess
}