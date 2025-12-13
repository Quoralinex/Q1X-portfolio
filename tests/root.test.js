import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath = path.join(__dirname, '..', 'app', 'root.jsx');

test('root module exposes RootApp', async () => {
  const content = await readFile(rootPath, 'utf8');
  assert.match(content, /export\s+\{\s*App\s+as\s+RootApp\s*\}/);
});
