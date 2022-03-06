#!/bin/sh
BUILD=$1
PREFIX=$2

if [ -n "${2}" ] 
then
    PREFIX="${PREFIX}."
    fi

VERSION=$(npm pkg get version)
VERSION="${VERSION}-${PREFIX}${BUILD}"
VERSION=$(echo "$VERSION" | tr -d '"')
echo ${VERSION}
npm version "${VERSION}" --no-commit-hooks --no-git-tag-version