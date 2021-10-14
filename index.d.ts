import {RestEndpointMethodTypes, Octokit} from '@octokit/rest';

/**
Get user info from a GitHub username.

@param username - GitHub username.
@param options - Any [Octokit](https://octokit.github.io/rest.js) options.

@example
```
import ghUser from 'gh-user';

console.log(await ghUser('sindresorhus'));
//=> {login: 'sindresorhus', id: 170270, …}
```
*/
export default function ghUser(username: string, options?: ConstructorParameters<typeof Octokit>[0]): Promise<Omit<RestEndpointMethodTypes['users']['getByUsername']['response']['data'], 'gravatar_id'>>; // eslint-disable-line @typescript-eslint/ban-types
