import test from 'ava';
import m from './';

test('user exists', async t => {
	const user = await m('sindresorhus');
	t.is(user.login, 'sindresorhus');
});

test('user doesn\'t exist', async t => {
	await t.throws(m('sindr555esorhus'), 'Response code 404 (Not Found)');
});

test('no username given (no arg)', async t => {
	await t.throws(m(), '`username` required');
});

test('no username given (empty string)', async t => {
	await t.throws(m(''), '`username` required');
});
