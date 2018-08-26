'use strict';
const ghGot = require('gh-got');

module.exports = async (username, token) => {
	if (typeof username !== 'string' || !username) {
		throw new Error('`username` required');
	}

	const result = await ghGot(`users/${username}`, {
		token,
		headers: {
			'user-agent': 'https://github.com/sindresorhus/gh-user'
		}
	});
	delete result.body.gravatar_id;
	return result.body;
};
