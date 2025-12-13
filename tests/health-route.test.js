import test from 'node:test';
import assert from 'node:assert/strict';
import { loader } from '../app/routes/health.js';

const createRequest = () => new Request('http://localhost/health');

test('health route responds with ok status', async () => {
  const response = await loader({ request: createRequest(), context: {} });
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.deepEqual(body, { status: 'ok' });
});
