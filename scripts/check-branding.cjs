#!/usr/bin/env node
const { execFileSync } = require('node:child_process');
const { existsSync } = require('node:fs');

const targets = ['build', 'dist', 'out', '.output', '.next'].filter(existsSync);
const pattern = 'Quoralinex / Q1X';

if (targets.length === 0) {
  console.log('No build output found to scan.');
  process.exit(0);
}

function tryRipgrep() {
  try {
    const result = execFileSync('rg', ['-n', '--fixed-strings', pattern, ...targets], {
      stdio: 'pipe',
    }).toString();

    console.error('Forbidden branding string found in build output:\n');
    console.error(result);
    process.exit(1);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // rg not available in this environment; fall back to a manual scan.
      return;
    }

    if (error.status === 1) {
      console.log('Branding check passed: no forbidden strings found.');
      process.exit(0);
    }

    console.error('Branding check failed to run.');
    console.error(error.message);
    process.exit(error.status || 1);
  }
}

function scanForPattern() {
  const { readdirSync, readFileSync, statSync } = require('node:fs');
  const { join } = require('node:path');

  const patternBuffer = Buffer.from(pattern, 'utf8');
  const matches = [];

  const walk = (entry) => {
    let stats;
    try {
      stats = statSync(entry);
    } catch (error) {
      console.error(`Unable to stat ${entry}: ${error.message}`);
      return;
    }

    if (stats.isDirectory()) {
      let children = [];
      try {
        children = readdirSync(entry);
      } catch (error) {
        console.error(`Unable to read directory ${entry}: ${error.message}`);
        return;
      }

      for (const child of children) {
        walk(join(entry, child));
      }
      return;
    }

    if (!stats.isFile()) {
      return;
    }

    try {
      const content = readFileSync(entry);
      if (content.includes(patternBuffer)) {
        matches.push(entry);
      }
    } catch (error) {
      console.error(`Unable to read ${entry}: ${error.message}`);
    }
  };

  for (const target of targets) {
    walk(target);
  }

  if (matches.length > 0) {
    console.error('Forbidden branding string found in build output:\n');
    for (const match of matches) {
      console.error(match);
    }
    process.exit(1);
  }

  console.log('Branding check passed: no forbidden strings found.');
  process.exit(0);
}

tryRipgrep();
scanForPattern();
