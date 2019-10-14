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
            table = 'shuju',//表 
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
                zhixing: 'biaoge',
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
                console.log(neirong[i])
                html += `<div class="neirong" id=oooll xuhao=${neirong[i].xuhao}>
                            <div class="bigtp">
                                <img src="${neirong[i].img_src}"
                                    alt="">
                                <div class="kuang">
                                    <div>
                                        内容1
                                    </div>
                                    <div>内容2</div>
                                </div>
                            </div>
                            <div class="littletp">
                                <img src="${neirong[i].img_src}"
                                    alt="">
                                <img src="${neirong[i].img_src}"
                                    alt="">
                                <img src="${neirong[i].img_src}"
                                    alt="">
                            </div>
                            <div class="bigdiv">
                                <div class="div1">
                                    <a href=""><b>¥${neirong[i].jiage}</b></a>
                                    <span>214人付款</span>
                                </div>
                                <p>${neirong[i].name}</p>
                                <div class="div2">
                                    <div>
                                        <hr>
                                        <hr>
                                        <hr>
                                    </div>
                                    <a href="">也买酒提供</a>
                                    <span>上海</span>

                                </div>
                                <div class="div3">
                                    <img src="../images/6EF1C0FA-10BF-4A4E-B1C3-C984E75B9872.png" alt="">
                                    <div class="div">热卖</div>
                                    <span><img src="../images/9C32B085-5584-4205-A115-E6D35FEC2FFE.png" alt=""></span>
                                </div>
                            </div>
                        </div>
            `

            }
            $('.centen').html(html)


        }

    } else {
        alert('请先登陆')
    }


    function shanchu(jieshou) {
        // console.log(jieshou)
        xuanruan()
    }


    // $('.MMBT-content').on('click', '.C-lisix', function () {
    //     // $(this).parent().parent().parent().remove()
    //     let bao = $(this).parent().find('.littlebtn').attr('name');
    //     console.log(bao)


    //     aajjkkxx({
    //         zhixing: 'shan',
    //         tabletjone: 'paiming',
    //         zhione: `${bao}`,
    //         panduan: 'shanchu'
    //     })




    // })


})();
//end渲染

(function () {
    $('.centen').on('click', '.neirong', function () {
        console.log($(this).attr('xuhao'));
        let bao = document.cookie;
        let xia = bao.split(';')
        for (i = 0; i < xia.length; i++) {
            var che = xia[i].split('=')
            if (che[0] == 'idname') {
                console.log('yes')
                let cc = 3;
                let days = new Date();
                days.setTime(days.getTime() + cc * 24 * 60 * 60 * 1000)
                document.cookie = `xuhao=${$(this).attr('xuhao')}; expires = ${days.toGMTString()} `
                location.href = `../html/details.html`;
                /*?${xia[i]};xuhao=${$(this).attr("xuhao")*/
                return;
            } else {
                console.log('no')
                let cc = 3;
                let days = new Date();
                days.setTime(days.getTime() + cc * 24 * 60 * 60 * 1000)
                document.cookie = `xuhao=${$(this).attr('xuhao')}; expires = ${days.toGMTString()} `
                location.href = `../html/details.html`;
            }
        }
    })
})();