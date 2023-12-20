# Themes
 
By default, `Slithe` comes a theme you can use.

This is [Primer](https://primer.style/), `Github`'s design system.

Here is how you can use it.

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

Though, you can use whatever theme you'd like or even create your own!

## Theme Library

- [Pixel Components](https://pixel.cadgerfeast.dev/)
