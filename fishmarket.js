var not = 0;
function counter() {
    not++;
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
    } else if (norn == "31") {
        result.innerHTML = "木の机の上に置く";           
    } else if (norn == "34ウオヨシ") {
        result.innerHTML = "トラック：4288";           
    } else if (norn == "34エノキ") {
        result.innerHTML = "34裏　冷蔵庫の左　床";           
    } else if (norn == "34大浜") {
        result.innerHTML = "34から南に入ってすぐ左で魚を切っている人";
    } else if (norn == "34尾崎") {
        result.innerHTML = "34から南に入ってすぐ右にある大きい出口の右側の柱";
    } else if (norn == "34オノ") {
        result.innerHTML = "通路突き当り　左の柱の右側";
    } else if (norn == "34谷岡") {
        result.innerHTML = "34中　左端　冷蔵庫前の床";           
    } else if (norn == "34百トラ") {
        result.innerHTML = "11から南に入ってすぐ前の机の上";
    } else if (norn == "34フジヤ") {
        result.innerHTML = "西　トラック：3583　助手席";           
    } else if (norn == "34三木") {
        result.innerHTML = "北側中のスタート地点　消火器の下　/　東　トラック：555";
    } else if (norn == "34店") {
        result.innerHTML = "34中　木の机の上";
    } else if (norn == "35あうん") {
        result.innerHTML = "35外　壁「34」の前　地面";           
    } else if (norn == "35魚神") {
        result.innerHTML = "35外　壁「34」の前　地面　/　読み方：うおがみ";           
    } else if (norn == "35岡田") {
        result.innerHTML = "西　トラック：5787　/　別名：アジ岡田";
    } else if (norn == "35亨すけ") {
        result.innerHTML = "北側外　35から外に出て右の机の上";
    } else if (norn == "35高橋") {
        result.innerHTML = "35外　西トイレ横のパレット前の地面　/　トラック：2612";           
    } else if (norn == "35つくし") {
        result.innerHTML = "35外　壁「34」の前　地面";           
    } else if (norn == "35坂東") {
        result.innerHTML = "35中にいる男の人 /　35中　床";
    } else if (norn == "35マルサン") {
        result.innerHTML = "太田さんの机の前　地面";           
    } else if (norn == "35三越") {
        result.innerHTML = "35から外に出て右に行く　地面に置かれている三越と書かれた箱の周辺";
    } else if (norn == "35ヤハタ") {
        result.innerHTML = "通路突き当り　手紙入れの右下　床　/　トラック：1438";           
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
    } else if (norn == "229") {
        result.innerHTML = "南　4本目の柱（建物側）左";           
    } else if (norn == "238") {
        result.innerHTML = "南4本目の柱（道路側）右　/　トラック：1257";           
    } else if (norn == "241") {
        result.innerHTML = "西　トラック：8358　/　特種　奥　木の机の下";           
    } else if (norn == "242") {
        result.innerHTML = "冷蔵庫　トラック：6400　/　別名：おおつか";           
    } else if (norn == "249") {
        result.innerHTML = "クルマ：8998";           
    } else if (norn == "255") {
        result.innerHTML = "南　5本目の柱（建物側）右";           
    } else if (norn == "263") {
        result.innerHTML = "キムラ　/　パレット　白鳥・長尾・長尾・牟礼・香西・宇多津・屋島・観音寺・太田・林・児島・マルシェ・丸亀・国分寺・大供・福成・四十瀬・玉島";           
    } else if (norn == "263木太") {
        result.innerHTML = "263大供・福成・四十瀬・玉島のパレットの奥の台車";           
    } else if (norn == "263加工") {
        result.innerHTML = "東　トラック：632";           
    } else if (norn == "264") {
        result.innerHTML = "冷蔵庫　クルマ：8157　/　別名：チュウジョウ";           
    } else if (norn == "267") {
        result.innerHTML = "11から南に入ってすぐ前　百トラと同じ場所";           
    } else if (norn == "294") {
        result.innerHTML = "東　トラック：294";           
    } else if (norn == "314") {
        result.innerHTML = "南　5本目の柱（建物側）右　/　トラック：1045　/　別名：寿";           
    } else if (norn == "321") {
        result.innerHTML = "南　看板「冷凍物売場」の前　床";           
    } else if (norn == "323") {
        result.innerHTML = "冷蔵庫　トラック：7661";           
    } else if (norn == "332シゲさん") {
        result.innerHTML = "冷蔵庫　トラック：6888";           
    } else if (norn == "341") {
        result.innerHTML = "南　西から3本目の柱（道路側）右　/　トラック：1693";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else if (norn == "") {
        result.innerHTML = "";           
    } else {
        result.innerHTML = "該当するものがありません";
    }
}