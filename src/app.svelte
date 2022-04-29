<script lang="ts">
  // Helpers
  import { Router, Link, Route } from 'svelte-navigator';
  import { pages, fullTextSearch, Page } from './routes';
  import { delay } from './utils/time';
  import { recentSearches } from './store';
  // Assets
  import svelte from './assets/svelte.svg';
  import search from './assets/search.svg';
  import github from './assets/github.svg';
  // Data
  let searchResults = [];
  let searchInput;
  let searchQuery = '';
  let searchInputFocused = false;
  // Computed
  $: showSearchResults = searchInputFocused && (pages.length > 0);
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
  function onLinkClick (page: Page) {
    recentSearches.add(page.path);
  }
  function onSearchInputInput (e: Event) {
    searchQuery = (e.target as any).value;
    debounceSearch();
  }
  // Methods
  async function debounceSearch () {
    searchResults = await fullTextSearch(searchQuery);
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="../themes/svelte/global.css">
</svelte:head>
<svelte:window on:keydown={onWindowKeydown}/>

<Router>
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
                <Link to={page.path}>
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
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/components/button">Button</Link>
    </nav>
    <main>
      {#each pages as { path, component }}
        <Route path={path}>
          <svelte:component this={component}/>
        </Route>
      {/each}
    </main>
  </div>
</Router>

<style lang="scss">
  header {
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
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
</style>
