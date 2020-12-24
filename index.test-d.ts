import {expectType} from 'tsd';
import {Except} from 'type-fest';
import {RestEndpointMethodTypes} from '@octokit/rest';
import ghUser = require('.');

expectType<Promise<Except<RestEndpointMethodTypes['users']['getByUsername']['response']['data'], 'gravatar_id'>>>(
	ghUser('sindresorhus', {auth: 'deadbeef'})
);
