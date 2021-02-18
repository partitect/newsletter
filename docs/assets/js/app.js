$(document).ready(function () {
	"use strict";
	// fix menu when passed

	$(".following-menu-fix").visibility({
		once: false,
		onBottomPassed: function onBottomPassed() {
			$(".fixed.menu").transition("fade in");
		},
		onBottomPassedReverse: function onBottomPassedReverse() {
			$(".fixed.menu").transition("fade out");
		}
	});

	$(".toc.item").on("click", function () {
		$(".ui.sidebar").sidebar("toggle");
	});

	$(".ui.checkbox").checkbox();

	$(".ui.dropdown").dropdown();
});