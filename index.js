'use strict';
const ghGot = require('gh-got');

module.exports = async (username, options) => {
	if (typeof username !== 'string' || !username) {
		throw new Error('`username` required');
	}

	const defaultOptions = {
		headers: {
			'user-agent': 'https://github.com/sindresorhus/gh-user'
		}
	};

	if (!options) {
		options = {};
	}

	if (typeof options === 'string') {
		options = {token: options};
	}
	if (typeof options !== 'object') {
		throw new TypeError('`options` should be an object or a string representing the token');
	}

	const result = await ghGot(`users/${username}`, {...defaultOptions, ...options});
	delete result.body.gravatar_id;
	return result.body;
};
