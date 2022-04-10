	var mysql = require('mysql');
	/* root用户配置列表 */
	root_config = {
		host	:'localhost',
		user	:'root',
		password:'442001',
		database:'consumer'
	};

//用户注册操作
function user_register(username,password) {
	var connection = mysql.createConnection(root_config);
	connection.connect();
	// 设置sql语句
	var findSql = "select user_name from user_info where user_name= ?";
	var insertSql = "insert into user_info(user_name,user_pwd) value(?,?)";
	var insertInfo = [username,password];
	connection.query(findSql,[username],function(err,result) {
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
			connection.end();
		});

	  }
	});

}

//用户登陆操作
function user_login(req,res,username,password,callback) {
	var connection = mysql.createConnection(root_config);
	connection.connect();
	var findSql = "select user_name,user_id from user_info where user_name= ? && user_pwd= ?";
	connection.query(findSql,[username,password],function(err,result) {
		if(err) {
			console.log('[SELECT ERROR] - ',err.message);
			console.log('connect_end by err');
			connection.end();
			return;
		}
		if(result.length) {
			console.log('验证成功');
			//提取result，在回调函数中将result转换json格式
			callback(req,res,username,result); 
			connection.end();
		}
		if(result.length===0) {
			console.log('用户名不存在或密码错误');
			callback(req,res,false，result);
			connection.end();
		}
	});
}

/* 拉取项目列表（显示未打卡项目） */
function show_projectList(req,res,user_id,callback) {
	var connection = mysql.createConnection( root_config);
	connection.connect();
	//获取project_name、id、立项时间的列表，计算未打卡的项目
	var getProjectListSql="select project_name,project.project_id,budget,initDay,dakatimes,datediff(curdate(),dakadays) from project,daka where user_id=?&&project.project_id=daka.project_id";
	//将结果返回给callback()处理
	connection.query(getProjectListSql,[user_id],function(err,result) {
		if(err) {
				console.log('[SELECT ERROR]',err.message);
				return;
		}
		callback(req,res,result);
		connection.end();
	});
}

//插入新建项目
function user_projectInit(req,res,user_id,project_name,budget,demands) {
	var connection = mysql.createConnection( root_config );
	connection.connect();
	var insertSql = "insert into project(user_id,project_name,budget,demands,initDay) value(?,?,?,?,curdate())";
	var insertInfo = [user_id,project_name,budget,demands];
	connection.query(insertSql,insertInfo,function(err,result) {
		if(err) {
			console.log('[SELECT ERROR] - ',err.message);
			console.log('connect_end by err');
			connection.end();
			return;
		}
		console.log("----insert----");
		console.log(result);
		console.log('保存成功');
		//寻找project_id
		var findPIDsql = "select project_id from project where project_name = ?";
		connection.query(findPIDsql,[project_name],function(err,result) {
			if(err) {
			console.log('[SELECT ERROR] - ',err.message);
			console.log('connect_end by err');
			connection.end();
			return;
			}
			var dataString = JSON.stringify(result);
			var data = JSON.parse(dataString);
			var insertDakasql = "insert into daka(project_id,dakatimes) value(?,?)";
			//执行初始化打卡表
			connection.query(insertDakasql,[data.project_id,0],function(ree,result) {
				if(err) {
					console.log('[SELECT ERROR] - ',err.message);
					console.log('connect_end by err');
					connection.end();
					return;
				}
				console.log('daka初始化成功');
				connection.end();
			});
		});
		res.redirect('/project');
	});
}

module.exports = {
	user_register,
	user_login,
	user_projectInit
}


