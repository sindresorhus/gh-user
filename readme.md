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
