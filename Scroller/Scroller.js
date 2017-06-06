// class Scroller {
// 	constructor() {
// 		this.speed;
// 		this.
// 	}
// }

var $startText = $('#start-text'),
	$scrolling = $('#scrolling');

function scroll(str) {
	(function interval(i) {
		$scrolling.append(str[i]);
		i++;
		if (i < str.length) {
			setTimeout(function () { interval(i); }, 200);
		}
	})(0);
}

$(document).click(function () {
	$startText.css('display', 'none');
	scroll('This text scrolls onscreen.');
});