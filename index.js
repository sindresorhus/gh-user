'use strict';
const {Octokit} = require('@octokit/rest');

module.exports = async (username, token) => {
	if (typeof username !== 'string' || !username) {
		throw new Error('The `username` argument is required');
	}

	if (typeof options !== 'object') {
		throw new TypeError('The `options` argument should be an object');
	}

	const octokit = new Octokit({
		auth: token,
		userAgent: 'https://github.com/sindresorhus/gh-user'
	});

	const {data} = await octokit.users.getByUsername({
		username
	});

	delete data.gravatar_id;

	return data;
};
