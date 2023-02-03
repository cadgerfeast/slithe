---
model:
  - name: Home
    path: /
  - name: Components
    path: /components/button
    children:
      - name: Button
        path: /components/button
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
      - name: Icon
        path: /components/icon
      - name: Keyboard
        path: /components/keyboard
---
