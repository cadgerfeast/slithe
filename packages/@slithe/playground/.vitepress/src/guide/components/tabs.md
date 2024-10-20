<script setup>
	import Preview from '../../components/preview.vue';
</script>

# Tabs

A `sl-tabs` component is an element that helps with navigation inside an application.

It is used with `sl-tab` children elements.

<Preview>
  <sl-tabs>
    <sl-tab active>Dashboard</sl-tab>
    <sl-tab>Messages</sl-tab>
    <sl-tab>Settings</sl-tab>
  </sl-tabs>
  <sl-tabs small>
    <sl-tab active>Dashboard</sl-tab>
    <sl-tab>Messages</sl-tab>
    <sl-tab>Settings</sl-tab>
  </sl-tabs>
</Preview>

``` html
<sl-tabs>
  <sl-tab active>Dashboard</sl-tab>
  <sl-tab>Messages</sl-tab>
  <sl-tab>Settings</sl-tab>
</sl-tabs>
<sl-tabs small>
  <sl-tab active>Dashboard</sl-tab>
  <sl-tab>Messages</sl-tab>
  <sl-tab>Settings</sl-tab>
</sl-tabs>
```
