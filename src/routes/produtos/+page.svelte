<script lang="ts">
  import { products } from '$lib/data/products';
  import ProductCard from '$lib/components/product-card.svelte';
  import { MagnifyingGlass, Funnel, X, SortAscending, Bird } from 'phosphor-svelte';
  import { page } from '$app/stores';
  import ProductCardSkeleton from '$lib/components/product-card-skeleton.svelte';
  import { onMount } from 'svelte';

  let loading = $state(true);

  onMount(() => {
    const t = setTimeout(() => { loading = false; }, 600);
    return () => clearTimeout(t);
  });

  const allCategories = [...new Set(products.map(p => p.category))];
  const maxPrice = Math.ceil(Math.max(...products.map(p => p.price)));

  const initialCategory = $page.url.searchParams.get('categoria');
  let searchQuery = $state($page.url.searchParams.get('q') ?? '');
  let selectedCategories = $state<string[]>(initialCategory ? [initialCategory] : []);
  let maxPriceFilter = $state(maxPrice);
  let onlyInStock = $state(false);
  let onlyNew = $state($page.url.searchParams.get('novo') === 'true');
  let sortBy = $state<'relevance' | 'price-asc' | 'price-desc' | 'newest'>('relevance');
  let filtersOpen = $state(false);

  const filteredProducts = $derived(
    products
      .filter(p => {
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          if (!p.name.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) return false;
        }
        if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
        if (p.price > maxPriceFilter) return false;
        if (onlyInStock && !p.inStock) return false;
        if (onlyNew && !p.isNew) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        return 0;
      })
  );

  function toggleCategory(cat: string) {
    if (selectedCategories.includes(cat)) {
      selectedCategories = selectedCategories.filter(c => c !== cat);
    } else {
      selectedCategories = [...selectedCategories, cat];
    }
  }

  function clearFilters() {
    searchQuery = '';
    selectedCategories = [];
    maxPriceFilter = maxPrice;
    onlyInStock = false;
    onlyNew = false;
    sortBy = 'relevance';
  }

  const hasActiveFilters = $derived(
    searchQuery !== '' || selectedCategories.length > 0 ||
    maxPriceFilter < maxPrice || onlyInStock || onlyNew || sortBy !== 'relevance'
  );

  const categoryColors: Record<string, string> = {
    'Tech & Geek': 'border-blue-200 text-blue-700 data-[active=true]:bg-blue-600 data-[active=true]:text-white data-[active=true]:border-blue-600',
    'Personagens':  'border-violet-200 text-violet-700 data-[active=true]:bg-violet-600 data-[active=true]:text-white data-[active=true]:border-violet-600',
    'Animais':      'border-emerald-200 text-emerald-700 data-[active=true]:bg-emerald-600 data-[active=true]:text-white data-[active=true]:border-emerald-600',
    'Festividades': 'border-orange-200 text-orange-700 data-[active=true]:bg-orange-500 data-[active=true]:text-white data-[active=true]:border-orange-500',
    'Portugal':     'border-red-200 text-red-700 data-[active=true]:bg-red-600 data-[active=true]:text-white data-[active=true]:border-red-600',
  };
</script>

<svelte:head>
  <title>Todos os Produtos | Duck Shop</title>
  <meta name="description" content="Catálogo completo de patos de borracha temáticos. Tech, personagens, animais, Portugal e muito mais. Filtra, pesquisa e encontra o teu pato." />
</svelte:head>

<div class="container mx-auto px-4 py-10">
  <!-- Page header -->
  <div class="mb-8">
    <h1 class="mb-2 text-4xl font-bold tracking-tight md:text-5xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
      Catálogo
    </h1>
    <p class="text-muted-foreground">
      {filteredProducts.length} de {products.length} patos encontrados
    </p>
  </div>

  <!-- Search + Sort bar -->
  <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
    <!-- Search -->
    <div class="relative flex-1">
      <MagnifyingGlass size={16} weight="regular" class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        placeholder="Pesquisar patos..."
        bind:value={searchQuery}
        class="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      {#if searchQuery}
        <button onclick={() => searchQuery = ''} class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
          <X size={14} weight="regular" />
        </button>
      {/if}
    </div>

    <!-- Sort -->
    <div class="flex items-center gap-2">
      <SortAscending size={16} weight="regular" class="text-muted-foreground shrink-0" />
      <select
        bind:value={sortBy}
        class="rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
      >
        <option value="relevance">Relevância</option>
        <option value="price-asc">Menor preço</option>
        <option value="price-desc">Maior preço</option>
        <option value="newest">Novidades</option>
      </select>

      <!-- Mobile filters toggle -->
      <button
        onclick={() => filtersOpen = !filtersOpen}
        class="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium transition-all hover:border-primary hover:text-primary lg:hidden"
      >
        <Funnel size={16} weight="regular" />
        Filtros
        {#if hasActiveFilters}
          <span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
            {selectedCategories.length + (onlyInStock ? 1 : 0) + (onlyNew ? 1 : 0)}
          </span>
        {/if}
      </button>
    </div>
  </div>

  <div class="flex gap-8">
    <!-- Sidebar filters -->
    <aside class="hidden w-64 shrink-0 lg:block">
      <div class="sticky top-20 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div class="mb-6 flex items-center justify-between">
          <h2 class="font-bold">Filtros</h2>
          {#if hasActiveFilters}
            <button onclick={clearFilters} class="text-xs text-primary hover:underline">Limpar tudo</button>
          {/if}
        </div>

        <!-- Categories -->
        <div class="mb-6">
          <h3 class="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">Categoria</h3>
          <div class="space-y-2">
            {#each allCategories as cat}
              <label class="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onchange={() => toggleCategory(cat)}
                  class="h-4 w-4 rounded border-border accent-primary"
                />
                <span class="text-sm">{cat}</span>
                <span class="ml-auto text-xs text-muted-foreground">
                  {products.filter(p => p.category === cat).length}
                </span>
              </label>
            {/each}
          </div>
        </div>

        <!-- Price range -->
        <div class="mb-6">
          <h3 class="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">Preço máximo</h3>
          <input
            type="range"
            min="0"
            max={maxPrice}
            step="1"
            bind:value={maxPriceFilter}
            class="w-full accent-primary cursor-pointer"
          />
          <div class="mt-2 flex justify-between text-sm text-muted-foreground">
            <span>€0</span>
            <span class="font-semibold text-foreground">até €{maxPriceFilter.toFixed(0)}</span>
          </div>
        </div>

        <!-- Toggles -->
        <div class="space-y-3">
          <label class="flex cursor-pointer items-center justify-between gap-3">
            <span class="text-sm">Apenas disponíveis</span>
            <button
              role="switch"
              aria-checked={onlyInStock}
              aria-label="Apenas disponíveis"
              onclick={() => onlyInStock = !onlyInStock}
              class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors {onlyInStock ? 'bg-primary' : 'bg-muted-foreground/30'}"
            >
              <span class="inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform {onlyInStock ? 'translate-x-6' : 'translate-x-1'}"></span>
            </button>
          </label>
          <label class="flex cursor-pointer items-center justify-between gap-3">
            <span class="text-sm">Apenas novidades</span>
            <button
              role="switch"
              aria-checked={onlyNew}
              aria-label="Apenas novidades"
              onclick={() => onlyNew = !onlyNew}
              class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors {onlyNew ? 'bg-primary' : 'bg-muted-foreground/30'}"
            >
              <span class="inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform {onlyNew ? 'translate-x-6' : 'translate-x-1'}"></span>
            </button>
          </label>
        </div>
      </div>
    </aside>

    <!-- Mobile filters drawer -->
    {#if filtersOpen}
      <div class="fixed inset-0 z-50 lg:hidden">
        <button class="absolute inset-0 bg-black/40" onclick={() => filtersOpen = false} aria-label="Fechar filtros"></button>
        <div class="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-3xl bg-card p-6 shadow-2xl">
          <div class="mb-6 flex items-center justify-between">
            <h2 class="text-lg font-bold">Filtros</h2>
            <button onclick={() => filtersOpen = false} class="rounded-lg p-1 hover:bg-muted">
              <X size={20} weight="regular" />
            </button>
          </div>

          <div class="mb-4">
            <h3 class="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">Categoria</h3>
            <div class="flex flex-wrap gap-2">
              {#each allCategories as cat}
                <button
                  onclick={() => toggleCategory(cat)}
                  data-active={selectedCategories.includes(cat)}
                  class="rounded-full border px-3 py-1.5 text-sm font-medium transition-all {categoryColors[cat] ?? 'border-border text-foreground'}"
                >
                  {cat}
                </button>
              {/each}
            </div>
          </div>

          <div class="mb-4">
            <h3 class="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">Preço máximo: €{maxPriceFilter.toFixed(0)}</h3>
            <input type="range" min="0" max={maxPrice} step="1" bind:value={maxPriceFilter} class="w-full accent-primary" />
          </div>

          <div class="space-y-3 mb-6">
            <label class="flex cursor-pointer items-center justify-between">
              <span class="text-sm">Apenas disponíveis</span>
              <button role="switch" aria-checked={onlyInStock} aria-label="Apenas disponíveis" onclick={() => onlyInStock = !onlyInStock}
                class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors {onlyInStock ? 'bg-primary' : 'bg-muted-foreground/30'}">
                <span class="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform {onlyInStock ? 'translate-x-6' : 'translate-x-1'}"></span>
              </button>
            </label>
          </div>

          <button
            onclick={() => filtersOpen = false}
            class="w-full rounded-xl bg-primary py-3 font-semibold text-white"
          >
            Ver {filteredProducts.length} resultados
          </button>
        </div>
      </div>
    {/if}

    <!-- Product grid -->
    <div class="flex-1">
      {#if loading}
        <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {#each Array(6) as _}
            <ProductCardSkeleton />
          {/each}
        </div>
      {:else if filteredProducts.length === 0}
        <div class="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border py-20 text-center">
          <div class="mb-4 text-muted-foreground/40">
            <Bird size={64} weight="duotone" />
          </div>
          <h3 class="mb-2 text-xl font-bold">Nenhum pato encontrado</h3>
          <p class="mb-6 text-muted-foreground">Tenta ajustar os filtros ou pesquisar outra coisa.</p>
          <button onclick={clearFilters} class="rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors">
            Limpar filtros
          </button>
        </div>
      {:else}
        <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {#each filteredProducts as product, i (product.id)}
            <div class="stagger-card" style="animation-delay: {Math.min(i, 8) * 60}ms">
              <ProductCard {product} />
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .stagger-card {
    opacity: 0;
    animation: cardFadeUp 0.4s ease-out both;
  }
  @keyframes cardFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
