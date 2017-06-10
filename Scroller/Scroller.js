// class Scroller {
// 	constructor() {
// 		this.speed;
// 		this.
// 	}
// }

var $startText = $('#start-text'),
	$elements = $('.scrolling'),
	speed = 32,
	currentSpeed = speed,
	scrolling = false,
	speedUpKeys = ['x', 'escape', 'control'],
	nextKeys = ['z', ' ', 'enter'],
	keydown = null;

function scroll(str, $element) {
	var deferred = $.Deferred();

	scrolling = true;

	(function interval(i) {
		$element.text($element.text() + str[i]);
		i++;
		if (i < str.length) {
			setTimeout(() => interval(i), currentSpeed);
		} else {
			setTimeout(() => scrolling = false , speed * 2);
			deferred.resolve();
		}
	})(0);

	return deferred.promise();
}

function next() {
	$startText.css('display', 'none');

	if (scrolling) return;

	return scroll('This text scrolls onscreen.', $elements.filter(':empty:first'));
}

function speedUp() {
	currentSpeed /= 2;
}

function speedDown() {
	currentSpeed *= 2;
}

$(document).click(next)
	.contextmenu((e) => {
		e.preventDefault();
	}).mousedown((e) => {
		if (e.which === 3 && !keydown) {
			keydown = e.which;
			e.preventDefault();
			speedUp();
		}
	}).mouseup((e) => {
		if (e.which === 3 && e.which === keydown) {
			e.preventDefault();
			speedDown();
			keydown = null;
		}
	}).keydown((e) => {
		if ($.inArray(e.key.toLowerCase(), speedUpKeys) !== -1 && !keydown) {
			keydown = e.key;
			speedUp();
		}
	}).keyup((e) => {
		if ($.inArray(e.key.toLowerCase(), speedUpKeys) !== -1 && e.key.toLowerCase() === keydown) {
			speedDown();
			keydown = null;
		}
	}).keypress((e) => {
		if ($.inArray(e.key.toLowerCase(), nextKeys) !== -1) {
			next();
		}
	});