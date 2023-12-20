# Slithe

<p align="center"><br/><img width="200" src="https://slithe.cadgerfeast.dev/favicon.svg" alt="Slithe Icon"/><br/><br/></p>

> Slithe - Snaky web components that moults

Slithe is a web-component library that helps you generating your applications.

It has been built to be as flexible as possible, so you can customize components at will.

## 📄 Documentation

Please check out the official documentation to get started using **Slithe**, visit [slithe.cadgerfeast.dev](https://slithe.cadgerfeast.dev).

## ⚙️ Installation

``` bash
npm install slithe --save
```

## 🚀 Usage

``` javascript
// Import
import { defineElements, setTheme } from 'slithe';
// Theme
import 'slithe/primer/global.css';
import primer from 'slithe/primer';
// Initialization
defineElements();
setTheme('light', primer);
```

``` html
<!-- Use it! -->
<sl-button primary>My Cool Button</sl-button>
```
