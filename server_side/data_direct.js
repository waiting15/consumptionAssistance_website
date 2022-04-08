// 接收用户名，实行跳转至主页操作，并传递用户名。
function loginDirect_index(username) {
	if(username) {
		req.session.userName = username;
		res.redirect('/index');
	}
	else {
	}
}

module.exports = {
	loginDirect_index
}