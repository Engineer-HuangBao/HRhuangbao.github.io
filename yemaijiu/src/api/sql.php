<?php
//-链接数据库区域------------------------------------------------------------------
/*|*/$sqlid = isset($_REQUEST['sqlid'])?$_REQUEST['sqlid']:'localhost';
/*|*/$sqlname = isset($_REQUEST['sqlname'])?$_REQUEST['sqlname']:'root';
/*|*/$sqlpassword = isset($_REQUEST['sqlpassword'])?$_REQUEST['sqlpassword']:'root';
/*|*/$tablename = isset($_REQUEST['tablename'])?$_REQUEST['tablename']:'guestbook';
/*|*///接收数据库名字
/*|*/$servername = $sqlid;
/*|*/$username= $sqlname;
/*|*/$password = $sqlpassword;
/*|*/$dbname = $tablename;
/*|*/$conn = new mysqli($servername,$username,$password,$dbname);
/*|*/if($conn->connect_error) {
/*|*/    //证明连接失败
/*|*/   die("连接失败: " . $conn->connect_error);
/*|*/}else{
/*|*/    // echo '连接成功';
/*|*/}
//-链接数据库区域------------------------------------------------------------------

//-接收所要执行的指令---------------------------------------------------------------
/*|*/$zhixing = isset($_REQUEST['zhixing'])?$_REQUEST['zhixing']:'';
/*|*///注意！查询⚠️ $zhixing =  chaxun； //执行查询 返回查询搜索到到数据字符串
/*|*///注意！插入⚠️ $zhixing =  charu； //执行插入数据 返回 1 0
/*|*///注意！匹配⚠️ $zhixing =  pipei； //执行匹配项目 返回 1 0
/*|*///注意！⚠️ $zhixing =  ； //执行查询
/*|*///注意！⚠️ $zhixing =  ； //执行查询
//-链接数据库区域------------------------------------------------------------------


//-数据接收------------------------------------------------------------------
/*|*/$table = isset($_REQUEST['table'])?$_REQUEST['table']:'';//所要查询的内表名
/*|*/$tabletjone = isset($_REQUEST['tabletjone'])?$_REQUEST['tabletjone']:'';//所要查询的表头名 条件
/*|*/$tabletjtow = isset($_REQUEST['tabletjtow'])?$_REQUEST['tabletjtow']:'';//所要查询的表头名 条件
/*|*/$tabletjthree = isset($_REQUEST['tabletjthree'])?$_REQUEST['tabletjthree']:'';//所要查询的表头名 条件
/*|*/$tabletjfour = isset($_REQUEST['tabletjfour'])?$_REQUEST['tabletjfour']:'';//所要查询的表头名 条件
/*|*/$tabletjfive = isset($_REQUEST['tabletjfive'])?$_REQUEST['tabletjfive']:'';//所要查询的表头名 条件
/*|*/$tabletjsix = isset($_REQUEST['tabletjsix'])?$_REQUEST['tabletjsix']:'';//所要查询的表头名 条件
//-数据接收------------------------------------------------------------------


//-数据接收2------------------------------------------------------------------
/*|*/$zhione = isset($_REQUEST['zhione'])?$_REQUEST['zhione']:'';//值1
/*|*/$zhitow = isset($_REQUEST['zhitow'])?$_REQUEST['zhitow']:'';//值2
/*|*/$zhithree = isset($_REQUEST['zhithree'])?$_REQUEST['zhithree']:'';//值2
/*|*/$zhifour = isset($_REQUEST['zhifour'])?$_REQUEST['zhifour']:'';//值2
/*|*/$zhifive = isset($_REQUEST['zhifive'])?$_REQUEST['zhifive']:'';//值2
/*|*/$zhisix = isset($_REQUEST['zhisix'])?$_REQUEST['zhisix']:'';//值2
//-数据接收2------------------------------------------------------------------



//----------------------biaoge--查询---------------------------
/*|*/if($zhixing=='biaoge'){
/*|*/   $sql = "SELECT * FROM $table ";
/*|*/   $rx = $conn->query($sql);
/*|*/   $sj = $rx->fetch_all(MYSQLI_ASSOC);
/*|*/   echo json_encode($sj,JSON_UNESCAPED_UNICODE);
/*|*/}
//----------------------biaoge--查询---------------------------


//----------------------chaxun--查询---------------------------
/*|*/if($zhixing=='chaxun'){
/*|*/   $sql = "SELECT * FROM $table WHERE $tabletjone LIKE '$zhione'";
/*|*/   $rx = $conn->query($sql);
/*|*/   $sj = $rx->fetch_all(MYSQLI_ASSOC);
/*|*/   echo json_encode($sj,JSON_UNESCAPED_UNICODE);
/*|*/}
//----------------------chaxun--查询---------------------------

//----------------------chaxun--查询---------------------------
/*|*/if($zhixing=='xianzhi'){
/*|*/   $sql = "SELECT * FROM $table LIMIT $zhione,$zhitow;";
/*|*/   $rx = $conn->query($sql);
/*|*/   $sj = $rx->fetch_all(MYSQLI_ASSOC);
/*|*/   echo json_encode($sj,JSON_UNESCAPED_UNICODE);
/*|*/}
//----------------------chaxun--查询---------------------------


//----------------------charu---插入---------------------------
/*|*/if($zhixing=='charu'){
/*|*/   $sql = "INSERT INTO $table($tabletjone,$tabletjtow)
/*|*/   VALUES('$zhione','$zhitow')";
/*|*/   $rx = $conn->query($sql);
/*|*/   echo $rx;
/*|*/}
//----------------------charu---插入---------------------------

//----------------------xieru---插入---------------------------
/*|*/if($zhixing=='xieru'){
/*|*/   $sql = "INSERT INTO gowuche($tabletjone,$tabletjtow,$tabletjthree,$tabletjfour,$tabletjfive,$tabletjsix)
/*|*/   VALUES('$zhione','$zhitow','$zhithree','$zhifour','$zhifive','$zhisix')";
/*|*/   $rx = $conn->query($sql);
/*|*/   echo $rx;
/*|*/}
//----------------------charu---插入---------------------------


//----------------------pipei---匹配---------------------------
/*|*/if($zhixing=='pipei'){
/*|*/   $sql = "SELECT * FROM $table WHERE
/*|*/   $tabletjone='$zhione' AND $tabletjtow='$zhitow'" ;
/*|*/   $rx = $conn->query($sql);
/*|*/   $sj = $rx->fetch_all(MYSQLI_ASSOC);
/*|*/   echo json_encode($sj,JSON_UNESCAPED_UNICODE);
/*|*/}
//----------------------pipei---匹配---------------------------

//----------------------gai------改---------------------------
/*|*/if($zhixing=='gai'){
/*|*/   $sql = "UPDATE $table SET $tabletjtow=$zhitow WHERE $tabletjone=$zhione" ;
/*|*/   $rx = $conn->query($sql);
/*|*/   echo $rx;
/*|*/}
//----------------------gai------改---------------------------


//----------------------shan------改---------------------------
/*|*/if($zhixing=='shan'){
/*|*/   $sql = "DELETE FROM $table WHERE $tabletjone=$zhione" ;
/*|*/   $rx = $conn->query($sql);
/*|*/   echo $rx;
/*|*/}
//----------------------shan------改---------------------------



// //----------------------pipei---匹配---------------------------
// /*|*/if($zhixing=='pipei'){
// // /*|*/   $sql = "SELECT * FROM $table WHERE
// // /*|*/   `$tabletjone`='$zhione' AND `$tabletjtow`='$zhitow'";
//         $sql = "SELECT * FROM users WHERE username='bao' AND password='bao'";
// /*|*/   $rx = $conn->query($sql);

// /*|*/   echo $rx;
// /*|*/}
// //----------------------pipei---匹配---------------------------



// let
// sqlid = 'localhost',//主机id名 默认localhost
// sqlname = 'root',//账号 默认root
// sqlpassword = 'root',//密码 默认root
// tablename = 'yemaijiu',//表格名字⚠️ 默认guestbook
// table = 'yonghu',//表 
// tabletjone = 'idname',//表头名 及是 条件1
// tabletjtow = 'password'//表头名 及是 条件2

// ;

// $("#loging").click(() => {
// let
//     sqlid = 'localhost',//主机id名 默认localhost
//     sqlname = 'root',//账号 默认root
//     sqlpassword = 'root',//密码 默认root
//     tablename = 'yemaijiu',//表格名字⚠️ 默认guestbook
//     table = 'yonghu',//表 
//     tabletjone = 'idname',//表头名 及是 条件1
//     tabletjtow = 'password'//表头名 及是 条件2

//     ;
// let
//     pdone = false,
//     zhione = $('#idname').val(),
//     zhitow = $('#password').val()

//     ;
// ajax({

//     type: 'get',
//     url: '../api/sql.php',
//     date: {
//         zhixing: 'chaxun',//所要 执行 的功能！重要⚠️
//         table,//查询内表名
//         tabletjone,//tj条件
//         tabletjtow,
//         zhione,//值
//         zhitow,
//         tablename
//     },
//     success: function (baobao) {
//         let neirong = JSON.parse(baobao);
//         console.log(neirong)
//         if (neirong[0]) {
//             alert('登陆成功')
//             let cc = 3;
//             let days = new Date();
//             days.setTime(days.getTime() + cc * 24 * 60 * 60 * 1000)
//             document.cookie = `uid=${neirong[0].serial};expires=${days.toGMTString()}`;
//             document.cookie = `username=${neirong[0].idname};expires=${days.toGMTString()}`;
//             // window.location.href = '../shouye.html?=' + '123';
//             location.href = `../shouye.html?idname=` + `${neirong[0].idname}`




//         } else {
//             alert('登陆失败；账号或密码错误')
//         }
//     }
// })
// })









?>