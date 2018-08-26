'use strict';
const ghGot = require('gh-got');

const defaultOptions = {
	headers: {
		'user-agent': 'https://github.com/sindresorhus/gh-user'
	}
};

module.exports = async (username, options) => {
	if (typeof username !== 'string' || !username) {
		throw new Error('`username` required');
	}

	if (typeof options === 'object') {
		options = {...defaultOptions, ...options};
	} else {
		if (options !== undefined) {
			throw new TypeError('`options` should be an object of gh-got options');
		}
		options = {...defaultOptions};
	}

	const result = await ghGot(`users/${username}`, options);
	delete result.body.gravatar_id;
	return result.body;
};
