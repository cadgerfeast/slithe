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
        path: /components/form/input/text
        children:
        - name: Input
          path: /components/form/input/text
          children:
          - name: Text
            path: /components/form/input/text
      - name: Icon
        path: /components/icon
      - name: Keyboard
        path: /components/keyboard
---