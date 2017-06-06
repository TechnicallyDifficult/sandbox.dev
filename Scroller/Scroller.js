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
		console.log(str[i]);
		i++;
		if (i < str.length) {
			setTimeout(function () { interval(i); }, 500);
		}
	})(0);
}

$(document).click(function () {
	$startText.css('display', 'none');

});