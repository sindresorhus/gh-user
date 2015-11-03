import test from 'ava';
import fn from './';

test('user exists', async t => {
	const user = await fn('sindresorhus');

	t.is(user.login, 'sindresorhus');
});

test('user doesn\'t exist', async t => {
	await t.throws(fn('sindr555esorhus'), 'Response code 404 (Not Found)');
});

test('no username given (no arg)', async t => {
	await t.throws(fn(), '`username` required');
});

test('no username given (empty string)', async t => {
	await t.throws(fn(''), '`username` required');
});
