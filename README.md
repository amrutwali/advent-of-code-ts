# yarn-test

## Installation instructions

- Add extension [Arcanis ZipFS](arcanis.vscode-zipfs)
- Run command `yarn init`
- Create `.yarnrc.yml` file and add `nodeLinker: pnp`
- Run `yarn` or `yarn install`
- Now you have to add typescript and vscode SDK for yarn
- Run `yarn dlx @yarnpkg/sdks vscode`
- Run `yarn dlx @yarnpkg/sdks typescript`
- Go to command Palette using `Ctrl + Shift + P`
- Select _Typescript: Select Typescript Version_
- Select _Use workspace version_
- Done


**[ OPTIONALLY ]**

- Replace all commands / scripts that start with `node ..` to `yarn node ..`
- Replace all commands that use node binaries _i.e. .node\_modules bin_ `<bin>` to `yarn run <bin>`