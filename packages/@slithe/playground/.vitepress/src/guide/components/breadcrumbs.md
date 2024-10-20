<script setup>
	import Preview from '../../components/preview.vue';
</script>

# Breadcrumbs

A `sl-breadcrumbs` component is an element that helps with navigation inside an application.

It is used with `sl-breadcrumb` children elements.

<Preview>
  <sl-breadcrumbs>
    <sl-breadcrumb>Home</sl-breadcrumb>
    <sl-breadcrumb>Projects</sl-breadcrumb>
    <sl-breadcrumb active>Slithe</sl-breadcrumb>
  </sl-breadcrumbs>
</Preview>

``` html
<sl-breadcrumbs>
  <sl-breadcrumb>Home</sl-breadcrumb>
  <sl-breadcrumb>Projects</sl-breadcrumb>
  <sl-breadcrumb active>Slithe</sl-breadcrumb>
</sl-breadcrumbs>
```
