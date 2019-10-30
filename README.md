# Ajax封装函数使用说明

**调用ajax();**

```javascript
ajax(
	typd:'get',	  //提交反方式
    url:'http://localost/get',  //体积地址
    data:{}   //携带参数
    herder:{} //用户希望的数据类型 
    success:function(){}, //成功调用回调函数
    error:function(){}    //失败调用构造函数
);
```

| 参数 | 参数说明           | 是否必填 | 默认值 | 支持格式 |
| :--- | ------------------| -------- | ------ | -------- |
| type | 提交方式           | 否       | get    | get/post |
| url | 提交地址           | 否       |     |  |
| data  |携带参数       |否      |        |          |
| herder | 用户向服务器传递的数据类型           | 否       |     |text/html/applicationjson |
| success() | 状态码为200时回调函数           |      |     |  |
| error()	 | 状态码为不为200时回调函数           |      |     |  |


