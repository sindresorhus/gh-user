'use strict';
var test = require('ava');
var ghUser = require('./');

test(function (t) {
	t.plan(1);

	ghUser('sindresorhus', function (err, user) {
		t.assert(!err, err);
		t.assert(user.login === 'sindresorhus');
	});
});
