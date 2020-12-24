'use strict';
const {Octokit} = require('@octokit/rest');

module.exports = async (username, options = {}) => {
	if (typeof username !== 'string' || !username) {
		throw new Error('The `username` argument is required');
	}

	if (typeof options !== 'object') {
		throw new TypeError('The `options` argument should be an object');
	}

	const octokit = new Octokit({
		userAgent: 'https://github.com/sindresorhus/gh-user',
		...options
	});

	const {data} = await octokit.users.getByUsername({username});

	delete data.gravatar_id;

	return data;
};
