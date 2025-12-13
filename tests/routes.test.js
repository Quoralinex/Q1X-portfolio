/* global globalThis */
import assert from 'node:assert/strict';
import test from 'node:test';
import { onRequest as remixHandler } from '../functions/[[path]].js';
import { onRequest as healthHandler } from '../functions/health.js';

process.env.NODE_ENV = 'development';
globalThis.caches = {
  default: {
    match: async () => undefined,
    put: async () => undefined,
  },
};

const env = {
  SESSION_SECRET: 'test-secret',
  ASSETS: {
    fetch: () => Promise.resolve(new Response(null, { status: 404 })),
  },
};

function createContext(url) {
  const request = new Request(url);

  return {
    request,
    env,
    params: {},
    waitUntil() {},
    next: () => new Response(null, { status: 404 }),
    data: {},
    cloudflare: {
      env,
      caches: {
        default: {
          match: async () => undefined,
          put: async () => undefined,
        },
      },
      cf: {},
    },
  };
}

test('root route responds with 200', async () => {
  const response = await remixHandler(createContext('https://example.com/'));
  assert.equal(response.status, 200);
});

test('health route responds with ok', async () => {
  const response = await healthHandler(createContext('https://example.com/health'));
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.deepEqual(body, { ok: true });
});
