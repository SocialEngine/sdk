
const path = require('path');
const fs = require('fs');

const alias = {};
const cacheDir = path.join(__dirname, '/.se');
const srcDir = path.join(__dirname, '/src');
const files = [
    '../unity/webpack.config.js',
    '../unite-ide-helper/webpack.config.js',
    '@socialengine/unite-ide-helper'
];

let ideWebpack = {
    resolve: {
        alias: {}
    }
};

for (const dir of fs.readdirSync(cacheDir)) {
    const workDir = path.join(cacheDir, dir);
    const manifestFile = path.join(workDir, '/manifest.json');
    const stat = fs.statSync(workDir);
    if (stat.isDirectory() && fs.existsSync(manifestFile)) {
        const manifest = require(manifestFile);
        const folder = manifest.id.split('/')[1];
        const productDir = path.join(srcDir, folder);
        if (fs.existsSync(productDir)) {
            alias[manifest.id] = productDir;
        }
    }
}

for (const file of files) {
    try {
        ideWebpack = require(file);
        break;
    } catch (e) {}
}

const exportAlias = {
    ...alias,
    ...ideWebpack.resolve.alias
};

module.exports = {
    resolve: {
        extensions: ['.js', '.json'],
        alias: exportAlias
    }
};

