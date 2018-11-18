# yarn 101
Full yarn CLI documentation can be found in: [yarn cli](https://yarnpkg.com/en/docs/cli/)

## Install yarn using npm
`npm i -g yarn`

## Init (create package.json)
`yarn init`

## Install package and add to package.json dependencies
`yarn add PACKAGE_NAME`

## Install package globally (available to all projects, won't add to package.json)
`yarn global add PACKAGE_NAME`

## Install package and add to package.json DEV dependencies
`yarn add -D PACKAGE_NAME`

## Install all package.json dependencies
`yarn`

## Run commands (package.json scripts)
`yarn SCRIPT_NAME`

## print yarn config
`yarn config list`

## set yarn config
`yarn config set KEY VALUE`

## remove yarn config
`yarn config delete KEY`

## init typescript tsconfig.json file (with all configuration)
`tsc --init`
