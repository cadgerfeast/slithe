# Slithe

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cadgerfeast_slithe&metric=alert_status)](https://sonarcloud.io/dashboard?id=cadgerfeast_slithe)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=cadgerfeast_slithe&metric=coverage)](https://sonarcloud.io/dashboard?id=cadgerfeast_slithe)
[![Version](https://img.shields.io/npm/v/slithe)](https://www.npmjs.com/package/slithe)
[![Downloads](https://img.shields.io/npm/dt/slithe)](https://www.npmjs.com/package/slithe)
[![License](https://img.shields.io/npm/l/slithe)](https://github.com/cadgerfeast/slithe/blob/master/LICENSE)

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
import { registerElements } from 'slithe';
// Theme
import 'slithe/themes/primer/global.css';
import { components } from 'slithe/themes/primer';
// Initialization
registerElements({ theme: { key: 'primer-light', components } });
```

``` html
<!-- Use it! -->
<sl-button primary>My Cool Buton</sl-button>
<sl-input-text/>
```

## License

MIT

## TODOs

- Snake/Svelte logo
- sl-kbd
- Migrate to public repository
- Initialize sonarcloud
- Check github pages with custom domain
- Publish 0.0.2
- sl-card
  - https://primer.style/css/components/box
- sl-input-text
  - https://primer.style/css/components/forms
  - https://primer.style/react/TextInput
- sl-hgroup
  - https://primer.style/react/Button
  - https://primer.style/css/components/buttons
- sl-tooltip
  - https://primer.style/react/Tooltip
  - https://primer.style/css/components/tooltips
  - Positioning
  - Debounce
  - Mouseleave
  - Vanilla Light
  - Vanilla Dark
  - Primer Light
  - Primer Dark
- Notifications
  - https://primer.style/css/components/toasts
  - Delay
  - Dismissable
  - Vanilla Light
  - Vanilla Dark
  - Primer Light
  - Primer Dark
- Per-component (splits) examples
