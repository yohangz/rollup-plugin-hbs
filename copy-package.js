const { readJsonSync, writeJsonSync } = require('fs-extra');
const packageJson = readJsonSync('./package.json');

packageJson.peerDependencies = packageJson.dependencies;
delete packageJson.dependencies;
delete packageJson.scripts;
writeJsonSync('./dist/package.json', packageJson, { spaces: 2, EOL: '\n' });