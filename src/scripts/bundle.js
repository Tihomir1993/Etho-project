function removeAnimation() {
var animation =	document.querySelector(".overlay.is-animated");

animation.classList.remove("is-animated");

}



setTimeout(removeAnimation, 7000);