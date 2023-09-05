#!/bin/sh
BUILD=$1
BRANCH=$2

VERSION=$(npm pkg get version | tr -d '"')
MAJOR=$(echo $VERSION | awk -F '[/.]' '{ print $1 }')
ECHO $MAJOR
MINOR=$(echo $VERSION | awk -F '[/.]' '{ print $2 }')
ECHO $MINOR
PATCH=$BUILD
SUFFIX=''

npm version "${MAJOR}.${MINOR}.${PATCH}" --no-commit-hooks --no-git-tag-version

if [ $BRANCH != "master" ] && [ $BRANCH != "develop" ]
then
    npm version prerelease --preid beta --no-commit-hooks --no-git-tag-version
fi