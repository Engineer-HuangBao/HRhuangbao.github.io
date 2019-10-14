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
                // var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
                var bao = document.cookie;
                var moc = bao.split('; ');
                for (i = 0; i < moc.length; moc++) {
                    console.log(moc[i].split('=')[0])
                    let keys = moc[i].split('=')[0]
                    if (keys == 'idname') {
                        console.log('123')
                        if (keys) {
                            for (var i = keys.length; i--;)
                                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
                        }
                        location.href = '../html/gowuche.html'
                    }
                };


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
//渲染
(function () {
    let okone = false;
    var cookieone = document.cookie;
    var cookietwo = cookieone.split('; ');

    for (i = 0; i < cookietwo.length; i++) {
        if (cookietwo[i].split('=')[0] == 'idname') {
            // console.log('yes')
            okone = cookietwo[i].split('=')[1]
            break;
        } else {
            // console.log(cookietwo)
            okone = false;
            // console.log('no')
        }
    }//判断是否登陆




    function aajjkkxx(bao) {

        // console.log(bao.zhione)
        let
            tablename = 'yemaijiu',//表格名字⚠️ 默认guestbook
            table = 'gowuche',//表 
            tabletjone = `${bao.tabletjone}`//表头名 及是 条件1
            ;
        let
            pdone = false,
            zhione = `${bao.zhione}`
            ;
        ajax({

            type: 'get',
            url: '../api/sql.php',
            date: {
                zhixing: `${bao.zhixing}`,//所要 执行 的功能！重要⚠️
                tablename,
                table,//查询内表名
                tabletjone,//tj条件
                zhione//值
            },
            success: function (baobao) {

                if (bao.panduan == 'panduanone') {
                    panduanone(baobao)
                    // console.log('1')
                }
                if (bao.panduan == 'shanchu') {
                    shanchu(baobao)
                    // console.log('2')
                }

            }

            // console.log(baobao)

        });
        // console.log(baobao)

    }

    if (okone) {
        //已经登陆
        xuanruan()
        function xuanruan() {
            aajjkkxx({
                zhixing: 'chaxun',
                tabletjone: 'idname',
                zhione: `${okone}`,
                panduan: 'panduanone'
            })

        }


        function panduanone(jieshou) {
            let neirong = JSON.parse(jieshou);
            // console.log(neirong)
            let html = '';
            for (i = 0; i < neirong.length; i++) {
                html += `<li class="content" paiming=${neirong[i].paiming}>
                            <div>
                                <ul>
                                        <li class="C-lione"><input type="checkbox" class="littlebtn" name="${neirong[i].paiming}" id=""></li>
                                        <li class="C-litwo"><img src="${neirong[i].img_src}" alt=""><span>${neirong[i].name}</span></li>
                                        <li class="C-lithree">¥<span class="danjia">${neirong[i].jiage}</span></li>
                                        <li class="C-lifour">
                                            <input type="button" class="jian" value="-">
                                            <input type="text" class="zhi" value="${neirong[i].shuliang}">
                                            <input type="button" class="jia" value="+">
                                        </li>
                                        <li class="C-lifive">¥<span class="zongjia">${neirong[i].jiage * neirong[i].shuliang}</span></li>
                                        <li class="C-lisix">删除</li>
                                </ul>
                                
                            </div>
                        </li>
            `

            }
            $('.MMBT-content').html(html)


        }

    } else {
        alert('请先登陆')
    }


    function shanchu(jieshou) {
        console.log(jieshou)
        xuanruan()
    }


    $('.MMBT-content').on('click', '.C-lisix', function () {
        // $(this).parent().parent().parent().remove()
        let bao = $(this).parent().find('.littlebtn').attr('name');
        console.log(bao)


        aajjkkxx({
            zhixing: 'shan',
            tabletjone: 'paiming',
            zhione: `${bao}`,
            panduan: 'shanchu'
        })




    })


})();
//end渲染   
//工能
(function () {


    function jian(_this) {
        $(_this).next().val(`${$(_this).next().val() * 1 - 1}`)
        if ($(_this).next().val() < 1) {
            $(_this).next().val('1')
        }

        let shuliang = $(_this).next().val()
        let danjia = $(_this).parent().prev().find('.danjia').html();
        $(_this).parent().next().find('.zongjia').html(`${shuliang * danjia}`)

    }
    function jia(_this) {
        $(_this).prev().val(`${$(_this).prev().val() * 1 + 1}`)

        let shuliang = $(_this).prev().val()
        let danjia = $(_this).parent().prev().find('.danjia').html();
        $(_this).parent().next().find('.zongjia').html(`${shuliang * danjia}`)

    }

    function chakan() {
        $('.MMBT-content').find('.littlebtn');
        // console.log($('.MMBT-content').find('.littlebtn').is(":checked").html());
        let bao = $('.MMBT-content').find('.littlebtn');
        let mob = 0;
        let jiag = 0;
        for (i = 0; i < bao.length; i++) {
            if (bao[i].checked == true) {
                console.log(bao[i]);
                mob++

            }

        }
        // console.log(mob);
        if (mob == bao.length) {
            console.log('yes')
            $('.bigbtn').prop('checked', true)
        } else {
            $('.bigbtn').prop('checked', false)
        }


    }

    function panduan() {
        $('.MMBT-content').find('littlebtn');
    }


    $('.MMBT-content').on('click', '.jian', function () {
        jian(this)//减
    })
    $('.MMBT-content').on('click', '.jia', function () {
        jia(this)//加
    })

    $('.MMBT-content').on('click', '.littlebtn', function () {
        // $(this).attr('checked', false)

        console.log($(this).is(":checked"));

        chakan()

        // if ($(this).is(":checked")) {
        //     console.log('yes');

        // } else {
        //     console.log('no');

        // }

    })

    $('.MBBF-left').on('click', '.bigbtn', function () {
        let zhuangtai = $(this).is(":checked")
        $('.MMBT-content').find('.littlebtn').prop('checked', zhuangtai)
        chakan()
        console.log(zhuangtai);



    })





})();
//end工能