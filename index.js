/**
 * Privates
 */
var bind = (window.addEventListener !== undefined) ? 'addEventListener' : 'attachEvent',
    wheel = (window.onwheel !== undefined) ? 'wheel' :
                (window.onmousewheel !== undefined) ? 'mousewheel' :
                    (window.attachEvent) ? 'onmousewheel' : 'DOMMouseScroll';

function horizontalWheel(eve, el) {
    el.scrollLeft += (eve.deltaY !== undefined) ? eve.deltaY :
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

    document[bind](wheel, function (eve) {
        eve = eve || window.eve;
        if (eve.preventDefault) {
            eve.preventDefault();
        }
        horizontalWheel(eve, el);
        return false;
    }, false);
}

/**
 * Expose horwheel
 */
exports = module.exports = horwheel;