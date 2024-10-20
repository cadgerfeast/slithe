# Primer

[Primer](https://primer.style/) is `Github`'s design system.

## Icons

[Full list of icons can be found here.](https://primer.style/octicons/)

## Usage

``` typescript
// Imports
import { defineElements, setTheme } from 'slithe';
import primer from 'slithe/primer';
// Global Stylesheet
import 'slithe/primer/global.css';
// Initialization
defineElements();
setTheme('light', primer); // Also accepts 'dark' theme
```
