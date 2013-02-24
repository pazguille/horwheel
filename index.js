/**
 * Privates
 */
var bind = (window.addEventListener !== undefined) ? 'addEventListener' : 'attachEvent',
    wheel = (window.onwheel !== undefined) ? 'wheel' :
                (window.attachEvent) ? 'onmousewheel' :
                    (window.onmousewheel !== undefined) ? 'mousewheel' : 'DOMMouseScroll';

function horizontalWheel(eve) {
    eve = eve || window.eve;
    eve.preventDefault();
    // JSlint: Strict violation. Because 'this' in an anonymous function is undefined, but this function will receive a DOM element as context
    this.scrollLeft += (eve.deltaY !== undefined) ? eve.deltaY :
                        (eve.detail !== undefined && eve.detail !== 0) ? eve.detail :
                            -eve.wheelDelta;
}

/**
 * horwheel
 */
function horwheel(el) {
    if (el === undefined) {
        return;
    }

    el[bind](wheel, horizontalWheel, false);
}

/**
 * Expose horwheel
 */
exports = module.exports = horwheel;
