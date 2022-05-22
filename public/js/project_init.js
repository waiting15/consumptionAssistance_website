function createSidebarBlock() {
		block_number++;
		var id_number = block_number;
		var unsave_id = "block_"+id_number;
		//获取元素对象
		var sidebar = document.getElementById("sidebarlist");
		var new_block = document.createElement("li");
		var new_block_content = document.createElement("a");
		var node = document.createTextNode("未保存项目"+id_number);
		//设置属性
		new_block_content.setAttribute("class","nav-link");
		new_block_content.classList.add('sidebarblock');
		new_block_content.setAttribute("role","button");
		new_block_content.setAttribute("onclick","showProject_detail("+id_number+",\"block_\")");
		new_block.setAttribute("id",unsave_id);
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
		formList.setAttribute("id","unsave_block_"+id_number);
		formList.setAttribute("style","display:block;");
		formList.setAttribute("action","/project/project_init"); //表单action
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

	}
	function deleteInit(id_number) {
		var formList = document.getElementById("unsave_block_"+id_number);
		var initBlock = document.getElementById("initBlock");
		var sidebarlist = document.getElementById("sidebarlist");
		var sideBlock = document.getElementById("block_"+id_number);

		initBlock.removeChild(formList);
		sidebarlist.removeChild(sideBlock);
	}
	function showProject_detail(id_number,blockType) {//侧边栏选中高亮
		// blockType:(project_或block_) 
		/* 获取之前active状态的对象，移除active，隐藏之前的详情内容 */
		var last_sidebarblock = document.getElementById(block_active);
		if(last_sidebarblock!=null) { //移除之前选中的active状态
			last_sidebarblock.classList.remove("active");
		}
		/* 若last 类型为 project */
		if(last_block_type == "project_") {
			var last_detail_block = document.getElementById("project_block_"+last_block_id_number);
			last_detail_block.style.display = "none";
			
		}
		/* 若last 类型为 unsave */
		if(last_block_type == "block_") {
			var last_detail_block = document.getElementById("unsave_block_"+last_block_id_number);
			last_detail_block.style.display = "none";
		}

		block_active = blockType + id_number; //更新状态1
		last_block_type = blockType;  //更新状态2
		last_block_id_number = id_number;  //更新状态3
		var nowsidebarblock = document.getElementById(block_active);
		nowsidebarblock.classList.add("active");
		//显示项目详情内容
		if(blockType == "block_") {
			var ifnewformList = document.getElementById("unsave_block_"+id_number);

			if(ifnewformList==null) {
				newProject_init(id_number);
			}
			if(ifnewformList!=null) {
				ifnewformList.style.display = "block";
			}
		}
		if(blockType == "project_") {
			var project_block = document.getElementById("project_block_"+id_number);
			if(project_block ==null) {
				console.log("Cannot find the project_block");
			}
			project_block.style.display = "block";
		}

	}