# gh-user [![Build Status](https://travis-ci.org/sindresorhus/gh-user.svg?branch=master)](https://travis-ci.org/sindresorhus/gh-user)

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

### ghUser(username, token?)

Returns a `Promise<Object>` with various [user info](https://developer.github.com/v3/users/#response).

#### username

Type: `string`

GitHub username.

#### token

Type: `string`

GitHub [personal access token](https://github.com/settings/tokens/new).
