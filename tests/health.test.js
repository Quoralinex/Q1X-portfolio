import assert from 'node:assert/strict';
import test from 'node:test';
import { loader as healthLoader } from '../app/routes/health.js';

test('health loader responds with ok status', async () => {
  const response = await healthLoader();
  assert.equal(response.status, 200);

  const payload = await response.json();
  assert.deepEqual(payload, { status: 'ok' });
});
