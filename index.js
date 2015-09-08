'use strict';
var ghGot = require('gh-got'), Promise = require('pinkie-promise');

module.exports = function (username, options, token) {
	if (typeof username !== 'string' || !username) {
		return Promise.reject(new Error('`username` required'));
	}

  if (typeof token === 'undefined' && typeof options === 'string') {
    token = options;
    options = {};
  } else if (typeof options === 'undefined') {
    options = {};
  } else if (typeof options !== 'object') {
		return Promise.reject(new Error('`options` must be an object if provided'));
  }

	return ghGot('users/' + username, {
		token: token,
		headers: {
			'user-agent': 'https://github.com/sindresorhus/gh-user'
		}
	}).then(function(res) {
    var ret;
		delete res.body.gravatar_id;
		delete res.body.bio;
    if (options.res) {
      return {user:res.body, res:res};
    }

    if (options.headers) {
      return {user:res.body, headers:res.headers};
    }
    return res.body;
	});
};
