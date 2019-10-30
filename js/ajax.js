function ajax(options) {
    // 创建Ajax对象
    var xhr = new XMLHttpRequest();
    // 配置Ajax对象
    xhr.open(options.type, options.url);
    // 发送请求
    xhr.send();
    // 监听onload事件
    // 当xhr对象接受完响应数据后出发
    xhr.onload = function() {
        success(xhr.responseText)
    }
}

ajax({
    type: 'get', //请求方式
    url: '01.html', //请求地址
    success: function(data) { //成功则调用
        console.log(data)
    },
    error: function(data) {
        console.log(data)
    }

})