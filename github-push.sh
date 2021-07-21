#!/bin/bash

ng build --prod --base-href https://kiwsan.github.io/angular6-realworld/

npx angular-cli-ghpages --dir=dist/angular-realword-project
