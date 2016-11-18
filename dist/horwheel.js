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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBQcml2YXRlc1xuICovXG52YXIgYmluZCA9ICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdhdHRhY2hFdmVudCc7XG52YXIgd2hlZWwgPSAod2luZG93Lm9ud2hlZWwgIT09IHVuZGVmaW5lZCkgPyAnd2hlZWwnIDpcbiAgICAgICAgICAgICAgKHdpbmRvdy5vbm1vdXNld2hlZWwgIT09IHVuZGVmaW5lZCkgPyAnbW91c2V3aGVlbCcgOlxuICAgICAgICAgICAgICAgICAgKHdpbmRvdy5hdHRhY2hFdmVudCkgPyAnb25tb3VzZXdoZWVsJyA6ICdET01Nb3VzZVNjcm9sbCc7XG5cbmZ1bmN0aW9uIGhvcml6b250YWxXaGVlbChldmUsIGVsKSB7XG4gIGVsLnNjcm9sbExlZnQgKz0gKGV2ZS5kZWx0YVkgIT09IHVuZGVmaW5lZCkgPyBldmUuZGVsdGFZIDpcbiAgICAgICAgICAgICAgICAgICAgICAoZXZlLmRldGFpbCAhPT0gdW5kZWZpbmVkICYmIGV2ZS5kZXRhaWwgIT09IDApID8gZXZlLmRldGFpbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC1ldmUud2hlZWxEZWx0YTtcbn1cblxuLyoqXG4gKiBTY3JvbGwgaG9yaXpvbnRhbGx5IHdpdGggbW91c2Ugd2hlZWwgb3ZlciBhIGdpdmVuIE5vZGUgRWxlbWVudC5cbiAqIEBwYXJhbSB7Tm9kZSBFbGVtZW50fSBbbm9kZV0gLSBBIE5vZGUgRWxlbWVudC5cbiAqIEByZXR1cm5zIHtOb2RlIEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGhvcndoZWVsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHdpbmRvdy5kb2N1bWVudFtiaW5kXSh3aGVlbCwgZnVuY3Rpb24gKGV2ZSkge1xuICAgIGV2ZSA9IGV2ZSB8fCB3aW5kb3cuZXZlO1xuICAgIGlmIChldmUucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGV2ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBob3Jpem9udGFsV2hlZWwoZXZlLCBub2RlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sIGZhbHNlKTtcblxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogRXhwb3NlIGhvcndoZWVsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gaG9yd2hlZWw7XG4iXX0=
