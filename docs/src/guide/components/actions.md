<script setup>
	import Preview from '../../components/preview.vue';
</script>

# Actions

A `sl-actions` component is an element that helps with displaying quick actions and selections in a menu.

It is used with `sl-action`, `sl-action-group` and `sl-action-divider` children elements.

<Preview>
  <sl-actions>
    <sl-action>Project Settings</sl-action>
		<sl-action>Collaborators</sl-action>
		<sl-action-divider/>
		<sl-action-group label='Insight'>
			<sl-action>What's new?</sl-action>
			<sl-action>Community</sl-action>
			<sl-action>Support</sl-action>
		</sl-action-group>
		<sl-action-divider/>
		<sl-action danger>Delete Project</sl-action>
  </sl-actions>
</Preview>

``` html
<sl-actions>
	<sl-action>Project Settings</sl-action>
	<sl-action>Collaborators</sl-action>
	<sl-action-divider/>
	<sl-action-group label='Insight'>
		<sl-action>What's new?</sl-action>
		<sl-action>Community</sl-action>
		<sl-action>Support</sl-action>
	</sl-action-group>
	<sl-action-divider/>
	<sl-action danger>Delete Project</sl-action>
</sl-actions>
```
