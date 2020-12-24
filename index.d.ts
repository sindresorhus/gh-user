import {RestEndpointMethodTypes} from '@octokit/rest';

/**
Get user info from a GitHub username.

@param username - GitHub username.
@param token - GitHub [personal access token](https://github.com/settings/tokens/new).

@example
```
import ghUser = require('gh-user');

console.log(await ghUser('sindresorhus'));
//=> {login: 'sindresorhus', id: 170270, …}
```
*/
declare function ghUser(username: string, token?: string): Promise<Omit<RestEndpointMethodTypes['users']['getByUsername']['response']['data'], 'gravatar_id'>>;

export = ghUser;
