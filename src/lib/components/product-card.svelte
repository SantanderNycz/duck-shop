<script lang="ts">
  import type { Product } from '$lib/types';
  import { cart } from '$lib/stores/cart.svelte';
  import { ShoppingCart, Heart } from 'phosphor-svelte';
  import { toasts } from '$lib/stores/toast';

  let { product }: { product: Product } = $props();

  let isFavorited = $state(false);
  let addedToCart = $state(false);
  let imageError = $state(false);

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });

  function handleAddToCart() {
    cart.addItem(product);
    addedToCart = true;
    toasts.add(`${product.name} adicionado ao carrinho!`);
    setTimeout(() => { addedToCart = false; }, 1800);
  }

  const categoryStyles: Record<string, string> = {
    'Tech & Geek': 'bg-blue-100 text-blue-700',
    'Personagens':  'bg-violet-100 text-violet-700',
    'Animais':      'bg-emerald-100 text-emerald-700',
    'Festividades': 'bg-orange-100 text-orange-700',
    'Portugal':     'bg-red-100 text-red-700',
  };

  const badgeClass = $derived(
    categoryStyles[product.category] ?? 'bg-slate-100 text-slate-700'
  );
</script>

<div class="group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1 flex flex-col h-full">
  <a href={`/produto/${product.id}`} class="flex flex-col flex-1">
    <!-- Image container -->
    <div class="relative aspect-square overflow-hidden bg-linear-to-br from-muted to-muted/50">
      {#if !imageError && product.image && product.image !== '/duck.svg'}
        <img
          src={product.image}
          alt={product.name}
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          onerror={() => imageError = true}
         style={`object-position: ${product.imagePosition || "center"};`}
        />
      {:else if product.emoji}
        <!-- Emoji placeholder -->
        <div
          class="flex h-full w-full items-center justify-center transition-transform duration-700 group-hover:scale-110"
          style="background-color: {product.placeholderBg ?? '#6c63ff'}22;"
        >
          <span class="text-8xl select-none">{product.emoji}</span>
        </div>
      {:else}
        <img
          src="/duck.svg"
          alt={product.name}
          class="h-full w-full object-contain p-8 opacity-30 transition-transform duration-700 group-hover:scale-110"
        />
      {/if}

      <div class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <!-- Category badge -->
      <span class="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm {badgeClass}">
        {product.category}
      </span>

      <!-- "Novo" badge -->
      {#if product.isNew}
        <span class="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-white shadow-sm">
          Novo
        </span>
      {/if}
    </div>

    <!-- Product info -->
    <div class="flex flex-col flex-1 p-5">
      <h3 class="mb-2 text-lg font-bold text-card-foreground transition-colors group-hover:text-primary line-clamp-2">
        {product.name}
      </h3>
      <p class="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {product.description}
      </p>
      <div class="flex-1"></div>
      <div class="flex items-center justify-between">
        <span class="text-2xl font-bold text-primary">
          {formatPrice(product.price)}
        </span>
        {#if !product.inStock}
          <span class="rounded-full px-3 py-1 text-xs font-medium" style="background: hsl(0 100% 71% / 0.12); color: hsl(0 100% 71%);">
            Esgotado
          </span>
        {/if}
      </div>
    </div>
  </a>

  <!-- Add to cart button -->
  <div class="border-t border-border/50 p-4">
    <button
      onclick={handleAddToCart}
      disabled={!product.inStock}
      class="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50
        {addedToCart ? 'bg-accent' : 'bg-primary hover:bg-primary/90'}"
    >
      <ShoppingCart size={16} weight="duotone" />
      <span>
        {#if !product.inStock}
          Indisponível
        {:else if addedToCart}
          Adicionado ✓
        {:else}
          Adicionar ao Carrinho
        {/if}
      </span>
    </button>
  </div>

  <!-- Favorite button -->
  <button
    onclick={() => isFavorited = !isFavorited}
    class="absolute right-3 bottom-18 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
    aria-label="Adicionar aos favoritos"
  >
    <Heart
      size={18}
      weight={isFavorited ? 'fill' : 'regular'}
      class="transition-all duration-300 {isFavorited ? 'text-red-500' : 'text-gray-500'}"
    />
  </button>
</div>
