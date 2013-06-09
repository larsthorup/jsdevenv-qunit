/*global window, jQuery*/
(function (window, $) {
    'use strict';

    window.Control = window.Control || {};
    window.Control.Button = function (selector, options) {
        this.element = $(selector);
        this.options = options;
        this.element.attr('text', options.text);
    };

    window.Control.Button.prototype.delayHide = function (callback) {
        var self = this;
        window.setTimeout(function () {
            self.element.hide();
            callback();
        }, 100);
    };

})(window, jQuery);