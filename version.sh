#!/bin/bash

BUILD=$1
BRANCH=$2

VERSION=$(npm pkg get version | tr -d '"')
MAJOR=$(echo "$VERSION" | awk -F '[/.]' '{ print $1 }')
MINOR=$(echo "$VERSION" | awk -F '[/.]' '{ print $2 }')
PATCH=$BUILD

PACKAGEVERSION=$VERSION
TAG=$MAJOR

if [ "$BRANCH" = "next" ] || [ "$BRANCH" = "develop" ] ||  [ "$BRANCH" = \release\/* ]
then
    PACKAGEVERSION="${MAJOR}.${MINOR}.${PATCH:="0"}"
    #npm version "${MAJOR}.${MINOR}.${PATCH:="0"}" --no-commit-hooks --no-git-tag-version
else
    PACKAGEVERSION="${MAJOR}.${MINOR}.${PATCH:="0"}-beta"
    TAG="beta"
    #npm version "${MAJOR}.${MINOR}.${PATCH:="0"}-beta" --no-commit-hooks --no-git-tag-version
fi

echo "PACKAGEVERSION=$PACKAGEVERSION"
echo "TAG=$TAG"

echo "$PACKAGEVERSION" > foo.txt
echo "$TAG" >> foo.txt