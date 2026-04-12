<script lang="ts">
  import { page } from '$app/stores';
  import { products } from '$lib/data/products';
  import { cart } from '$lib/stores/cart.svelte';
  import { ShoppingCart, ArrowLeft, Check, Heart, ShareNetwork, Star, MapPin } from 'phosphor-svelte';
  import { toasts } from '$lib/stores/toast';

  const productId = parseInt($page.params.id!);
  const product = products.find(p => p.id === productId);

  let addedToCart = $state(false);
  let isFavorited = $state(false);
  let activeTab = $state<'descricao' | 'detalhes' | 'avaliacoes'>('descricao');
  let shared = $state(false);
  let imageError = $state(false);

  const related = product
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  const mockReviews = [
    { name: 'Ana M.', rating: 5, text: 'Adorei! O pato chegou embalado lindamente e é ainda mais fofo ao vivo. Recomendo muito!', date: 'Jan 2025' },
    { name: 'Filipe R.', rating: 5, text: 'Comprei o Debug Duck para o meu colega dev. A reação foi épica. Já encomendei um para mim.', date: 'Fev 2025' },
    { name: 'Sara C.', rating: 4, text: 'Produto de qualidade, entrega rápida. O único senão é que queria mais opções de Portugal.', date: 'Mar 2025' },
    { name: 'João P.', rating: 5, text: 'Serviço impecável. O packaging tinha uma mensagem surpresa que fez o meu dia. Voltarei a comprar!', date: 'Mar 2025' },
  ];

  const avgRating = (mockReviews.reduce((s, r) => s + r.rating, 0) / mockReviews.length).toFixed(1);

  function handleAddToCart() {
    if (!product) return;
    cart.addItem(product);
    addedToCart = true;
    toasts.add(`${product.name} adicionado ao carrinho!`, product.emoji ?? '🦆');
    setTimeout(() => { addedToCart = false; }, 2000);
  }

  async function handleShare() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      shared = true;
      toasts.add('Link copiado para a área de transferência!', '🔗', 'info');
      setTimeout(() => { shared = false; }, 2000);
    } catch {
      shared = false;
    }
  }

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });

  const categoryColors: Record<string, string> = {
    'Tech & Geek': 'bg-blue-100 text-blue-700',
    'Personagens':  'bg-violet-100 text-violet-700',
    'Animais':      'bg-emerald-100 text-emerald-700',
    'Festividades': 'bg-orange-100 text-orange-700',
    'Portugal':     'bg-red-100 text-red-700',
  };
  const badgeClass = product ? (categoryColors[product.category] ?? 'bg-slate-100 text-slate-700') : '';
</script>

<svelte:head>
  <title>{product ? `${product.name} | Duck Shop` : 'Produto | Duck Shop'}</title>
  <meta name="description" content={product ? `${product.description} Compra na Duck Shop — patos de borracha temáticos do Porto, Portugal.` : 'Duck Shop — patos de borracha temáticos.'} />
</svelte:head>

{#if product}

<div class="container mx-auto px-4 py-8 md:py-12">
  <!-- Back button -->
  <a href="/produtos" class="group mb-8 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-muted">
    <ArrowLeft size={16} weight="regular" class="transition-transform duration-300 group-hover:-translate-x-1" />
    Voltar ao catálogo
  </a>

  <!-- Product grid -->
  <div class="grid gap-12 lg:grid-cols-2 mb-16">
    <!-- Image -->
    <div class="group relative overflow-hidden rounded-3xl border border-border bg-muted/30 shadow-2xl aspect-square">
      {#if !imageError && product.image && product.image !== '/duck.svg'}
        <img
          src={product.image}
          alt={product.name}
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          onerror={() => imageError = true}
        />
      {:else if product.emoji}
        <div
          class="flex h-full w-full items-center justify-center"
          style="background-color: {product.placeholderBg ?? '#6c63ff'}18;"
        >
          <span class="text-[10rem] select-none">{product.emoji}</span>
        </div>
      {:else}
        <img src="/duck.svg" alt={product.name} class="h-full w-full object-contain p-16 opacity-20" />
      {/if}

      <!-- Action buttons -->
      <div class="absolute right-4 top-4 flex flex-col gap-2">
        <button
          onclick={() => isFavorited = !isFavorited}
          class="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Favoritar"
        >
          <Heart size={20} weight={isFavorited ? 'fill' : 'regular'} class="transition-all {isFavorited ? 'text-red-500' : 'text-gray-600'}" />
        </button>
        <button
          onclick={handleShare}
          class="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Partilhar"
        >
          {#if shared}
            <Check size={20} weight="bold" class="text-accent" />
          {:else}
            <ShareNetwork size={20} weight="regular" class="text-gray-600" />
          {/if}
        </button>
      </div>

      {#if product.isNew}
        <div class="absolute left-4 top-4">
          <span class="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow">Novo</span>
        </div>
      {/if}
    </div>

    <!-- Details -->
    <div class="flex flex-col">
      <!-- Category + rating -->
      <div class="mb-4 flex items-center justify-between flex-wrap gap-2">
        <span class="rounded-full px-4 py-1.5 text-sm font-semibold {badgeClass}">
          {product.category}
        </span>
        <div class="flex items-center gap-1.5">
          {#each Array(5) as _, i}
            <Star size={16} weight={i < Math.round(Number(avgRating)) ? 'fill' : 'regular'} class={i < Math.round(Number(avgRating)) ? 'text-yellow-400' : 'text-gray-300'} />
          {/each}
          <span class="ml-1 text-sm text-muted-foreground">({avgRating} · {mockReviews.length} avaliações)</span>
        </div>
      </div>

      <h1 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        {product.name}
      </h1>

      <!-- Price -->
      <div class="mb-6 flex items-baseline gap-3">
        <span class="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {formatPrice(product.price)}
        </span>
        <span class="text-lg text-muted-foreground line-through">{formatPrice(product.price * 1.3)}</span>
        <span class="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">-23%</span>
      </div>

      <!-- Stock -->
      <div class="mb-8 flex flex-wrap items-center gap-2">
        {#if product.inStock}
          <div class="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 w-fit border border-emerald-200">
            <Check size={16} weight="bold" />
            Em stock · Pronta entrega
          </div>
          <!-- Low-stock mock badge — shown for products with odd id as a demo -->
          {#if product.id % 3 === 0}
            <span class="rounded-xl px-3 py-2 text-xs font-semibold animate-pulse"
              style="background: hsl(38 92% 50% / 0.12); color: hsl(38 92% 40%); border: 1px solid hsl(38 92% 50% / 0.3)">
              ⚠️ Apenas 3 restantes!
            </span>
          {/if}
        {:else}
          <span class="rounded-xl px-4 py-3 text-sm font-medium w-fit block" style="background: hsl(0 100% 71% / 0.1); color: hsl(0 100% 71%); border: 1px solid hsl(0 100% 71% / 0.3)">
            Produto esgotado
          </span>
        {/if}
      </div>

      <!-- Tabs -->
      <div class="mb-6 border-b border-border">
        <div class="flex gap-0">
          {#each [['descricao', 'Descrição'], ['detalhes', 'Detalhes'], ['avaliacoes', 'Avaliações']] as [tab, label]}
            <button
              onclick={() => activeTab = tab as any}
              class="px-5 py-3 text-sm font-medium transition-all border-b-2 -mb-px {activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}"
            >
              {label}
            </button>
          {/each}
        </div>
      </div>

      <div class="mb-8 min-h-[6rem]">
        {#if activeTab === 'descricao'}
          <p class="leading-relaxed text-muted-foreground">{product.description}</p>
        {:else if activeTab === 'detalhes'}
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li><span class="font-medium text-foreground">Material:</span> Borracha natural de alta qualidade</li>
            <li><span class="font-medium text-foreground">Dimensões:</span> ±8 cm de altura</li>
            <li><span class="font-medium text-foreground">Categoria:</span> {product.category}</li>
            <li><span class="font-medium text-foreground">Origem:</span> Porto, Portugal</li>
            <li><span class="font-medium text-foreground">Certificação:</span> CE · BPA Free</li>
          </ul>
        {:else}
          <div class="space-y-4">
            {#each mockReviews as review}
              <div class="rounded-xl border border-border bg-muted/30 p-4">
                <div class="mb-2 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {review.name[0]}
                    </div>
                    <span class="font-semibold text-sm">{review.name}</span>
                  </div>
                  <span class="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <div class="mb-2 flex gap-0.5">
                  {#each Array(5) as _, i}
                    <Star size={12} weight={i < review.rating ? 'fill' : 'regular'} class={i < review.rating ? 'text-yellow-400' : 'text-gray-300'} />
                  {/each}
                </div>
                <p class="text-sm text-muted-foreground">{review.text}</p>
              </div>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Add to cart -->
      <div class="mt-auto space-y-3">
        <button
          onclick={handleAddToCart}
          disabled={!product.inStock}
          class="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl px-8 py-5 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]
            {addedToCart ? 'bg-accent shadow-accent/30' : 'bg-gradient-to-r from-primary to-accent shadow-primary/30'}"
        >
          <div class="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"></div>
          {#if addedToCart}
            <Check size={24} weight="bold" class="relative z-10" />
            <span class="relative z-10">Adicionado com sucesso!</span>
          {:else}
            <ShoppingCart size={24} weight="duotone" class="relative z-10" />
            <span class="relative z-10">{product.inStock ? 'Adicionar ao Carrinho' : 'Produto Indisponível'}</span>
          {/if}
        </button>

        {#if cart.totalItems > 0}
          <a
            href="/carrinho"
            class="block rounded-xl border-2 border-border bg-background px-6 py-4 text-center font-semibold transition-all duration-300 hover:border-primary hover:bg-primary/5"
          >
            Ver carrinho ({cart.totalItems} {cart.totalItems === 1 ? 'item' : 'itens'})
          </a>
        {/if}

        <div class="flex items-center gap-2 text-xs text-muted-foreground pt-1">
          <MapPin size={12} weight="duotone" class="text-primary shrink-0" />
          <span>Enviado de Porto, Portugal · Entrega em 3–5 dias úteis</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Related products -->
  {#if related.length > 0}
    <div class="border-t border-border/40 pt-16">
      <h2 class="mb-10 text-center text-3xl font-bold md:text-4xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        Também podes gostar
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {#each related as rel (rel.id)}
          <a
            href={`/produto/${rel.id}`}
            class="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div class="aspect-square overflow-hidden bg-muted/30 flex items-center justify-center">
              {#if rel.emoji}
                <span class="text-7xl select-none transition-transform duration-500 group-hover:scale-110">{rel.emoji}</span>
              {:else}
                <img src={rel.image} alt={rel.name} class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              {/if}
            </div>
            <div class="p-4">
              <h3 class="mb-1 font-semibold transition-colors group-hover:text-primary line-clamp-1">{rel.name}</h3>
              <p class="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {formatPrice(rel.price)}
              </p>
            </div>
          </a>
        {/each}
      </div>
    </div>
  {/if}
</div>

{:else}
<div class="container mx-auto px-4 py-24 text-center">
  <span class="mb-6 block text-7xl">🦆</span>
  <h1 class="mb-4 text-3xl font-bold">Pato não encontrado</h1>
  <p class="mb-8 text-muted-foreground">Este pato voou para outros ares. Experimenta o nosso catálogo.</p>
  <a href="/produtos" class="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors">
    Ver catálogo
  </a>
</div>
{/if}
