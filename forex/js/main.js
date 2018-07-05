$(function (){
  var li = $('.collapsible-menu ul li'),
  	  icon = $('.hamburger-icon'),
  	  tl = new TimelineLite();

  	  tl.
    	staggerFrom(li,0.2,{y:-75,autoAlpha:0,ease:Power1.easeOut},0.1);
      tl.pause();
      
  	  icon.on('click',function(){
  		$('.collapsible-menu ul').slideToggle('slow',function() {
  			$(this).toggleClass('animate');
  			if($(this).hasClass('animate')){
          		tl.timeScale(1).play();
        	} else{
          	  tl.timeScale(8).reverse();
        	}
  		});
  	});  
});
