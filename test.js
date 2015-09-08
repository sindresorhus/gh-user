'use strict';
var ghUser = require('./'), test = require('ava');

test('user exists', function (t) {
	return ghUser('sindresorhus').then(function (user) {
		t.is(user.login, 'sindresorhus');
	});
});

test('user exists, got headers', function (t) {
  t.plan(2);
	return ghUser('sindresorhus', {headers:true}).then(function (data) {
		t.is(data.user.login, 'sindresorhus');
    t.is(data.headers.status, '200 OK');
	});
});

test('user exists, got res', function (t) {
  t.plan(2);
	return ghUser('sindresorhus', {res:true}).then(function (data) {
		t.is(data.user.login, 'sindresorhus');
    t.is(data.res.httpVersion, '1.1');
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
