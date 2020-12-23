import {expectType} from 'tsd';
import {RestEndpointMethodTypes} from "@octokit/rest";
import ghUser = require('.');

expectType<Promise<Omit<RestEndpointMethodTypes['users']['getByUsername']['response']['data'], 'gravatar_id'>>>(
	ghUser('sindresorhus', 'deadbeef')
);
