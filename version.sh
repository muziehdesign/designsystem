# first argument = build number
# second argument = prefix

BUILD=$1
PREFIX=$2

VERSION=$(npm pkg get version)
VERSION=${VERSION::-1}
VERSION="${VERSION}-${BUILD}"
VERSION=${VERSION:1}
echo $VERSION
npm version "${VERSION}" --no-commit-hooks --no-git-tag-version