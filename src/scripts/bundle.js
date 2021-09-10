document.addEventListener('DOMContentLoaded', (event) => {
  //the event occurred

const leftButton = document.getElementById("js-button-left");
const rightButton = document.getElementById("js-button-right");
const slider = document.getElementById("js-slider");
const slideElement = document.querySelector(".slider .slide-img");
const slides = document.getElementsByClassName("slide-img");
let count = 0;
let slidesCounter = slides.length - 4;

var style = slideElement.currentStyle || window.getComputedStyle(slideElement),
    width = slideElement.offsetWidth, // or use style.width
    margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight),
    padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight),
    border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

let imgWidth = width + margin + 20;

console.log(imgWidth);



leftButton.addEventListener("click" , slideLeftToRight);
rightButton.addEventListener("click" , slideRightToLeft);


function slideLeftToRight() {
	console.log(slidesCounter)
	if(slidesCounter > 0) {
		slidesCounter--;
	count += imgWidth;
	console.log(imgWidth);
  slider.style.transform = "translate(" + count + "px)";
	slider.style.transition = "1s";
	}else {
		leftButton.disabled = true;
	}

}

function slideRightToLeft() {
	console.log(slidesCounter)
	if(slidesCounter < slides.length - 4) {
		slidesCounter++;
	count -= imgWidth;
	console.log(imgWidth);
  slider.style.transform = "translate(" + count + "px)";
	slider.style.transition = "1s";
	}else {
		rightButton.disabled = true;
	}
}

})
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
	var scrolled = (window.scrollY / ( docHeight - window.innerHeight )) * 110.2 + 1,
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
const stickyEl = document.querySelector('.section-welcome');
const parentEl = stickyEl.closest(".height-container");
const prevParentSiblingEl = parentEl.previousElementSibling;

const handler = (entries) => {
  // console.log(entries)

  if (!entries[0].isIntersecting) {
    stickyEl.classList.add('--is-sticky');
    parentEl.classList.add('--parent-is-sticky');     
    document.querySelector('.target').innerHTML = "Now Sticky Styled";

   } else {
    stickyEl.classList.remove('--is-sticky');
    parentEl.classList.remove('--parent-is-sticky');
    document.querySelector('.target').innerHTML = "Not Sticky Styled";

  }
}

// create the observer
const observer = new window.IntersectionObserver(handler);
// give the observer some dom nodes to keep an eye on
observer.observe(prevParentSiblingEl);


