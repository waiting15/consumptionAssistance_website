function createSidebarBlock() {
		block_number++;
		var id_number = block_number;
		//获取元素对象
		var sidebar = document.getElementById("sidebarlist");
		var new_block = document.createElement("li");
		var new_block_content = document.createElement("a");
		var node = document.createTextNode("未保存项目"+block_number);
		//设置属性
		new_block_content.setAttribute("class","nav-link");
		new_block_content.classList.add('sidebarblock');
		new_block_content.setAttribute("role","button");
		new_block_content.setAttribute("onclick","showProject_init("+id_number+")");
		new_block.setAttribute("id","block_"+block_number);
		new_block.setAttribute("class","nav-item");
		//添加元素
		new_block_content.appendChild(node);
		new_block.appendChild(new_block_content);
		sidebar.insertBefore(new_block,block);

	}
	function newProject_init(id_number) { //创建项目初始化页面
		
		//获取对象
		var initBlock = document.getElementById("initBlock");
		var formList = document.createElement("form");
		var listBlock_1 = document.createElement("div");
		var listBlock_2 = document.createElement("div");
		var listBlock_3 = document.createElement("div");

		var blockLabel_1 = document.createElement("label");
		var blockLabel_2 = document.createElement("label");
		var blockLabel_3 = document.createElement("label");

		var blockInput_1 = document.createElement("input");
		var blockInput_2 = document.createElement("input");
		var blockTextArea = document.createElement("textarea");

		var listButton_1 = document.createElement("button");
		var listButton_2 = document.createElement("button");

		var node1 = document.createTextNode("项目名");
		var node2 = document.createTextNode("预算(rmb)");
		var node3 = document.createTextNode("购买此商品的需求");

		//设置属性
		formList.setAttribute("id","form_"+id_number);
		formList.setAttribute("style","display:block;");
		formList.setAttribute("action","localhost:8888/project_init"); //表单action
		formList.setAttribute("method","get") // get请求
		listBlock_1.setAttribute("class","mb-3 mt-3");
		listBlock_2.setAttribute("class","mb-3 mt-3");
		listBlock_3.setAttribute("class","mb-3 mt-3");

		blockLabel_1.setAttribute("class","form-label");
		blockLabel_2.setAttribute("class","form-label");
		blockLabel_3.setAttribute("class","form-label");
		blockLabel_1.setAttribute("for","name");
		blockLabel_2.setAttribute("for","budget");
		blockLabel_3.setAttribute("for","demands");

		blockInput_1.setAttribute("class","form-control form-control-lg");
		blockInput_2.setAttribute("class","form-control form-control-lg");
		blockInput_1.setAttribute("style","width:375px");
		blockInput_2.setAttribute("style","width:375px");
		blockInput_1.setAttribute("type","text");
		blockInput_2.setAttribute("type","number");
		blockInput_1.setAttribute("id","name");
		blockInput_1.setAttribute("name","projectname");
		blockInput_2.setAttribute("id","budget");
		blockInput_2.setAttribute("name","budget");
		blockInput_1.setAttribute("placeholder","请输入项目名");

		blockTextArea.setAttribute("class","form-control");
		blockTextArea.setAttribute("row",3);
		blockTextArea.setAttribute("id","demands");
		blockTextArea.setAttribute("name","demands");
		blockTextArea.setAttribute("placeholder","简要描述您购买它用来做什么");

		listButton_1.setAttribute("class","btn btn-success");
		listButton_1.innerHTML="保存";
		listButton_2.setAttribute("class","btn btn-dark");
		listButton_2.innerHTML="取消";
		listButton_2.setAttribute("onclick","deleteInit("+id_number+")");
		//添加元素
		initBlock.appendChild(formList);
		//第一个输入框（项目名）
		blockLabel_1.appendChild(node1);
		listBlock_1.appendChild(blockLabel_1);
		listBlock_1.appendChild(blockInput_1);
		formList.appendChild(listBlock_1);
		//第二个输入框（预算）
		blockLabel_2.appendChild(node2);
		listBlock_2.appendChild(blockLabel_2);
		listBlock_2.appendChild(blockInput_2);
		formList.appendChild(listBlock_2);
		//第三个输入框（需求）
		blockLabel_3.appendChild(node3);
		listBlock_3.appendChild(blockLabel_3);
		listBlock_3.appendChild(blockTextArea);
		formList.appendChild(listBlock_3);
		//按钮
		formList.appendChild(listButton_1);
		formList.appendChild(listButton_2);
		//添加按钮监听

	}
	function deleteInit(id_number) {
		var formList = document.getElementById("form_"+id_number);
		var initBlock = document.getElementById("initBlock");
		var sidebarlist = document.getElementById("sidebarlist");
		var sideBlock = document.getElementById("block_"+id_number);

		initBlock.removeChild(formList);
		sidebarlist.removeChild(sideBlock);
	}
	function showProject_init(id_number) {
		//侧边栏选中高亮
		var sidebarblock = document.getElementById("block_"+block_active);
		var init_block = document.getElementById("form_"+block_active);
		if(sidebarblock!=null) {
			sidebarblock.classList.remove("active");
		}
		block_active = id_number;
		var newsidebarblock = document.getElementById("block_"+block_active);
		var ifnewformList = document.getElementById("form_"+block_active);
		newsidebarblock.classList.add("active");
		//选中项目的项目表单显示
		if(init_block!=null) {
			init_block.style.display = "none";
		}
		if(ifnewformList==null) {
			newProject_init(id_number);
		}
		if(ifnewformList!=null) {
			ifnewformList.style.display = "block";
		}
	}