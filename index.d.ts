import {RestEndpointMethodTypes, Octokit} from '@octokit/rest';
import {Except} from 'type-fest';

/**
Get user info from a GitHub username.

@param username - GitHub username.
@param options - Any [Octokit](https://octokit.github.io/rest.js) option.

@example
```
import ghUser = require('gh-user');

console.log(await ghUser('sindresorhus'));
//=> {login: 'sindresorhus', id: 170270, …}
```
*/
declare function ghUser(username: string, options?: ConstructorParameters<typeof Octokit>[0]): Promise<Except<RestEndpointMethodTypes['users']['getByUsername']['response']['data'], 'gravatar_id'>>;

export = ghUser;
