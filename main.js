function mh9gagcontrols_ready(fn) {
	if (document.readyState != "loading") {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

function mh9gagcontrols_updateControls() {
	var videos = document.querySelectorAll("video[controls]");
	for (var i = 0; i < videos.length; i++) {
		videos[i].controls = true;
	}

	var soundToggles = document.querySelectorAll(".sound-toggle");
	for (var j = 0; j < soundToggles.length; j++) {
		soundToggles[j].display = "none";
		soundToggles[j].remove();
	}
}

function mh9gagcontrols_debounce(func, timeout) {
	var timer;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(function () {
			func.apply(this);
		}, timeout);
	};
}

const mh9gagcontrols_onScroll = mh9gagcontrols_debounce(function () {
	mh9gagcontrols_updateControls();
}, 100);

mh9gagcontrols_ready(mh9gagcontrols_updateControls);
window.addEventListener("scroll", mh9gagcontrols_onScroll);
