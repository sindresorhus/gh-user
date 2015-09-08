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
	}).then(function(result) {
		var ratelimit = {'github-time': new Date(result.headers.date).valueOf()/1000},
			ret = result.body, prefix = 'x-ratelimit-';

		delete ret.gravatar_id;
		delete ret.bio;
		Object.keys(result.headers)
			.filter(isPrefixed.bind(null, prefix))
			.forEach(function(k) {
				ratelimit[k.slice(prefix.length)] = parseInt(result.headers[k], 10);
		});
		Object.defineProperty(ret, 'ratelimit', {value: ratelimit});
		return ret;
	});
};

function isPrefixed(prefix, str) {
	return !str.indexOf(prefix);
}
