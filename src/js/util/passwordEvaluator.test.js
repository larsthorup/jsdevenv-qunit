/*jshint undef:false, strict:false*/ // Note: to avoid having to write QUnit.module, etc
module('Util.PasswordEvaluator');
test('bad', function () {
    equal(Util.PasswordEvaluator.strength('abc'), 0, 'abc');
});
test('length-okay', function () {
    equal(Util.PasswordEvaluator.strength('china'), 1, 'china');
});
test('length-good', function () {
    equal(Util.PasswordEvaluator.strength('evaluator'), 2, 'evaluator');
});
test('category-okay', function () {
    equal(Util.PasswordEvaluator.strength('a1'), 1, 'a1');
});
test('category-good', function () {
    equal(Util.PasswordEvaluator.strength('a1.'), 2, 'a1.');
});
test('casing-good', function () {
    equal(Util.PasswordEvaluator.strength('aA'), 1, 'aA');
});
test('all-good', function () {
    equal(Util.PasswordEvaluator.strength('aAbBcCdD123!#'), 5, 'aAbBcCdD123!#');
});
