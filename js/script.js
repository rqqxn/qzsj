$(window).load(function() { 
	var navH = $("#subnav").offset().top; 
//	alert(navH)
	$(window).scroll(function(){ 
		var scroH = document.documentElement.scrollTop + document.body.scrollTop;
		//var scroH = $(this).scrollTop(); 
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定 
		if(scroH>=navH){ 
			$("#subnav").css({"position":"fixed","top":0}); 
		}else if(scroH<navH){ 
			$("#subnav").css({"position":"absolute","bottom":0}); 
		}
		if(scroH>=navH){
				$("#subnav").addClass("active");
				$("#subnav .fd_logo, #subnav .fd_tel").show()
		}else if(scroH<navH){
				$("#subnav").removeClass("active") 
				$("#subnav .fd_logo, #subnav .fd_tel").hide()
			} 
		}) 
	})   
//  go Top
$(function() {
    $(window).scroll(function() {
        var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度 
        if (scrollt > 100) {
            $("#scroolTop").show();
        } else {
            $("#scroolTop").stop().hide();
        }
    });
    $("#scroolTop").click(function() {
        $("html,body").animate({
            scrollTop: "0px"
        },
        500);
    });

});