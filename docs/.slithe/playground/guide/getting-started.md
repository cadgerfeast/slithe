# Getting Started

Using `Slithe` is fast and easy, here's how:

## ⚙️ Installation

``` bash
npm install slithe --save
```

## 🚀 Usage

``` typescript
// Import
import { defineElements, setTheme } from 'slithe';
// Theme
import '@slithe/primer/global.css';
import primer from '@slithe/primer';
// Initialization
defineElements();
setTheme('light', primer);
```

``` html
<!-- Use it! -->
<sl-button primary>My Cool Button</sl-button>
```
