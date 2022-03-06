#!/bin/sh
BUILD=$1
BRANCH=$2

PREFIX=""
if [ "${2}" != "develop" ]
then
    PREFIX="alpha."
    fi

VERSION=$(npm pkg get version)
VERSION="${VERSION}-${PREFIX}${BUILD}"
VERSION=$(echo "$VERSION" | tr -d '"')
echo ${VERSION}
npm version "${VERSION}" --no-commit-hooks --no-git-tag-version