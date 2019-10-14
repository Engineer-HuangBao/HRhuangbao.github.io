function lunbotu(tpshuju) {
    this.shuju = {
        iw: 400,
        ih: 300,
        time: 2
    }
    Object.assign(this.shuju, tpshuju);

    this.str = '';
    this.spanstr = '';
    this.timer = null;
    this.timertow = null;
    this.now = 0;
    this.jsq = 0;
    this.iw = 0;
    this.init();
}

lunbotu.prototype.init = function () {
    this.xuanran();
    this.zidong();
    this.daosuo();
    this.dianji();

}


lunbotu.prototype.xuanran = function () {
    // $(this.shuju.name).css("background", "red")
    //渲染轮播图
    $(this.shuju.name).width(this.shuju.iw);
    $(this.shuju.name).height(this.shuju.ih);

    this.shuju.imgdata.forEach((item, index) => {
        this.str += `<li><img src="${item}" alt=""></li>`;
        this.spanstr += `<span>${index + 1}</span>`;
    });

    $(this.shuju.name).find('.imglist ul').html(this.str);
    $(this.shuju.name).find('.light').html(this.spanstr);
    $(this.shuju.name).find('.light span').eq(0).addClass('active');
    this.iw = $(this.shuju.name).find('.imglist ul li').outerWidth();
    $(this.shuju.name).find('.imglist ul li:first').css('z-index', 2);
    $(this.shuju.name).find('.imglist ul li').eq(1).css('z-index', 1);
}

lunbotu.prototype.zidong = function () {
    //自动轮播
    this.timer = setInterval(() => {
        this.tupian();
    }, this.shuju.time * 1000);

}
lunbotu.prototype.tupian = function () {
    //图片轮播⬆️
    $(this.shuju.name).find('.imglist ul li').eq(this.now).animate({ 'z-index': 3 });
    //当层最高
    $(this.shuju.name).find('.imglist ul li').eq(this.now + 1).animate({ 'z-index': 2 });
    //下一层就绪
    $(this.shuju.name).find('.imglist ul li').eq(this.now + 1).css({ 'display': "block" });
    //下一层就绪
    $(this.shuju.name).find('.imglist ul li').eq(this.now - 1).animate({ 'z-index': 0 });
    //上一层重制
    $(this.shuju.name).find('.imglist ul li').eq(this.now).fadeOut("slow");
    //当层消失
    this.now++;
    this.jsq++;
    if (this.jsq == $(this.shuju.name).find('.imglist ul li').size() - 1) {
        //到达第三层时开启第一层
        $(this.shuju.name).find('.imglist ul li').eq(0).animate({ 'z-index': 1 });
        $(this.shuju.name).find('.imglist ul li').eq(0).css({ 'display': "block" });
    }
    if (this.now > $(this.shuju.name).find('.imglist ul li').size() - 1) {
        this.now = 0;
        this.jsq = 0;
        // $(this.shuju.name).find('.imglist ul li').eq(0).animate({ 'z-index': 1 });
        $(this.shuju.name).find('.imglist ul li').eq(0).css({ 'display': "block" });
    }
    this.genshui();

}
lunbotu.prototype.genshui = function () {
    $(this.shuju.name).find('.light span').eq(this.now).addClass('active').siblings().removeClass('active');

}

lunbotu.prototype.daosuo = function () {
    $(this.shuju.name).hover(() => {
        clearInterval(this.timer);
    }, () => {
        this.zidong()
    });
}
lunbotu.prototype.dianji = function () {
    let _this = this
    $(this.shuju.name).on('click', '.light span', function () {
        let index = $(this).index();
        _this.now = index;
        _this.jsq = index;
        $(_this.shuju.name).find('.imglist ul li').css({ 'display': "none" });
        $(_this.shuju.name).find('.imglist ul li').eq(index).css({ 'display': "block" });
        $(_this.shuju.name).find('.light span').eq(_this.now).addClass('active').siblings().removeClass('active');

    })

}














// function lunbotu(tpshuju) {
//     this.shuju = {
//         iw: 500,
//         ih: 300,
//         time: 2
//     }
//     Object.assign(this.shuju, tpshuju);
//     this.banner = document.getElementById(this.shuju.idd);
//     this.list = document.getElementsByClassName("imglist")[0];

//     this.data = this.shuju.imgdata;
//     this.list.style = `width:${this.shuju.iw}px;height:${this.shuju.ih}px;`;
//     this.banner.style = `width:${this.shuju.iw}px;height:${this.shuju.ih}px;`;



//     // $(this.imglist).html('喔喔喔喔喔')


//     this.init();

// }

// lunbotu.prototype.init = function () {
//     this.xuanran();

// }


// lunbotu.prototype.xuanran = function () {
//     let str = this.data.map(item => {
//         return `<li style="width:${this.shuju.iw}px;height:${this.shuju.ih}px;"><img src="${item}" alt=""></li>`;
//     }).join('');
//     $(this.list.children[0]).html(str);
//     this.imglist = this.list.getElementsByTagName('li');
//     this.iw = this.imglist[0].offsetWidth;

//     for (let ele of this.imglist) {
//         $(ele).css('left', this.iw + 'px')
//     }


// }
