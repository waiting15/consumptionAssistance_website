	var mysql = require('mysql');
	/* root用户配置列表 */
	root_config = {
		host	:'localhost',
		user	:'root',
		password:'44200119',
		database:'consumer'
	};
//用户注册操作
function user_register(username,password) {
	var connection = mysql.createConnection(root_config);
	connection.connect();
	// 设置sql语句
	var findSql = "select user_name from user_info where user_name=\'"+username+"\'";
	var insertSql = "insert into user_info(user_name,user_pwd) value(?,?)";
	var insertInfo = [username,password];
	connection.query(findSql,function(err,result) {
	if(err) {
		console.log('[SELECT ERROR] - ',err.message);
		connection.end();
		return;
	}
	if(result.length) {
		console.log("user exist");
		connection.end();
		return;
	} else {
//执行插入操作
		connection.query(insertSql,insertInfo,function(err,result) {
			console.log(insertSql);
			if(err) {
				console.log('[SELECT ERROR]',err.message);
				return;
			}
			console.log("----insert----");
			console.log(result);
			console.log("注册成功");
		});
		connection.end();
	  }
	});

}

//用户登陆操作
function user_login(username,password,callback) {
	var connection = mysql.createConnection(root_config);
	connection.connect();
	var findSql = "select user_name from user_info where user_name=\'"+username+"\'&&user_pwd=\'"+password+"\'";
	connection.query(findSql,function(err,result) {
		if(err) {
			console.log('[SELECT ERROR] - ',err.message);
			console.log('connect_end by err');
			connection.end();
			return;
		}
		if(result.length) {
			console.log('验证成功');
			callback(username);
			connection.end();
		}
		if(result.length===0) {
			console.log('用户名不存在或密码错误');
			callback(false);
			connection.end();
		}
	});
}
/* return 一个进行中项目列表（显示未打卡项目） */
function getProjectList(username) {
	var connection = mysql.createConnection( root_config );
	connection.connect();

}

module.exports = {
	user_register,
	user_login
}


