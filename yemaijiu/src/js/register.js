(function () {
    let okk = false,
        okk2 = false;
    let xx = '1';
    $('.chunfang').html(yanzhengma(4)).click(function () {
        $('.chunfang').html(yanzhengma(4))

        xx = $('#span1').html() + $('#span2').html() + $('#span3').html() + $('#span4').html();
        console.log(xx)
    })

    $('#neirong').blur(function () {
        if ($('#neirong').val().trim() == xx) {
            okk = true;
            $('.tishi').css('display', 'none')
        } else {
            okk = false;
            $('.tishi').css('display', 'block')

        }

    })

    $('#password2').blur(() => {
        if ($('#password2').val().trim()) {
            if ($('#password1').val().trim() == $('#password2').val().trim()) {
                okk2 = true;
                $('.tishi2').css('display', 'none')
                console.log("123")
            } else {
                okk2 = false;
                $('.tishi2').css('display', 'block')
                console.log("3")
            }
        }

    })



    $('#zhuche').click(() => {
        if (okk, okk2) {
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
                zhitow = $('#password2').val()

                ;
            ajax({

                type: 'get',
                url: '../api/sql.php',
                date: {
                    zhixing: 'charu',//所要 执行 的功能！重要⚠️
                    table,//查询内表名
                    tabletjone,//tj条件
                    tabletjtow,
                    zhione,//值
                    zhitow,
                    tablename
                },
                success: (baobao) => {
                    if (baobao) {
                        alert('注册成功')
                        location.href = '../html/loging.html'
                    } else {
                        alert('注册失败')

                    }
                }
            })

        }
    })



})()
