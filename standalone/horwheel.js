(function (window) {
    'use strict';

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
    // AMD suppport
    if (typeof window.define === 'function' && window.define.amd !== undefined) {
        window.define('horwheel', [], function () {
            return horwheel;
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = horwheel;

    // Default
    } else {
        window.horwheel = horwheel;
    }
}(this));