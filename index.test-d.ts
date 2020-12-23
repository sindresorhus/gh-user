import {expectType} from 'tsd';
import {RestEndpointMethodTypes} from "@octokit/rest";
import ghUser = require('.');

expectType<Promise<RestEndpointMethodTypes["users"]["getByUsername"]["response"]>>(
	ghUser('sindresorhus', 'deadbeef')
);
