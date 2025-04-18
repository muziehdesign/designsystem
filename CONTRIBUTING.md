# Contributing to Muzieh Design

## Stylesheets
Shared stylesheets live in `projects/components/src/styles`. Projects are setup so include this as one of the stylesheet paths. Example of referencing something shared:
```
@use mixins/dialog as dialog;
@import 'design/_button';
```