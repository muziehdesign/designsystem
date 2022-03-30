#!/bin/sh
BRANCH=$1

if [ "${1}" != "develop" ]
then
    npm publish ./dist/components --tag latest
else
    npm publish ./dist/components
    fi