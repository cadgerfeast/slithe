<script lang="ts" setup>
  // Helpers
  import { onMounted } from 'vue';
	import { attachTooltip } from 'slithe';
  // Lifecycle
	onMounted(() => {
		const element = document.getElementById('super-hint');
		if (element) {
			attachTooltip(element);
		}
	});
</script>


<template>
  <div class="playground-tooltip">
    <p>
			I'm a super cool text.
			But even more cool, this <b id="super-hint" tooltip="Wow that's powerful">bold text</b> is getting a tooltip for free!
		</p>
  </div>
</template>
