var test = require('./testJSONdata2');

var mysql = require('mysql');
/* root用户配置列表 */
root_config = {
	host	:'localhost',
	user	:'root',
	password:'44200119',
	database:'consumer'
};
/*
var findSql="select project_name,project.project_id,budget,initDay,dakatimes,datediff(curdate(),dakadays) from project,daka where user_id=?&&project.project_id=daka.project_id";
var connection = mysql.createConnection( root_config );
connection.connect();
connection.query(findSql,[4],function(err,result) {
	if(err) {
		console.log('[SELECT ERROR',err.message);
		connection.end();
		return;
	}

	var dataString = JSON.stringify(result);
	var data = JSON.parse(dataString);
	for ( p in data ) { //遍历每一个项目
		console.log(data[p]);
	}
	connection.end();
	var test = ""+0;
	console.log(typeof test);
}); */


/*   ----ejs语法用例---- */
/*
<!DOCTYPE html>
<html>
  <head>
    <title>电影列表</title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1>电影列表</h1>
    <ul>
      <!--<% %> 是编写javascript代码的ejs模板引擎语法 -->
      <% movies.forEach(function(item){ %>
        <li>
          <h4>电影名称:</h4>
          <p><%= item.name %></p>
          <h4>简介:</h4>
          <p><%= item.brief %></p>
          <h4>导演:</h4>
          <p><%= item.author %></p>
        </li>
        
      <% }); %>
     
    </ul>
  </body>
</html>
*/

