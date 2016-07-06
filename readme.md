# gh-user [![Build Status](https://travis-ci.org/sindresorhus/gh-user.svg?branch=master)](https://travis-ci.org/sindresorhus/gh-user)

> Get user info from a GitHub username


## Install

```
$ npm install --save gh-user
```


## Usage

```js
const ghUser = require('gh-user');

ghUser('sindresorhus').then(user => {
	console.log(user);
	//=> {login: 'sindresorhus', id: 170270, ...}
});
```


## API

### ghUser(username, [token])

#### username

Type: `string`

GitHub username.

#### token

Type: `string`

GitHub [personal access token](https://github.com/settings/tokens/new).

#### Promise

##### user

Type: `Object`

Various [user info](https://developer.github.com/v3/users/#response).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
