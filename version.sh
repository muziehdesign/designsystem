#!/bin/sh

set -e

BUILD=$1
BRANCH=$2

VERSION=$(npm pkg get version | tr -d '"')
MAJOR=$(echo "$VERSION" | awk -F '[/.]' '{ print $1 }')
MINOR=$(echo "$VERSION" | awk -F '[/.]' '{ print $2 }')
PATCH=$BUILD

PACKAGEVERSION=$VERSION
TAG=$MAJOR


if (echo "$BRANCH" | grep -q "^release") || [ "$CIRCLE_BRANCH" = "develop" ] || [ "$CIRCLE_BRANCH" = "next" ];
then
    PACKAGEVERSION="${MAJOR}.${MINOR}.${PATCH:="0"}"
else
    PACKAGEVERSION="${MAJOR}.${MINOR}.${PATCH:="0"}-beta"
    TAG="beta"
fi

echo "PACKAGEVERSION=$PACKAGEVERSION"
echo "TAG=$TAG"

echo "$PACKAGEVERSION" > foo.txt
echo "$TAG" >> foo.txt

DIRECTORIES="./ ./projects/components ./projects/design"

for DIR in $DIRECTORIES; do
  if [ -d "$DIR" ]; then
    echo "Entering $DIR"
    cd "$DIR" || exit  # Navigate into the directory
    npm version "${PACKAGEVERSION}" --no-commit-hooks --no-git-tag-version
    cd - || exit  # Return to the previous directory
  else
    echo "Directory $DIR does not exist. Skipping..."
  fi
done