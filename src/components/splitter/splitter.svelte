<!-- Metadata -->
<script lang="ts" context="module">
  export const tag = 'splitter';
  export const style = {
    'display': 'block',
    'height': '100%'
  };
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { StyleObject } from '../../helpers/style';
  import { clamp } from '../../helpers/number';
  import { MouseButton } from '../../helpers/browser';
  import { getRootElement } from '../../helpers/dom';
  // Props
  export let horizontal = true;
  export let vertical = false;
  export let bluesize = 50;
  let root: HTMLDivElement;
  let wrapper: HTMLElement;
  let resizing = false;
  let blueStyle = '';
  let greenStyle = '';
  let _bluesize = bluesize;
  // Reactive
  $: {
    root;
    if (root) {
      wrapper = getRootElement(root);
    }
  }
  $: {
    bluesize;
    _bluesize = bluesize;
  }
  $: direction = vertical ? 'vertical' : 'horizontal';
  $: {
    const blueAttrs: Record<string, string> = {};
    const greenAttrs: Record<string, string> = {};
    if (direction === 'horizontal') {
      blueAttrs['min-width'] = '0px';
      blueAttrs['width'] = `${_bluesize}%`;
      greenAttrs['min-width'] = '0px';
      greenAttrs['width'] = `calc(100% - ${_bluesize}%)`;
    } else {
      blueAttrs['min-height'] = '0px';
      blueAttrs['height'] = `${_bluesize}%`;
      greenAttrs['min-height'] = '0px';
      greenAttrs['height'] = `calc(100% - ${_bluesize}%)`;
    }
    blueStyle = new StyleObject(blueAttrs).toString();
    greenStyle = new StyleObject(greenAttrs).toString();
  }
  // Handlers
  function onMouseDown (e: MouseEvent) {
    if (e.button === MouseButton.Left) {
      e.stopPropagation();
      this.resizing = true;
      wrapper.dispatchEvent(new CustomEvent('resize-start'));
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
  }
  function onMouseMove (e: MouseEvent) {
    const rect = root.getBoundingClientRect();
    if (direction === 'horizontal') {
      _bluesize = clamp(0, (e.clientX - rect.left) * 100 / rect.width, 100);
    } else {
      _bluesize = clamp(0, (e.clientY - rect.top) * 100 / rect.height, 100);
    }
  }
  function onMouseUp () {
    this.resizing = false;
    wrapper.dispatchEvent(new CustomEvent('resize-end', { detail: _bluesize }));
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  }
</script>
<!-- Template -->
<div bind:this={root} class={`sl-splitter ${direction}`}>
  <div class="pane" style={blueStyle}>
    {#if resizing}
      <div class="catcher"/>
    {/if}
    <slot name="blue"/>
  </div>
  <div class="handle" on:mousedown={onMouseDown}>
    <div class="divider"/>
  </div>
  <div class="pane" style={greenStyle}>
    {#if resizing}
      <div class="catcher"/>
    {/if}
    <slot name="green"/>
  </div>
</div>
