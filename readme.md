# gh-user [![Build Status](https://travis-ci.org/sindresorhus/gh-user.svg?branch=master)](https://travis-ci.org/sindresorhus/gh-user)

> Get user info from a GitHub username


## Install

```
$ npm install gh-user
```


## Usage

```js
const ghUser = require('gh-user');

(async () => {
	console.log(await ghUser('sindresorhus'));
	//=> {login: 'sindresorhus', id: 170270, …}
})();
```


## API

### ghUser(username, [options])

Returns a `Promise<Object>` with various [user info](https://developer.github.com/v3/users/#response).

#### username

Type: `string`

GitHub username.

#### options

Type: `Object`

Any [`gh-got`](https://github.com/sindresorhus/gh-got#api) option. To use a GitHub [personal access token](https://github.com/settings/tokens/new), for example, pass in:

```js
{
	token: 'YOUR-TOKEN'
}
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
