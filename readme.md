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
});
```


## API

### ghUser(username, [options], [token])

#### username

*Required*
Type: `string`

GitHub username.

#### options

Type: `object`

Passing an object with keys `res` or `headers` set to true will return
an object with the keys `user` for the user object and either `res` or
`headers` for the full res response or just the headers respectively.

#### token

Type: `string`

GitHub [personal access token](https://github.com/settings/tokens/new).

You can pass it as the second argument if you don't want to specify
any options.

#### Promise

##### user

Type: `object`

Various [user info](https://developer.github.com/v3/users/#response).

If an option argument was used with either `res` or `headers` key
set to true, the user object will be found in the responses `user` key
instead of being available directly.

## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
