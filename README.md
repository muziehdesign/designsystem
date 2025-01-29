# Muzieh Design System

Muzieh Design System is an evolving framework crafted to streamline the creation of modern projects with minimalistic CSS styles. Our focus is on providing foundational elements that emphasize structure and functionality, allowing developers easy bootstrap and customization.

## Components
[muzieh-ngcomponents package](https://www.npmjs.com/package/muzieh-ngcomponents) [![<ORG_NAME>](https://circleci.com/gh/muziehdesign/designsystem.svg?style=shield)](https://github.com/muziehdesign/designsystem?branch=develop)

[muzieh design system pages](https://ruifang.github.io/designsystem/design/about) [![publish-github-pages](https://github.com/muziehdesign/designsystem/actions/workflows/publish-pages.yml/badge.svg?branch=develop)](https://github.com/muziehdesign/designsystem/actions/workflows/publish-pages.yml)


## Setup
-   config.user.json, environment.ts

## Extensions
- Tailwind CSS IntelliSense
- Angular Language Service
- Prettier

## Next version

### Breaking changes
1. Moved svg icon config `svgIconDefinitionUrl` from `ComponentConfig` to `SvgIconOptions`

### Changes
1. Removed use of _icon.scss. Svg icon component contains needed minimal styles.