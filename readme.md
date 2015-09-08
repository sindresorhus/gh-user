# gh-user [![Build Status](https://travis-ci.org/sindresorhus/gh-user.svg?branch=master)](https://travis-ci.org/sindresorhus/gh-user)

> Get user info from a GitHub username


## Install

```
$ npm install --save gh-user
```


## Usage

```js
var ghUser = require('gh-user');

ghUser('sindresorhus').then(function (user) {
	console.log(user);
	//=> { login: 'sindresorhus', id: 170270, ... }

	// The rateLimit property is neither configurable nor enumerable
	// and doesn't clobber the user object.
  // You can still access its properties as following:
	console.log(user.rateLimit['github-time']);
	//=> 1441694559
	// timestamp in seconds of the github server

	console.log(user.rateLimit['remaining']);
	//=> 22
	// remaining queries until 'reset' time

	console.log(user.rateLimit['reset']);
	//=> 1441698880
	// timestamp in seconds when 'remaining' will be reset to 'limit'

	console.log(user.rateLimit['limit']);
	//=> 60
	// number of queries per time period (between resets)
});
```


## API

### ghUser(username, [token])

#### username

*Required*  
Type: `string`

GitHub username.

#### token

Type: `string`  

GitHub [personal access token](https://github.com/settings/tokens/new).

#### Promise

##### user

Type: `object`

Various [user info](https://developer.github.com/v3/users/#response).

The rate limit info is exposed as a hidden property on the user object.

## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
