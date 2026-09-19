#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function settingsPaths() {
  const appdata = process.env.APPDATA || (process.env.HOME && path.join(process.env.HOME, 'AppData', 'Roaming'));
  if (!appdata) return [];
  return [
    path.join(appdata, 'Code', 'User', 'settings.json'),
    path.join(appdata, 'Code - Insiders', 'User', 'settings.json')
  ];
}

function findSettingsFile() {
  for (const p of settingsPaths()) {
    try {
      if (fs.existsSync(p)) return p;
    } catch (e) {}
  }
  // default to stable path
  const defaultPath = settingsPaths()[0];
  const dir = path.dirname(defaultPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return defaultPath;
}

function backup(file) {
  try {
    if (fs.existsSync(file)) {
      const bak = file + '.backup-' + Date.now() + '.json';
      fs.copyFileSync(file, bak);
      console.log('Backup created at', bak);
    }
  } catch (e) {
    console.error('Backup failed:', e.message);
  }
}

function readSettings(file) {
  try {
    if (!fs.existsSync(file)) return {};
    const txt = fs.readFileSync(file, 'utf8');
    return txt.trim() ? JSON.parse(txt) : {};
  } catch (e) {
    console.error('Could not read settings.json:', e.message);
    process.exit(1);
  }
}

function writeSettings(file, obj) {
  try {
    fs.writeFileSync(file, JSON.stringify(obj, null, 2));
    console.log('Wrote settings to', file);
  } catch (e) {
    console.error('Could not write settings.json:', e.message);
    process.exit(1);
  }
}

function usage() {
  console.log('Usage: node toggle-autosuggest.js <on|off>');
  process.exit(1);
}

const arg = process.argv[2];
if (!arg || !['on', 'off'].includes(arg)) usage();

const settingsFile = findSettingsFile();
backup(settingsFile);
const settings = readSettings(settingsFile);

if (arg === 'off') {
  settings['editor.quickSuggestions'] = { other: false, comments: false, strings: false };
  // keep suggestOnTriggerCharacters true so dot (.) still triggers completions
  settings['editor.suggestOnTriggerCharacters'] = true;
  console.log('Disabling inline quick suggestions (typing), keeping trigger-character suggestions (e.g. ".").');
} else {
  // Turn it back on broadly. If the user had a custom object, this will set a reasonable default.
  settings['editor.quickSuggestions'] = true;
  settings['editor.suggestOnTriggerCharacters'] = true;
  console.log('Enabling quick suggestions and trigger-character suggestions.');
}

writeSettings(settingsFile, settings);

console.log('Done. Restart VS Code (or reload window) if changes do not appear immediately.');
