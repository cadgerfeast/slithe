<script lang="ts">
  // Helpers
  import { onMount } from 'svelte';
  import { Link, Router, Route, navigate } from 'svelte-navigator';
  import { pages, page, fullTextSearch, Page } from './routes';
  import { delay } from './utils/time';
  import { recentSearches } from './store';
  // Assets
  import svelte from './assets/svelte.svg';
  import search from './assets/search.svg';
  import github from './assets/github.svg';
  // Data
  let searchResults = [];
  let searchInput: HTMLElement;
  let searchQuery = '';
  let searchInputFocused = false;
  let main: HTMLElement;
  let scrollTimeout;
  // Computed
  $: showSearchResults = searchInputFocused && (pages.length > 0);
  $: heading = $page.path.split('#')[1];
  // Events
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
      navigate(`#${target.textContent}`);
    }, 100);
  }
  function onLinkClick (page: Page) {
    recentSearches.add(page.path);
  }
  function onTocClick (heading: string) {
    scrollIntoHash(`#${heading}`);
  }
  function onSearchInputInput (e: Event) {
    searchQuery = (e.target as any).value;
    debounceSearch();
  }
  // Methods
  async function debounceSearch () {
    searchResults = await fullTextSearch(searchQuery);
  }
  function scrollIntoHash (_hash: string, mode: ScrollBehavior = 'smooth') {
    if (main) {
      const hash = _hash.split('#')[1];
      if (hash) {
        const element = Array.from(main.querySelectorAll('h1,h2,h3,h4,h5,h6')).find((h) => h.textContent === decodeURIComponent(hash));
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: mode
          });
        }
      }
    }
  }
  // Lifecycle
  onMount(() => {
    scrollIntoHash($page.path, 'auto');
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="/themes/svelte/global.css">
</svelte:head>
<svelte:window on:keydown={onWindowKeydown} on:scroll={onWindowScroll}/>

<Router>
  <!-- Toolbar -->
  <header>
    <sl-icon class="svelte" src={svelte} size={40}/>
    <h1 class="title">Slithe</h1>
    <sl-input-text bind:this={searchInput} class="search" on:input={onSearchInputInput} on:focus={onSearchInputFocus} on:blur={onSearchInputBlur}>
      <sl-icon slot="pre" src={search} size={20}/>
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
    <nav class="sidebar">
      <sl-tree>
        <sl-tree-item>
          <Link class="link" to="/">Introduction</Link>
        </sl-tree-item>
        <sl-tree-item>
          <Link class="link" to="/accessibility" >Features</Link>
          <sl-tree slot="subtree">
            <sl-tree-item>
              <Link class="link" to="/accessibility">Accessibility</Link>
            </sl-tree-item>
            <sl-tree-item>
              <Link class="link" to="/internationalization">Internationalization</Link>
            </sl-tree-item>
            <sl-tree-item>
              <Link class="link" to="/themes">Themes</Link>
            </sl-tree-item>
          </sl-tree>
        </sl-tree-item>
        <sl-tree-item>
          <Link class="link" to="/components/button">Components</Link>
          <sl-tree slot="subtree">
            <sl-tree-item>
              <Link class="link" to="/components/button">Button</Link>
            </sl-tree-item>
            <sl-tree-item>
              <Link class="link" to="/components/form/input-text">Form</Link>
              <sl-tree slot="subtree">
                <sl-tree-item>
                  <Link class="link" to="/components/form/input-text">Input Text</Link>
                </sl-tree-item>
              </sl-tree>
            </sl-tree-item>
          </sl-tree>
        </sl-tree-item>
      </sl-tree>
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
    {#if $page.page.toc}
      <nav class="toc">
        <sl-tree>
          {#each Object.entries($page.page.toc) as [_heading, items]}
            <sl-tree-item>
              <a href="#{_heading}" class:active={heading === _heading} on:click={() => onTocClick(_heading)}>{_heading}</a>
              <sl-tree slot="subtree">
                {#each Object.entries(items) as [_heading, items]}
                  <sl-tree-item>
                    <a href="#{_heading}" class:active={heading === _heading} on:click={() => onTocClick(_heading)}>{_heading}</a>
                    <sl-tree slot="subtree">
                      {#each Object.entries(items) as [_heading, items]}
                        <sl-tree-item>
                          <a href="#{_heading}" class:active={heading === _heading} on:click={() => onTocClick(_heading)}>{_heading}</a>
                          <sl-tree slot="subtree">
                            {#each Object.entries(items) as [_heading, items]}
                              <sl-tree-item>
                                <a href="#{_heading}" class:active={heading === _heading} on:click={() => onTocClick(_heading)}>{_heading}</a>
                                <sl-tree slot="subtree">
                                  {#each Object.entries(items) as [_heading, items]}
                                    <sl-tree-item>
                                      <a href="#{_heading}" class:active={heading === _heading} on:click={() => onTocClick(_heading)}>{_heading}</a>
                                      <sl-tree slot="subtree">
                                        {#each Object.entries(items) as [_heading]}
                                          <sl-tree-item>
                                            <a href="#{_heading}" class:active={heading === _heading} on:click={() => onTocClick(_heading)}>{_heading}</a>
                                          </sl-tree-item>
                                        {/each}
                                      </sl-tree>
                                    </sl-tree-item>
                                  {/each}
                                </sl-tree>
                              </sl-tree-item>
                            {/each}
                          </sl-tree>
                        </sl-tree-item>
                      {/each}
                    </sl-tree>
                  </sl-tree-item>
                {/each}
              </sl-tree>
            </sl-tree-item>
          {/each}
        </sl-tree>
      </nav>
    {/if}
  </div>
</Router>

<style lang="scss">
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
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
    z-index: 1;
    > sl-icon.svelte {
      margin-left: 12px;
    }
    > h1.title {
      margin: 0 0 0 12px;
    }
    > :global(.search) {
      margin-left: auto;
    }
    > a.github {
      color: inherit;
      margin: 0 12px;
      &:hover {
        color: var(--sl-accent);
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
            &:hover {
              background-color: #EEEEEE;
            }
          }
          span.page-path {
            font-size: 10px;
            text-transform: uppercase;
            color: #999999;
          }
          h2.page-title {
            font-size: 16px;
            color: #444444;
            margin: 4px 0;
          }
          span.page-match {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 12px;
            color: #999999;
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
      padding: 12px;
      box-sizing: border-box;
      transition: all .25s ease-in-out;
    }
    > main {
      position: absolute;
      top: 60px;
      right: 300px;
      left: 300px;
      max-width: 900px;
      margin: 0 auto;
      padding-bottom: 60px;
      transition: all .25s ease-in-out;
    }
    > nav.toc {
      position: fixed;
      top: 60px;
      right: 0;
      bottom: 0;
      width: 300px;
      flex-shrink: 0;
      padding: 12px;
      box-sizing: border-box;
      transition: all .25s ease-in-out;
    }
  }
  // Responsive
  @media only screen and (max-width: 1200px) {
    div.container {
      > nav.sidebar {
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
      > nav.toc {
        right: -300px;
      }
    }
  }
</style>
