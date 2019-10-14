
//登陆
(function () {

    let bao = document.cookie;
    let xia = bao.split('; ');
    for (i = 0; i < xia.length; i++) {
        let che = xia[i].split('=')
        if (che[0] == 'idname') {
            $('._login').css('display', 'none')
            $('._enroll').css('display', 'none')
            $('.idname1').css('display', 'block')
            $('.idname2').css('display', 'block')
            $('#logout2').css('display', 'block')
            $('#logout').css('display', 'block')
            $('.idname1').html('欢迎' + che[1])

            function clearAllCookie() {
                var keys = document.cookie.match(/[^ =; ]+(?=\=)/g);
                if (keys) {
                    for (var i = keys.length; i--;)
                        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
                }
                location.href = '../html/details.html'

            }
            // }
            $('#logout').click(() => {
                // tuichu()
                clearAllCookie();

            });
            $('#logout2').click(() => {
                clearAllCookie();
                // tuichu()
            });

        }
    }

})();
//end登陆

//数据渲染
(function () {
    // let bao = window.location.href
    // let xia = bao.split('?')[1]
    // let ron = xia.split(';')
    let bao = document.cookie;
    let xia = bao.split('; ');
    for (i = 0; i < xia.length; i++) {
        let che = xia[i].split('=')[0]
        if (che == 'xuhao') {

            let mo = xia[i].split('=')[1]
            // console.log(mo)

            let
                tablename = 'yemaijiu',//表格名字⚠️ 默认guestbook
                table = 'shuju',//表 
                tabletjone = 'xuhao'//表头名 及是 条件1

                ;
            let
                pdone = false,
                zhione = mo
                ;
            ajax({

                type: 'get',
                url: '../api/sql.php',
                date: {
                    zhixing: 'chaxun',//所要 执行 的功能！重要⚠️
                    table,//查询内表名
                    zhione,
                    tabletjone,
                    tablename
                },
                success: function (baobao) {
                    let html = '', html2 = '';
                    let neirong = JSON.parse(baobao);
                    // console.log(neirong)
                    // console.log(neirong[0].img_src)

                    // ${neirong.img_src}
                    // $('.main').html(`
                    // `)
                    $('.tpp1').attr('src', `${neirong[0].img_src}`)
                    $('.tpp2').attr('src', `${neirong[0].img_src}`)
                    $('.tpp3').attr('src', `${neirong[0].img_src}`)
                    $('.idname').html(`${neirong[0].name}`)
                    $('.jiage').html(`${neirong[0].jiage}`)
                    $('.jiaru').attr('xuhao', `${neirong[0].xuhao}`)
                    // console.log()

                }

            })

        }
    }


})();
//end数据渲染

//放大镜
(function () {
    $('.chuanti').mouseover(() => {
        $('.zhezhao').show();
        $('.bigbox').show();
    })
    $('.chuanti').mouseout(() => {
        $('.zhezhao').hide();
        $('.bigbox').hide();
    })


    $('.chuanti').mousemove(function (e) {
        var one = e.pageX - $(".littlebox").offset().left - ($(".zhezhao").width() / 2)
        var tow = e.pageY - $(".littlebox").offset().top - ($(".zhezhao").height() / 2)
        // console.log(one, tow)
        if (one < 0) {
            one = 0
        }
        if (one > $(this).width() - $('.zhezhao').width()) {
            one = $(this).width() - $('.zhezhao').width()
        }
        if (tow < 0) {
            tow = 0
        }
        if (tow > $(this).height() - $('.zhezhao').height()) {
            tow = $(this).height() - $('.zhezhao').height()
        }
        $('.zhezhao').css({
            'left': one,
            'top': tow
        })
        var pX = one / ($(".chuanti").width() - $(".zhezhao").width())
        var pY = tow / ($(".chuanti").height() - $(".zhezhao").height())
        $(".bigbox img").css({
            "left": -pX * ($(".bigbox img").width() - $(".bigbox").width()),
            "top": -pY * ($(".bigbox img").height() - $(".bigbox").height())
        })

    })

})();
//edn放大镜


(function () {
    $('.jia').click(function () {
        $('.zhi').val(`${$('.zhi').val() * 1 + 1}`)

    })
    $('.jian').click(function () {
        $('.zhi').val(`${$('.zhi').val() * 1 - 1}`)
        if ($('.zhi').val() <= 1) {
            $('.zhi').val('1')
        }
    })
    $('.zhi').blur(function () {
        if ($('.zhi').val() <= 1) {
            $('.zhi').val('1')
        }
    })

    $('.jiaru').click(function () {
        let xuhao, idname, shuliang, name, img_src, jiage;

        let bao = document.cookie;
        let xia = bao.split('; ');

        for (i = 0; i < xia.length; i++) {
            let che = xia[i].split('=');
            if (che[0] == 'idname') {
                idname = che[1]
            }
            if (che[0] == 'xuhao') {
                xuhao = che[1]
            }
        }
        shuliang = $('.zhi').val();
        name = $('.idname').html();
        img_src = $('.tpp1').attr('src');
        jiage = $('.jiage').html();
        if (idname) {
            console.log(idname, xuhao, name, img_src, shuliang, jiage)

            function addno(idname, xuhao, name, img_src, shuliang, jiage) {
                let
                    tablename = 'yemaijiu',//表格名字⚠️ 默认guestbook
                    table = 'gowuche',//表 
                    tabletjone = 'idname',//表头名 及是 条件1
                    tabletjtow = 'xuhao',//表头名 及是 条件2
                    tabletjthree = '`name`',//表头名 及是 条件3
                    tabletjfour = 'img_src',//表头名 及是 条件4
                    tabletjfive = 'shuliang',//表头名 及是 条件5
                    tabletjsix = 'jiage'//表头名 及是 条件6
                    ;
                let
                    zhione = idname,
                    zhitow = xuhao,
                    zhithree = name,
                    zhifour = img_src,
                    zhifive = shuliang,
                    zhisix = jiage
                    ;
                ajax({

                    type: 'get',
                    url: '../api/sql.php',
                    date: {
                        zhixing: 'xieru',//所要 执行 的功能！重要⚠️
                        table,//查询内表名
                        tabletjone,//tj条件
                        tabletjtow,
                        tabletjthree,
                        tabletjfour,
                        tabletjfive,
                        tabletjsix,
                        zhione,//值
                        zhitow,
                        zhithree,
                        zhifour,
                        zhifive,
                        zhisix,
                        tablename
                    },
                    success: function (baobao) {
                        let neirong = JSON.parse(baobao);
                        console.log(neirong)
                        if (neirong) {
                            alert('成功加入购物车')


                        } else {
                            alert('加入失败')
                        }
                    }
                })

            }
            function addto(idname, xuhao, shuliang) {
                var
                    tablename = 'yemaijiu',//表格名字⚠️ 默认guestbook
                    table = 'gowuche',//表 
                    tabletjone = 'idname',//表头名 及是 条件1
                    tabletjtow = 'xuhao',//表头名 及是 条件2
                    tabletjthree = '`shuliang`'//表头名 及是 条件3
                    ;
                var
                    zhione = idname,
                    zhitow = xuhao,
                    zhithree = shuliang
                    ;
                ajax({

                    type: 'get',
                    url: '../api/sql.php',
                    date: {
                        zhixing: 'pipei',//所要 执行 的功能！重要⚠️
                        table,//查询内表名
                        tabletjone,//tj条件
                        tabletjtow,
                        zhione,//值
                        zhitow,
                        tablename
                    },
                    success: function (baobao) {
                        let neirong = JSON.parse(baobao);
                        // console.log(neirong)
                        if (neirong[0]) {
                            console.log(neirong[0].paiming)
                            var tabletjone = 'paiming';
                            var zhione = neirong[0].paiming;
                            var tabletjtow = 'shuliang';
                            var zhitow = neirong[0].shuliang * 1 + shuliang * 1;
                            ajax({

                                type: 'get',
                                url: '../api/sql.php',
                                date: {
                                    zhixing: 'gai',//所要 执行 的功能！重要⚠️
                                    table,//查询内表名
                                    tabletjone,//tj条件
                                    tabletjtow,
                                    zhione,//值
                                    zhitow,
                                    tablename
                                },
                                success: function (baobao) {

                                }
                            })

                            alert('成功加入购物车')


                        } else {
                            // alert('加入失败')
                            addno(idname, xuhao, name, img_src, shuliang, jiage);
                        }
                    }
                })
            }


            addto(idname, xuhao, shuliang)




        } else {
            alert('请先登陆')
            window.location.href = "../html/loging.html"
            console.log('no')
        }
    })
})();
