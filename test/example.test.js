import isYes from '../is-yes.js';

const test = QUnit.test;

test('Yes is true', function(assert) {
    const shouldBeYesInput = 'Yes'; //checks to see if answer is 'Yes'
    const shouldBeYesExpected = true;
    const shouldBeYesResult = isYes(shouldBeYesInput);

    assert.equal(shouldBeYesResult, shouldBeYesExpected);
});

test('No is false', function(assert) {
    const shouldBeNoInput = 'No'; //checks to see if answer is 'No'
    const shouldBeNoExpected = false;
    const shouldBeNoResult = isYes(shouldBeNoInput);

    assert.equal(shouldBeNoResult, shouldBeNoExpected);
});

test('Y is true', function(assert) {
    const shouldBeYInput = 'Y'; //checks to see if answer is 'Y'
    const shouldBeYExpected = true;
    const shouldBeYResult = isYes(shouldBeYInput);

    assert.equal(shouldBeYResult, shouldBeYExpected);
});

test('yes is true', function(assert) {
    const shouldBeyesInput = 'yes'; //checks to see if answer is 'yes'
    const shouldBeyesExpected = true;
    const shouldBeyesResult = isYes(shouldBeyesInput);

    assert.equal(shouldBeyesResult, shouldBeyesExpected);
});