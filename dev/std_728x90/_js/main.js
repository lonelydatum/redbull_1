TweenLite.defaultEase = Power3.easeInOut

function start(){
	var tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	tl.from(".t1a", 2, {filter: "blur(2px)", x:"-=90", opacity:0, ease:Power4.easeOut}, 0)
	// tl.from(".t1b", 2, {filter: "blur(2px)",x:"+=90", opacity:0, ease:Power4.easeOut}, 0)
	tl.from(".t2", 1, {opacity:0}, "-=.8")
	tl.from(".bg_glow", 3, {y:"+=10", opacity:0, ease:Power2.easeInOut}, 0)
	tl.to(".box", 2, {opacity:0, ease:Power3.easeInOut}, 0)
	tl.to(".bg", 4, {scale:.7, opacity:1, ease:Power3.easeOut}, 0)

}


start()

module.exports = {};

