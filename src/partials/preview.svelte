<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount } from 'svelte';
  import { delay } from '../utils/time';
  import { clickOutside } from '../utils/element';
  import { globalTheme, previewTheme, themes } from '../store';
  // Props
  export let title = undefined;
  // Data
  let showThemePicker = false;
  let themePickerOpener: HTMLElement;
  // Methods
  function setTheme (shade: string, type: string) {
    $globalTheme = `primer-${shade}`;
    $previewTheme = `${type}-${shade}`;
    updatePreviewComponents()
  }
  function updatePreviewComponents () {
    const previewComponents = document.querySelectorAll('div.preview');
    for (const previewComponent of previewComponents) {
      const elements = Array.from(previewComponent.querySelectorAll('*')).filter(e => e.tagName.startsWith('SL-'));
      for (const element of elements) {
        element.updateTheme?.({ key: $previewTheme, components: themes[$previewTheme] });
      }
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
    updatePreviewComponents();
  });
</script>
<!-- Template -->
<div class="preview">
  <slot/>
  {#if title}
    <div class="label title">
      <span>{title}</span>
    </div>
  {/if}
  <div class="label theme">
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
              <span>Primer</span>
              <ul>
                <li><button class="theme-item primer-light" class:active={$previewTheme === 'primer-light'} on:click={() => setTheme('light', 'primer')}></button></li>
                <li><button class="theme-item primer-dark" class:active={$previewTheme === 'primer-dark'} on:click={() => setTheme('dark', 'primer')}></button></li>
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
    padding: 2em;
    border: 1px solid #DDDDDD;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    :global(+ div.preview) {
      border-top: none !important;
      border-top-left-radius: 0px !important;
      border-top-right-radius: 0px !important;
    }
    :global(+ pre[class*="language-"]) {
      margin-top: 0;
      border-top: none;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    > div.label {
      position: absolute;
      top: 5px;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      &.title {
        left: 5px;
        font-size: 12px;
        font-weight: 500;
        font-style: italic;
      }
      &.theme {
        right: 5px;
        > sl-icon.theme-picker-icon {
          cursor: pointer;
          &:hover {
            color: var(--sl-primary);
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
                        border-color: var(--sl-primary);
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
                    &.primer-light {
                      background: linear-gradient(90deg, #EFEFEF 50%, #FFFFFF 0);
                    }
                    &.primer-dark {
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
  }
</style>
