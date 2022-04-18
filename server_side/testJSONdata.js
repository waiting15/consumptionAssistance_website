var test = require('./testJSONdata2');

var mysql = require('mysql');
/* root用户配置列表 */
root_config = {
	host	:'localhost',
	user	:'root',
	password:'442001',
	database:'consumer'
};
/*
new Promise(function(resolve,reject) {
	var i=1;
	var a=0;
	resolve(a);
	for(var x=10;x>1;x--) {
		i++;
	}
	a=i;
	//resolve(i);
}).then(function(value) {
	console.log(value);
}) */

var findSql="select daka? from daka where project_id=?";
var connection = mysql.createConnection( root_config );
connection.connect();
connection.query(findSql,[1,2],function(err,result) {
	if(err) {
		console.log('[SELECT ERROR',err.message);
		connection.end();
		return;
	}
	console.log(result);
});


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

