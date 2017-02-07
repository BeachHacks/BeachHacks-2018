/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org``licenses``LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


/*
*  Trianglify
*/
// Create a new SVG pattern with Trianglify.
var pattern = Trianglify({
  width: window.innerWidth,
  height: window.innerHeight,
  cell_size: 80,
  variance: 1,
  stroke_width: 2,
  x_colors: ["#ffffcc","#a1dab4","#41b6c4","#225ea8"]
}).svg(); // Render as SVG.

// Add pattern to DOM.
var container = document.querySelector('.trianglify');
container.insertBefore(pattern, container.firstChild);

// Get all pattern polygons.
var polyArray = [].slice.call(pattern.children);

// Get polygon coords and hide them.
var polyPoints = polyArray.map(function(poly) {

  //poly.classList.add('poly', 'invisible');

  var rect = poly.getBoundingClientRect();

  var point = {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };

  return point;
});