#!/usr/bin/env node
const { existsSync, readdirSync, readFileSync, statSync } = require('node:fs');
const { join } = require('node:path');

const targets = ['build', 'dist', 'out', '.output', '.next'].filter(existsSync);
const pattern = 'Quoralinex / Q1X';

if (targets.length === 0) {
  console.log('No build output found to scan.');
  process.exit(0);
}

const filesWithPattern = [];

const walk = path => {
  for (const entry of readdirSync(path)) {
    const fullPath = join(path, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      walk(fullPath);
      continue;
    }

    try {
      const contents = readFileSync(fullPath, 'utf8');
      if (contents.includes(pattern)) {
        filesWithPattern.push(fullPath);
      }
    } catch (error) {
      // Skip files that cannot be read as text (likely binary assets)
      continue; // eslint-disable-line no-continue
    }
  }
};

for (const target of targets) {
  walk(target);
}

if (filesWithPattern.length > 0) {
  console.error('Forbidden branding string found in build output:\n');
  filesWithPattern.forEach(file => console.error(` - ${file}`));
  process.exit(1);
}

console.log('Branding check passed: no forbidden strings found.');
