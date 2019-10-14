function yanzhengma(number) {//随机number数；
    var shuzi = '';//数组
    var baobao, boabao2, baobao3 = '';
    var span = 0;
    var xxx2 = "1234567890abcdef"
    var xxx = "zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP1234567890";
    for (i = 1; i <= number; i++) {
        var xixi = parseInt(Math.random() * xxx.length);
        baobao = xxx[xixi]
        var xuanzhuan = parseInt(Math.random() * 361);
        span++;

        shuzi += '<span id="span' + span + '" style="display: inline-block;transform:rotate(' + xuanzhuan + 'deg)">' + baobao + '</span>';
    }
    for (l = 1; l <= 6; l++) {
        var lianlian = parseInt(Math.random() * xxx2.length);
        // boabao2 = xxx2[lianlian]
        baobao3 += xxx2[lianlian];
    }
    baobao3 = '#' + baobao3 + '55';
    shuzi = '<div style="background:' + baobao3 + '">' + shuzi + '</div>'
    return shuzi;
}
