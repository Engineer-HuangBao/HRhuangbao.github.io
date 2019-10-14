function ajax(bao) {
    let shuju = {
        date: '',
        asyn: true,
        error: null,
    }
    Object.assign(shuju, bao)
    let xixi = new XMLHttpRequest();

    if (shuju.type.toLowerCase() == 'get') {

        if (shuju.date) {
            shuju.url = shuju.url + '?' + objToStr(shuju.date);
        }
        xixi.open('get', shuju.url, shuju.asyn);
        xixi.send(shuju.error);

    } else {
        xixi.open('post', shuju.url, shuju.asyn)
        let date = objToStr(shuju.date)
        xixi.setRequestHeader('content-type', "application/x-www-form-urlencoded");//请求头
        xixi.send(date)
    }

    xixi.onreadystatechange = () => {

        if (xixi.readyState == 4) {
            if (xixi.status == 200) {
                shuju.success(xixi.responseText)
            }
        } else {
            //失败
            if (shuju.error) {
                shuju.error(xixi.status);//实参：http状态码
            }
        }
    }

}


//封装函数：参数转成对象
function strToObj(str) {
    var obj = {};
    var arr1 = str.split('; ');//["name=apple", "price=8999"]
    for (var i in arr1) {
        var arr2 = arr1[i].split('=');
        obj[arr2[0]] = arr2[1];
    }
    return obj;
}

function objToStr(obj) {
    //对象转成参数   {name:apple,price:8999}  name=apple&price=8999
    var str = '';
    for (var key in obj) {
        str += key + '=' + obj[key] + '&';//name=apple&price=8999&
    }
    return str.slice(0, -1);
}


