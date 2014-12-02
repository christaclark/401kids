$(document).ready(function(){

  /* parallax background */
  $('#header').parallax();
  $('#about').parallax();

  /* nice scroll */
  $( 'html' ).niceScroll({
    cursorcolor: '#ef4035',
    cursorwidth: '10px',
    cursorborder: '1px solid #ef4035',
    cursoropacitymax: 0.9,                
    scrollspeed: 120,
    autohidemode: false,
    horizrailenabled: false,
    cursorborderradius: 2,
    zindex: 1060
  });

  /* scrolltop */
  $('.navbar-nav li a, .menus').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /* scrollspy highlighting active navbar menu */
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	})

  /* close navbar collapse after click in mobile */
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});

	/* map contact */
  $("#map").gmap3({
    map: {
        options: {
          center: [-7.866315,110.389574], /* change langitude latitude of your location here */
          zoom: 12,
          scrollwheel: false
        }  
     },
    marker:{
        latLng: [-7.866315,110.389574], /* change langitude latitude of your location here */
        options: {
         icon: new google.maps.MarkerImage(
           "https://dl.dropboxusercontent.com/u/29545616/Preview/location.png",
           new google.maps.Size(48, 48, "px", "px")
         )
        }
     }
  });

  /* skill easy pie chart */
  $('.chart').easyPieChart({
    animate: 2000,
    barColor: '#ef4034',
    trackColor: '#f7f7f7',
    size: 130,
    lineWidth: 4,
    easing: 'easeInOutCirc',
    onStep: function(from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
    }
  });
});
