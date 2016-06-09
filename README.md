## This repo
https://github.com/tja4472/ngrx-clicker-ionic

## Based on
https://github.com/lathonez/clicker

https://github.com/ngrx/store

https://github.com/ngrx/example-app

Comprehensive Introduction to @ngrx/store
https://gist.github.com/btroncone/a6e4347326749f938510

https://github.com/btroncone/ngrx-examples

https://angular.io/docs/ts/latest/guide/style-guide.html

https://github.com/mgechev/codelyzer

https://github.com/ngrx/ngrx.github.io


https://github.com/driftyco/ionic/issues/6685


## Install & Start

```bash
git clone https://github.com/lathonez/clicker.git
cd clicker
npm install       # or `npm run reinstall` if you get an error
npm start         # start the application (ionic serve)
```

## Run Unit Tests
```bash
npm test          # run unit tests
```

## Debug Unit tests
```bash
npm run karma    # start karma in debug mode: mutli run Chrome, hit `debug` to get going.
```

## Run E2E
```
# e2e (aka. end-to-end, integration) - In two different shell windows
# Make sure you don't have a global instance of Protractor

npm start
npm run e2e
```

## Blog Topics

* [Unit testing walkthrough](http://lathonez.com/2016/ionic-2-unit-testing/)
* [E2E testing walkthrough](http://lathonez.com/2016/ionic-2-e2e-testing/)
* [Removing assets from the APK](http://lathonez.com/2016/cordova-remove-assets/)

## Contribute
Issues and PRs are welcome, see the [roadmap sticky](https://github.com/lathonez/clicker/issues/38)

## Acks

* This started out as a fork of [Angular 2 Seed](https://github.com/mgechev/angular2-seed) and would not be possible without it
* @bengro for the lightweightify inspiration (#68)
* @ric9176 and @DanielaGSB for E2E tests (#50)
* [Everyone else](https://github.com/lathonez/clicker/graphs/contributors) for the advice, help, PRs etc

## Changelog

See the changelog [here](https://github.com/lathonez/clicker/blob/master/CHANGELOG.md)

## Dependencies

* **@Angular:** 2.0.0-rc.1
* **Ionic:** 2.0.0-beta.7

External dependencies are listed here to justify their inclusion and to allow for their removal if your project isn't using the related functionality.

* browserify: peer dependency of karma-browserify
* browserify-istanbul: coverage transformer for karma-browserify
* codecov.io: sending unit test coverage reports to codecov.io
* gulp-tslint: access tslint from gulp
* gulp-typescript: transpile typescript in gulp
* isparta: ES6 unit test coverage reporter
* jasmine-core: jasmine coverage reporter
* jasmine-spec-reporter: e2e coverage reporter for jasmine
* karma: unit test runner
* karma-browserify: transpile and bundle typescript in Karma
* karma-chrome-launcher: allows using chrome with Karma - chrome is used in Travis
* karma-coverage: unit test coverage reporter
* karma-jasmine: jasmine framework for Karma
* karma-mocha-reporter: mocha progress reporter for Karma
* karma-phantomjs-launcher: allows using phantom with Karma
* phantomjs-prebuilt: phantom headless browser
* protractor: e2e test runner
* tsify: typescript plugin for karma-browserify
* ts-node: transpile gulpfile
* tslint: static code analysis for typescript
* tslint-eslint-rules: eslint rules plugin for tslint
* typescript: transpile e2e tests
* typings: type definitions manager
