$(document).ready(function() {
    var $banner = $(".banner").find("ul");

    var $bannerWidth = $banner.children().outerWidth();//
    var $bannerHeight = $banner.children().outerHeight();
    var $length = $banner.children().length;
    var rollingId;

    rollingId = setInterval(function() { rollingStart(); }, 2500);

    function rollingStart() {
        $banner.css("width", $bannerWidth * $length + "px");
        $banner.css("height", $bannerHeight + "px");
        $banner.animate({left: - $bannerWidth + "px"}, 1500, function() {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }
});