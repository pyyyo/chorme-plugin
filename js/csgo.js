$(function () {
    var ids = [33881,33882,33884,33885,33886,33887,33888,33889,33890,33891,33892,33893,33894,33895,33896,33897,33898,33899,33900];
    for(var i in ids){
        $.ajax({
            type: "get",
            url: "https://buff.163.com/api/market/goods/sell_order?game=csgo&goods_id="+ids[i]+"&page_num=1&sort_by=default&mode=&allow_tradable_cooldown=1&_=1569477151068",
            data: {},
            datatype: "json",
            success: function (data) {
                var temp = data.data.goods_infos;
                var csgo = temp[Object.keys(temp)[0]];
                var dl = $("._dl");
                var dd = "";
                dd = dd + "<dd>";
                dd = dd + "<img src='"+ csgo.icon_url +"' />";
                dd = dd + "<p class='text'> 名称：<span class='name'>"+ csgo.name +"</span></p>";
                dd = dd + "<p class='text'> 美元：<span class='price'>"+ csgo.steam_price +"</span></p>";
                dd = dd + "<p class='text'> 人民币： <span class='price_cn'>"+ csgo.steam_price_cny +"</span></p>";
                dd = dd + "</dd>";
                dl.append(dd);
                console.log(csgo);
            },
            error: function (e) {
                console.log(e);
            }
        });
    }

    
});

// $("#btn").click(e => {
//     alert("即将打开csgo！");
// })
//
// document.getElementById("goods").onclick = function (){mainQuery()}
//
