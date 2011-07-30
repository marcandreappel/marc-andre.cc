$(document).ready(function() {
	var bgImg = $('#background-image');
	var imgOrgWidth = bgImg.width();
	function resizeImage() {
		var imgwidth = bgImg.width();
		var imgheight = bgImg.height();

		var winwidth = $(window).width();
		var winheight = $(window).height();
		var widthratio = winwidth / imgwidth;
		var heightratio = winheight / imgheight;
		var widthdiff = heightratio * imgwidth;
		var heightdiff = widthratio * imgheight;
		bgImg.css({
			width: Math.round(widthdiff)+'px',
			height: winheight+'px'
		});
    }
    function deplaceContent() {
    	if(imgOrgWidth < bgImg.width()) {
    		var newVal = ((bgImg.width()-imgOrgWidth)+240);
    		$('header').css({'margin-left':newVal+'px'});
    		$('section').css({'margin-left':newVal+'px'});
    		$('footer').css({'margin-left':newVal+'px'});
    	} else {
    		$('header').css({'margin-left':'240px'});
    		$('section').css({'margin-left':'240px'});
    		$('footer').css({'margin-left':'240px'});
    	}
    }
    resizeImage();
    deplaceContent();
	$(window).resize(function() {
		resizeImage();
		deplaceContent();
    }); 
});
