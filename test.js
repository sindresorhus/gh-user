const test = require('ava');
const ghUser = require('.');

test('user exists', async t => {
	const user = await ghUser('sindresorhus');
	t.is(user.login, 'sindresorhus');
});

test('user exists (empty options object)', async t => {
	const user = await ghUser('sindresorhus', {});
	t.is(user.login, 'sindresorhus');
});

test('user exists (empty token string)', async t => {
	const user = await ghUser('sindresorhus', {auth: ''});
	t.is(user.login, 'sindresorhus');
});

test('user doesn\'t exist', async t => {
	await t.throwsAsync(ghUser('sindr555esorhus'), {message: 'Not Found'});
});

test('no username given (no arg)', async t => {
	await t.throwsAsync(ghUser(), {message: 'The `username` argument is required'});
});

test('no username given (empty string)', async t => {
	await t.throwsAsync(ghUser(''), {message: 'The `username` argument is required'});
});

test('username given (bad options type)', async t => {
	await t.throwsAsync(ghUser('sindresorhus', 55), {message: 'The `options` argument should be an object'});
});

test('username given (bad token)', async t => {
	await t.throwsAsync(ghUser('sindresorhus', {auth: 'NOT-A-TOKEN'}), {message: 'Bad credentials'});
});
