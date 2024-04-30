#!/bin/bash

BUILD=$1
BRANCH=$2

VERSION=$(npm pkg get version | tr -d '"')
MAJOR=$(echo "$VERSION" | awk -F '[/.]' '{ print $1 }')
MINOR=$(echo "$VERSION" | awk -F '[/.]' '{ print $2 }')
PATCH=$BUILD

if [ "$BRANCH" = "master" ] || [ "$BRANCH" = "develop" ] ||  [[ "$BRANCH" = \release\/* ]]
then
    npm version "${MAJOR}.${MINOR}.${PATCH:="0"}" --no-commit-hooks --no-git-tag-version
else
    npm version "${MAJOR}.${MINOR}.${PATCH:="0"}-beta" --no-commit-hooks --no-git-tag-version
fi