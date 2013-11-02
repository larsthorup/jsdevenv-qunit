/*global window*/
(function (window) {
    'use strict';

    window.durationInEnglish = function (duration) {
        if (duration === null) {
            throw 'null not expected';
        }
        duration = duration / 1000;
        if (duration === 0) {
            return 'now';
        }
        if (duration < 60) {
            return duration + ' seconds';
        }
    };

})(window);