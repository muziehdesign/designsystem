#!/bin/sh
BUILD=$1
PREFIX=$2

if [ -n "${2}" ] 
then
    PREFIX="${PREFIX}."
    fi

VERSION=$(npm pkg get version)
VERSION=${VERSION::-1}
VERSION="${VERSION}-${PREFIX}${BUILD}"
VERSION=${VERSION:1}
echo $VERSION
npm version "${VERSION}" --no-commit-hooks --no-git-tag-version