function removeAnimation() {
var animation =	document.querySelector(".overlay.is-animated");

animation.classList.remove("is-animated");

}



setTimeout(removeAnimation, 7000);


/*
document.addEventListener('scroll', function(e) {
let heightContainer = document.querySelector(".heightContainer");

	let welcomeSection = document.querySelector(".section-welcome");
	let a = `scrollTop: ${welcomeSection.scrollTop}`;

});
*/
window.addEventListener( 'load', function() {
	logoZoomInZoomOut();

  window.addEventListener( 'scroll', function() {
        // normalize scroll position as percentage
				logoZoomInZoomOut();


  }, false);
  
}, false);

function logoZoomInZoomOut() {
	var box = document.querySelector(".overlay"),
	docHeight = document.documentElement.offsetHeight;
	var scrolled = (window.scrollY / ( docHeight - window.innerHeight )) * 30.2 + 1,
	transformValue = 'scale('+Math.ceil(scrolled * 100) / 100+')';

	console.log(scrolled);
	if(scrolled > 28) {
		box.style.display = "none";
	}else {
		box.style.WebkitTransform = transformValue;
		box.style.MozTransform = transformValue;
		box.style.OTransform = transformValue;
		box.style.transform = transformValue;
		box.style.display = "block";
}
}