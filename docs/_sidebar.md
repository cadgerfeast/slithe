---
model:
  - name: Home
    path: /
  - name: Components
    path: /components/button
    children:
      - name: Button
        path: /components/button
      - name: Blankslate
        path: /components/blankslate
      - name: Card
        path: /components/card
      - name: Form
        path: /components/form/input/checkbox
        children:
        - name: Input
          path: /components/form/input/checkbox
          children:
            - name: Checkbox
              path: /components/form/input/checkbox
            - name: Number
              path: /components/form/input/number
            - name: Text
              path: /components/form/input/text
      - name: Icon
        path: /components/icon
      - name: Keyboard
        path: /components/keyboard
      - name: Layout
        path: /components/layout
      - name: Splitter
        path: /components/splitter
      - name: Tabs
        path: /components/tabs
  - name: Themes
    path: /themes
---
