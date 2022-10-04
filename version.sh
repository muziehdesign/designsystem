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
if [ $BRANCH != "master" ] && [ $BRANCH != "develop" ]
then
    SUFFIX='-alpha'
fi

npm version "${MAJOR}.${MINOR}.${PATCH}${SUFFIX}" --no-commit-hooks --no-git-tag-version

