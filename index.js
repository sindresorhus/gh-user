'use strict';
var ghGot = require('gh-got');

module.exports = function (username, token, cb) {
	if (typeof username !== 'string') {
		throw new Error('`username` required');
	}

	if (typeof token === 'function') {
		cb = token;
		token = null;
	}

	ghGot('users/' + username, {
		token: token,
		headers: {
			'user-agent': 'https://github.com/sindresorhus/gh-user'
		}
	}, function (err, data) {
		if (err && err.code === 404) {
			cb(new Error('User `' + username + '` doesn\'t exist'));
			return;
		}

		if (err) {
			cb(err);
			return;
		}

		// remove deprecated props
		delete data.gravatar_id;
		delete data.bio;

		cb(null, data);
	});
};
