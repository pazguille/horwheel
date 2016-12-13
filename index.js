/**
 * Normalize wheel event
 */
var wheel = (window.onwheel !== undefined) ? 'wheel' :
              (window.onmousewheel !== undefined) ? 'mousewheel' :
                  (window.attachEvent) ? 'onmousewheel' : 'DOMMouseScroll';

/**
 * horizontalWheel
 */
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

  window.document.addEventListener(wheel, function (eve) {
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
