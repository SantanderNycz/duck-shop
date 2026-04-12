<script lang="ts">
  import { cart } from '$lib/stores/cart.svelte';
  import { ShoppingCart, List, X, MagnifyingGlass } from 'phosphor-svelte';
  import { fly, scale } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { page } from '$app/stores';

  let mobileMenuOpen = $state(false);
  let scrollY = $state(0);
  let searchOpen = $state(false);
  let searchQuery = $state('');

  function handleSearch(e: KeyboardEvent) {
    if (e.key === 'Enter' && searchQuery.trim()) {
      window.location.href = `/produtos?q=${encodeURIComponent(searchQuery.trim())}`;
      searchOpen = false;
      searchQuery = '';
    }
    if (e.key === 'Escape') {
      searchOpen = false;
      searchQuery = '';
    }
  }

  $effect(() => {
    if (searchOpen) {
      setTimeout(() => {
        const input = document.getElementById('search-input');
        input?.focus();
      }, 50);
    }
  });
</script>

<svelte:window bind:scrollY />

<header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all duration-300 {scrollY > 10 ? 'shadow-lg shadow-primary/5' : ''}">
  <div class="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">

    <!-- Logo -->
    <a href="/" class="flex items-center gap-2.5 group">
      <div class="relative flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-lg shadow-primary/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:scale-105">
        <img src="/duck.svg" alt="Duck Shop logo" class="h-10 w-10" />
      </div>
      <span class="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        Duck Shop
      </span>
    </a>

    <!-- Nav desktop -->
    {#if !searchOpen}
      <nav class="hidden items-center gap-8 md:flex" in:fly={{ x: 10, duration: 200 }} out:fly={{ x: -10, duration: 150 }}>
        <a href="/" class="relative text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 {$page.url.pathname === '/' ? 'text-primary' : 'text-foreground/70'}">
          Início
          <span class="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 {$page.url.pathname === '/' ? 'w-full' : 'w-0'}"></span>
        </a>
        <a href="/produtos" class="relative text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 {$page.url.pathname === '/produtos' ? 'text-primary' : 'text-foreground/70'}">
          Catálogo
          <span class="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 {$page.url.pathname === '/produtos' ? 'w-full' : 'w-0'}"></span>
        </a>
        <a href="/sobre" class="relative text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 {$page.url.pathname === '/sobre' ? 'text-primary' : 'text-foreground/70'}">
          Sobre
          <span class="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 {$page.url.pathname === '/sobre' ? 'w-full' : 'w-0'}"></span>
        </a>

        <!-- Search icon -->
        <button
          onclick={() => searchOpen = true}
          class="text-foreground/60 transition-colors hover:text-primary"
          aria-label="Pesquisar"
        >
          <MagnifyingGlass size={18} weight="regular" />
        </button>

        <!-- Cart -->
        <a href="/carrinho" class="relative group">
          <div class="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
            <ShoppingCart size={16} weight="duotone" class="transition-transform duration-300 group-hover:rotate-12" />
          </div>
          {#if cart.totalItems > 0}
            <span
              class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow-lg animate-bounce-in"
              in:scale={{ duration: 300, easing: cubicInOut }}
              out:scale={{ duration: 200, easing: cubicInOut }}
            >
              {cart.totalItems}
            </span>
          {/if}
        </a>
      </nav>
    {:else}
      <!-- Search bar inline -->
      <div class="hidden md:flex flex-1 max-w-sm mx-8 items-center gap-2 rounded-xl border border-primary/30 bg-background px-4 py-2 shadow-lg shadow-primary/10" in:fly={{ x: 10, duration: 200 }}>
        <MagnifyingGlass size={16} weight="regular" class="text-muted-foreground shrink-0" />
        <input
          id="search-input"
          type="text"
          placeholder="Pesquisar patos..."
          bind:value={searchQuery}
          onkeydown={handleSearch}
          class="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        <button onclick={() => { searchOpen = false; searchQuery = ''; }} class="text-muted-foreground hover:text-foreground">
          <X size={16} weight="regular" />
        </button>
      </div>
    {/if}

    <!-- Mobile buttons -->
    <div class="flex items-center gap-2 md:hidden">
      <a href="/carrinho" class="relative">
        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <ShoppingCart size={20} weight="duotone" />
        </div>
        {#if cart.totalItems > 0}
          <span class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
            {cart.totalItems}
          </span>
        {/if}
      </a>
      <button
        class="rounded-lg p-2 transition-colors hover:bg-muted"
        onclick={() => mobileMenuOpen = !mobileMenuOpen}
        aria-label="Toggle menu"
      >
        {#if mobileMenuOpen}
          <X size={22} weight="regular" />
        {:else}
          <List size={22} weight="regular" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if mobileMenuOpen}
    <div
      class="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden"
      in:fly={{ y: -10, duration: 300, easing: cubicInOut }}
      out:fly={{ y: -10, duration: 200, easing: cubicInOut }}
    >
      <nav class="container mx-auto flex flex-col gap-1 px-4 py-4">
        <a href="/" onclick={() => mobileMenuOpen = false} class="rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-muted hover:text-primary">Início</a>
        <a href="/produtos" onclick={() => mobileMenuOpen = false} class="rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-muted hover:text-primary">Catálogo</a>
        <a href="/sobre" onclick={() => mobileMenuOpen = false} class="rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-muted hover:text-primary">Sobre Nós</a>
        <a
          href="/carrinho"
          onclick={() => mobileMenuOpen = false}
          class="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white mt-1"
        >
          <ShoppingCart size={16} weight="duotone" />
          <span>Carrinho ({cart.totalItems})</span>
        </a>
      </nav>
    </div>
  {/if}
</header>

<style>
  :global(html) { scroll-behavior: smooth; }
</style>
