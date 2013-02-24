(function (window) {
    'use strict';

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
        // JSlint: Strict violation. Because 'this' in an anonymous function is undefined, but this function will receive an DOM element as context
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