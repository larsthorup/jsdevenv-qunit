module('Control.Button', {
    setup: function () {
        $('<button id="next"></button>').appendTo('#qunit-fixture');
        this.button = new Control.Button('#next', {
            text: 'Next'
        });
    }
});

test('constructor', function () {
    equal($('#next').attr('text'), 'Next', '.text');
});

test('delayHide', function () {
    expect(2);
    stop();
    this.button.delayHide(function () {
        equal($('#next').is(':visible'), false, '!visible');
        start();
    });
    equal($('#next').is(':visible'), true, 'visible');
});