<script lang="ts">
  // Helpers
  import { Router, Link, Route } from 'svelte-navigator';
  import { routes, fullTextSearch } from './routes';
  // Style
  import '../themes/svelte/svelte.css';
  // Assets
  import svelte from './assets/svelte.svg';
  import search from './assets/search.svg';
  import github from './assets/github.svg';
  // Methods
  async function debounceSearch (e: InputEvent) {
    const pages = await fullTextSearch((e.target as HTMLInputElement).value);
    console.info(pages);
  }
</script>

<Router>
  <header>
    <sl-icon class="svelte" src={svelte} size={40}/>
    <h1 class="title">Slithe</h1>
    <sl-input-text class="search" on:input={debounceSearch}>
      <sl-icon slot="pre" src={search} size={20}/>
      <span slot="placeholder">
        <span>Search</span>
        <sl-kbd>Ctrl</sl-kbd>
        <sl-kbd>K</sl-kbd>
      </span>
    </sl-input-text>
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
      {#each routes as { path, component }}
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
  }
</style>
