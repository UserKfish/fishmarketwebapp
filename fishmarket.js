var not = 0;
function counter() {
    not++;
    //if (not >= 2) {
        //alert("ページを更新してから入力してください");
    //}
}
function onButtonClick() {
    var norn = document.forms.searchform.searchbox.value;
    var result = document.getElementById("searchresult");
    if (norn == "") {
        result.innerHTML = "番号か名前を入力してください";
    } else if (norn == "11太田") {
        result.innerHTML = "冷蔵庫　クルマ：9574　/　場内　11中　右側の奥";           
    } else if (norn == "11森本") {
        result.innerHTML = "11から南に入ってすぐ左";
    } else if (norn == "16店") {
        result.innerHTML = "手前";
    } else if (norn == "16加工") {
        result.innerHTML = "奥";
    } else if (norn == "16カワテル") {
        result.innerHTML = "16外　トラック：996";
    } else if (norn == "16谷沢") {
        result.innerHTML = "16店に持っていく";
    } else if (norn == "19") {
        result.innerHTML = "19右　台車の上";
    } else if (norn == "19名前") {
        esult.innerHTML = "19左　床";
    } else if (norn == "19和子") {
        result.innerHTML = "19左にいる女の人　/　19左の右側にある台車の上";
    } else if (norn == "34大浜") {
        result.innerHTML = "34から南に入ってすぐ左で魚を切っている人";
    } else if (norn == "34尾崎") {
        result.innerHTML = "34から南に入ってすぐ右にある大きい出口の右側の柱";
    } else if (norn == "34オノ") {
        result.innerHTML = "通路突き当り　左の柱の右側";
    } else if (norn == "34百トラ") {
        result.innerHTML = "11から南に入ってすぐ前の机の上";
    } else if (norn == "34三木") {
        result.innerHTML = "北側中のスタート地点　消火器の下　/　東　トラック：555";
    } else if (norn == "34店") {
        result.innerHTML = "34中　木の机の上";
    } else if (norn == "35岡田") {
        result.innerHTML = "西　トラック：5787　/　別名：アジ岡田";
    } else if (norn == "35亨すけ") {
        result.innerHTML = "北側外　35から外に出て右の机の上";
    } else if (norn == "35坂東") {
        result.innerHTML = "35中にいる男の人 /　35中　床";
    } else if (norn == "35三越") {
        result.innerHTML = "35から外に出て右に行く　地面に置かれている三越と書かれた箱の周辺";
    } else if (norn == "35山本") {
        result.innerHTML = "通路突き当り　時計、手紙入れより右の壁際　床";
    } else if (norn == "144") {
        result.innerHTML = "魚長　/　南　看板「高松東魚市場」の前　右";           
    } else if (norn == "148") {
        result.innerHTML = "北　35の外　/　トラック：117";           
    } else if (norn == "151") {
        result.innerHTML = "北　35の外　/　西トイレ前のパレットの前の地面　/　トラック：1310　/　別名：151志度";           
    } else if (norn == "154") {
        result.innerHTML = "東　トラック：154";           
    } else if (norn == "164") {
        result.innerHTML = "南　4本目の柱（建物側）中央　/　トラック：1651";           
    } else if (norn == "176") {
        result.innerHTML = "南　クルマ：1670";           
    } else if (norn == "177") {
        result.innerHTML = "南　クルマ：936";           
    } else if (norn == "181") {
        result.innerHTML = "ムーミー　/　南　2本目の柱（道路側）右　/　1つのパレット　行き先ごとにわける";           
    } else if (norn == "183") {
        result.innerHTML = "東　シャッターから入ってすぐ左　消火設備の下";           
    } else if (norn == "194") {
        result.innerHTML = "クルマ：6454　/　別名：なかや";           
    } else if (norn == "205") {
        result.innerHTML = "冷蔵庫　トラック：6538";           
    } else if (norn == "206") {
        result.innerHTML = "冷蔵庫　トラック：8000";           
    } else if (norn == "209") {
        result.innerHTML = "冷蔵庫　トラック：750";           
    } else if (norn == "225") {
        result.innerHTML = "冷蔵庫　トラック：1589・3276";           
    } else if (norn == "227藤沢") {
        result.innerHTML = "冷蔵庫　クルマ：9472";           
    } else if (norn == "238") {
        result.innerHTML = "南4本目の柱（道路側）右　/　トラック：1257";           
    } else if (norn == "241") {
        result.innerHTML = "西　トラック：8358　/　特種　奥　木の机の下";           
    } else if (norn == "242") {
        result.innerHTML = "冷蔵庫　トラック：6400　/　別名：おおつか";           
    } else if (norn == "249") {
        result.innerHTML = "クルマ：8998";           
    } else {
        result.innerHTML = "該当するものがありません";
    }
}