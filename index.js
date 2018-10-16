'use strict';
const ghGot = require('gh-got');

const defaultOptions = {
	headers: {
		'user-agent': 'https://github.com/sindresorhus/gh-user'
	}
};

module.exports = async (username, options = {}) => {
	if (typeof username !== 'string' || !username) {
		throw new Error('The `username` argument is required');
	}

	if (typeof options !== 'object') {
		throw new TypeError('The `options` argument should be an object');
	}

	const result = await ghGot(
		`users/${username}`,
		ghGot.mergeOptions(defaultOptions, options)
	);

	delete result.body.gravatar_id;

	return result.body;
};
