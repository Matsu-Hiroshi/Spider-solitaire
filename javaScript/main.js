
//画面読み取り時に呼び出す
$(window).load(function(){

    for (let index = 1; index <= 10; index++) {
        $("#main").append('<div class="uk-width-1-10" id="prace'+ index +'">久保のバカヤロウ</div>');  
    }

});
