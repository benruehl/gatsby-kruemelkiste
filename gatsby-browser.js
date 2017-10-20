import React from "react";

function scrollTo (element, to, duration) {
	if (element == null || element == 0)
		return;

	var start = element.getBoundingClientRect().top;
        
    var animateScroll = function (elementY, duration) { 
	  var startingY = window.pageYOffset;
	  var diff = elementY - startingY;
	  var start;

	  window.requestAnimationFrame(function step(timestamp) {
	    if (!start)
	    	start = timestamp;

	    var time = timestamp - start;
	    var percent = Math.min(time / duration, 1);

	    var verticalScrollPosition = startingY + diff * percent;

	    document.documentElement.scrollTop = verticalScrollPosition;
	    document.body.scrollTop = verticalScrollPosition;

	    if (time < duration) {
	      window.requestAnimationFrame(step)
	    }
	  })
	};

    animateScroll(start, duration);
};

exports.onRouteUpdate = (routeUpdate) => {
	var routeHash = routeUpdate.location.hash;

	if (routeHash != '') {
		var elementId = routeHash.substring(1, routeHash.length);
		
		setTimeout(() => {
			scrollTo(document.querySelector('[name=' + elementId + ']'), 0, 350);
			history.pushState("", document.title, window.location.pathname + window.location.search);
    }, 0);
  }
};