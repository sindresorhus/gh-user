import test from 'ava';
import ghUser from '.';

test('user exists', async t => {
	const user = await ghUser('sindresorhus');
	t.is(user.login, 'sindresorhus');
});

test('user exists (empty options object)', async t => {
	const user = await ghUser('sindresorhus', {});
	t.is(user.login, 'sindresorhus');
});

test('user exists (gh-got options object)', async t => {
	const user = await ghUser('sindresorhus', {retry: 5});
	t.is(user.login, 'sindresorhus');
});

test('user doesn\'t exist', async t => {
	await t.throwsAsync(ghUser('sindr555esorhus'), 'Not Found (404)');
});

test('no username given (no arg)', async t => {
	await t.throwsAsync(ghUser(), 'The `username` argument is required');
});

test('no username given (empty string)', async t => {
	await t.throwsAsync(ghUser(''), 'The `username` argument is required');
});

test('username given (bad options type)', async t => {
	await t.throwsAsync(ghUser('sindresorhus', 55), 'The `options` argument should be an object');
});

test('username given (bad token)', async t => {
	await t.throwsAsync(ghUser('sindresorhus', {token: 'NOT-A-TOKEN'}), 'Bad credentials (401)');
});
