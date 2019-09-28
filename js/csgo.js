$(function () {
    var ids = [33881, 33882, 33884, 33885,
        33886, 33887, 33888, 33889, 33890,
        33891, 33892, 33893, 33894, 33895,
        33896, 33897, 33898, 33899, 33900,
        38851, 38852, 38853, 38854, 38855,
        38856, 38857, 38858, 38859, 38860,
        38861, 38862, 38863, 38864, 38865,
        38866, 38867, 38868, 38869, 38870,
        38871, 38872, 38873, 38874, 38875,
        38876, 38877, 38878, 38879, 38880,
        38881, 38882, 38883, 38884, 38885,
        38886, 38887, 38888, 38889, 38890,
        38891, 38892, 38893, 38894, 38895,
        38896, 38897, 38898, 38899, 38900
    ];
    for (var i in ids) {
        $.ajax({
            type: "get",
            url: "https://buff.163.com/api/market/goods/sell_order?game=csgo&goods_id=" + ids[i] + "&page_num=1&sort_by=default&mode=&allow_tradable_cooldown=1&_=1569477151068",
            data: {},
            datatype: "json",
            success: function (data) {
                var temp = data.data.goods_infos;
                var csgo = temp[Object.keys(temp)[0]];
                if (undefined == csgo) {
                    return;
                };
                var dl = $("._dl");
                var dd = "";
                dd = dd + "<dd>";
                dd = dd + "<img src='" + csgo.icon_url + "' />";
                dd = dd + "<p class='text'> 名称：<span class='name'>" + csgo.name + "</span><span class='market_hash_name'>（" + csgo.market_hash_name + "）</span></p>";
                dd = dd + "<p class='text'> 价格：<span class='price_cn'>￥" + csgo.steam_price_cny + "</span>&nbsp;<span class='price'>（$" + csgo.steam_price + "）</span></p>";
                dd = dd + "</dd>";
                dl.append(dd);
                console.log(csgo);
            },
            error: function (e) {
                console.log(e);
            }
        });
    };
});

$("#btn").click(e => {
    var serach = document.getElementById("serach").value;

    if(serach == null || serach == ''){
        return;
    }

    $.ajax({
        type: "get",
        url: "",
        data: {},
        datatype: "json",
        success: function (data) {

        },
        error: function (e) {
            console.log(e);
        }
    })
})
