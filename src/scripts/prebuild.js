const fs = require('fs')
const path = require('path')

const packagesToPatch = [
    'animated',
    'core',
    'konva',
    'native',
    'shared',
    'three',
    'web',
    'zdog',
]

packagesToPatch.forEach(patchPackage)

function patchPackage(_package) {
    const packageJsonPath = path.join(
        'node_modules',
        '@react-spring',
        _package,
        'package.json',
    )
    const packageJson = fs.readFileSync(packageJsonPath, 'utf-8')
    const modifiedPackageJson = packageJson.replace(
        '"sideEffects": false,',
        '',
    )
    fs.writeFileSync(packageJsonPath, modifiedPackageJson, {
        encoding: 'utf-8',
    })
}