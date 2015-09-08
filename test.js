'use strict';
var test = require('ava');
var ghUser = require('./');

test('user exists', function (t) {
	return ghUser('sindresorhus').then(function (user) {
		t.is(user.login, 'sindresorhus');
		t.true(user.rateLimit.limit > 50);
	});
});

test('user doesn\'t exist', function (t) {
	return ghUser('sindr555esorhus').catch(function (err) {
		t.is(err.message, 'Response code 404 (Not Found)');
	});
});

test('no username given (no arg)', function (t) {
	return ghUser().catch(function (err) {
		t.is(err.message, '`username` required');
	});
});

test('no username given (empty string)', function (t) {
	return ghUser('').catch(function (err) {
		t.is(err.message, '`username` required');
	});
});
