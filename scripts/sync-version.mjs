import { readFileSync, writeFileSync } from 'fs';

const { version } = JSON.parse(readFileSync('node_modules/i18n-excel-manager/package.json', 'utf-8'));
const envPath = 'src/environments/environment.ts';
let content = readFileSync(envPath, 'utf-8');
content = content.replace(/version:\s*'[^']*'/, `version: 'v${version}'`);
writeFileSync(envPath, content);
console.log(`Synced i18n-excel-manager version: v${version}`);
