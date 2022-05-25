<!-- Options -->
<svelte:head>
	<title>{title}</title>
</svelte:head>
<svelte:window on:keydown={onWindowKeydown} on:scroll={onWindowScroll}/>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount } from 'svelte';
  import { Link, Router, Route } from 'svelte-navigator';
  import { pages, page, fullTextSearch, Page } from './routes';
  import { delay } from './utils/time';
  import { recentSearches } from './store';
  import { clickOutside } from './utils/element';
  // Assets
  import slithe from './assets/slithe.svg';
  import github from './assets/github.svg';
  // Data
  let lastPath = location.pathname;
  let searchResults = [];
  let searchInput: HTMLElement;
  let searchQuery = '';
  let searchInputFocused = false;
  let main: HTMLElement;
  let scrollTimeout;
  let preventHashChange = false;
  let showFixedSidebar = false;
  let showFixedTOC = false;
  let sidebarOpener: HTMLButtonElement;
  let tocOpener: HTMLButtonElement;
  // Computed
  $: showSearchResults = searchInputFocused && (pages.length > 0);
  $: heading = $page.path.split('#')[1];
  $: title = $page.page.metadata.title || 'Slithe';
  // Reactive
  $: $page.path, onRouteChange();
  // Events
  async function onRouteChange () {
    if (lastPath !== location.pathname) {
      await delay();
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
      lastPath = location.pathname;
    }
  }
  function onSearchInputFocus () {
    searchInputFocused = true;
    debounceSearch();
  }
  async function onSearchInputBlur () {
    await delay(100);
    searchInputFocused = false;
  }
  function onWindowKeydown (e: KeyboardEvent) {
    switch (e.key) {
      case 'k': {
        if (e.ctrlKey) {
          e.preventDefault();
          searchInput.focus();
        }
        break;
      }
    }
  }
  async function onWindowScroll () {
    const elements = Array.from(main.querySelectorAll('h1,h2,h3,h4,h5,h6'));
    let target: Element;
    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      if (rect.top - rect.height <= 60) {
        target = element;
      }
    }
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (!preventHashChange) {
        location.replace(`#${target.textContent}`);
      }
      preventHashChange = false;
    }, 100);
  }
  function onLinkClick (page: Page) {
    recentSearches.add(page.path);
  }
  function onTocClick (heading: string) {
    preventHashChange = true;
    scrollIntoHash(`#${heading}`);
  }
  function onSearchInputInput (e: Event) {
    searchQuery = (e.target as any).value;
    debounceSearch();
  }
  async function onToggleFixedSidebar () {
    await delay();
    showFixedSidebar = !showFixedSidebar;
  }
  function onClickOutsideSidebar (e) {
    if (!sidebarOpener.contains(e.detail.target)) {
      showFixedSidebar = false;
    }
  }
  async function onToggleFixedTOC () {
    await delay();
    showFixedTOC = !showFixedTOC;
  }
  function onClickOutsideTOC (e) {
    if (!tocOpener.contains(e.detail.target)) {
      showFixedTOC = false;
    }
  }
  // Methods
  async function debounceSearch () {
    searchResults = await fullTextSearch(searchQuery);
  }
  function scrollIntoHash (_hash: string, mode: ScrollBehavior = 'smooth'): boolean {
    if (main) {
      const hash = _hash.split('#')[1];
      if (hash) {
        const element = Array.from(main.querySelectorAll('h1,h2,h3,h4,h5,h6')).find((h) => h.textContent === decodeURIComponent(hash));
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: mode
          });
          return true;
        }
      }
    }
    return false;
  }
  function isTocActive (_heading: string) {
    return decodeURIComponent(heading) === _heading;
  }
  // Lifecycle
  onMount(async () => {
    const hasScrolled = scrollIntoHash($page.path, 'auto');
    if (!hasScrolled) {
      await delay();
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }
  });
</script>
<!-- Template -->
<Router>
  <!-- Toolbar -->
  <header>
    <sl-icon class="slithe" src={slithe} size={50}/>
    <span class="title">Slithe</span>
    <sl-input-text bind:this={searchInput} on:input={onSearchInputInput} on:focus={onSearchInputFocus} on:blur={onSearchInputBlur}>
      <sl-icon slot="pre" name="search"/>
      <span slot="placeholder">
        <span>Search</span>
        <sl-kbd>Ctrl</sl-kbd>
        <sl-kbd>K</sl-kbd>
      </span>
    </sl-input-text>
    <sl-rel>
      {#if searchResults.length > 0}
        <sl-card class="search-results" class:visible={showSearchResults}>
          <ul class="results-list">
            {#each searchResults as page}
              <li on:click={() => onLinkClick(page)}>
                <Link class="link" to={page.path}>
                  <span class="page-path">{page.path}</span>
                  <h2 class="page-title">{page.metadata.title}</h2>
                  {#if page.match}
                    <span class="page-match">{@html page.match}</span>
                  {/if}
                </Link>
              </li>
            {/each}
          </ul>
        </sl-card>
      {/if}
    </sl-rel>
    <a class="github" href="https://github.com/cadgerfeast/slithe" target="_blank">
      <sl-icon src={github} size={30}/>
    </a>
  </header>
  <div class="container">
    <!-- Sidebar -->
    <button bind:this={sidebarOpener} class="sidebar-opener" on:click={onToggleFixedSidebar}>
      <sl-icon name="menu-outline" size={30}/>
    </button>
    <nav class="sidebar" class:fixed={showFixedSidebar} use:clickOutside on:clickoutside={onClickOutsideSidebar}>
      <ul>
        <li>
          <Link class="link" to="/">Introduction</Link>
        </li>
        <li>
          <Link class="link" to="/accessibility" >Features</Link>
          <ul>
            <li>
              <Link class="link" to="/accessibility">Accessibility</Link>
            </li>
            <li>
              <Link class="link" to="/internationalization">Internationalization</Link>
            </li>
            <li>
              <Link class="link" to="/themes">Themes</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link class="link" to="/components/button">Components</Link>
          <ul>
            <li>
              <Link class="link" to="/components/button">Button</Link>
            </li>
            <li>
              <Link class="link" to="/components/form/input-text">Form</Link>
              <ul>
                <li>
                  <Link class="link" to="/components/form/input-text">Input Text</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link class="link" to="/components/keyboard">Keyboard</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- Content -->
    <main bind:this={main}>
      {#each pages as { path, component }}
        <Route path={path}>
          <svelte:component this={component}/>
        </Route>
      {/each}
    </main>
    <!-- Table Of Contents -->
    <button bind:this={tocOpener} class="toc-opener" on:click={onToggleFixedTOC}>
      <sl-icon name="menu-arrow-outline" size={30}/>
    </button>
    {#if $page.page.toc}
      <nav class="toc" class:fixed={showFixedTOC} use:clickOutside on:clickoutside={onClickOutsideTOC}>
        <ul>
          {#each Object.entries($page.page.toc) as [_heading, items]}
            <li>
              <a href="#{_heading}" class="link h1" class:active={isTocActive(_heading)} on:click={() => onTocClick(_heading)}>{_heading}</a>
              <ul>
                {#each Object.entries(items) as [_heading, items]}
                  <li>
                    <a href="#{_heading}" class="link h2" class:active={isTocActive(_heading)} on:click={() => onTocClick(_heading)}>{_heading}</a>
                    <ul>
                      {#each Object.entries(items) as [_heading, items]}
                        <li>
                          <a href="#{_heading}" class="link h3" class:active={isTocActive(_heading)} on:click={() => onTocClick(_heading)}>{_heading}</a>
                          <ul>
                            {#each Object.entries(items) as [_heading, items]}
                              <li>
                                <a href="#{_heading}" class="link h4" class:active={isTocActive(_heading)} on:click={() => onTocClick(_heading)}>{_heading}</a>
                                <ul>
                                  {#each Object.entries(items) as [_heading, items]}
                                    <li>
                                      <a href="#{_heading}" class="link h5" class:active={isTocActive(_heading)} on:click={() => onTocClick(_heading)}>{_heading}</a>
                                      <ul>
                                        {#each Object.entries(items) as [_heading]}
                                          <li>
                                            <a href="#{_heading}" class="link h6" class:active={isTocActive(_heading)} on:click={() => onTocClick(_heading)}>{_heading}</a>
                                          </li>
                                        {/each}
                                      </ul>
                                    </li>
                                  {/each}
                                </ul>
                              </li>
                            {/each}
                          </ul>
                        </li>
                      {/each}
                    </ul>
                  </li>
                {/each}
              </ul>
            </li>
          {/each}
        </ul>
      </nav>
    {/if}
  </div>
</Router>
<!-- Style -->
<style lang="scss" global>
  @import './style/global.scss';
  @import './style/prism.scss';
  header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--sl-background-color);
    box-shadow: 0 2px 5px rgba(0, 0, 0, .25);
    z-index: 3;
    > sl-icon.slithe {
      margin-left: 12px;
    }
    > span.title {
      font-size: 2em;
      font-weight: 600;
      margin: 0 0 0 12px;
    }
    > sl-input-text {
      margin-left: auto;
    }
    > a.github {
      display: inline-flex;
      flex-direction: row;
      color: inherit;
      margin: 0 12px;
      &:hover {
        color: var(--sl-primary);
      }
    }
    sl-card.search-results {
      display: block;
      margin-top: 45px;
      max-height: 500px;
      visibility: hidden;
      &.visible {
        visibility: visible;
      }
      ul.results-list {
        list-style: none;
        margin: 0;
        padding: 0;
        > li {
          > :global(a) {
            display: block;
            padding: 10px;
            text-decoration: none;
            background-color: var(--sl-background-color);
            &:hover {
              background-color: var(--sl-background-color-subtle);
            }
          }
          span.page-path {
            font-size: 10px;
            text-transform: uppercase;
            color: var(--sl-text-color-subtle);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          h2.page-title {
            font-size: 16px;
            color: var(--sl-text-color);
            margin: 4px 0;
            padding: 0;
            border: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          span.page-match {
            display: block;
            font-size: 12px;
            color: var(--sl-text-color-subtle);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  div.container {
    height: 100%;
    display: flex;
    flex-direction: row;
    transition: all .25s ease-in-out;
    > nav.sidebar {
      position: fixed;
      top: 60px;
      bottom: 0;
      left: 0;
      width: 300px;
      flex-shrink: 0;
      padding: 60px 12px 12px 12px;
      box-sizing: border-box;
      background-color: var(--sl-background-color);
      transition: all .25s ease-in-out;
      &.fixed {
        left: 0 !important;
      }
      ul {
        list-style: none;
        margin: 0;
        padding-left: 20px;
      }
    }
    > button.sidebar-opener {
      position: fixed;
      display: flex;
      top: 70px;
      left: -300px;
      z-index: 2;
      border-radius: 50%;
      border: none;
      padding: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, .25);
      background-color: var(--sl-primary);
      color: var(--sl-white);
      cursor: pointer;
      transition: all .25s ease-in-out;
      &:hover {
        box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
      }
    }
    > main {
      position: absolute;
      top: 60px;
      right: 300px;
      left: 300px;
      max-width: 900px;
      margin: 0 auto;
      padding: 0 60px 60px 60px;
      transition: all .25s ease-in-out;
    }
    > button.toc-opener {
      display: flex;
      position: fixed;
      top: 70px;
      right: -300px;
      z-index: 2;
      border-radius: 50%;
      border: none;
      padding: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, .25);
      background-color: var(--sl-primary);
      color: var(--sl-white);
      cursor: pointer;
      transition: all .25s ease-in-out;
      &:hover {
        box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
      }
    }
    > nav.toc {
      position: fixed;
      top: 60px;
      right: 0;
      bottom: 0;
      width: 300px;
      flex-shrink: 0;
      padding: 60px 12px 12px 12px;
      box-sizing: border-box;
      background-color: var(--sl-background-color);
      transition: all .25s ease-in-out;
      &.fixed {
        right: 0 !important;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          display: grid;
          a {
            border-left: 2px solid var(--sl-divider-color);
            padding: 5px 0;
            &.h1 {
              padding-left: 10px;
            }
            &.h2 {
              padding-left: 20px;
            }
            &.h3 {
              padding-left: 30px;
            }
            &.h4 {
              padding-left: 40px;
            }
            &.h5 {
              padding-left: 50px;
            }
            &.h6 {
              padding-left: 60px;
            }
            &.active {
              border-color: var(--sl-primary);
            }
          }
        }
      }
    }
  }
  // Global
  :global(a.link) {
    color: inherit;
  }
  :global(a.link[aria-current="page"]) {
    color: var(--sl-primary);
  }
  // Responsive
  @media only screen and (max-width: 1200px) {
    div.container {
      > button.sidebar-opener {
        left: 10px;
      }
      > nav.sidebar {
        box-shadow: 0 2px 5px rgba(0, 0, 0, .25);
        z-index: 1;
        left: -300px;
      }
      > main {
        left: 0;
      }
    }
  }
  @media only screen and (max-width: 1400px) {
    div.container {
      > main {
        right: 0;
      }
      > button.toc-opener {
        right: 10px;
      }
      > nav.toc {
        box-shadow: 0 2px 5px rgba(0, 0, 0, .25);
        z-index: 1;
        right: -300px;
      }
    }
  }
</style>
