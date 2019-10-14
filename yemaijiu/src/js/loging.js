(function () {
    let
        sqlid = 'localhost',//主机id名 默认localhost
        sqlname = 'root',//账号 默认root
        sqlpassword = 'root',//密码 默认root
        tablename = 'yemaijiu',//表格名字⚠️ 默认guestbook
        table = 'yonghu',//表 
        tabletjone = 'idname',//表头名 及是 条件1
        tabletjtow = 'password'//表头名 及是 条件2

        ;

    $("#loging").click(() => {
        let
            sqlid = 'localhost',//主机id名 默认localhost
            sqlname = 'root',//账号 默认root
            sqlpassword = 'root',//密码 默认root
            tablename = 'yemaijiu',//表格名字⚠️ 默认guestbook
            table = 'yonghu',//表 
            tabletjone = 'idname',//表头名 及是 条件1
            tabletjtow = 'password'//表头名 及是 条件2

            ;
        let
            pdone = false,
            zhione = $('#idname').val(),
            zhitow = $('#password').val()

            ;
        ajax({

            type: 'get',
            url: '../api/sql.php',
            date: {
                zhixing: 'chaxun',//所要 执行 的功能！重要⚠️
                table,//查询内表名
                tabletjone,//tj条件
                tabletjtow,
                zhione,//值
                zhitow,
                tablename
            },
            success: function (baobao) {
                let neirong = JSON.parse(baobao);
                console.log(neirong)
                if (neirong[0]) {
                    alert('登陆成功')
                    let cc = 3;
                    let days = new Date();
                    days.setTime(days.getTime() + cc * 24 * 60 * 60 * 1000)
                    document.cookie = `uid=${neirong[0].serial};expires=${days.toGMTString()}`;
                    document.cookie = `username=${neirong[0].idname};expires=${days.toGMTString()}`;
                    // window.location.href = '../shouye.html?=' + '123';
                    location.href = `../shouye.html?idname=` + `${neirong[0].idname}`




                } else {
                    alert('登陆失败；账号或密码错误')
                }
            }
        })
    })


})()