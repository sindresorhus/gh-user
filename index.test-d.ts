import {expectType} from 'tsd';
import {RestEndpointMethodTypes} from '@octokit/rest';
import ghUser from './index.js';

expectType<Promise<Omit<RestEndpointMethodTypes['users']['getByUsername']['response']['data'], 'gravatar_id'>>>( // eslint-disable-line  @typescript-eslint/ban-types
	ghUser('sindresorhus', {auth: 'deadbeef'}),
);
