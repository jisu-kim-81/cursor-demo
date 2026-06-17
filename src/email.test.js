const { test } = require('node:test');
const assert = require('node:assert/strict');
const { extractEmails, isValidEmail, getValidEmails, uniqueValidEmails } = require('./email');

test('extractEmails extracts email fields from members array', () => {
    const members = [{ email: 'a@b.com' }, { email: 'c@d.com' }];
    assert.deepEqual(extractEmails(members), ['a@b.com', 'c@d.com']);
});

test('extractEmails returns empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
});

test('isValidEmail validates email format', () => {
    assert.equal(isValidEmail('a@b.com'), true);
    assert.equal(isValidEmail('invalid'), false);
    assert.equal(isValidEmail(123), false);
});

test('getValidEmails returns only valid emails', () => {
    const members = [
        { email: 'a@b.com' },
        { email: 'bad' },
        { email: 'c@d.com' },
    ];
    assert.deepEqual(getValidEmails(members), ['a@b.com', 'c@d.com']);
});

test('uniqueValidEmails returns unique valid emails only', () => {
    const members = [
        { email: 'a@b.com' },
        { email: 'a@b.com' },
        { email: 'bad' },
        { email: 'c@d.com' },
    ];
    assert.deepEqual(uniqueValidEmails(members), ['a@b.com', 'c@d.com']);
});
