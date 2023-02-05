---
title: Slithe
---
# Slithe

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cadgerfeast_slithe&metric=alert_status)](https://sonarcloud.io/dashboard?id=cadgerfeast_slithe)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=cadgerfeast_slithe&metric=coverage)](https://sonarcloud.io/dashboard?id=cadgerfeast_slithe)
[![Version](https://img.shields.io/npm/v/slithe)](https://www.npmjs.com/package/slithe)
[![Downloads](https://img.shields.io/npm/dt/slithe)](https://www.npmjs.com/package/slithe)
[![License](https://img.shields.io/npm/l/slithe)](https://github.com/cadgerfeast/slithe/blob/master/LICENSE)

<p align="center"><br/><img width="200" src="https://github.com/cadgerfeast/slithe/blob/master/public/icons/slithe.svg?raw=true" alt="Slithe Icon"/><br/><br/></p>

> Snaky web components that moults.

## Documentation

[Full documentation website can be found here.](https://slithe.cadgerfeast.dev)

## Installation

``` bash
npm install slithe --save
```

## Usage

``` javascript
// Import
import { defineElements, setTheme } from 'slithe';
// Theme
import 'slithe/themes/primer/global.css';
import primer from 'slithe/themes/primer';
// Initialization
defineElements();
setTheme('light', primer);
```

``` html
<!-- Use it! -->
<sl-button primary>My Cool Button</sl-button>
```

## License

MIT
