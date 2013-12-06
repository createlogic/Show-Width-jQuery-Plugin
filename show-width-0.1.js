		(function($){
		
			$.fn.showWidth = function(options){
				var settings = $.extend({ position:'TL'},options);
				return this.each(function(){
					
					$(this).css({position:'relative'}).append('<div class="show-width"></div>');
					var showWidth = $(this).find('.show-width');
					
					switch(settings.position) {
						case 'TL':
						showWidth.css({'top':0,'left':0});
						break;
						case 'TR':
						showWidth.css({'top':0,'right':0});
						break;
						case 'BL':
						showWidth.css({'bottom':0,'left':0});
						break;
						case 'BR':
						showWidth.css({'bottom':0,'right':0});
						break;
						default:
						showWidth.css({'top':0,'left':0});						
					}
					
					showWidth.css({position:'absolute'}).html($(this).innerWidth()+'px');
					$(window).on('resize',function(){
						showWidth.html(showWidth.parent().innerWidth()+'px');
					});
				});
			};
		})(jQuery);