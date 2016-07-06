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
		delete result.body.gravatar_id;
		return result.body;
	});
};
