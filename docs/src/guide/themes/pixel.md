# Pixel

[Pixel Components](https://pixel.cadgerfeast.dev/) is a retro design system made for `Slithe`.

## Installation

``` bash
npm install slithe @pixel/components --save
```

## Usage

``` typescript
// Imports
import { defineElements, setTheme } from 'slithe';
import pixel from '@pixel/components';
// Global Stylesheet
import '@pixel/components/global.css';
// Initialization
defineElements();
setTheme('light', pixel); // Also accepts 'dark' theme
```
