/*jshint undef:false, strict:false*/ // Note: to avoid having to write QUnit.module, etc
module('english');

test('now', function () {
    var now = new Date(2013, 6, 10, 10, 0, 0);
    equal(durationInEnglish(now - now), 'now');
});

test('seconds', function () {
    var now = new Date(2013, 6, 10, 10, 0, 17);
    var then = new Date(2013, 6, 10, 10, 0, 0);
    equal(durationInEnglish(now - then), '17 seconds');
});

test('null', function () {
    throws(function () { durationInEnglish(null); }, /null not expected/);
});