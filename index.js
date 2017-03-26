'use strict';
const ghGot = require('gh-got');

module.exports = (username, token) => {
	if (typeof username !== 'string' || !username) {
		return Promise.reject(new Error('`username` required'));
	}

	return ghGot(`users/${username}`, {
		token,
		headers: {
			'user-agent': 'https://github.com/sindresorhus/gh-user'
		}
	}).then(result => {
		delete result.body.gravatar_id;
		return result.body;
	});
};
