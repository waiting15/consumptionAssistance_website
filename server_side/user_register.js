
function register(usr,pwd,address) {
	var sql = 'create user '+usr+'@'+address+'identified by '+pwd;
	var sql2 = 'grant all privileges on consumer.* to '+usr+'@'+address+' with grant option';
	var sql3 = 'flush privileges';
}