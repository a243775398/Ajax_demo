function ajax(options) {
    var defaults = {
        type: 'get',
        url: '',
        data: {},
        herder: {
            'Content-Type': 'application/x-www-form-urllencoded'
        },
        success: function() {},
        error: function() {}

    };
    // 覆盖对象 使用options对象的属性覆盖defaults对象的属性
    Object.assign(defaults, options);
    // 创建Ajax对象
    var xhr = new XMLHttpRequest();
    // 接受请求参数的变量
    var params = '';
    for (const attr in defaults.data) {
        params += attr + '=' + defaults.data[attr] + '&';
    }
    /*
    要将参数处理成这个格式
    {name:'zhangsang',age=18}
    name=zhangsang&age=18
    */
    // 截取字符串最后一个
    params = params.substr(0, params.length - 1);

    // 判断请求方式
    if (defaults.type == 'GET') {
        // 拼接参数
        defaults.url = defaults.url + '?' + params;
    }
    // 配置Ajax对象
    xhr.open(defaults.type, defaults.url);
    // 如果是post请求
    if (defaults.type == 'POST') {
        // 用户希望向服务器端请求的参数的数据类型
        var contnetType = defaults.herder['Content - Type'];
        // 配置请求参数格式类型
        xhr.setRequestHeader('Content-Type', contnetType);
        // 判断用户希望传递的数据类型
        // 如果为json
        if (contnetType === 'application/json') {
            // 向服务器端传递json数据格式的参数
            xhr.send(JSON.stringify(defaults.data))
        } else {
            // 向服务器传递普通类型的请求参数
            xhr.send(params)
        }

    } else {
        // 直接发送请求
        xhr.send()
    }
    // 发送请求
    xhr.send();
    // 监听onload事件
    // 当xhr对象接受完响应数据后出发
    xhr.onload = function() {
        // 获取响应头中的数据
        var ContenType = xhr.getResponseHeader('Content-Type');
        // 服务器端返回的数据
        var responseText = xhr.responseText;
        // 如果响应头类型中包含application/json
        if (ContenType.includes('application/json')) {
            // 将Json字符串转成 Json对象
            JSON.parse(responseText)
        }
        // 当状态码等于200的时候，交出xhr对象获得更多信息
        if (xhr.status === 200) {
            // 请求成功调用成功的处理函数
            success(responseText, xhr)
        } else {
            // 请求失败调用失败的含糊，
            error(responseText, xhr)
        }
    }
}

ajax({
        type: 'get', //请求方式
        url: '01.html', //请求地址
        data: { //请求参数
            name: 'zhaangsahng',
            age: 18
        },
        herder: { //请求参数类型
            'Content - Type': 'application/x-www-form/urlencoded'
        },
        success: function(data) { //成功则调用  data参数哪来的？
            console.log(data, xhr)
        },
        error: function(data) { //失败则调用
            console.log(data, xhr)
        }

    })
    /*
        请求参数要考虑的问题
            1请求参数的位置
            将请求参数传递到ajax函数内部，在函数内部根据请求方式的不同放在不同的位置
                post放在 send()中
                get放在地走栏中

            2.请求格式的问题
            application/x-www-form-urlencoded
                name=shangsang&age=18
            application/json
                {name:'zhangsang,age:18'}
            传递对象数据类型对调用

    */