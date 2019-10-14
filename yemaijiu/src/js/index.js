//数据渲染
(function () {
    // $('shichuang')
    // console.log('moc')
    let
        sqlid = 'localhost',//主机id名 默认localhost
        sqlname = 'root',//账号 默认root
        sqlpassword = 'root',//密码 默认root
        tablename = 'yemaijiu',//表格名字⚠️ 默认guestbook
        table = 'shuju',//表 
        tabletjone = 'idname',//表头名 及是 条件1
        tabletjtow = 'password'//表头名 及是 条件2

        ;
    let
        pdone = false,
        zhione = 0,
        zhitow = 30

        ;
    ajax({

        type: 'get',
        url: '../src/api/sql.php',
        date: {
            zhixing: 'xianzhi',//所要 执行 的功能！重要⚠️
            table,//查询内表名
            zhione,
            zhitow,
            tablename
        },
        success: function (baobao) {
            let html = '';
            let xiaohtml = ``;
            let neirong = JSON.parse(baobao);
            var i = 0;
            let chen = 5;
            console.log(neirong)
            for (j = 0; j <= 5; j++) {
                xiaohtml = '';
                // console.log(jsd)
                for (i; i < chen; i++) {
                    xiaohtml += `<li xuhao='${neirong[i].xuhao}'>
                    <div class="CMU-top">
                        <img src="${neirong[i].img_src}" alt="">
                    </div>
                    <div class="CMU-bottom">
                        <h5>${neirong[i].name}</h5>
                <p>抢购价格：<span>¥${neirong[i].jiage}</span></p>
                    </div>
                </li>`

                }

                html += `<ul class='CM_ul${j}'>
                ${xiaohtml}
                </ul>`
                console.log(i)
                // bao = bao + 5;
                chen += 5;
            }

            $('.shichuang').html(html)

        }
    })

    $('.shichuang').on('click', 'ul li', function () {
        console.log()
        let bao = document.cookie;
        let xia = bao.split(';')
        for (i = 0; i < xia.length; i++) {
            var che = xia[i].split('=')
            if (che[0] == 'idname') {
                console.log('yes')
                let cc = 3;
                let days = new Date();
                days.setTime(days.getTime() + cc * 24 * 60 * 60 * 1000)
                document.cookie = `xuhao=${$(this).attr("xuhao")}; expires = ${days.toGMTString()} `
                location.href = `../src/html/details.html`;
                /*?${xia[i]};xuhao=${$(this).attr("xuhao")*/
                return;
            } else {
                console.log('no')
                let cc = 3;
                let days = new Date();
                days.setTime(days.getTime() + cc * 24 * 60 * 60 * 1000)
                document.cookie = `xuhao=${$(this).attr("xuhao")}; expires = ${days.toGMTString()} `
                location.href = `../src/html/details.html`;
            }
        }

    })


})();
//end数据渲染


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
                location.href = '../src/shouye.html'

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

        } else {
            let ba = window.location.href.split('?')[1]
            if (ba) {
                let cc = 3;
                let days = new Date();
                days.setTime(days.getTime() + cc * 24 * 60 * 60 * 1000)
                document.cookie = `${ba.split('=')[0]}=${ba.split('=')[1]}; expires = ${days.toGMTString()} `;
                if (cha('idname')) {
                    $('._login').css('display', 'none')
                    $('._enroll').css('display', 'none')
                    $('.idname1').css('display', 'block')
                    $('.idname2').css('display', 'block')
                    $('#logout2').css('display', 'block')
                    $('#logout').css('display', 'block')
                    // function tuichu() {
                    // let cc = -1;
                    // let days = new Date();
                    // days.setTime(days.getTime() + cc * 24 * 60 * 60 * 1000)
                    // document.cookie = `${ba.split('=')[0]}=${ba.split('=')[1]}; expires = ${days.toGMTString()} `;
                    // location.href = '../src/shouye.html'
                    function clearAllCookie() {
                        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
                        if (keys) {
                            for (var i = keys.length; i--;)
                                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
                        }
                        location.href = '../src/shouye.html'

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
                } else {
                    console.log('4')

                }
            }

            function cha(name) {
                let xi = document.cookie.split(";");
                let ok = false;
                for (i = 0; i < xi.length; i++) {

                    let ce = xi[i].split('=')[0];
                    ok = false;
                    if (ce == name) {
                        return ok = true;
                        console.log(ce)

                    }

                }
            }

        }
    }




})();
//end登陆

//轮播图
(function () {
    //轮播图
    let baobao = new lunbotu({
        name: "#banner",
        iw: 1425,
        ih: 500,
        imgdata: ['../src/img/lunbotu1.jpg', '../src/img/lunbotu2.jpg',
            '../src/img/lunbotu3.jpg',
            '../src/img/lunbotu4.jpg'],
        time: 3
    });
    // console.log(baobao)
})();
//end轮播图

//选项卡
(function () {
    $('.CMOL-bottom').find('.CMOLB-top span').hover(function () {
        $('.CMOL-bottom').find('ul').attr('class', 'hidden').eq($(this).index()).attr('class', 'no')
        $('.CMOL-bottom').find('.CMOLB-top span').attr('class', '').eq($(this).index()).attr('class', 'CMOLBT-yangshi')
    })

    let btn = true;
    $('.CMOL-btn').click(function () {
        if (btn) {
            $('.CMOL-top').css('display', 'none');
            $('.CMOL-middle').css('height', '205px')
            $('.CMOL-btn').css('top', '154px').html('+')
            btn = !btn;

        } else {
            $('.CMOL-top').css('display', 'block');
            $('.CMOL-middle').css('height', '0px')
            $('.CMOL-btn').css('top', '2px').html('-')
            btn = !btn;

        }
    })

})();
//end选项卡

//楼层跳跃
(function () {
    $('.CMOR-top ul').find('li').hover(function () {
        $('.shichuang').css('top', `${$(this).index() * 1 * (-322)}px`)
        $('.CMOR-top ul').find('li').attr('class', '')
        $('.CMOR-top ul').find('li').eq($(this).index()).attr('class', 'activeone')
        // console.log($(this).index())
    })
})();
//end楼层跳跃

//第二个轮播图
(function () {

    let baobao = new lunbotu({
        name: "#CMOTM-middle",
        iw: 757,
        ih: 250,
        imgdata: ['../src/img/lunbotu1.jpg', '../src/img/lunbotu2.jpg',
            '../src/img/lunbotu3.jpg',
            '../src/img/lunbotu4.jpg'],
        time: 3
    });
})();


//垂直选项卡特效
(function () {
    $('#xuanxiangka').find('ul li').hover(function () {
        if ($(this).index() <= 2) {
            $('#xuanxiangka').find('ul li').attr('class', 'noo')
            $('#xuanxiangka').find('ul li').eq(0).attr('class', '')
            $('#xuanxiangka').find('ul li').eq(1).attr('class', '')
            $('#xuanxiangka').find('ul li').eq(2).attr('class', '')
            console.log('1')
        } else {
            $('#xuanxiangka').find('ul li').attr('class', 'noo')
            $('#xuanxiangka').find('ul li').eq(0).attr('class', '')
            $('#xuanxiangka').find('ul li').eq(1).attr('class', '')
            $('#xuanxiangka').find('ul li').eq($(this).index()).attr('class', '')
            console.log('2')

        }
        // console.log($(this).index())


    })
})()
//end垂直选项卡特效
