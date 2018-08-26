import test from 'ava';
import m from '.';

test('user exists', async t => {
	const user = await m('sindresorhus');
	t.is(user.login, 'sindresorhus');
});

test('user exists (empty options object)', async t => {
	const user = await m('sindresorhus', {});
	t.is(user.login, 'sindresorhus');
});

test('user exists (gh-got options object)', async t => {
	const user = await m('sindresorhus', {retry: 5});
	t.is(user.login, 'sindresorhus');
});

test('user doesn\'t exist', async t => {
	await t.throws(m('sindr555esorhus'), 'Not Found (404)');
});

test('no username given (no arg)', async t => {
	await t.throws(m(), '`username` required');
});

test('no username given (empty string)', async t => {
	await t.throws(m(''), '`username` required');
});

test('username given (bad options type)', async t => {
	await t.throws(m('sindresorhus', 55), '`options` should be an object of gh-got options');
});

test('username given (bad token)', async t => {
	await t.throws(m('sindresorhus', {token: 'NOT-A-TOKEN'}), 'Bad credentials (401)');
});
