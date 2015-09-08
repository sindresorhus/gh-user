'use strict';
var ghGot = require('gh-got');
var Promise = require('pinkie-promise');

module.exports = function (username, token) {
	if (typeof username !== 'string' || !username) {
		return Promise.reject(new Error('`username` required'));
	}

	return ghGot('users/' + username, {
		token: token,
		headers: {
			'user-agent': 'https://github.com/sindresorhus/gh-user'
		}
	}).then(function (result) {
		var rateLimit = {'github-time': new Date(result.headers.date).getTime() / 1000};
		var ret = result.body;
		var prefix = 'x-ratelimit-';

		delete ret.gravatar_id;
		delete ret.bio;
		Object.keys(result.headers)
			.forEach(function (k) {
				if (!k.indexOf(prefix)) {
					rateLimit[k.slice(prefix.length)] = parseInt(result.headers[k], 10);
				}
			});
		Object.defineProperty(ret, 'rateLimit', {value: rateLimit});
		return ret;
	});
};
