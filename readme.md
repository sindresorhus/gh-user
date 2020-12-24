# gh-user

> Get user info from a GitHub username

## Install

```
$ npm install gh-user
```

## Usage

```js
const ghUser = require('gh-user');

console.log(await ghUser('sindresorhus'));
//=> {login: 'sindresorhus', id: 170270, …}
```

## API

### ghUser(username, options?)

Returns a `Promise<Object>` with various [user info](https://developer.github.com/v3/users/#response).

#### username

Type: `string`

GitHub username.

#### options

Type: `object`

Any [Octokit](https://octokit.github.io/rest.js) option. To use a GitHub [personal access token](https://github.com/settings/tokens/new), for example, pass in:

```js
{
	token: 'YOUR-TOKEN'
}
```
