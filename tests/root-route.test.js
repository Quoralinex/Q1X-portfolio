import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const rootFilePath = fileURLToPath(new URL('../app/root.jsx', import.meta.url));

const readRootFile = async () => readFile(rootFilePath, 'utf8');

test('RootApp is exported as a named component', async () => {
  const contents = await readRootFile();
  assert.match(contents, /export function RootApp\s*\(/);
});

test('RootApp remains the default export', async () => {
  const contents = await readRootFile();
  assert.match(contents, /export default RootApp;/);
});
