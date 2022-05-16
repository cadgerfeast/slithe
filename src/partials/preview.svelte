<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount } from 'svelte';
  import { delay } from '../utils/time';
  import { clickOutside } from '../utils/element';
  import { globalTheme, previewTheme } from '../store';
  // Data
  let showThemePicker = false;
  let root: HTMLElement;
  let themePickerOpener: HTMLElement;
  // Methods
  function setTheme (shade: string, type: string) {
    $globalTheme = `svelte-${shade}`;
    $previewTheme = `${type}-${shade}`;
    updateComponentsTheme();
  }
  function updateComponentsTheme () {
    const elements = Array.from(root.querySelectorAll('*')).filter(e => e.tagName.startsWith('SL-'));
    for (const element of elements) {
      element.setAttribute('sl-theme', $previewTheme);
    }
  }
  async function onThemePickerToggle () {
    await delay();
    showThemePicker = !showThemePicker;
  }
  function onThemePickerClickOutside (e) {
    if (!themePickerOpener.contains(e.detail.target)) {
      showThemePicker = false;
    }
  }
  // Lifecycle
  onMount(() => {
    updateComponentsTheme();
  });
</script>
<!-- Template -->
<div bind:this={root} class="preview">
  <slot/>
  <div class="label">
    <sl-icon bind:this={themePickerOpener} class="theme-picker-icon" name="color-palette-outline" size={18} on:click={onThemePickerToggle}/>
    <sl-rel>
      {#if showThemePicker}
        <sl-card class="theme-picker-container" use:clickOutside on:clickoutside={onThemePickerClickOutside}>
          <div class="theme-list">
            <div class="theme-row">
              <span>Vanilla</span>
              <ul>
                <li><button class="theme-item vanilla-light" class:active={$previewTheme === 'vanilla-light'} on:click={() => setTheme('light', 'vanilla')}></button></li>
                <li><button class="theme-item vanilla-dark" class:active={$previewTheme === 'vanilla-dark'} on:click={() => setTheme('dark', 'vanilla')}></button></li>
              </ul>
            </div>
            <div class="theme-row">
              <span>Svelte</span>
              <ul>
                <li><button class="theme-item svelte-light" class:active={$previewTheme === 'svelte-light'} on:click={() => setTheme('light', 'svelte')}></button></li>
                <li><button class="theme-item svelte-dark" class:active={$previewTheme === 'svelte-dark'} on:click={() => setTheme('dark', 'svelte')}></button></li>
              </ul>
            </div>
          </div>
        </sl-card>
      {/if}
    </sl-rel>
  </div>
</div>
<!-- Style -->
<style lang="scss">
  div.preview {
    position: relative;
    padding: 1em;
    border: 1px solid #DDDDDD;
    > div.label {
      position: absolute;
      top: 5px;
      right: 5px;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      > sl-icon.theme-picker-icon {
        cursor: pointer;
        &:hover {
          color: var(--sl-accent);
        }
      }
      sl-card.theme-picker-container {
        position: absolute;
        right: 0;
        display: block;
        margin-top: 20px;
        div.theme-list {
          width: 100px;
          padding: 5px 10px 0 10px;
          background-color: var(--sl-background-color);
          > div.theme-row {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 10px;
            > span {
              align-self: end;
              font-weight: 600;
            }
            > ul {
              list-style: none;
              padding: 0;
              margin: 0;
              display: inline-flex;
              flex-direction: row;
              > li {
                > button.theme-item {
                  position: relative;
                  cursor: pointer;
                  border: none;
                  border-radius: 50%;
                  width: 20px;
                  height: 20px;
                  margin-left: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, .25);
                  &.active {
                    &:before {
                      border-color: var(--sl-accent);
                    }
                  }
                  &:before {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    border-radius: 50%;
                    content: '';
                    border: 2px solid transparent;
                  }
                  &.vanilla-light {
                    background: linear-gradient(90deg, #EFEFEF 50%, #FFFFFF 0);
                  }
                  &.vanilla-dark {
                    background: linear-gradient(90deg, #444444 50%, #333333 0);
                  }
                  &.svelte-light {
                    background: linear-gradient(90deg, #EFEFEF 50%, #FFFFFF 0);
                  }
                  &.svelte-dark {
                    background: linear-gradient(90deg, #444444 50%, #333333 0);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
