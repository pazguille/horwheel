/**
 * Change the scroll axis.
 * @param {Node Event} [eve]
 */
function horizontalWheel(eve) {
  if (eve.preventDefault) {
    eve.preventDefault();
  }
  this.scrollLeft += eve.deltaY;
}

/**
 * Scroll horizontally with mouse wheel over a given Node Element.
 * @param {Node Element} [node] - A Node Element.
 * @returns {Node Element}
 */
function horwheel(node) {
  if (node === undefined) {
    return false;
  }
  node.addEventListener('wheel', horizontalWheel, false);
  return node;
}

/**
 * Expose horwheel
 */
module.exports = horwheel;
