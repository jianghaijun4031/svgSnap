var xian = Snap("#SVGRoot").paper.path("M20 20L390 390").attr({
	fill: "none",
	stroke: "yellow",
	strokeWidth: "2"

});
//	console.log(document.querySelector('path').getTotalLength())
var yuan = Snap("#SVGRoot").paper.circle(20, 20, 5).attr({
	fill: "red"
});
//	console.log(xian.getPointAtLength(523.259033203125).x)
Snap.animate(0, xian.getTotalLength(), function(val) {
	var movepoint = xian.getPointAtLength(val);
	yuan.attr({
		cx: movepoint.x,
		cy: movepoint.y,
		fill: "blue"
	});
}, 24500);