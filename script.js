//snsボタンアニメーション
$(function(){
    $('.btn').hover(
        function(){
            $(this).animate({
                'color':'white'
            },300);
        },
        function(){
            $(this).animate({
                'color':'black'
            },500);
        }
    );
    //smart-menuボタンクリック
    $('.smart-menu').click(function(){
        $('.smart_wrapper').toggleClass('fadein');
        //menu流域外を暗くして固定
        $('main').toggleClass('fixed');
        
    });
    //「about,works,contact」をクリックでmenuを消す
    $('.smart_wrapper nav a').click(function(){
        $('.smart_wrapper').removeClass('fadein');
        $('main').removeClass('fixed');
    });
    //スマホのときのfooterのSNSの「target="_blank"」と「btnクラス」の削除
    if($(window).width()<=600){
        $('footer a').removeAttr('target').removeClass('btn');
    }
    
});



// 現在スクロールされたトップからの距離を取得している
//     var a=$(window).scrollTop();



//参考サイト https://gimmicklog.com/jquery/212/
    //雲と太陽
    $(function () {
        setTimeout('rect1()'); //アニメーションを実行
    });
    function rect1() {
        $('.kumo_taiyou').animate({
            marginTop: '-=10px'
        }, 800).animate({
            marginTop: '+=10px'
        }, 800);
        setTimeout('rect1()', 1600); //アニメーションを繰り返す間隔
    }
    //パッカー車
    $(function () {
        setTimeout('rect2()'); //アニメーションを実行
        
    });
    function rect2() {
        $(".truck").animate({
            right: "100%" //要素を動かす位置
        }, 7000).animate({
            right: "50px"　//要素を戻す位置
        }, 0)
        setTimeout("rect2()", 8000);//アニメーションを繰り返す間隔
    }








//alert(123456789);


