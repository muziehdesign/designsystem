#!/bin/sh

set -e

BUILD=$1
BRANCH=$2

VERSION=$(npm pkg get version | tr -d '"')
MAJOR=$(echo "$VERSION" | awk -F '[/.]' '{ print $1 }')
MINOR=$(echo "$VERSION" | awk -F '[/.]' '{ print $2 }')
PATCH=$(echo "$VERSION" | awk -F '[/.-]' '{ print $3 }')

PACKAGEVERSION=$VERSION
TAG=$MAJOR


if (echo "$BRANCH" | grep -q "^release");
then
    PACKAGEVERSION="${MAJOR}.${MINOR}.${BUILD}"
elif [ "$BRANCH" = "develop" ] || [ "$BRANCH" = "next" ]
then
    PACKAGEVERSION="${MAJOR}.${MINOR}.${PATCH}-next.${BUILD}"
else
    PACKAGEVERSION="${MAJOR}.${MINOR}.${PATCH}-beta.${BUILD}"
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