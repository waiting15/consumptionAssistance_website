## 可优化选项 

1. 目录结构的优化
2. 数据库连接池


## 未完成的功能

1. 在data_direct中 完成函数处理isDaka变量(用异步处理insertIsDaka_toData)，判断是否需要打卡，将isDaka插入json数据中再去渲染/project页面。

2. 处理 /daka请求，daka页面中，完成（显示需要回答的问题）（将表单结果转换为数值存储至数据库中，以及dakatimes,dakadays值的更新。

3.在url请求中传参，（project_name，project_id...） 

4. 在/daka的表单提交中，当dakatimes ==3 时，调用processSuggestion返回结果suggest并插入至数据库中。
5. 在每个daka表单提交前检查是否选完回答。

5. 用户注册完返回主页
7. 在显示打卡已完成时按钮为绿色
