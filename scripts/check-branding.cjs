#!/usr/bin/env node
const { execFileSync } = require('node:child_process');
const { existsSync } = require('node:fs');

const targets = ['build', 'dist', 'out', '.output', '.next'].filter(existsSync);
const pattern = 'Quoralinex / Q1X';

if (targets.length === 0) {
  console.log('No build output found to scan.');
  process.exit(0);
}

try {
  const result = execFileSync('rg', ['-n', '--fixed-strings', pattern, ...targets], {
    stdio: 'pipe',
  }).toString();
  console.error('Forbidden branding string found in build output:\n');
  console.error(result);
  process.exit(1);
} catch (error) {
  if (error.status === 1) {
    console.log('Branding check passed: no forbidden strings found.');
    process.exit(0);
  }

  console.error('Branding check failed to run.');
  console.error(error.message);
  process.exit(error.status || 1);
}
