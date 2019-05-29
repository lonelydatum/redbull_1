(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

TweenLite.defaultEase = Power3.easeInOut;

function start() {
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.from(".t1a", 2, { filter: "blur(2px)", x: "-=90", opacity: 0, ease: Power4.easeOut }, 0);
	// tl.from(".t1b", 2, {filter: "blur(2px)",x:"+=90", opacity:0, ease:Power4.easeOut}, 0)
	tl.from(".t2", 1, { opacity: 0 }, "-=.8");
	tl.from(".bg_glow", 3, { y: "+=10", opacity: 0, ease: Power2.easeInOut }, 0);
	tl.to(".box", 2, { opacity: 0, ease: Power3.easeInOut }, 0);
	tl.to(".bg", 4, { scale: .7, opacity: 1, ease: Power3.easeOut }, 0);
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
