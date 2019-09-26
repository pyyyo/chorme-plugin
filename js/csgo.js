$(function () {
    $.ajax({
        type: "get",
        url: "https://buff.163.com/api/market/goods/sell_order?game=csgo&goods_id=33883&page_num=1&sort_by=default&mode=&allow_tradable_cooldown=1&_=1569477151068",
        data: {},
        datatype: "json",
        success: function (data) {
            var temp = data.data.goods_infos;
            var csgo = temp[Object.keys(temp)[0]];
            var ul = $("._ul");
            var li = "";
            li = li + "<li>";
            li = li + "<img src='" + csgo.icon_url + "' id='img' style='widht:100px;height:100px;'/>";
            li = li + "<p>名称：<span id='name'>" + csgo.name + "</span></p>";
            li = li + "<p>美元：<span id='price'>" + csgo.steam_price + "</span>$</p>";
            li = li + "<p>人民币：<span id='price_cn'>" + csgo.steam_price_cny + "</span>￥</p>";
            li = li + "</li>";
            ul.append(li);
            console.log(csgo);
        },
        error: function (e) {
            console.log(e);
        }
    });
});

// $("#btn").click(e => {
//     alert("即将打开csgo游戏！");
// })

// function mainQuery() {
//     $.ajax({
//         type: "get",
//         url: "https://buff.163.com/api/market/goods/sell_order?game=csgo&goods_id=33883&page_num=1&sort_by=default&mode=&allow_tradable_cooldown=1&_=1569477151068",
//         data: {},
//         datatype: "json",
//         success: function (data) {
//             var temp = data.data.goods_infos;
//             var csgo = temp[Object.keys(temp)[0]];
//             $("#img").attr("src",csgo.icon_url);
//             $("#img").attr("style","widht:100px;height:100px;");
//             $("#name").text(csgo.name);
//             $("#price").text(csgo.steam_price);
//             $("#price_cn").text(csgo.steam_price_cny);
//             console.log(csgo);
//         },
//         error: function (e) {
//             console.log(e);
//         }
//     });
//  }
// document.getElementById("goods").onclick = function (){mainQuery()}