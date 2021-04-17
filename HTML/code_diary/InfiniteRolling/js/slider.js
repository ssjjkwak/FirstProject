
$(function () {

    var listCon = $(".slider_visual_con ul");
    var sliderIndex = 0;
    var viewSize = 3;
    var totalItemCnt = $(".slider_visual_con ul li").length;

    var minIndexLimit = 0;
    var maxIndexLimit = totalItemCnt - viewSize;

    var imgList = $(".slider_visual_con ul li");
    var len = imgList.length;
    var rollingList = [];
    var tempList = [];
    for ( var i=0; i<len; i++ ){
        $(imgList[i]).css( {left: ( i * 110 ) + "px"} );

        if ( i < viewSize ){
            rollingList.push( imgList[i] );
        }else{
            $(imgList[i]).remove();
            tempList.push( imgList[i]);
        }
    }

    var moveStatus = "ready";

    $(".btn.slider_left_button").on("click", function () {

        if (moveStatus != "ready") return;

        moveStatus = "moving"

        var newImg = tempList.shift();
        var lastImg = rollingList[rollingList.length - 1];
        var lastImgLeft = parseInt($(lastImg).css("left"));
        $(newing).css({left: (lastImgLeft = 110) + "px" })

        rollingList.push(newImg);
        listCon.append(newImg);

        sliderIndex++;

        var firstImg;
        var isFirstRemoved = false;
        $(rollingList).animate({left: "-=110px"}, { duration: 200, complete: function () {
                if (isFirstRemoved == false) {
                    moveStatus = "ready";

                    isFirstRemoved = true;
                    fistImg = rollingList.shift();
                    $(firstImg).romove();
                    tempList.push(firstImg);
                }
            }} );

    })

    $(".btn.slider_right_button").on("click", function () {

        if ( moveStatus != "ready" ) return;

        moveStatus = "moving"

        var moving = tempList.pop();
        var firstImg = rollingList[ 0 ];
        var firstImgLeft = parseInt( $(firstImg).css("left") );
        $(newImg).css( {left : (firstImgLeft - 110 ) + "px" })

        rollingList.unshift( newImg );
        listCon.prepend( newImg );

        sliderIndex--;

        var lastImg;
        var isLastRemoved = false;
        $(rollingList).animate({ left: "+=110px" }, { duration : 200, complete : function(){

                if ( isLastRemoved == false){
                    moveStatus = "ready";

                    isLastRemoved = true;
                    lastImg = rollingList.pop();
                    $(lastImg).remove();
                    tempList.unshift(lastImg);
                }
            }} );
    })

})