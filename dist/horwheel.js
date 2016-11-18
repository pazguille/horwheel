(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.horwheel = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Privates
 */
var bind = (window.addEventListener !== undefined) ? 'addEventListener' : 'attachEvent';
var wheel = (window.onwheel !== undefined) ? 'wheel' :
              (window.onmousewheel !== undefined) ? 'mousewheel' :
                  (window.attachEvent) ? 'onmousewheel' : 'DOMMouseScroll';

function horizontalWheel(eve, el) {
  el.scrollLeft += (eve.deltaY !== undefined) ? eve.deltaY :
                      (eve.detail !== undefined && eve.detail !== 0) ? eve.detail :
                          -eve.wheelDelta;
}

/**
 * Scroll horizontally with mouse wheel over a given Node Element.
 * @param {Node Element} [node] - A Node Element.
 * @returns {Node Element}
 */
function horwheel(node) {
  if (node === undefined) {
    return;
  }

  window.document[bind](wheel, function (eve) {
    eve = eve || window.eve;
    if (eve.preventDefault) {
      eve.preventDefault();
    }
    horizontalWheel(eve, node);
    return false;
  }, false);

  return el;
}

/**
 * Expose horwheel
 */
module.exports = horwheel;

},{}]},{},[1])(1)
});