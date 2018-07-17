(function ($, root, undefined) {
	
	$(function () {
			
		$(".mobileToggle").on("click", function() {
	
			var tl = new TimelineMax()
					$this = $(this)
					menu = $(".navMenu")
					ham1 = $(".hamTop")
					ham2 = $(".hamMid")
					ham3 = $(".hamBot")
					uniTime = .3

			console.log("Menu!")

			if($this.hasClass('openMenu')) {
				tl.to(menu, uniTime, {height:0, borderWidth:"0px", onComplete:removeOpenClass}, "menuClose")
					.to(ham1, uniTime, {rotation:0, y:0}, "menuClose")
					.to(ham2, uniTime, {rotation:0, opacity:1}, "menuClose")
					.to(ham3, uniTime, {rotation:0, y:0}, "menuClose")
					

			} else {
				tl.to(menu, uniTime, {height:"100%", borderWidth:"5px", onComplete:addOpenClass}, "menuOpen")
					.to(ham1, uniTime, {rotation:-225, y:8}, "menuOpen")
					.to(ham2, uniTime, {rotation:360, opacity:0}, "menuOpen")
					.to(ham3, uniTime, {rotation:225, y:-10}, "menuOpen")
			}

			

			function addOpenClass() {
				$this.addClass('openMenu');
			}

			function removeOpenClass() {
				$this.removeClass('openMenu');
			}

		})
			
		
	});
	
})(jQuery, this);

